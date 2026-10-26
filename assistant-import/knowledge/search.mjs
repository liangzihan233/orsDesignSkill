// Generated from the platform's search implementation.
export const searchHelpDocuments = function searchHelpDocuments(documents, query, limit = 30) {
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  const results = [];
  for (const doc of documents) {
    const title = doc.title.toLocaleLowerCase();
    const keywords = doc.keywords.join(" ").toLocaleLowerCase();
    for (const section of doc.sections) {
      if (!section.text && !section.heading) continue;
      const heading = section.heading.toLocaleLowerCase();
      const body = section.text.toLocaleLowerCase();
      if (!terms.every(
        (term) => `${title} ${keywords} ${heading} ${body}`.includes(term)
      ))
        continue;
      const score = terms.reduce(
        (total, term) => total + (heading === term ? 240 : heading.includes(term) ? 100 : 0) + (title === term ? 160 : title.includes(term) ? 80 : 0) + (keywords.includes(term) ? 40 : 0) + (body.includes(term) ? 10 : 0),
        0
      );
      const match = terms.map((term) => body.indexOf(term)).find((index) => index >= 0) ?? 0;
      const start = Math.max(0, match - 35);
      results.push({
        slug: doc.slug,
        title: doc.title,
        section: doc.section,
        group: doc.group,
        anchor: section.anchor,
        heading: section.heading,
        excerpt: `${start ? "\u2026" : ""}${section.text.slice(start, start + 150)}${section.text.length > start + 150 ? "\u2026" : ""}`,
        score
      });
    }
  }
  return results.sort((a, b) => b.score - a.score).slice(0, limit);
};
