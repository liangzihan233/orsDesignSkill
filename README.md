# Ors Design 使用助手

平台资料版本：1.177.0；源码：0891f38f66a08556868516df80f3e4c63c4bdf96。默认中文，可用于支持 Skills 或提示词＋知识库的 Agent。

## 安装标准 Skill

将 orsdesign-platform-guide 文件夹复制到目标 Agent 的 skills 目录，确保 SKILL.md 位于该文件夹根部。按该平台的安装方式加载；不要求特定厂商或绝对目录。告诉助手“使用 Ors Design 使用助手帮我……”。

可选工具需要 Node.js 22 或更新版本，无额外 npm 依赖：

```sh
cd orsdesign-platform-guide
node scripts/search-docs.mjs --query "答案预填代码"
node scripts/search-docs.mjs --query "矩阵" --offline
node scripts/validate-code.mjs request.json
```

在线失败会显式回退随包资料；校验不访问真实网络或用户问卷。校验输入和示例参见 knowledge/recipes.json。没有 cases 仅编译，CSS 仅语法；有 cases 时比对显式 expected。

## 对话知识库

将 assistant-import/system-prompt.md 作为系统提示词，将 guidance 和 knowledge 中 Markdown 导入知识库；JSON 可供支持结构化资料的平台选用。把 conversation-starters.md 用作开场问题。不具备工具的助手使用随包资料，不能承诺已经在线搜索或运行代码。

## 更新与版本

线上只读入口：http://design.ors-cn.com/agent-help/llms.txt 。使用目标平台同版本资料；重新获取整包更新知识与工具，不单独混用不同版本的运行器。代码包来自 Ors Design 项目真实编译器及 QuickJS；依赖第三方许可随 THIRD-PARTY-NOTICES.txt 提供。安装本包不授权代改问卷、发布或提交答卷。
