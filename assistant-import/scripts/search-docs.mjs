import { readFile } from "node:fs/promises";
import { searchHelpDocuments } from "../knowledge/search.mjs";
const args = process.argv.slice(2);
const value = flag => { const i=args.indexOf(flag); return i>=0 ? args[i+1] : undefined; };
const query = value("--query");
if (!query || args.includes("--help")) {
  console.log('node scripts/search-docs.mjs --query "关键词" [--base-url http://design.ors-cn.com] [--offline] [--limit 10]');
} else {
  try {
    let mode="online", fallbackReason;
    const limit=Number(value("--limit")||10);
    if (!Number.isInteger(limit)||limit<1||limit>30)throw new Error("limit must be 1..30");
    let manifest,index;
    const offline=async()=>{
      manifest=JSON.parse(await readFile(new URL("../knowledge/manifest.json",import.meta.url),"utf8"));
      index=JSON.parse(await readFile(new URL("../knowledge/search-index.json",import.meta.url),"utf8"));
      mode="offline";
    };
    if(args.includes("--offline"))await offline();
    else {
      try {
        const base=new URL(value("--base-url")||"http://design.ors-cn.com");
        if(!["http:","https:"].includes(base.protocol)||base.username||base.password)throw new Error("Invalid base URL");
        const get=async name=>{
          const url=new URL(`${base.pathname.replace(/\/$/,"")}/agent-help/${name}`,base);
          const response=await fetch(url,{signal:AbortSignal.timeout(15000)});
          if(!response.ok)throw new Error(`Documentation HTTP ${response.status}`);
          const body=await response.text();
          if(Buffer.byteLength(body)>32*1024*1024)throw new Error("Documentation exceeds 32 MiB");
          return JSON.parse(body);
        };
        [manifest,index]=await Promise.all([get("manifest.json"),get("search-index.json")]);
        if(manifest.schemaVersion!==1||!Array.isArray(index))throw new Error("Unsupported knowledge schema");
      } catch(error){fallbackReason=error.message;await offline();}
    }
    const results=searchHelpDocuments(index,query,limit).map(hit=>{
      const article=manifest.articles.find(a=>a.slug===hit.slug);
      return {...hit,url:article?.publicUrl+(hit.anchor?`#${encodeURIComponent(hit.anchor)}`:""),appUrl:article?.appUrl+(hit.anchor?`#${encodeURIComponent(hit.anchor)}`:"")};
    });
    console.log(JSON.stringify({mode,platformVersion:manifest.platformVersion,sourceCommit:manifest.sourceCommit,query,...(fallbackReason?{fallbackReason}:{}),results},null,2));
  } catch(error){console.error(JSON.stringify({error:error.message}));process.exitCode=2;}
}
