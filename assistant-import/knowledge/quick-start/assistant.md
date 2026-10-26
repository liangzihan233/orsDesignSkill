# AI 使用助手与跨平台资料

## 使用前提与入口

在支持 Skills 的 Agent 中安装 orsdesign-platform-guide，或将跨平台导入包的系统提示词和 Markdown 知识库导入对话助手。告诉助手想完成的事、当前入口、题目类型和实际编码。默认只提供指导与代码，不操作真实问卷。

## 如何提问

- “我是第一次使用，从建卷开始带我做一份小问卷。”
- “Q1 多选选了 A1 或 A2 才显示 Q2，应该在哪里设置？”
- “Q2 数字填写为 0 有效，空白不允许，帮我写答案校验代码。”
- “这段代码保存报错，入口是题目渲染逻辑，请解释并最小修改。”

助手会先选择属性、图形逻辑或代码入口，再提供粘贴位置、所需编码、代码、测试步骤和资料链接。只有声明了真实编码和对应版本的内容，才能作为具体问卷代码；没有编码时给出的只是模板。

## 在线资料与离线使用

平台构建包含公开只读的 `/agent-help/llms.txt`、`manifest.json`、`search-index.json` 和文章 Markdown。内容从同一份用户手册生成，版本与本次构建一致。支持 HTTP 的 Agent 可按目录定位文章；有脚本能力时可复用同源搜索函数。现有帮助中心仍使用登录权限。

离线包标注其平台版本。无法联网时，助手应说明使用的是随包资料；资料与目标平台版本不同时，先确认版本差异，不能把新版语法承诺给旧版实例。

## 如何确认代码可用

先核对代码入口、编码、返回值和阶段权限，再用命中、不命中及空答案测试。工具的编译通过不等于已完成真实问卷验收；完整运行通过也仅证明给定测试数据。CSS 语法通过后仍需检查桌面和手机实际效果。最后在平台保存并模拟答题，确认预期结果。

## 相关说明

- [题目通用属性与五个代码入口](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)
- [逻辑与公式示例](http://design.ors-cn.com/agent-help/articles/design/logic/examples.md)
- [功能状态说明](http://design.ors-cn.com/agent-help/articles/faq/availability.md)

## 可选代码校验工具

Skill 分发包提供 `node scripts/validate-code.mjs request.json`。Node.js 22 或更高版本可直接运行，不需要项目源码或安装依赖。输入包含 `kind`（代码阶段）、`mode`、`source`，可附 `context`、题目快照 `questions` 和带明确 `expected` 的 `cases`。`platformVersion` 可用于拒绝与工具不匹配的版本。

没有 cases 时只检查语法和入口；提供 cases 后使用实际隔离运行器执行合成输入并比对结果。CSS 只检查语法。工具没有真实网络和问卷写入能力，依赖外部接口的业务必须在真实受控环境另行测试。内置 recipes.json 中的问卷、编码和预期结果均为演示数据，不代表用户问卷。

## 分发包与更新

维护者在项目中运行 `pnpm agent:package`，产物位于 `dist/agent-distribution/`。其中 orsdesign-platform-guide 是完整 skill，assistant-import 是系统提示词与知识库导入材料；两者共享版本和内容来源。根目录 README 提供接入方式。重新构建整包可同步手册、示例和工具，不需要手工复制另一套文档。

分发工具在完整生成成功后替换自己的产物，撤下的文章不会残留。输出应使用空目录或工具此前生成的目录；不要把个人文件放在生成目录中。每个可独立复制的包均自带项目和第三方许可。
