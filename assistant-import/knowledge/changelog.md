# 系统更新日志

## 1.177 · 2026-10-27

- 修复重复打包残留已撤下文章的问题，完整生成暂存包后替换受管产物；拒绝覆盖非受管目录。
- 标准 skill 与对话导入包各自携带运行器的项目和第三方许可。关联文章：AI 使用助手与跨平台资料。

## 1.176 · 2026-10-27

- 新增 Ors Design 使用指导与代码辅助 skill，含新手带做、功能目录、五个代码入口规范、错误诊断和分级验证说明。
- 提供标准 skill 与提示词＋知识库两种同源分发包，在线检索失败明确回退离线资料。关联文章：AI 使用助手与跨平台资料。

## 1.175 · 2026-10-27

- 新增可独立分发的代码校验工具，复用项目编译器、QuickJS 及 CSS 校验，明确编译、合成用例运行和页面验收的区别。
- 增加五个代码入口合同和带明确预期的示例；补充 CSS 实际作用域、数字零校验和结束原因说明。关联文章：题目通用属性、AI 使用助手与跨平台资料。

## 1.174 · 2026-10-27

- 新增与帮助中心同源的公开只读 Agent 文档导出，包含版本目录、章节搜索索引、文章及函数参考。已有帮助中心登录规则保留。
- 新增 AI 使用助手说明，修正快速入门的固定旧版本描述。关联文章：AI 使用助手与跨平台资料、快速入门。

## 1.173 · 2026-10-27

- 显示逻辑的普通选择条件直接生成 `Q1.isSelected("A1")` 等简短表达式，复杂条件自动打开自定义代码编辑器。
- 题目、选项、矩阵行列及分组批量设置共用代码入口，表达式和函数二选一；函数必须同步返回布尔值，保存、回读、引用改码及私有服务复核保持一致。
- 参见[简单表达式与自定义显示代码](http://design.ors-cn.com/agent-help/articles/design/logic/visual.md#简单表达式与自定义显示代码)。

## 1.172 · 2026-10-27

- 01及非01 Excel 末尾新增“题目编码”工作表，以“编号、内容”分块列出题干、选项、矩阵行列、评分范围、级联路径与图片链接；保留正式编码及空标签。
- 仅列本次筛选匹配的最新版本，明确标注预发布、历史快照及旧版未收录提示；原有答卷、附件和自动化来源表保持原规则。
- 参见[Excel 导出](http://design.ors-cn.com/agent-help/articles/data/export.md#题目编码工作表)。

## 1.171 · 2026-10-27

- 修复外观设计中间预览在一页一题模式提前显示“提交答卷”的问题：答题中显示“下一题”，进入结束确认状态后显示提交，保留自定义按钮文字。
- 参见[外观模板与设备样式](http://design.ors-cn.com/agent-help/articles/design/appearance/style.md)。

## 1.170 · 2026-10-26

- 修复 HTTP 部署环境缺少 Clipboard API 时“问卷信息分享”报错且无法复制的问题：优先使用浏览器剪贴板，失败后回退兼容复制；仍无法复制时展示完整只读链接供手动复制。
- 参见[公开只读问卷信息分享](http://design.ors-cn.com/agent-help/articles/data/sharing.md)。

## 1.169 · 2026-10-26

- 修复 AI 问卷文本编辑的发布阻断：选项改字保留原身份，未完成或未知题型不落地，导入标题与选项编号在重排前清除非法值和冲突值。
- 修复大纲分组重命名的异步输入框失效异常；矩阵导入校验改为按有效列数量核对，不把结构角计作业务列。

## 1.168 · 2026-10-26

- 汇总 AI 问卷全屏工作台、模板后台任务恢复、发布与答题导航、问卷授权回归等已记录改动，作为本轮生产发布版本。
- 配套后端包含模板与 AI 问卷生成、草稿持久化及答题权威校验改动；系统版本继续由前端 `package.json` 统一维护。

## 1.5 · 2026-10-26

- 对齐 Agent 提交规则表格的 Markdown 格式；前后端成对提交和交付核对规则不变。

## 1.4 · 2026-10-26

- 明确前后端同属一个交付单元：每次提交都核对两边状态，有对应变更时分别提交，某一侧无变更时如实说明且不创建空提交。
- 后端同步拉取并合并远程 `75d33aa`，保留现有本地提交；该远程提交补充问卷授权回归测试和本地恢复快照忽略规则，不改变前端操作。

## 1.3.1 · 2026-10-26

- 按本次发布要求将系统版本更新为 1.3.1，汇总已记录的 AI 问卷工作台、模板后台任务、发布加载状态、答题导航与预览调整。
- 合并远端问卷授权回归：覆盖授权、撤销、非管理成员只读和撤销失败保留成员信息，并补充[问卷分享与权限](http://design.ors-cn.com/agent-help/articles/workbench/sharing.md)说明。
- 同步修正模型选择测试的异步挂载等待、Windows 换行兼容和已有代码格式；产品行为不变。

## 1.29 · 2026-10-26

- 内容编辑页点击发布后立即进入加载状态，发布按钮用单个旋转图标替换原发送图标，图标与文字保持独立间距，避免重复点击。
- 测试发布先打开同源加载页，再跳转测试答题，不再短暂停留在 `about:blank`；设计器预览移除页码进度。
- 渲染页的下一页／提交按钮固定在操作行右侧，有上一页时保留在左侧；新产品默认按钮位置同步为右侧。
- 参见[保存、模拟答题与发布](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md)与[受访者填写指南](http://design.ors-cn.com/agent-help/articles/collect/filling.md)。

## 1.28 · 2026-10-26

- 合并 AI 问卷全屏工作台：增加草稿合同、问卷文本与 V9 双向编解码、四区编辑界面、智能生成与 Word 导入弹窗，以及任务进度和模型实时输出。
- 导入流程改用语义 HTML 保留标题、表格与合并单元格；修复模型选择、multipart 上传、题号和选项编码分配、预览重复题号及保存前草稿归一化。
- 使用说明：[创建问卷](http://design.ors-cn.com/agent-help/articles/workbench/create.md)。相关后端需配套 V30、V31 迁移及问卷草稿接口。

## 1.27 · 2026-10-26

- 合并 `origin/main` 的 AI 模板创建工作台更新：严格模板分析改为可恢复后台任务，保留逐题澄清、原文与答复进度，生成可编辑草稿并在发布前完成运行核验与核对清单。
- 模板生成等待失败时保留已有结果，重试只重新保存；修复 Windows 私有脚本服务构建路径，并以保存后的完整内容核对结果。
- 使用说明：[创建问卷](http://design.ors-cn.com/agent-help/articles/workbench/create.md)。合并保留当前分支的脚本运行时协议 v2；远端模板后台任务部署仍需对应后端与 V28、V29 数据库迁移。

## 1.26 · 2026-10-25

- 在 Agent 入口补齐生产服务器、SSH 密钥与受限凭证位置，并记录构建、备份、上传校验、服务切换、验收、回滚及仅同步问卷配置的操作约定。本次仅维护运维文档，不改变产品功能或重新部署；使用步骤无变化。当前已记录发布版本为 1.25，本提交按顺序维护为 1.26。

## 1.24 · 2026-10-25

- 外观设计、收集设置与答卷数据各子页共用持续显示的“测试发布、预发布、正式发布、返回编辑”按钮组；对应发布成功后原按钮切换为“停止发布”，停止确认后恢复发布入口，移除独立“停止收集”按钮。收集和数据页可直接确认正式发布，窄屏工具栏换行显示。参见[保存、模拟答题与发布](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md)、[收集设置](http://design.ors-cn.com/agent-help/articles/collect/settings-overview.md)与[结果数据](http://design.ors-cn.com/agent-help/articles/data/results.md)。

## 1.23 · 2026-10-25

- 修复公开答题页普通多选项内容偏上的问题：复选框和富文本内容在选项卡内垂直居中，长文本换行后仍保持对齐，保留既有勾选、分组、补充输入及单选布局。参见[多选题](http://design.ors-cn.com/agent-help/articles/design/questions/checkbox.md#结果与限制)。

## 1.22 · 2026-10-25

- 修复答案引用带段落标签时题目及选项文字异常拆行的问题：引用内容转换为句内结构，保留文字格式、图片和内部换行；单选、多选及变量富文本共用修复，不改变原答案或提交协议。参见[富文本、图片与答案引用](http://design.ors-cn.com/agent-help/articles/design/workspace/rich-text.md#结果与限制)。

## 1.21 · 2026-10-25

- 首页“近期问卷项目”替换固定示例，按当前账号在本浏览器最近打开或使用的顺序展示最多 3 个真实问卷，显示名称、状态与正式答卷数，点击直接进入对应问卷。使用记录刷新保留，过滤文件夹、已删除或失去权限的项目；不足时按最近更新补足，补齐加载、空列表与失败重试。参见[工作台首页](http://design.ors-cn.com/agent-help/articles/workbench/home.md#近期问卷项目)。

## 1.20 · 2026-10-25

- 删除题目、选项及矩阵行列前统一检查自带代码与外部引用：自带代码确认后随实体清理，其他题目、全局公式、图形或无法确认的动态引用先修正再删除；取消或问卷变化不应用旧确认。覆盖大纲、画布与批量编辑，保留历史编码归属。修复被删选项残留自动勾选规则导致保存被拒绝的问题。参见[删除前代码检查](http://design.ors-cn.com/agent-help/articles/design/workspace/questions-options.md#删除前代码检查)。

## 1.19 · 2026-10-25

- 完成按页运行核心的同卷功能验收：45 题问卷桌面和移动真实提交、SQL 回读各 27 条一致答案；补充合页、刷新恢复和严格服务端响应检查工具，修正文档中旧全卷计算描述。按用户要求停止剩余性能对比。参见[页面计算与返回](http://design.ors-cn.com/agent-help/articles/collect/filling.md#页面计算与返回)与[功能验收记录](docs/testing/ors-page-flow-acceptance-20261025.md)。

## 1.18 · 2026-10-25

- 内容复用同步清除旧版 `visibilityRule` 显示规则，避免复制历史题或从旧题库导入后被程序编译器拒绝保存；保留普通内容与编码归属记录。参见[题库管理与复用](http://design.ors-cn.com/agent-help/articles/resources/question-bank.md)。

## 1.17 · 2026-10-25

- 修复内容复用清理误用于“测试本题”的回归：单题预览恢复保留本题代码、自动勾选、显示代码和 CSS，沿用既有跨题依赖处理；题库及复制继续清除程序产物、旧公式和自定义样式等残留，保留普通计分配置。参见[题库管理与复用](http://design.ors-cn.com/agent-help/articles/resources/question-bank.md)。

## 1.16 · 2026-10-25

- 题库保存、历史题库加入问卷及“复制本题”统一只复用文本、题型和普通配置，清除自动勾选、自定义代码/CSS、显示代码、逻辑、计算变量、关联及程序元数据；原题与原题库保持不变。参见[题库管理与复用](http://design.ors-cn.com/agent-help/articles/resources/question-bank.md)。

## 1.15 · 2026-10-25

- 修复自动选择结果进入响应式代理后，后续页面推进无法复制事务草稿的问题；派生选择状态采用浅层引用，保持跨页提交与回滚可用。固定四页回归覆盖连续推进。参见[页面计算与返回](http://design.ors-cn.com/agent-help/articles/collect/filling.md#页面计算与返回)。

## 1.14 · 2026-10-25

- 按候选页接入初始化、显隐、关联、动态矩阵与合页展示，分离可读范围和执行范围；返回清理移除页，刷新重建既有动态行，推进确认失败原子回滚并支持重试。保留服务端严格复核，不新增历史计算快照存储。参见[页面计算与返回](http://design.ors-cn.com/agent-help/articles/collect/filling.md#页面计算与返回)与[运行证据及边界](docs/testing/ors-page-flow-20261025.md)。

## 1.13 · 2026-10-25

- 修复新增性别选择题后修改题目编码时，A1、A2 被误判为其他实体占用的问题；预设选项保留复制后的内部身份与编码归属，题目改码继续同步选项引用。参见[题目通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)。

## 1.12 · 2026-10-25

- 服务端复用已确认进度保留未改变答案的接纳结果，逐检查点复核新增或修改答案，并对所有答案检查题目与选项身份；删除后重新加入不复用旧接纳。不新增历史计算快照存储。配套后端提交 `dce65e72`，真实公开提交及数据库回读已验证。参见[填写指南](http://design.ors-cn.com/agent-help/articles/collect/filling.md#服务端对已确认答案的复核)。

## 1.11 · 2026-10-25

- 共享题目与选项显隐求值器支持显式页面执行范围，保持完整答案读取快照；未传范围的现有前后端调用保持原校验行为。本单元尚未切换答题入口，无用户操作变化。参见[页面运行证据与边界](docs/testing/ors-page-flow-20261025.md)。

## 1.10 · 2026-10-25

- 新增 orsold PC/移动答案读取、惰性关联和候选页阶段的原函数对照测试，复现按页显隐与最终答卷复核的时序冲突。本次仅增加重构前验证证据，尚未改变用户操作、渲染流程或答卷规则。参见[阶段 A 证据](docs/testing/ors-page-flow-20261025.md)。

## 1.9 · 2026-10-25

- 补齐有序下一题真实源码的预备与外部请求检查，修复欢迎页采用期间的参数竞态、合页末成员进度、失败回滚的倒计时/附件以及旧请求覆盖新草稿。保留可见结构页索引兼容跳回操作；纯数组成员读取可提前准备，运行器随页面保温。参见[翻题请求与配额](http://design.ors-cn.com/agent-help/articles/collect/filling.md#翻题请求与配额)。

## 1.9 · 2026-10-25

- 答卷数据的配额进度、结果数据和原始数据统一铺满可用宽高，移除页面外层内边距及最大宽度限制；结果数据保留筛选与表格独立滚动。参见[结果数据](http://design.ors-cn.com/agent-help/articles/data/results.md)、[原始数据](http://design.ors-cn.com/agent-help/articles/data/raw.md)和[配额进度](http://design.ors-cn.com/agent-help/articles/data/quota-progress.md)。

## 1.8 · 2026-10-25

- 新增批量推进确认，将连续自动题/合页的路径配额检查与进度合并，复用服务端答案规范化；下一题准备及检查成功后开放交互，拒绝/过期/失败回滚，重复点击去重。联网或未知能力前保留检查边界。参见[翻题请求与配额](http://design.ors-cn.com/agent-help/articles/collect/filling.md#翻题请求与配额)。

## 1.7 · 2026-10-25

- 欢迎页在私有内存中预备确定性的自动题与首道人工作答题，实际进入确认配额后采用；参数变化失效，未知依赖延迟执行，不提前保存预填状态或启动题目计时。参见[欢迎页提前准备](http://design.ors-cn.com/agent-help/articles/collect/filling.md#欢迎页提前准备)。

## 1.6 · 2026-10-25

- 输入仅保存本地草稿，成功翻题后更新进度并捕获服务器快照；保存重试不夹带未确认输入。移除动态页码提示，导航复用生命周期与合页结构，公开PAGE_COUNT按结构缓存；草稿增加程序与入口参数核对。参见[翻题进度与恢复](http://design.ors-cn.com/agent-help/articles/collect/filling.md#翻题进度与恢复)。

## 1.5 · 2026-10-25

- 答题程序定义未变化时复用编译结果；确定性全卷计算按完整输入与候选题复用，保留默认值、矩阵、自动选择和隐藏清理规则；未知依赖回退原计算。参见[脚本运行准备](http://design.ors-cn.com/agent-help/articles/collect/filling.md#脚本运行准备)。

## 1.4 · 2026-10-25

- 预填、渲染、校验和下一题脚本复用已加载的隔离运行器，并使用调用身份隔离迟到结果；每次执行保持独立上下文，取消、错误和超时销毁运行器。增加不执行问卷代码的预热能力。参见[脚本运行准备](http://design.ors-cn.com/agent-help/articles/collect/filling.md#脚本运行准备)。

## 1.3 · 2026-10-25

- 按本次发布要求将系统版本统一为 1.3（package.json 为 1.3.0）；保留 1.270 及以前的开发更新记录，后续提交从本发布版本继续递增。
- 汇总当前已提交的题目属性与逻辑、配额与结果数据、内容/外观切换性能，以及自动完成题不占显示题号等变更。操作说明见[快速入门](http://design.ors-cn.com/agent-help/articles/quick-start/overview.md)、[通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)、[配额管理](http://design.ors-cn.com/agent-help/articles/design/quota/overview.md)和[结果数据](http://design.ors-cn.com/agent-help/articles/data/results.md)。
- 修复重置答题后迟到的配额预检响应覆盖新会话状态的问题；更新旧整页测试夹具以验证当前逐题/合页合同，保留计时、默认值、显隐、提交与配额负向验证。问卷协议、发布批次和既有答卷数据不变。参见[重置与配额检查](http://design.ors-cn.com/agent-help/articles/collect/filling.md#重置与配额检查)。

## 1.270 · 2026-10-25

- 自动完成题统一不占公开答题和预览中的显示题号，覆盖初始化 `autoComplete`、自动勾选直接通过、聊天、合页及草稿恢复；仅预填但需人工确认的题目正常编号，答案、编码、校验和配额规则保持原有语义。参见[答案预填代码](http://design.ors-cn.com/agent-help/articles/design/properties/common.md#答案预填代码)和[自动选择选项](http://design.ors-cn.com/agent-help/articles/design/properties/auto-select.md)。

## 1.269 · 2026-10-25

- 内容编辑与外观设计支持同卷页面保活、按需加载与独立加载状态，返回内容编辑保留选中题和工作区状态；切换不等待请求，外观待保存修改后台提交，隐藏预览释放并在返回后重建。防止旧问卷请求覆盖当前问卷。参见[切换内容编辑与外观设计](http://design.ors-cn.com/agent-help/articles/design/workspace/overview.md#切换内容编辑与外观设计)和[页面切换与加载](http://design.ors-cn.com/agent-help/articles/design/appearance/style.md#页面切换与加载)。

## 1.268 · 2026-10-25

- 完成椰子水配额还原及分层验收，固化可重复的副本预置和真实浏览器流程；记录停止收集时启用配额的批次边界。参见[停止收集时启用配额](http://design.ors-cn.com/agent-help/articles/design/quota/overview.md#停止收集时启用配额)。

## 1.267 · 2026-10-25

- 修复审查发现的两处合同遗漏：交叉配额Excel拒绝丢失独立检查点的导出；自动化运行支持绑定预发布快照，读卷、进度和重试贯通。参见[自动化测试](http://design.ors-cn.com/agent-help/articles/data/results.md#自动化测试)。

## 1.266 · 2026-10-25

- 固化椰子水源配额到本地稳定身份的可重复映射：6组完整配置、13组禁用草稿、442单元，缺失来源选项时明确失败。参见[椰子水配额还原范围](http://design.ors-cn.com/agent-help/articles/design/quota/overview.md#椰子水配额还原范围)。

## 1.265 · 2026-10-25

- 增加隔离配额测试副本与幂等预置流程，复用真实答卷事务和配额分配，支持接近满额与并发边界验证。参见[自动化配额边界验收](http://design.ors-cn.com/agent-help/articles/design/quota/overview.md#自动化配额边界验收)。

## 1.264 · 2026-10-25

- 普通配额支持不限额、空组禁用草稿和逐单元检查点；交叉配额可独立设置检查点，答题按当前检查点提前检查，未答否定条件不误命中。参见[检查点与不限额](http://design.ors-cn.com/agent-help/articles/design/quota/normal.md#检查点与不限额)。

## 1.263 · 2026-10-25

- 增加可信自动化运行来源、进度与重试校验、结果筛选和标签；正式统计及原卷配额排除自动化答卷，Excel独立附带来源。参见[自动化测试](http://design.ors-cn.com/agent-help/articles/data/results.md#自动化测试)。

## 1.262 · 2026-10-25

- 城市题两种 Excel 导出统一输出末级地区编码及 0–5 地区分类，保留编码文本与各答卷版本；无效路径不默认归其他。参见[城市题地区分类](http://design.ors-cn.com/agent-help/articles/data/export.md#城市题地区分类)。

## 1.261 · 2026-10-25

- 修复结果数据包含旧预发布答卷时 Excel 导出被新版渲染钩子规则阻止的问题；只读编号结构仍由共享编译器校验，工作簿继续读取各答卷原快照，不改历史数据。参见[历史快照兼容](http://design.ors-cn.com/agent-help/articles/data/export.md#历史快照兼容)。

## 1.260 · 2026-10-25

- 记录椰子水当前 45 题的代码等价简写、正式版本 1、20 份正常完成与 26 份筛选验收，补充实测耗时及后续优化建议；本提交仅维护文档，不改变平台计算架构。参见[题号与筛选结束的简写](http://design.ors-cn.com/agent-help/articles/design/logic/examples.md#题号与筛选结束的简写-2026-10-25)。

## 1.259 · 2026-10-25

- 统一已转测试答卷的来源分类，修复正式筛选和导出仍包含历史测试的问题；预发布分类与原始答案、来源、完成结果保持不变。参见[正式与历史测试](http://design.ors-cn.com/agent-help/articles/data/results.md#正式与历史测试)。

## 1.258 · 2026-10-25

- 记录复杂问卷还原方法、三卷各 20 份正式完成的验收结果及已知验证边界，同步执行计划与[正式完成验收说明](http://design.ors-cn.com/agent-help/articles/collect/filling.md#正式完成验收)；本提交不改变业务行为。

## 1.257 · 2026-10-25

- 最终答卷提交使用 60 秒独立传输等待，修复多阶段权威审核超过全局 10 秒时前端过早报超时的问题；同一次请求不自动重发，答案身份、服务端校验及脚本执行预算保持不变。参见[问卷填写](http://design.ors-cn.com/agent-help/articles/collect/filling.md#提交等待与重试)。

## 1.256 · 2026-10-25

- 科技欢迎页的桌面左栏在任意高度保留滚动，修复长问卷说明把隐私同意、签名和进入按钮挤出可操作区域的问题；沿用原有短屏和手机布局。参见[欢迎页](http://design.ors-cn.com/agent-help/articles/design/appearance/welcome.md#长说明与进入按钮)。

## 1.255 · 2026-10-25

- 新建身份改用 Web Crypto 随机标识，修复独立浏览器会话同毫秒开始时可能共用答题标识、将另一份答卷误判为重复提交的问题。已有草稿及重复提交仍沿用原身份。参见[问卷填写](http://design.ors-cn.com/agent-help/articles/collect/filling.md#答题会话与重复提交)。

## 1.254 · 2026-10-25

- 私有脚本宿主默认使用 384 MiB Node heap 与 1 GiB 容器上限，修复数百题问卷在静态审核时内存溢出、保存失败的问题；既有编译缓存总上限调整为 64 MiB，避免大程序每次重新编译；作者 VM 仍保持原有 64 MiB 与执行时限。参见[大问卷的纯表达式复用](http://design.ors-cn.com/agent-help/articles/design/conditions/formula-editor.md#大问卷的纯表达式复用)。

## 1.253 · 2026-10-25

- 修复合页中的关联题在来源尚未作答时被永久取消，导致来源作答后仍漏掉后题的问题；候选判定与现有关联可用性一致，后题出现后仍执行全页校验。参见[合页内的关联题](http://design.ors-cn.com/agent-help/articles/design/workspace/questions-options.md#合页内的关联题)。

## 1.252 · 2026-10-25

- 既有纯表达式缓存识别规范题目编码、静态 `context.questions` 与矩阵轴读取，已证明纯读取且无公式时省去无关题目的隔离输入；相关快照变化仍失效，动态和宿主能力调用不复用。仍使用全卷稳定计算。
- 大问卷的静态编译及改码审核等待延长至 10 秒，答题自动选择仍保留原有时限。参见[大问卷的纯表达式复用](http://design.ors-cn.com/agent-help/articles/design/conditions/formula-editor.md#大问卷的纯表达式复用)。

## 1.251 · 2026-10-25

- 多选选项新增“互斥选项”属性；答题时勾选该项清除其他选择，再勾选普通项取消互斥项，保存保留稳定身份与配置。参见[互斥选项](http://design.ors-cn.com/agent-help/articles/design/properties/options.md#互斥选项)。

## 1.250 · 2026-10-25

- 矩阵纯数字行号与列号可在不同轴重复；改码审核仍拒绝同轴重复、历史身份冲突及字母快捷引用的跨轴歧义。使用 `$row`、`$col` 明确读取。参见[稳定编码](http://design.ors-cn.com/agent-help/articles/design/properties/options.md#稳定编码)。

## 1.249 · 2026-10-24

- 选项及矩阵行列支持纯数字编码，保留题目编码、作用域唯一性和历史归属检查，便于与旧版问卷编号对齐；脚本按字符串及明确矩阵轴读取。参见[稳定编码](http://design.ors-cn.com/agent-help/articles/design/properties/options.md#稳定编码)。

## 1.248 · 2026-10-24

- 题目逻辑恢复显示、跳转、校验三个页签，显示页直接编辑本题及选项／矩阵行列的编号和显示代码；切换页签保留草稿，显示与规则修改通过同一审核事务保存。
- 选项属性入口与独立窗口统一命名为“显示逻辑”，保留图形生成、Excel 单列粘贴与矩阵分轴编辑。参见[显示逻辑](http://design.ors-cn.com/agent-help/articles/design/properties/options.md#显示逻辑)。

## 1.247 · 2026-10-24

- “编号和显示代码”将图形化编辑按钮移至右侧独立列，代码输入与操作分列展示，沿用原有编辑和保存流程。参见[编号和显示代码](http://design.ors-cn.com/agent-help/articles/design/properties/options.md#图形生成与组内批量编辑)。

## 1.246 · 2026-10-24

- 修复停止收集后设计页误读残留预发布快照，导致题目删除已保存、刷新却重新出现的问题；停止状态读取最新草稿，历史快照与答卷保留。
- 停止后重新预发布恢复结构锁并固定最新草稿；预发布仍不分配正式版本号，已预发布时重复打开复用已有快照。参见[保存、模拟答题与发布](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md)。

## 1.245 · 2026-10-24

- 展示覆盖在进入题目时将作者编码解析为稳定项目身份；后续合页预填或普通答案计算替换动态矩阵行时保留有效覆盖、丢弃已移除目标，避免旧编码误绑定新行及答题中断。
- 展示目标改码只分析实际返回的 view；动态构造、对象展开和无法安全分析的目标明确阻止自动改码，不改写无关局部数据。
- 同步题型手册、外观预填示例与私有服务程序版本说明，详见[四个题目钩子](http://design.ors-cn.com/agent-help/articles/design/properties/common.md#四个题目钩子)与[改造验收记录](docs/testing/2026-10-24-logic-convergence.md)。

## 1.244 · 2026-10-24

- 完成显示与生命周期 v2 的跨端核对：旧程序需重新保存发布；预填答案校验已有选项/矩阵身份与输入结构；题目逻辑数量包含自身及子项显示条件，切换显示编辑时立即建立草稿。
- 更新四类代码入口、单题/合页/聊天与引用测试，增加隔离后端的设计保存、发布、矩阵展示、返回及答卷回读闭环；仍使用现有全卷稳定计算。验证范围和基线失败见[改造验收记录](docs/testing/2026-10-24-logic-convergence.md)，使用说明见[四个题目钩子](http://design.ors-cn.com/agent-help/articles/design/properties/common.md#四个题目钩子)。

## 1.243 · 2026-10-24

- 题目渲染逻辑收束为本题展示覆盖，支持标题、说明、选项及矩阵行列文案；新增只读 context.view，拒绝答案/流程返回与网络请求。展示副本与业务计算分离，刷新恢复时重建，静态展示目标参与改码审核。参见[四个题目钩子](http://design.ors-cn.com/agent-help/articles/design/properties/common.md#四个题目钩子)。

## 1.242 · 2026-10-24

- 新增独立“答案预填代码”，仅首次实际进入且无恢复/人工回答时执行，可覆盖默认值并请求经校验的自动完成；只允许写本题，保存一次性处理状态，取消和过期请求不覆盖新回答。参见[答案预填代码](http://design.ors-cn.com/agent-help/articles/design/properties/common.md#答案预填代码)。

## 1.241 · 2026-10-24

- 显示逻辑统一为本题首行和选项/矩阵行列代码表；图形编辑仅生成代码，覆盖前确认并保留取消草稿。组入口统一为“批量设置显示逻辑”，与单题同源；新增明确的旧显示规则清除入口，保留跳转和校验。参见[编号和显示代码](http://design.ors-cn.com/agent-help/articles/design/properties/options.md#显示逻辑)。

## 1.240 · 2026-10-24

- 建立题目自身布尔显示条件及确定性来源检查，旧显示规则明确报错；私有服务复核隐藏题答案，浏览器、脚本服务与 Java 程序合同同步升级为 2。显示编辑和预填/渲染职责分离按计划继续实施。参见[编号和显示代码](http://design.ors-cn.com/agent-help/articles/design/properties/options.md#显示逻辑)。

## 1.239 · 2026-10-24

- 记录显示逻辑收束、图形生成代码、组内批量编辑及候选题／合页计算的分阶段改造计划，保留“跳转逻辑暂时不动”的最新决定，并列明运行时实施前待确认的语义。本次仅保存内部设计计划，不改变产品功能或答题行为。

## 1.238 · 2026-10-24

- 完善问卷测试 Demo 的逐场景报告、首次偏差定位、凭证脱敏、固定同源 API 和清理前证据检查；增加“开始问卷测试”的 AI 技能入口，明确固定问卷范围、配额成功口径及15分钟验收上限。参见[AI 问卷测试 Demo](http://design.ors-cn.com/agent-help/articles/quick-start/overview.md#ai-问卷测试-demo)。

## 1.237 · 2026-10-24

- 接入固定四题问卷的真实 Chromium 答题执行，覆盖必答、筛选、A/B 显隐、配额满额与成功答卷补量；逐次比对后端查询、数据库答案及配额占用，通过后核验专属数据库删除。参见[AI 问卷测试 Demo](http://design.ors-cn.com/agent-help/articles/quick-start/overview.md#ai-问卷测试-demo)。

## 1.236 · 2026-10-24

- 增加固定问卷自动化 Demo 的参数、场景计划、QA 独占锁与专属数据库运行入口，建立可复查报告及通过后清理保护。浏览器执行场景在后续单元接入。参见[AI 问卷测试 Demo](http://design.ors-cn.com/agent-help/articles/quick-start/overview.md#ai-问卷测试-demo)。

## 1.235 · 2026-10-24

- “编号和显示代码”的显示代码列支持从 Excel 粘贴单列，按目标行向下覆盖当前选项或矩阵当前轴；保留空白格用于清空代码，多列及行数超出时整批拒绝。粘贴仍需保存并通过原有语法和引用检查。参见[编号和显示代码](http://design.ors-cn.com/agent-help/articles/design/properties/options.md#显示逻辑)。

## 1.234 · 2026-10-24

- 整理矩阵行、列与单元格的取值、选中查询和修改答案速查；补充简写与 $row/$col 显式路径的等价关系、编码冲突及可写阶段限制，并提供可执行的取值示例。本次仅更新使用文档，不改变运行行为。参见[矩阵脚本路径说明](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md#简写与显式行列路径)及[修改单元格答案速查](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md#修改单元格答案速查)。

## 1.233 · 2026-10-24

- 编号和显示代码、批量修改选项编码的按钮行与上方当前项配置增加间距，保留两按钮并排及中间间隔。参见[编号和显示代码](http://design.ors-cn.com/agent-help/articles/design/properties/options.md#显示逻辑)。

## 1.232 · 2026-10-24

- 新增 AI 脚本函数开发规范手册，并在 AGENTS.md 设置函数、别名、链式语法和脚本 API 调整的必读入口；明确语义合同、跨端影响、测试矩阵、文档生成和交付证据。该单元只更新开发规范，无额外运行行为变化。参见[函数使用说明](http://design.ors-cn.com/agent-help/articles/design/conditions/functions.md#数组链式集合判断)。

## 1.231 · 2026-10-24

- 修复向工作区的子分组后方拖入新题时，插入位置被提前到子组前方；新题按实际目标位置同步保存混合大纲顺序，刷新后保留位置与成员归属。参见[工作区分组位置](http://design.ors-cn.com/agent-help/articles/design/workspace/outline.md#工作区分组位置)。

## 1.230 · 2026-10-24

- 所有隔离脚本数组支持 isin/notin/any 链式集合判断及 isIn/notIn 别名，沿用 orsold 严格匹配；补齐编辑器提示、引用改码、离线迁移和前后端一致性验证。保留直接函数和矩阵对象方法的原有合同。参见[集合函数](http://design.ors-cn.com/agent-help/articles/design/conditions/functions.md#数组链式集合判断)、[自动勾选](http://design.ors-cn.com/agent-help/articles/design/properties/auto-select.md)。

## 1.229 · 2026-10-24

- 矩阵选项配置拆分为行、列 Tab，编码、批量改码、显示代码及数量角标按当前轴管理；行列顺序独立保存并用于公开答题，保留原身份和答案映射。编号／显示代码与批量改码按钮并排显示。参见[矩阵行列配置](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md)与[编号和显示代码](http://design.ors-cn.com/agent-help/articles/design/properties/options.md#显示逻辑)。

## 1.228 · 2026-10-24

- 修复大纲选中分组再次点击标题无法折叠／展开；批量选择增加跨子组的双端点区间选择。工作区按大纲顺序显示子分组、空组及题目，展示路径与题目／选项数量。参见[大纲与工作区分组](http://design.ors-cn.com/agent-help/articles/design/workspace/outline.md)。

## 1.227 · 2026-10-24

- 答案编辑不再触发全局脚本重算，支持连续多选；公式、显隐、关联和自动选择集中到题目生命周期推进时更新，提交按最新计算结果确定校验范围。参见[显示条件与计算等待](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md#显示条件与计算等待)。

## 1.226 · 2026-10-24

- 条件组“包含／不包含”后的选项关系仅在选中两个及以上选项时显示，未选或只选一个时隐藏；重新多选保留原关系。参见[包含与正则条件](http://design.ors-cn.com/agent-help/articles/design/logic/visual.md#包含与正则条件)。

## 1.225 · 2026-10-24

- 补齐预发布状态在收集设置页的“停止收集”入口，复用确认、关闭快照与解锁编辑流程；停止后已有预发布会话无法继续提交。参见[保存、模拟答题与发布](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md)。

## 1.224 · 2026-10-24

- 补齐答题延迟优化的验证记录与使用文档日期，无新增用户行为。原问卷预发布全流程完成 43 条答案入库，未测试正式发布；完整单测 2312 通过、28 项基线失败，无新增失败。参见[保存、模拟答题与发布](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md)。

## 1.223 · 2026-10-24

- 私有脚本服务复用相同完整定义的成功编译结果，减少最终提交时重复编译；容量有限，配置变化失效、返回独立副本，发布指纹仍逐次核对。参见[显示条件与计算等待](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md#显示条件与计算等待)。

## 1.222 · 2026-10-24

- 预发布读取、配额检查与提交保留服务器实际拒绝原因，仅明确的无效或过期凭证进入凭证错误页，避免将快照不一致等错误误报为过期。参见[保存、模拟答题与发布](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md)。

## 1.221 · 2026-10-23

- 已预发布问卷可再次点击预发布，刷新测试凭证并打开已有快照，不重复保存或创建发布批次；正式收集期间仍禁止此操作。参见[保存、模拟答题与发布](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md)。

## 1.220 · 2026-10-23

- 更新直接提交后的并发回归测试：旧保存和旧提交响应不影响重置后的草稿，提交期间修改答案或附件时不误显示成功、不清除新内容；无新增用户行为。参见[显示条件与计算等待](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md#显示条件与计算等待)。

## 1.219 · 2026-10-23

- 浏览器与私有脚本运行器复用静态可证明只读题目依赖的纯表达式成功结果，减少重复显隐和自动选择计算；依赖变化失效，动态上下文、钩子、错误和取消不复用，保留沙箱隔离。参见[显示条件与计算等待](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md#显示条件与计算等待)。

## 1.218 · 2026-10-23

- 普通翻页在校验和配额检查通过后后台同步进度，不再等待保存请求；最终提交直接发送完整答案，失败保留草稿供重试，成功仍以服务端确认为准。参见[显示条件与计算等待](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md#显示条件与计算等待)。

## 1.217 · 2026-10-23

- 合并慢请求之后尚未发送的答题进度，保留最新答案并等待其保存成功，避免连续填写矩阵后逐条排队保存旧进度。参见[显示条件与计算等待](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md#显示条件与计算等待)。

## 1.216 · 2026-10-23

- 外观修改及等价的保存回写不再重复初始化预览，保留已填写答案并即时更新样式；题目与逻辑变更仍重新初始化。参见[预览计算与脚本报错](http://design.ors-cn.com/agent-help/articles/design/appearance/style.md#预览计算与脚本报错)。

## 1.215 · 2026-10-23

- 多题测试自动补入静态可识别的依赖题并标注编码，沿依赖递归补入且保持原题序；动态取题或共享状态无法确定时提示改用整卷测试。参见[多题测试的依赖范围](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md#多题测试的依赖范围)。

## 1.214 · 2026-10-23

- 移除整页展示入口，新建及旧整页问卷统一按一页一题运行，保留对话窗口；渲染和跳转钩子同步生效。参见[外观样式](http://design.ors-cn.com/agent-help/articles/design/appearance/style.md)。

## 1.213 · 2026-10-23

- 预览和公开答题等待首次显示条件计算后再展示题目，避免条件矩阵先闪现全部行再消失；预览增加初始化加载状态。补充链接业务参数与自动完成渠道题的沙箱脚本示例。参见[预览计算与脚本报错](http://design.ors-cn.com/agent-help/articles/design/appearance/style.md#预览计算与脚本报错)。

## 1.212 · 2026-10-23

- 连续显示条件和公式计算复用已加载的 Worker，避免每项重复加载脚本环境造成预览切换与答题长时间禁用；每次执行仍使用独立沙箱，取消、超时及错误均销毁当前 Worker。参见[显示条件与计算等待](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md#显示条件与计算等待)。

## 1.211 · 2026-10-23

- 多题测试选题列表显示题目编码，与设计页保持一致，避免删除或手动改码后按题序生成的编号指向另一道题；补充关联题需要同时选择来源题的测试说明。参见[多题测试说明](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md)。

## 1.210 · 2026-10-23

- 多题测试每次打开前清除旧的多题预览缓存，避免整卷快照不断占用浏览器空间；空间仍不足时给出错误提示。参见[保存、模拟答题与发布](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md)。

## 1.209 · 2026-10-23

- 矩阵单选、多选的静态行列支持 select、unSelect、isSelected、unSelected 查询，以及 isselect、includes、isin、notin 简写；同步实时答案、编辑器对侧编码提示和改码引用审核。参见[矩阵选择查询](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md#可用方法与写入限制)。

## 1.208 · 2026-10-23

- 选项属性新增“编号和显示代码”，支持多项评分、排序、填空、分组选项及同窗矩阵行列；矩阵行列配置、顺序、分组与动态行入口迁入选项属性。同步布尔条件与其他显隐限制共同生效，隐藏时清除答案，错误阻止推进与提交，私有服务复核发布代码。参见[编号和显示代码](http://design.ors-cn.com/agent-help/articles/design/properties/options.md#显示逻辑)及[矩阵题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md#行列自己的显示条件)。

## 1.207 · 2026-10-23

- 选项分组、矩阵行分组及不可填写单元格弹窗在关闭时保存已确认修改，统一覆盖底部、右上角及 Esc；保存失败保留弹窗与草稿供重试，未确认分组表单不自动提交。参见[分组弹窗关闭保存](http://design.ors-cn.com/agent-help/articles/design/properties/options.md#分组弹窗关闭保存)及[矩阵配置弹窗关闭保存](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md#配置弹窗关闭保存)。

## 1.206 · 2026-10-23

- 选项分组点击组名后直接进入编辑视图；新增两端点区间选择，支持反向与多段追加并跳过其他组占用项，保留分组及选项身份。参见[分组编辑与区间选择](http://design.ors-cn.com/agent-help/articles/design/properties/options.md#分组编辑与区间选择)。

## 1.205 · 2026-10-23

- 共享问卷程序新增选项、矩阵行列的布尔显示表达式合同、稳定实体定位和编码引用维护；本提交提供执行与编译基础，编辑入口及公开答题接入在后续单元交付。参见[显示代码表达式合同](http://design.ors-cn.com/agent-help/articles/design/properties/options.md#显示代码的表达式合同)。

## 1.204 · 2026-10-23

- 编码审核保存失败时展示并保留服务器具体原因，避免统一提示掩盖服务异常；说明审核框的触发条件和代码入口含义。参见[选项编码](http://design.ors-cn.com/agent-help/articles/design/properties/options.md#稳定编码)。

## 1.203 · 2026-10-23

- 矩阵行列删除后允许手动复用其编码，前端审核与服务端保存复核同步将编码归属更新给新行列，保存回读后保持有效；自动新增仍递增分配，原实体尚在时保留旧编码占用，同题行列重名仍被阻止。普通选项和题目编码的历史占用规则不变。参见[矩阵行列编码范围](http://design.ors-cn.com/agent-help/articles/design/properties/options.md#矩阵行列编码范围)。

## 1.202 · 2026-10-23

- 矩阵行列手动改码、批量改码及再次审核会阻止同题跨行列重名（不区分大小写），自动分配新编码也会避开另一轴现有编码；不同题目仍可使用相同选项编码。历史已保存的同名行列保留显式轴引用兼容，不自动改写问卷。参见[选项编码范围](http://design.ors-cn.com/agent-help/articles/design/properties/options.md#矩阵行列编码范围)。

## 1.201 · 2026-10-23

- 矩阵静态行默认编码改为 `A1、A2…`，列默认编码改为 `S1、S2…`；新建、追加及缺码初始化共用规则，保留已有编码、计数器和删除编号占用，普通选项及动态派生行编码不变。参见[矩阵题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md)与[选项属性](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)。

## 1.200 · 2026-10-23

- `goto/show/hide` 支持字符串变量、模板字符串和动态拼接，编辑器接受字符串类型，执行时校验动态结果类型与目标存在性；数字、数组等非字符串继续报错，`end/complete/full` 保持无参数。静态编码引用维护不变，动态表达式保留原样。参见[逻辑操作简写](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md#逻辑操作简写)与[动态字符串目标](http://design.ors-cn.com/agent-help/articles/design/logic/examples.md#动态字符串目标-2026-10-23)。

## 1.199 · 2026-10-23

- 修复分步显示的必答矩阵：当前行全部交点被代码隐藏时允许进入下一行，并使分步推进与最终必答校验一致。参见[矩阵题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md#按行列编码直接读取)。

## 1.198 · 2026-10-23

- 矩阵单选、多选和填空题的静态单元格可在显示前及下一题可写钩子中改答；选择格支持 `setSelected`，填空格支持 `setValue`／`clear`，写入即时可读并随事务重放。拒绝隐藏、禁用、受保护或不符合列输入规则的写入。参见[矩阵题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md#可用方法与写入限制)。

## 1.197 · 2026-10-23

- 矩阵单选、多选和填空题的显示逻辑支持按静态行、列与交点编码执行 `show/hide`；隐藏后同步清理答案与补充文本，必答校验跳过不可作答的交点。参见[矩阵题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md#按行列编码直接读取)。

## 1.196 · 2026-10-23

- 矩阵单选、多选和填空题的脚本现在可用静态行列编码直接读取行、列与单元格答案；行列同码时可使用 `$row`／`$col` 限定，编码审核会维护明确的脚本引用。参见[矩阵题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md#按行列编码直接读取)。

## 1.195 · 2026-10-23

- 矩阵题的条件来源、比较对象及显隐目标树统一按“行选项／列选项”展开，显示实际编码与标题，保留原行列身份；补齐矩阵行显隐目标的运行时校验，并修复比较对象选到具体行、列或普通选项时误读整题答案的问题。参见[矩阵行列选项树](http://design.ors-cn.com/agent-help/articles/design/logic/visual.md#矩阵行列选项树)。

## 1.194 · 2026-10-23

- 显示、跳转与校验逻辑的“包含／不包含”选项下拉支持多选，展示实际选项编码与文字，并支持编码搜索、保存回显及复制引用映射。所选项之间可选择“且／或”，默认“或”，“不包含”逐项取反后组合；兼容原单选条件。参见[包含与正则条件](http://design.ors-cn.com/agent-help/articles/design/logic/visual.md#包含与正则条件)。

## 1.193 · 2026-10-23

- 新增题目“校验逻辑”页签，支持图形失败条件、红字提示及按次数筛选；0 次立即筛选，1／2 次分别提示一次／两次后筛选。筛选保留已答内容、草稿次数并复用结束提交，跳过下一题逻辑；自定义代码复用原布尔答案校验编辑器。参见[校验逻辑与重试筛选](http://design.ors-cn.com/agent-help/articles/design/logic/visual.md#校验逻辑与重试筛选)。
- 显示、跳转和校验共用“包含／不包含”选项判断与“匹配正则”；覆盖原始文本、复合答案与变量，校验非法正则，维护复制和删除引用。参见[包含与正则条件](http://design.ors-cn.com/agent-help/articles/design/logic/visual.md#包含与正则条件)。

## 1.192 · 2026-10-23

- 优化逻辑引擎“实际程序”的生成速度：来源定位改为单次扫描，消除大问卷逐项扫描完整代码造成的长时间阻塞；程序内容、指纹、下载及答题语义保持不变。参见[问卷程序与执行合同](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md)。

## 1.191 · 2026-10-22

- 提交校验拒绝伪造的来源选项和目标关联项 ID，防止无效来源答案放开“未选中项”；矩阵填空的自由文本仍按文本处理。参见[题目关联](http://design.ors-cn.com/agent-help/articles/design/properties/associations.md)。

## 1.190 · 2026-10-22

- 提交时的关联项校验同步检查来源题的全局图形显隐逻辑和题目显隐条件；来源被隐藏时，即使提交数据仍带旧答案，也不能据此提交关联项。答题页与提交服务共用题目显隐判断。参见[题目关联](http://design.ors-cn.com/agent-help/articles/design/properties/associations.md)。

## 1.189 · 2026-10-22

- 修复设计页设置关联后保存问卷时，响应式来源标题无法复制而导致保存中断的问题；保存前重新同步关联项并保留其身份。参见[题目关联](http://design.ors-cn.com/agent-help/articles/design/properties/associations.md)。

## 1.188 · 2026-10-22

- 发布快照与提交链路增加关联校验：私有脚本服务核对最终答案是否只包含当时可用的关联项，后端提交在自动选择归一化后调用该校验；Excel 继续按完整发布快照展开选项、评分、排序与矩阵列。参见[题目关联](http://design.ors-cn.com/agent-help/articles/design/properties/associations.md)和[Excel 导出](http://design.ors-cn.com/agent-help/articles/data/export.md)。

## 1.187 · 2026-10-22

- 设计页题卡最右侧新增“关联”，可按来源题分别选择选中项或未选中项；矩阵行列独立配置。来源标题和可引用选项同步至目标，答题时按来源答案筛选并清理失效答案，空题自动跳过。参见[题目关联](http://design.ors-cn.com/agent-help/articles/design/properties/associations.md)。

## 1.186 · 2026-10-22

- 建立题目关联的共享数据合同：来源、目标维度、选中模式、生成项来源身份与稳定编码；编译时检查来源和映射完整性，为设计器、答题与提交接入同一模型规则。此提交仅包含模型与编译校验，暂不开放界面入口。

## 1.185 · 2026-10-22

- 显示逻辑与跳转逻辑的代码弹窗通过校验后直接执行题目逻辑保存，无须再次点击“保存逻辑”；完整校验失败时保留编辑内容。参见[可视化逻辑与题目条件](http://design.ors-cn.com/agent-help/articles/design/logic/visual.md)。

## 1.184 · 2026-10-22

- 补齐题目逻辑面板与公式编辑器的六个简写操作说明，列明可用阶段、目标补全、执行顺序、保存限制及完整函数兼容；修正通用属性中的旧入口表述。本次仅同步使用文档，不改变问卷运行行为。参见[代码逻辑简写](http://design.ors-cn.com/agent-help/articles/design/logic/visual.md#代码逻辑简写)和[平台控制操作与计算函数](http://design.ors-cn.com/agent-help/articles/design/conditions/formula-editor.md#平台控制操作与计算函数)。

## 1.183 · 2026-10-22

- 显示逻辑支持直接写 `show("Q3")`、`hide("Q3")`，下一题逻辑支持 `goto("Q3")`、`end()`、`complete()`、`full()`；按阶段检查，保留完整函数返回合同及原答题校验、隐藏清理和提交流程。编辑器提供操作、题目编码联想与错误定位。参见[逻辑操作简写](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md#逻辑操作简写)和[逻辑实例](http://design.ors-cn.com/agent-help/articles/design/logic/examples.md)。
- 明确的目标编码在保存与运行时检查；编码改名覆盖禁用草稿，复制题目同步简写自引用，局部同名函数保持原义。控制操作与计算函数目录分开说明。

## 1.182 · 2026-10-22

- 题目逻辑条件组内添加条件、新增子组及嵌套子组时，默认选择当前题目并判断“已回答”；新增跳转规则的“则”默认选择“结束答题”（筛选结束），可继续更换动作。已有规则保留原条件和去向。参见[可视化逻辑与题目条件](http://design.ors-cn.com/agent-help/articles/design/logic/visual.md)。

## 1.181 · 2026-10-22

- 大纲题目编码改为标题下方的独立文字，与右侧分组索引标签以间距分开，不再拼入索引路径或用“/”连接；拖动预览同步显示，编码过长时可悬停查看全文。参见[大纲与分组](http://design.ors-cn.com/agent-help/articles/design/workspace/outline.md)。

## 1.180 · 2026-10-22

- 题目逻辑的代码弹窗增加“保存”及成功提示，关闭、叉号或 Esc 直接丢弃本次输入；新增代码取消不留卡片，已有代码取消保留原文，语法错误不再阻止取消。题目和分组入口共用同一草稿事务。参见[可视化逻辑与题目条件](http://design.ors-cn.com/agent-help/articles/design/logic/visual.md)。

## 1.179 · 2026-10-22

- 大纲题目移除标题前的位置序号，标题下方显示题目编码，并将编码放在分组索引路径左侧；顶层、嵌套分组及拖动预览保持同样布局。参见[大纲与分组](http://design.ors-cn.com/agent-help/articles/design/workspace/outline.md)。

## 1.178 · 2026-10-22

- 为“题型使用”全部 24 篇文章补充题目取值、可用查询／写入方法、空值与阶段限制，以及带预期结果的 JavaScript 示例；分别说明选择、文本、评分、排序、矩阵、级联、AI、上传及展示组件，兼容题型按实际内部类型列举。参见[单选题](http://design.ors-cn.com/agent-help/articles/design/questions/radio.md#取值与可用函数)、[矩阵题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md#取值与可用函数)和[兼容题型](http://design.ors-cn.com/agent-help/articles/design/questions/legacy.md#取值与可用函数)。
- 同步[变量参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md#按题型查阅函数)及文档搜索关键词，修正显隐快照、正式选项编码和 SELECT 兼容字段说明；注明轮播选择查询的现有限制及可用替代写法。本次仅完善使用文档与示例核验，不改变题目运行行为。

## 1.177 · 2026-10-22

- 工作区“题目逻辑”按钮右上角用红色数字显示已保存的显示与跳转规则总数，兼容旧普通题、矩阵规则及下一题代码；保存后更新，数量为零时隐藏。参见[可视化逻辑与题目条件](http://design.ors-cn.com/agent-help/articles/design/logic/visual.md)。

## 1.176 · 2026-10-22

- 题目显示与跳转逻辑点击“添加规则”时，首条条件默认选择“题目”和当前题目，判断沿用“已回答”，可继续更改；已有规则和执行目标保持原配置。参见[可视化逻辑与题目条件](http://design.ors-cn.com/agent-help/articles/design/logic/visual.md)。

## 1.175 · 2026-10-22

- 自动勾选代码保存后提示成功，入口右上角以红色数字显示当前题目已配置有效代码的选项数；空代码、已删除选项及未保存草稿不计入，清空保存后更新数量。参见[自动选择选项](http://design.ors-cn.com/agent-help/articles/design/properties/auto-select.md)。

## 1.174 · 2026-10-22

- 显示与跳转逻辑的条件行统一保留“且／或”列，末行不显示连接符时仍保持题目、比较符、比较值及删除按钮对齐；窄屏将连接符和删除按钮置于表达式下方。参见[可视化逻辑与题目条件](http://design.ors-cn.com/agent-help/articles/design/logic/visual.md)。

## 1.173 · 2026-10-22

- 矩阵移除行设置／列设置列表，在题目属性通过“配置选项”下拉框编辑当前行列的编码及适用属性；矩阵布局、模式和填空限制统一归入题目属性，保留行列身份及引用审核。参见[矩阵题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md)。
- 基本属性仅保留通用配置，AI、多选数量、图片样式、轮播展示、级联、量表与滑块专属设置移至题目属性；同步模块 AGENTS.md 和[通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)说明。

## 1.172 · 2026-10-22

- 大纲移除分组编辑按钮，点击组头直接打开分组属性；补齐“我的资源”中 AI 配置和我的数据的离线菜单图标。参见[大纲与分组](http://design.ors-cn.com/agent-help/articles/design/workspace/outline.md)与[AI 配置](http://design.ors-cn.com/agent-help/articles/resources/ai-models.md)。

## 1.171 · 2026-10-22

- 城市题在01和非01 Excel导出中新增独立的 `题目编码__area` 分类列，位于对应路径列后；支持市级、区县及兼容城市题格式，按答卷自己的版本读取，未答、路径无效或缺少分类时留空。核对内置地区市级分类与区县继承，参见[城市地区分类](http://design.ors-cn.com/agent-help/articles/design/questions/cascade.md#城市地区分类-area)和[Excel 导出](http://design.ors-cn.com/agent-help/articles/data/export.md#城市题地区分类)。

## 1.170 · 2026-10-22

- 大纲组头打开分组属性，集中编辑编号、名称、排序及合页；组内与子组的显示规则／代码直接保存到各题目，与单题逻辑入口双向同步。批量题号复用引用改码事务，草稿取消不修改题目。
- 普通与逐题答题支持父组合页，保留逐题初始化、校验、访问和提交身份；同页先完成校验，再依序处理下一题规则。聊天模式保持逐题。参见[大纲与分组](http://design.ors-cn.com/agent-help/articles/design/workspace/outline.md)。

## 1.169 · 2026-10-22

- 代码编辑器的题目／选项编码联想显示对应文本，长文本可在详情完整查看；选项按所属题目提示，确认仍只插入编码。公式、题目钩子、有序代码规则与自动勾选共用提示，保留各阶段引用范围和原生 JavaScript 联想。参见[公式编辑器](http://design.ors-cn.com/agent-help/articles/design/conditions/formula-editor.md#编码联想中的题目与选项文本)与[逻辑代码编辑](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md#代码编辑联想)。

## 1.168 · 2026-10-22

- 全局倒计时新增“不应用全局倒计时的题目”多选下拉，支持编码／标题搜索和排除题目；保存刷新后保留，移除选择恢复全局等待，题目自身倒计时仍优先。参见[答题时间安排](http://design.ors-cn.com/agent-help/articles/collect/settings-schedule.md)。

## 1.167 · 2026-10-22

- 可输入选项在“选项配置”选中后新增独立字数限制，默认最少 0、最多 99999；支持保存回显、输入长度限制与继续／提交前校验。矩阵可输入列按每行附带文本校验，普通、未选中及隐藏选项不受影响。参见[选项属性](http://design.ors-cn.com/agent-help/articles/design/properties/options.md#可输入选项的字数限制)。

## 1.166 · 2026-10-22

- 新增题目脚本方法 `unSelect()` 与 `unSelected(code)`，按正式选项编码读取未选中集合或判断指定选项是否未选中；支持空答案、数字编码、写入后即时读取及改码引用同步。同步编辑器方法提示与[变量与数据维度](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md)说明。

## 1.165 · 2026-10-22

- 轮播题支持点击图片选中、再次点击取消，保留复选框独立操作和多选状态；图片按钮支持键盘 Enter／空格键，只读状态禁止修改。切换图片及答案提交仍沿用现有图片身份。参见[轮播图](http://design.ors-cn.com/agent-help/articles/design/questions/carousel.md)。

## 1.164 · 2026-10-21

- 以最近整本手册同步提交为基准，核对后续设计、答题、数据及 AI 工作台提交，统一使用说明、功能状态、搜索关键词与更新时间。本次为文档整理，无新增产品行为。
- 新增[智能问卷工作台](http://design.ors-cn.com/agent-help/articles/workbench/ai-create.md)、[共享模型配置](http://design.ors-cn.com/agent-help/articles/resources/ai-models.md)及[公开只读信息分享](http://design.ors-cn.com/agent-help/articles/data/sharing.md)专题，补齐实际入口、确认、重试和权限边界；修正 AI 创建、角色卡及回收站的过时状态。
- 串联大纲与批量编码、多项开放输入、禁止引用答案、矩阵填空与字数限制、评分顺序、轮播多选、手机号校验、倒计时和题目附件说明；消除轮播仅展示、题卡自动折叠及旧改码按钮等矛盾表述。参见[快速入门](http://design.ors-cn.com/agent-help/articles/quick-start/overview.md)与[功能状态](http://design.ors-cn.com/agent-help/articles/faq/availability.md)。

## 1.163 · 2026-10-21

- 基本属性还原题目附件，可配置必传、图片、大小、数量、同名文件与缩略图；答题上传、同会话草稿恢复和附件提交独立于原题答案。仅此属性开放单文件100MB，普通上传保留原限制。参见[题目附件](http://design.ors-cn.com/agent-help/articles/design/properties/attachments.md)。

## 1.162 · 2026-10-21

- 问卷设置的“答题时间安排”新增全局题目等待和全问卷倒计时；题目自身倒计时优先。整卷计时包含欢迎页，刷新保留截止时间；超时自动结束并保留已答内容为未完成，保存失败可重试。参见[答题时间安排](http://design.ors-cn.com/agent-help/articles/collect/settings-schedule.md)及[通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)。

## 1.161 · 2026-10-21

- 修复电话／手机号题的内置校验被通用输入默认“无校验”覆盖的问题；无效手机号、明确固话或分机无法进入下一题、下一页或提交，修正后可继续，非必答仍可留空。参见[填空题](http://design.ors-cn.com/agent-help/articles/design/questions/fill-blank.md)及[人员信息预设](http://design.ors-cn.com/agent-help/articles/design/questions/presets.md)。

## 1.160 · 2026-10-21

- 填空设置移至“选项属性”，填空、多行／多项填空、历史问答及矩阵文本输入新增最少／最多字数，默认 0／99999。范围保存刷新后保留，公开答题逐空／逐文本单元格校验，已有明确限制继续兼容。参见[填空题](http://design.ors-cn.com/agent-help/articles/design/questions/fill-blank.md)、[多行填空题](http://design.ors-cn.com/agent-help/articles/design/questions/textarea.md)、[多项填空题](http://design.ors-cn.com/agent-help/articles/design/questions/multi-fill.md)及[选项属性](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)。

## 1.159 · 2026-10-21

- 轮播图的上传入口和图片列表移至“选项属性”，空图片和删除全部图片后仍保留该页签；高度与自动切换继续在基本属性设置。参见[轮播图](http://design.ors-cn.com/agent-help/articles/design/questions/carousel.md)。

## 1.158 · 2026-10-21

- 单选、多选的选项配置新增默认关闭的“禁止引用答案”。开启后，富文本引用答案和矩阵单选／矩阵多选的题目来源动态行排除该选项，已有引用同样生效；原题选择、提交及逻辑／公式读取保持原义。参见[选项配置](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)、[单选题](http://design.ors-cn.com/agent-help/articles/design/questions/radio.md)、[多选题](http://design.ors-cn.com/agent-help/articles/design/questions/checkbox.md)及[矩阵选择题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md)。

## 1.157 · 2026-10-21

- 选项配置移至选项属性面板最前面，通过下拉选择具体选项后编辑编码；修改失焦自动检查，失败恢复原值，通过后确认引用影响。新增预填全部编码的批量改码，支持逗号、空格或换行分隔。工作区批量添加同样预填编码，已有位置改码，超出部分新增选项，整批检查并保留原选项身份与文字。参见[选项配置](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)及[题目与选项操作](http://design.ors-cn.com/agent-help/articles/design/workspace/questions-options.md)。

## 1.156 · 2026-10-21

- 修复大纲分组拖动后不能与同级项目换位的问题。顶层及嵌套组在展开或折叠时均可从标题拖动，与同级分组、题目混合排序；整组后代、成员归属和稳定编码保持一致，保存刷新后保留位置。参见[大纲与分组](http://design.ors-cn.com/agent-help/articles/design/workspace/outline.md)。

## 1.155 · 2026-10-21

- 合并智能问卷工作台、严格模板生成、共享 AI 模型与角色卡管理；保留本轮问卷设计、逻辑、答题和公开数据分享能力。后端 AI 数据库迁移接续问卷迁移编号，避免合并后的版本冲突。参见[创建问卷](http://design.ors-cn.com/agent-help/articles/workbench/create.md)、[AI角色卡](http://design.ors-cn.com/agent-help/articles/resources/ai-roles.md)及[AI访谈题](http://design.ors-cn.com/agent-help/articles/design/questions/ai.md)。

## 1.154 · 2026-10-21

- 增加隔离真实服务的公开问卷信息分享回归，验证复制稳定链接、匿名三页与详情、实时新增答卷、筛选及跨问卷与管理操作隔离。参见[结果数据与筛选](http://design.ors-cn.com/agent-help/articles/data/results.md)。

## 1.153 · 2026-10-21

- 增加隔离数据库回归，验证被筛选与显式配额满不占额，成功完成进入主额／备份／配额满，重试与迟到进度保留原终态。参见[结束页、筛选结束与跳转](http://design.ors-cn.com/agent-help/articles/design/appearance/end.md)。

## 1.152 · 2026-10-21

- 轮播图恢复“是否必答”属性，空图片问卷可设为非必答；同步真实页面回归中的编码影响审核与“跳转逻辑”入口。参见[轮播图](http://design.ors-cn.com/agent-help/articles/design/questions/carousel.md)和[大纲与分组](http://design.ors-cn.com/agent-help/articles/design/workspace/outline.md)。

## 1.151 · 2026-10-21

- 更新全量引擎与答题回归中轮播图的可选协议断言，并让真实页面回归完成题目编码影响审核；恢复隔离全流程测试。参见[轮播图](http://design.ors-cn.com/agent-help/articles/design/questions/carousel.md)和[题目与选项操作](http://design.ors-cn.com/agent-help/articles/design/workspace/questions-options.md)。

## 1.150 · 2026-10-21

- 补充顶层分组拖动、属性面板收缩和多题测试区间选择的隔离浏览器回归；功能说明见[大纲与分组](http://design.ors-cn.com/agent-help/articles/design/workspace/outline.md)及[问卷编辑工作区](http://design.ors-cn.com/agent-help/articles/design/workspace/overview.md)。

## 1.149 · 2026-10-21

- 修复轮播图含多张旧图片时序列化会复用选项编码的问题，并补充必答标识、多图选择及切换后保留选择的公开答题回归。参见[轮播图](http://design.ors-cn.com/agent-help/articles/design/questions/carousel.md)。

## 1.148 · 2026-10-21

- 矩阵填空的题型可见性配置与实际矩阵题入口保持一致；接口模板有无均只显示一个入口。参见[矩阵选择题与矩阵填空](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md)。

## 1.147 · 2026-10-21

- 答卷数据新增公开只读信息分享链接，可查看配额进度、结果、原始列表与详情，支持筛选分页及可见时自动刷新；管理操作和下载导出不可用。参见[结果数据与筛选](http://design.ors-cn.com/agent-help/articles/data/results.md)、[原始数据](http://design.ors-cn.com/agent-help/articles/data/raw.md)及[配额进度](http://design.ors-cn.com/agent-help/articles/data/quota-progress.md)。

## 1.146 · 2026-10-21

- 轮播图支持多选图片并保存答案，进入必答、逻辑、详情及导出链路；旧图片读取时生成稳定兼容身份。参见[轮播图](http://design.ors-cn.com/agent-help/articles/design/questions/carousel.md)。

## 1.145 · 2026-10-21

- 单项和多项评分统一支持评分样式；数字选项可按默认、倒序、循环或随机显示，仍保存真实分值。参见[评分题](http://design.ors-cn.com/agent-help/articles/design/questions/score.md)和[多项评分题](http://design.ors-cn.com/agent-help/articles/design/questions/multi-score.md)。

## 1.144 · 2026-10-21

- 矩阵填空进入题型面板的矩阵区域，接口没有模板时使用本地默认行列模板；答题沿用逐格文本与行列身份。参见[矩阵选择题与矩阵填空](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md)。

## 1.143 · 2026-10-21

- 显示逻辑的且／或连接符位于前一条件右侧，新规则只可控制当前题和其选项，旧跨题规则仍可查看及保留；跳转逻辑新增成功完成和配额满终态。参见[可视化逻辑与题目条件](http://design.ors-cn.com/agent-help/articles/design/logic/visual.md)与[结束页、筛选结束与跳转](http://design.ors-cn.com/agent-help/articles/design/appearance/end.md)。

## 1.142 · 2026-10-21

- 顶层分组支持展开时拖动排序；设计页属性区可向右收起，多题测试可连续选择区间，二维码下载使用问卷名称。参见[大纲与分组](http://design.ors-cn.com/agent-help/articles/design/workspace/outline.md)、[问卷编辑工作区](http://design.ors-cn.com/agent-help/articles/design/workspace/overview.md)与[收集链接](http://design.ors-cn.com/agent-help/articles/collect/links.md)。

## 1.141 · 2026-10-21

- 选择题与矩阵选择题可连续添加多个可输入选项，每项保留独立身份和输入内容。参见[题目与选项操作](http://design.ors-cn.com/agent-help/articles/design/workspace/questions-options.md)与[矩阵选择题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md)。

## 1.140 · 2026-10-20

- 文件夹持久化为问卷容器，支持嵌套、目录内创建问卷、重命名与级联移入回收站，不再变为普通问卷或提供问卷编辑／公开链接能力。恢复时原目录不可用的条目回到根目录，私有目录内的共享问卷仍对被授权账户可见。需配套后端 V20 目录迁移；不推断转换历史误建问卷。参见[文件夹管理](http://design.ors-cn.com/agent-help/articles/workbench/folders-tags.md)与[问卷分享](http://design.ors-cn.com/agent-help/articles/workbench/sharing.md)。

## 1.139 · 2026-10-20

- 补充工作区默认展开、切换选中题及手动折叠的单测与桌面／窄屏浏览器回归，核对属性按钮、语言入口与上传题入口移除。合并重复的 1.138 日志标题；操作步骤见[问卷编辑工作区](http://design.ors-cn.com/agent-help/articles/design/workspace/overview.md)。

## 1.138 · 2026-10-20

- 工作区题目默认全部展开，保留单题手动折叠；移除题卡题目属性快捷按钮与工作区语言入口。上传题从题型面板隐藏，已有题目保持兼容。参见[问卷编辑工作区](http://design.ors-cn.com/agent-help/articles/design/workspace/overview.md)与[文件上传题](http://design.ors-cn.com/agent-help/articles/design/questions/upload.md)。

- 汇总题型属性、图片选项、说明题与答题生命周期调整，保留隐藏题型的历史问卷兼容。参见[题目与选项编辑](http://design.ors-cn.com/agent-help/articles/design/workspace/questions-options.md)。
- 完善配额分组启停、交叉与 Excel 配额配置、配额进度及问卷列表摘要；收集设置自动保存，结果数据、审核与 Excel 导出接入统一答卷流程。参见[配额管理](http://design.ors-cn.com/agent-help/articles/design/quota/overview.md)、[收集设置总览](http://design.ors-cn.com/agent-help/articles/collect/settings-overview.md)和[结果数据](http://design.ors-cn.com/agent-help/articles/data/results.md)。
- 外观集中使用科技模板，更新欢迎页、隐私及签名交互，同步工作台入口、函数参考、使用手册和回归工具。参见[外观设计](http://design.ors-cn.com/agent-help/articles/design/appearance/style.md)。

## 1.137 · 2026-10-19

- 合并稳定业务编码与当前链接、回收站提交，保留并行工作；完成编码审核、公开答题、配额及导出验收。操作步骤沿用现有编码审核说明。

## 1.136 · 2026-10-19

- 编码改名审核阻止新名称被局部变量或原生全局捕获；正确识别 switch 作用域和真实脚本入口，避免改写局部辅助对象。动态 context 属性及 globalThis 题目访问须人工改为明确引用后复检。参见[题目通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)与[选项编码](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)。

## 1.135 · 2026-10-19

- 修复外观配置空设备样式在规范化时丢失而被误报缺少值的问题；已有配置容器后续增加子属性也能正确编译，真实缺失值继续拒绝。避免呈现方式和选项编码显示调整后阻塞预览及保存。参见[外观设计](http://design.ors-cn.com/agent-help/articles/design/appearance/style.md)。

## 1.134 · 2026-10-19

- 自动选择、发布指纹与配额预检查的后端回归夹具补全正式编码，跨题选择断言使用稳定编码字符串；保持分数和答案内部身份。此提交维护测试合同，无新增操作或使用说明变化。

## 1.133 · 2026-10-19

- 增加隔离真实数据库的稳定编码回归，检查未确认与残留引用拒绝、并发设计基线、历史编码归属、普通动态脚本保存，以及改名后的配额、发布、答卷身份和非01导出。此提交补充验证，使用步骤沿用现有编码审核说明。

## 1.132 · 2026-10-19

- 修复可见矩阵选择题没有选项页签时无法编辑行列编码的问题：基本属性提供共享编码审核入口，单选与多选矩阵均须复检、明确确认后应用。参见[矩阵题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md)。

## 1.131 · 2026-10-19

- 设计、公开答题、配额与编辑器回归夹具按正式创建边界分配编码；复制后的题目重新分配题目编码，脚本和补全断言只使用当前正式编码，动态行断言包含编码。同步既有变量草稿的非执行合同。本提交维护验证覆盖，使用步骤沿用现有编码审核说明。

## 1.130 · 2026-10-19

- 私有脚本服务回归夹具补全正式编码，取值断言改用当前编码并验证旧名称不会注册为运行别名；覆盖与浏览器一致的脚本指纹、自动选择及变量草稿。此提交维护测试合同，无新增用户操作或使用说明变化。

## 1.129 · 2026-10-19

- Excel 列名与非01选中值只读正式题目、选项及矩阵行列编码，导出前经共享编译器检查，不再按旧自定义值或位置补编号；01多选保持0/1；预发布没有正式版本号时保留空白版本字段。动态行读取答卷的稳定身份与编码，并拒绝相同身份的冲突快照。脚本值读取删除缺码时的内部ID与位置兜底。参见[Excel导出](http://design.ors-cn.com/agent-help/articles/data/export.md)。

## 1.128 · 2026-10-19

- 编码审核窗口对服务器问卷先提交独立候选，服务器确认后才替换正式内容；失败保留原内容与可修正的定位诊断，提交期间锁定审核操作。加载与保存使用设计指纹及服务器回执，题库独立编辑继续保留本地审核流程。参见[保存与发布](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md)和[通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)。

## 1.127 · 2026-10-19

- Java 整卷保存事务接入共享编码审核，改名要求明确确认与一致的已保存设计指纹；失败不写入记录，返回含源路径和行列的诊断，成功返回权威 JSON 与新设计指纹。编辑器提交入口将在下一单元接入。参见[保存与发布](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md)。

## 1.126 · 2026-10-19

- 增加服务端编码保存审核核心与私有接口：从已保存的内部身份识别改名，复检确认、静态引用和历史编码归属；普通未改名保存不受改名专用动态检查影响。Java 保存接口与编辑器提交仍待接入。隐藏题型不纳入专门适配，NPS 不新增编码模型。参见[保存与发布](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md)。

## 1.125 · 2026-10-19

- 动态矩阵生成行在创建时按稳定身份分配独立编码，来源重排、暂时隐藏及重新出现保留同一编码；答卷行快照同时记录编码。`S_D_` 前缀保留给系统派生行。参见[矩阵题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md)。

## 1.124 · 2026-10-19

- 编码变更及删除保留原实体的编码归属，旧编码不能转给其他实体，原实体可改回自己曾用的编码。复制题目和整份问卷时，为现存选项、矩阵行列重建归属映射，保留已删除编码的占用；历史名称用于防止重新分配，不注册运行别名。参见[通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)与[选项属性](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)。

## 1.125 · 2026-10-19

- 收集链接增加按来源保存的键值对编辑，自动编码并校验重复、保留名称及二维码容量；最终链接、复制、打开与二维码同步更新，刷新保留配置。参见[链接与二维码](http://design.ors-cn.com/agent-help/articles/collect/links.md)。

## 1.124 · 2026-10-19

- 问卷编号全局唯一并包含回收站；移入时记录独立时间，保留 30 天，清理成功后才释放编号，失败自动重试。工作台接入真实回收站与恢复草稿，移入后关闭公开访问。参见[回收站](http://design.ors-cn.com/agent-help/articles/workbench/recycle.md)和[创建与基本信息](http://design.ors-cn.com/agent-help/articles/workbench/create.md)。

## 1.123 · 2026-10-19

- 编码审核补齐 isSelected、ctx 与小写维度属性的引用同步和逃逸检查，人工修正重新引入旧题目名也会阻止应用。矩阵值中的明确行列编码同步更新，存在歧义时阻塞。选项编码与题目属性、方法或其他选项引用冲突时拒绝通过。参见[通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)与[选项属性](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)。

## 1.122 · 2026-10-19

- 接通问卷卡片和列表的复制操作：打开创建信息窗口，填写新编号后原子复制题目、逻辑与外观为独立草稿；重新建立内部身份与引用，不复制答卷、发布和授权，失败不留下空副本。参见[创建与基本信息](http://design.ors-cn.com/agent-help/articles/workbench/create.md)。

## 1.121 · 2026-10-19

- 富文本引用答案的候选、标签与 HTML 元数据改用正式题目及选项编码；显示时通过稳定内部 ID 读取当前编码，改名或排序后不会继续显示旧序号。动态矩阵来源选择也显示正式题目编码。参见[题目与选项编辑](http://design.ors-cn.com/agent-help/articles/design/workspace/questions-options.md)。

## 1.120 · 2026-10-19

- 基本属性移除题目序号，设计题卡显示正式题目编码；所有选项与矩阵行列提供稳定编码编辑入口。编码变更进入独立审核窗口，显示自动同步记录、动态引用阻塞、代码行列定位、草稿修正与复检，并要求明确确认后原子应用。审核期间暂停自动保存。公开选择题显示编码，题目仍按可见顺序编号；排序题保留排名。批量新增选项在草稿创建时即分配不回收的默认编码。参见[通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)、[选项属性](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)和[大纲](http://design.ors-cn.com/agent-help/articles/design/workspace/outline.md)。

## 1.119 · 2026-10-19

- 编码变更审核接入设计状态，通用更新与整卷替换不能绕过审核。草稿修改后须重新检查，问卷发生其他编辑时拒绝应用。静态选项属性、集合筛选引用可同步，无法判断的引用继续阻止变更。此单元建立状态门禁，审核界面仍在接入。参见[通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)。

## 1.118 · 2026-10-19

- 程序编译、脚本协议、矩阵行列及编辑器补全统一读取持久化编码，移除按位置推导和旧题目名称的运行兜底。缺失、重复编码与身份字段继承明确阻止编译；矩阵占位角不占用选项编码。旧离线引用的行列查找也按稳定编码解析。参见[变量参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md)与[选项属性](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)。

## 1.117 · 2026-10-19

- 增加题目与选项编码改名的隔离草稿和静态影响分析核心，支持明确引用自动同步；动态引用提供实体、配置路径、行列、片段与修正建议。应用前重新检查基线、诊断和显式确认，失败不改变正式问卷。本单元为底层能力，编辑器接入仍在进行。参见[通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)。

## 1.116 · 2026-10-19

- 题型模型开始持久化稳定的选项编码与矩阵行编码，创建时分配 A／S 系列编码；排序、删除及保存回读保留已有编码，删除的默认编码不再分配给新选项。本单元建立底层合同，编码编辑与改名影响检查将在后续单元接入。参见[选项属性](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)。

## 1.115 · 2026-10-16

- 条件设置中的空公式和静态校验失败变量可保存为草稿，仅在条件设置可见，不进入实际程序和可选变量目录；修正保存后恢复生效。实际程序不再被无引用的空变量阻断，已有缺失引用仍明确报错。参见[公式编辑器操作](http://design.ors-cn.com/agent-help/articles/design/conditions/formula-editor.md)和[变量完整参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md)。

## 1.114 · 2026-10-16

- 大纲支持闭合子分组在同层题目之间拖拽排序，并保存题目与子分组的混合顺序；分组首次点击仅选中，再次点击展开或折叠。
- 大纲点击题目定位到工作区标题；创建分组入口改为顶层行和各分组标题的“+”。使用说明：[大纲、题目分组与批量编码](http://design.ors-cn.com/agent-help/articles/design/workspace/outline.md)。

## 1.97 · 2026-10-16

- 增加旧普通题显隐、跳转规则与原下一题代码的非破坏性转换器；原下一题代码放入列表首位，原有图形规则身份和顺序保留。矩阵旧规则暂由原编辑器维持，避免未经验证的语义转换。

## 1.96 · 2026-10-16

- 下一题图形和 `resolveNext` 代码条目进入同一生命周期列表。代码返回默认去向时继续检查后续条目，首个明确去向生效；多个代码块复用待提交效果和运行变量，并共享 10 秒阶段时限。编辑入口与旧代码迁移待后续接入。

## 1.95 · 2026-10-16

- 增加同步纯函数 `computeVisibility(context)` 的隔离运行合同；题目显隐代码卡片进入联动计算，与图形条目按原顺序合并，并在目标无效或运行错误时阻止计算。本次仍未开放编辑入口。

## 1.94 · 2026-10-16

- 问卷程序组装器正式收录有序题目图形规则，建立规则来源位置并校验条件与目标引用；尚未接通的代码卡片明确阻止编译，避免静默失效。

## 1.93 · 2026-10-16

- 题目图形规则的新有序条目已接入答题显隐和默认去向计算：显隐以最后一条明确决定为准，跳转以第一条命中为准，并支持嵌套与／或条件。代码卡片和编辑界面仍待接入。

## 1.92 · 2026-10-16

- 为题目显隐与跳转规则引入有序条目数据合同，并保证复制题目时重建规则身份、正确重映射题内引用。本次仅为内部数据结构准备，编辑与执行接入仍在后续修改中。

## 1.91 · 2026-10-16

- 测试访问 API 明确区分只读模拟与预发布凭证。服务端拒绝模拟答题的答卷和进度写入；预发布答卷关联独立测试快照，不消耗正式版本号或配额。

## 1.90 · 2026-10-16

- 私有脚本服务复用公开答题的手机号码合同。服务端最终提交会按权威 PHONE 配置校验并规范化号码，非法号码在答卷落库前失败；配套后端提交 `4a36604`。

## 1.89 · 2026-10-16

- 逻辑引擎默认显示图形演示，首次打开实际程序时才编译当前草稿并挂载代码编辑器；草稿变化后继续更新程序内容。

## 1.88 · 2026-10-16

- 成功结束页由复制原始答卷结构改为查看本次答题的题目与答案文本，复用答卷详情格式化并排除未答题和内部字段。

## 1.87 · 2026-10-15

- 手机号预设启用明确格式合同；答题控件提供国家/地区选择，默认中国，按国际手机号码规则检查并规范化为带区号的号码。服务端提交校验随配套后端修改交付。

## 1.86 · 2026-10-15

- 停用“答卷自动下一页”设置和旧问卷的自动推进配置；逐题与对话模式改由受访者确认后继续，AI 题完成后仍按既有流程推进。

## 1.85 · 2026-10-15

- “测试本题”与公开答题共用默认答案初始化，单选默认项首次打开和重置后正常选中。
- 图片单选、多选题关闭可输入选项的新增入口，已有问卷数据不删除。

## 1.84 · 2026-10-15

- 同步进度保存测试的答卷身份／状态响应，以及后端保存回读的稳定题目 ID 和权威程序记录合同；未知扩展字段继续逐项校验保留。
- 生命周期浏览器用例区分多阶段页面就绪与单脚本时限，保留超时、取消、严格 boolean、连点合并及失败重试断言；本单元不修改产品执行时限。
- 保留冻结验收的失败报告，归档真实页面下载的完整程序示例；修订后以新运行编号完整验收，环境超时不计为通过。

## 1.83 · 2026-10-15

- 补齐异步函数与正则匹配迭代器的原生原型隔离，阻止其作为钩子到纯变量的隐式状态通道；局部标准 JavaScript 用法不变。
- 私有服务并发测试按只读全局合同验证：直接写全局对象明确失败，其他请求仍不受影响；保留非法 JSON 与八路并发读取断言。
- 同步变量页指南路由的测试替身，以及轮播保留稳定编码但无答案的已确认合同。首轮冻结验收及完整单测的失败记录保留；不移除用例或修改业务行为来通过验收。

## 1.82 · 2026-10-15

- 补充同卷组合验收：实际编辑变量、图形规则与三个钩子，在预览和公开答题串联自动完成、取消进入、校验、预填、矩阵、AI、上传和跳转，并核对数据库最终答案。
- 修复自动题进度保存失败或快照失效后空白等待，显示可重试错误并复用已确定去向；单选自动规则多命中由后端明确拒绝。
- 隔离原生全局和原型，防止钩子临时状态污染纯变量；纯计算预算从可信运行环境准备完成后开始计时，保留作者执行和总时限。外部付费 AI 验收使用明确标注的替代响应。

## 1.81 · 2026-10-15

- 自动下一页统一预览与公开页调度，受开关和题型约束，清空／切题取消待推进；预填与可空题保留手动继续，AI 提前结束也等待手动提交，并使用正确提交标签。
- 轮播保留稳定题目编码并排除必答设置；级联分片与问卷多语言明确标为未开放，不计入已实现功能。

## 1.80 · 2026-10-15

- 矩阵图形规则的条件选项排除行标题占位列，默认规则引用真实可作答列；普通题选项语义不变。
- 补齐题目数值／文本／布尔比较、选项显隐、矩阵条件、图形跳转与 END 验证，并以篡改自动答案后服务端纠正的真实链路验证后端权威计算。

## 1.79 · 2026-10-15

- 修复矩阵题卡操作按钮溢出中心列、被右侧操作栏挡住的问题；沿用原按钮与主题样式，空间不足时换行。
- 题库复制、画布三处添加、普通／评分／图片选项增删、可输入选项通过真实保存回读及公开提交验证；清单剩余14项。

## 1.78 · 2026-10-15

- 补齐普通题和矩阵题的数值、文本、布尔、数组变量图形条件，以及规则增删、保存回读、显隐清理和动态行名称的真实链路验证；无业务语义调整。
- 入口清单从52项收口至25项待处理；不可达的旧矩阵数值控件与独立题库类型选择有明确范围依据。完整第一阶段验收仍未完成。

## 1.77 · 2026-10-15

- 条件设置的“格式化”使用现有 Monaco JavaScript 语言服务，保留字符串与模板字符串语义；“使用指南”打开真实变量说明页。只读编辑器拒绝格式化操作。
- 纳入既有 Monaco Worker 配置依赖；新增资源插入、示例、清空、格式化到变量公开执行的真实页面验证，保留其他页面布局改动。入口清单剩余52项，完整阶段验收尚未完成。

## 1.76 · 2026-10-15

- 补齐大纲分组编号、名称、顺序、成员、子分组、删除和批量题目编码的实际编辑证据；同卷逐题推进验证分组顺序和稳定身份，保存、刷新、发布及隔离答卷查询通过。
- 入口清单剩余59项待覆盖；本提交为验证收口，没有改变用户配置或公开执行语义。

## 1.75 · 2026-10-15

- 补齐既有矩阵输入列的中英文类型名称和输入提示；保留历史可加载题型，不重新开放隐藏题型。
- 增加批量选项草稿撤销、稳定行列身份、矩阵模式切换和七种输入类型的真实编辑、回读、发布、窄屏与提交验证；控件清单完成两轮审阅，尚余68个待覆盖入口，完整阶段验收继续保持未完成。

## 1.74 · 2026-10-15

- 纳入统一函数目录、题目读取维度、编辑器提示和文档检查的既有源码依赖；文档读取器及已引用文章随依赖闭合，保留其他工作区改动。
- 独立归档506项文档、73项脚本与编辑器检查、类型和构建通过；这是一份可恢复源码检查点，完整阶段验收仍未完成。

## 1.73 · 2026-10-15

- 闭合当前收取流程依赖：提交时确定完成／备份／配额满，审核标签不改变结果或占额，测试答题不占配额，进度与最终提交复用答卷身份。此项纳入既有工作区实现，不新增收取规则。
- 独立后端归档78项测试通过、零跳过，覆盖此前五个失败涉及的统计、版本、配额与夹具路径；完整第一阶段验收仍待完成。详见[后端依赖记录](docs/testing/2026-10-15-phase1-backend-dependencies.md)。

## 1.72 · 2026-10-15

- 补齐当前文档、Excel 导入和脚本构建使用的直接依赖及锁定图，独立离线冻结安装和三项运行冒烟通过；没有升级既有运行库。
- 记录第一阶段执行复盘与收尾门槛，后续依次关闭源码依赖、后端失败、配置覆盖和综合验收。此提交不表示第一阶段完成。

## 1.71 · 2026-10-15

- 记录后端进度保存所需的原始模型、DTO、索引、收取视图、锁定接口、离线元数据及配套迁移依赖，使独立检出能够编译。此项为原有工作区依赖纳入，未新增公共接口。
- 独立归档的 42 项程序／持久化／访问测试通过；完整旧配额与统计回归仍有 5 项失败，继续保持第一阶段未完成。记录：[后端依赖审计](docs/testing/2026-10-15-phase1-backend-dependencies.md)。

## 1.70 · 2026-10-15

- 构建产物浏览器验收要求专用同源 API 构建及匹配产物摘要，普通生产构建不再误用于隔离测试；增加实际浏览器 API 来源断言。无用户问卷行为变更。

## 1.69 · 2026-10-15

- 对话模式的矩阵、上传、多项填空、排序和多选下拉增加明确完成确认，第一次修改不再自动推进；预览与公开页共用规则。
- 确认统一交给系统校验，等待上传后读取最新答案；保留普通单值题和 AI 的既有推进方式。说明：[问卷程序与执行合同](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md)。

## 1.68 · 2026-10-15

- 修复删除无关题目时变量图形规则被误删的问题；变量来源按稳定变量身份保留，缺失变量由程序编译明确报错。题目来源、已删除目标与 END 终点保留各自语义。说明：[变量素材](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md)。

## 1.67 · 2026-10-15

- 公开 AI 访谈的请求失败及空回复不再生成模拟答案；保留输入、当前轮次和重试能力，迟到请求不修改新访问。仅明确预览模式可生成模拟回复。
- 增加逐题、聊天及整页失败／重试回归，并纳入第一阶段必需 fixture。说明：[AI 访谈题](http://design.ors-cn.com/agent-help/articles/design/questions/ai.md)。

## 1.66 · 2026-10-15

- 补齐渲染完成通知、待完成上传／AI 任务及预览生命周期接线的源码依赖，纳入已经验证的进度请求、结束原因、模型声明和 Worker ES 模块构建配置。
- 停用旧全局逻辑弹窗的接线，保留图形演示动作目录与 END 终点；修正既有图标名称，补齐实际运行所需的六个中英文文案。相关起点代码逐文件审阅纳入，其他工作区修改保留。
- 进度接口成功响应必须包含有效收取记录身份与状态，缺失时明确失败。增加可选构建产物浏览器验收入口；本次端到端复验受隔离环境故障影响尚未通过，不代表最终交付。说明：[问卷程序与执行合同](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md)。

## 1.65 · 2026-10-15

- 补充现有题型必答开关双向操作、保存回读、有效程序字段与公开标记的真实浏览器回归及来源核对。
- 审阅共享校验与外观消费者，明确 39 个静态候选项或编辑窗口状态不属于程序配置。保留轮播展示组件的未决边界，不把含义未确定的字段计为验收通过。验证与文档改进，无新增题型或业务规则。
- 说明：[问卷程序与执行合同](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md)。

## 1.64 · 2026-10-15

- 修复图片多选的竖排、横排与按行排列只保存却仍按固定图片列数渲染的问题，复用普通选择题的排列计算和响应式样式。
- 补充四种排列的真实几何位置、桌面／手机数量配置、保存回读和收取，并回归五组图片属性；首屏验证等待实际设计数据响应。
- 单元测试按单进程执行，保持原有测试与脚本期限，降低 Vue／Monaco／QuickJS 并发内存压力；浏览器用例继续单独执行。
- 说明：[图片多选题](http://design.ors-cn.com/agent-help/articles/design/questions/image-checkbox.md)。

## 1.63 · 2026-10-15

- 保存、预发布、正式发布和实时样式更新由服务端记录绑定问卷根 ID；JSON 缺失或伪造根 ID 不改变真实问卷身份。
- 发布提升与实时修改检查记录归属，禁止跨问卷复用程序记录；直接脚本服务仍拒绝缺失根身份。
- 说明：[问卷程序与执行合同](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md)。

## 1.62 · 2026-10-15

- 私有脚本服务每次响应明确关闭连接，避免 Java POST 复用空闲连接时与服务端关闭竞争；不添加作者脚本自动重试。
- 增加认证编译请求的连接策略与隔离验证。内部传输变更，无编辑入口变化；代价为每次内部调用新建连接。

## 1.61 · 2026-10-15

- 修复设计预览没有接入异步钩子同源查询的问题，与公开答题使用相同的无凭证、禁止跨域和重定向的受控请求。
- 补充三个钩子在逐题／聊天预览完整推进、零收取及真实匿名查询和公开收取的回归。
- 说明：[问卷程序与执行合同](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md)。

## 1.60 · 2026-10-15

- 修复图片多选卡片按钮在手机单列时溢出并被下一卡片遮挡的问题，补充边界与真实点击断言。
- 补齐五种比例、选择框位置、选择按钮文案／风格／对齐、边距、设备列数及上传的真实页面回归与逐叶来源记录。
- 说明：[图片多选题](http://design.ors-cn.com/agent-help/articles/design/questions/image-checkbox.md)。

## 1.59 · 2026-10-15

- 补齐问卷标题／说明、根设置、选项编辑和空分组集合的明确设置记录，保留未修改默认值与兄弟配置，供后续覆盖层使用。
- 编辑临时标志不进入程序属性或设置记录，避免保存后编译失败；复用同一临时字段目录。解除绑定保留禁用状态，重新绑定恢复有效设置；选项文本修改只记录对应选项，不误记为替换整个选项集合。
- 说明：[问卷程序与执行合同](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md)。

## 1.58 · 2026-10-15

- 级联导入失败验收改用真实后端重复名称拒绝，补充浏览器刷新及已有资源内容不变的断言；去除该真实链路的内部接口替代响应。测试改进，无业务行为变更。

## 1.57 · 2026-10-15

- 补齐问卷级属性、稳定编码绑定及分组的程序来源地址；根设置的继承／禁用实际消费，默认值计算不生成身份或读取时间。
- 纠正覆盖清单中的示意地址，拆分副标题内容和显示开关；同步架构 Owner 与逻辑页只读规范。内部合同修复，无新增整卷脚本入口。
- 说明：[问卷程序与执行合同](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md)。

## 1.56 · 2026-10-15

- 修复级联文件导入调用不存在接口的问题：JSON、XLSX、XLS 通过现有资源接口保存可复用的完整树，Excel 同名跨分支节点使用稳定不同编码。
- 非法文件、服务器拒绝及迟到响应不覆盖原题配置；分片协议待确认，开启时明确拒绝，不能作为已实现能力。
- 说明：[级联题](http://design.ors-cn.com/agent-help/articles/design/questions/cascade.md)。

## 1.55 · 2026-10-15

- 加强第一阶段验收：真实页面回读与公开加载附带共享编译器生成的程序指纹及插槽，覆盖地址必须对应当前有效程序；旧草稿与自报记录不能填补公开版本缺口。内部验收改动，无用户业务行为变更。

## 1.54 · 2026-10-15

- 补充三种钩子设置状态、模板插入和桌面／平板／手机 CSS 的真实编辑回归，验证源码互不覆盖、预览与发布按有效设置执行。内部验证与说明补充，无业务行为变更。
- 说明：[问卷程序与执行合同](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md)。

## 1.53 · 2026-10-15

- 修正变量说明中残留的旧 DSL、隐式标识符和固定求值顺序，统一为题目对象、计算变量与显式只读快照。
- 增加可执行的函数脚本示例，使用文档原文验证有答案和空答案的计算结果。无运行行为变更。
- 说明：[变量与数据维度](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md)。

## 1.52 · 2026-10-15

- 补充矩阵分组名称、成员、组间与组内顺序、固定行／分组、隐藏组名、增删改和禁用单元格清除的真实页面回归。内部测试与覆盖清单完善，无业务行为变更。
- 说明：[矩阵选择题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md)。

## 1.51 · 2026-10-15

- 补充条件设置的真实页面回归：引用锁定、删除保护、变量显示名称、函数脚本、只读预览及发布后的变量读取。内部验证补充，无业务行为变更。
- 说明：[变量与数据维度](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md)。

## 1.50 · 2026-10-15

- 修复聊天最后一题完成后、提交前历史内容消失的问题，预览和公开页保留实际展示过的最后一次访问。
- 移除末题额外计数，提前结束时不重复计算已完成访问。
- 说明：[AI 访谈题](http://design.ors-cn.com/agent-help/articles/design/questions/ai.md)。

## 1.49 · 2026-10-15

- 修复同时填写 AI 角色卡与访谈目标时角色提示词被忽略的问题；普通答题与聊天共用角色快照和目标参数。
- 三种答题模式通过真实编辑发布、两轮对话与收取回归；AI 服务使用明确标注的测试替代响应。
- 说明：[AI 访谈题](http://design.ors-cn.com/agent-help/articles/design/questions/ai.md)。

## 1.48 · 2026-10-15

- 增加题目复制、编码修改、删除和真实拖动排序的发布回归；确认原有钩子按稳定题目身份读取，不误用复制题答案。内部验证补充，无业务行为变更。

## 1.47 · 2026-10-15

- 增加选项绑定／解除、分组增改删、分组顺序与响应式布局的真实编辑发布回归；验证绑定只改变呈现顺序，不联动选择答案。内部验收补充，无业务行为变更。

## 1.46 · 2026-10-15

- 动态矩阵行消失时，在事务内清理对应答案并重算变量；下一题逻辑若间接改变已校验答案，整次推进回滚，不再在提交后丢失答案。
- 说明：[矩阵选择题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md)。

## 1.45 · 2026-10-15

- 增加级联数据真实编辑发布与非法输入保留已有配置的回归；展开第一阶段配置入口清单，未审核控件和缺失证据继续阻止验收。内部测试与记录调整，无新增用户功能。

## 1.44 · 2026-10-15

- 修复矩阵逐行导航在窄屏被表格撑宽、下一行按钮不可见的问题；导航保持可见，单元格继续独立横向滚动。
- 增加矩阵行分组、逐行作答、雷同阈值及允许继续／必须修改两种策略的真实编辑、发布、窄屏和持久化回归。
- 说明：[矩阵选择题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md)。

## 1.43 · 2026-10-15

- 修复滑块读取错误配置而忽略范围和步长的问题；量表使用已设置的数字节点范围，并实际显示端点文字。
- 渲染与系统校验共用量表合同，拒绝越界、非法步长和无效范围，保留未答与合法零值的区别。
- 说明：[量表题](http://design.ors-cn.com/agent-help/articles/design/questions/scale.md)、[滑块题](http://design.ors-cn.com/agent-help/articles/design/questions/slider.md)。

## 1.42 · 2026-10-15

- 增加邮箱／数字输入、多选数量限制、下拉多选、评分范围和样式的真实编辑发布回归，检查非法答案拒绝和窄屏展示。内部验证补充，无新增用户功能。
- 说明：[通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)、[评分题](http://design.ors-cn.com/agent-help/articles/design/questions/score.md)。

## 1.41 · 2026-10-15

- 明确第一阶段浏览器验收的内容编辑、脚本及公开会话范围，保留完整配额编辑回归在 full/deep，不删除历史失败用例。
- fixture 使用唯一封闭代理并补齐公开进度保存替身；本次 40 项范围内浏览器检查通过，逐叶覆盖仍未完成。内部测试调整，无新增用户功能。

## 1.40 · 2026-10-15

- 修复动态矩阵行在变量计算前读取空结果导致预览及公开页初始化失败；动态行随成功计算快照更新，等待期间保留恢复的答案。
- 增加变量依赖、图形显隐、富文本和动态行真实编辑发布同卷回归；计算失败仍阻止提交。
- 说明：[矩阵选择题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md)。

## 1.39 · 2026-10-15

- 纳入自动勾选弹窗的中英文文案及直接题目对象示例；补齐上一测试提交所依赖的未提交文案区块。
- 说明：[自动勾选](http://design.ors-cn.com/agent-help/articles/design/properties/auto-select.md)。

## 1.38 · 2026-10-15

- 增加自动勾选中英文帮助的执行合同测试，要求使用 `Q1.value`、`Q1.select()`，避免示例继续引用已移除的 `ors.questions`。
- 增加选项编码、默认选中、固定倒序、桌面/手机排列、自动完成与互斥锁定，以及矩阵禁填、转置和唯一性的真实编辑发布回归。
- 说明：[自动勾选](http://design.ors-cn.com/agent-help/articles/design/properties/auto-select.md)。

## 1.37 · 2026-10-15

- 修复轮播题基本属性中的倒计时只保存、不参与公开页等待的问题；段落说明仍忽略历史倒计时。
- 补充真实编辑、发布、提交的题型回归，继续覆盖历史可加载题型而不重新开放隐藏题型。
- 说明：[轮播图](http://design.ors-cn.com/agent-help/articles/design/questions/carousel.md)。

## 1.36 · 2026-10-15

- 接通矩阵行标题宽度、按设备卡片展示和重复表头，保留原有答案身份、禁填、排序与逐行作答合同。
- 补全六项矩阵布局中英文文案，桌面卡片展示可读选项名称，窄屏继续使用手机配置及表格滚动。
- 说明：[矩阵选择题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md)。

## 1.35 · 2026-10-15

- 关闭外观历史整卷 JavaScript 的 DOM 注入执行路径，原始源码保留为只读，不参与实际程序和指纹。
- 保留按设备编辑及应用 CSS，其他样式保存不丢失历史脚本字段；中英文提示说明当前执行边界。
- 说明：[历史外观脚本](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md#历史外观脚本)。

## 1.34 · 2026-10-15

- 修复整页模式下一页漏调配额预检，自动勾选派生答案参与检查；配额已满和版本失效按统一页面状态处理。
- 翻页合并重复点击，并丢弃重置、改答后的迟到检查结果；通过后保存进度再推进。
- 说明：[整页模式分页检查](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md#整页模式分页检查)。

## 1.33 · 2026-10-15

- 移除答题图形模块的旧全局解释器分支，统一运行器只执行变量、自动勾选与三个题目钩子。历史全局数据与离线解析不再获得执行能力。
- 城市维度、全题型读取维度、动态变量行和文档示例改用原生 JavaScript 运行链验证；题目图形规则继续生效。
- 将使用示例更新为五个有效入口：[JavaScript 逻辑实例](http://design.ors-cn.com/agent-help/articles/design/logic/examples.md)。整页分页配额预检查与第一阶段完整验收仍待后续修复/验证。

## 1.32 · 2026-10-15

- 修复外观设计载入问卷、切换预览设备时误触发自动保存的问题；初始化保持只读，设备配置独立监听实际修改。
- 浏览器验证旧全局 AST 不影响预览、载入及切换设备零写入、修改样式正常保存且保留题目钩子。
- 说明：[预览与真实修改](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md#预览与真实修改)。

## 1.31 · 2026-10-15

- 修复后端题型模板包含未使用的 null 行列集合时，单选、多选、下拉和输入等题型无法添加的问题。
- 身份检查前规范化空集合；错误的非空集合类型继续报错，保留原模板。六类题目真实页面添加、保存、刷新、发布、答题与落库通过。
- 说明：[复制题目与选项身份](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md#复制题目与选项身份)。

## 1.30 · 2026-10-15

- 修复题干获得焦点后切换页面时，富文本失焦把标题清空并产生错误属性覆盖的问题。
- 真实隔离后端验证变量、三个钩子、只读程序和图形演示隔离，经页面发布、答题与持久化回读通过。此结果不代替第一阶段逐叶完整验收。
- 说明：[焦点与保存](http://design.ors-cn.com/agent-help/articles/design/workspace/rich-text.md#焦点与保存)。

## 1.29 · 2026-10-15

- 修复编辑题目钩子后变量预览误报缺失配置，纯计算预览保留题目属性状态，仍不执行钩子和自动勾选。
- 条件设置在窄屏纵向展示编辑器、变量列表与素材；修复桌面工具栏选择框挤出保存按钮。
- 浏览器验证变量保存、刷新、计算、错误输入及窄屏操作。说明：[变量预览与样例数据](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md#变量预览与样例数据)。

## 1.28 · 2026-10-15

- 分组选项纳入稳定身份和来源插槽，图形规则可正确引用嵌套选项，重复或缺失身份会产生诊断。
- 修复复制分组题时选项 ID 被重复生成、自动规则指向中间 ID，以及复制选项排序绑定仍指向原题的问题。
- 不新增题型或写入能力；说明：[统一问卷程序](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md#复制题目与选项身份)。

## 1.27 · 2026-10-15

- 新增 `qa:phase1` 严格验收入口，缺失覆盖、跳过、零用例、源码或产物变化均无法通过。
- 隔离 Node/Java 服务重新创建并核对挂载散列，后端测试禁止混入旧报告；自动发现编辑控件用于识别覆盖缺口。
- 验收矩阵仍在补齐，当前明确不能通过整体验收。无产品页面变化；执行说明见 `docs/testing/phase1-acceptance.md`。

## 1.26 · 2026-10-15

- 属性继承和禁用接入共享程序编译，复用题型工厂默认值，保护实体身份并保留已移除可选属性的来源插槽。
- 渲染、系统校验与钩子共享编译后的题目定义，配置变化重新核对指纹；编译失败显示诊断并阻止题目执行。
- 修正默认值与已有非默认配置的来源标记，保留显式空值和兄弟代码。说明：[统一问卷程序](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md#属性来源与运行状态)。阶段最终验收仍在进行。

## 1.25 · 2026-10-15

- 修复非排他多选题自动重算覆盖手动选项的问题；仅清除失效自动项及其附加文本，保留有效手动选项。
- 草稿保存并恢复自动选择来源，重置时清空；“直接通过”和“排他”统一识别显式 boolean 编码，字符串 false 不再被当作启用。
- 说明：[自动选择选项](http://design.ors-cn.com/agent-help/articles/design/properties/auto-select.md)。第一阶段最终验收尚未完成。

## 1.24 · 2026-10-15

- 进度保存按服务端快照重算自动答案；配额预检使用发布快照并检查程序记录和答题版本，拒绝过期、篡改或未编译的发布内容。
- 自动答案重算保留仍选中项的附加文本，清除被替换项的附加文本；服务失败不写入新进度或覆盖已保存进度。
- 说明：[私有脚本服务](docs/deployment/survey-script-runtime.md)。阶段最终验收仍未完成。

## 1.23 · 2026-10-15

- 复制已有题目内变量时分配新身份，保留作者源码并绑定复制品的变量；图形规则、富文本、变量预览、自动勾选和三个钩子共享该绑定。
- 删除后的变量绑定不会指向同名新对象；懒计算变量隔离钩子临时上下文，并保留循环检测和只读权限。
- 说明：[变量完整参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md#复制题目中的计算变量)。完整第一阶段验收继续进行。

## 1.22 · 2026-10-15

- 复制题目时将自动勾选规则重新绑定到复制后的选项 ID，保留作者源码、禁用状态和扩展配置，避免复制后出现缺失选项编译错误。
- 修正自动选择文档例子中的题目名遮蔽问题，并通过真实脚本运行验证复制后的规则只选择新选项。
- 说明：[自动选择选项](http://design.ors-cn.com/agent-help/articles/design/properties/auto-select.md)。局部计算变量复制身份及完整入口覆盖仍在整改中。

## 1.21 · 2026-10-15

- 隔离 QA 环境接入本轮构建的私有程序服务；后端使用协议 2，QA 脚本在启动环境前构建并检查共享运行服务。
- 新增真实数据库程序记录用例：保存回读、预发布、实时外观指纹、正式答卷权威自动答案，以及无效程序/服务中断/指纹变化的失败零写入。
- 隔离配额与核心服务 22 项、新增数据库 2 项通过；QA 合同 5 项、私有服务完整 Docker 构建及镜像内原生 JS 运行通过。第一阶段逐叶入口和最终浏览器验收仍在进行。

## 1.20 · 2026-10-15

- 保存、预发布及正式发布由服务端验证完整问卷程序，持久化程序版本与内容指纹；提交和预发布转正式发布核对快照，版本缺失需重新发布。
- 已有外观与收取上限实时修改在写入前验证设计和发布快照，并刷新程序指纹。旧全局逻辑保存入口拒绝写入，已有原始字段继续保留。
- Java 定向及排序接口回归 33 项通过；包含服务不可用、编译失败、指纹变化时禁止发布、答卷及配额写入。此为真实私有服务加持久层替身测试，隔离数据库与完整浏览器验收仍未完成。

## 1.19 · 2026-10-15

- 私有编译结果返回有效自动勾选插槽与共享选择题语义；Java 按稳定题目/选项 ID 请求重算，校验协议和程序指纹，不再提交独立脚本或启用旧语法迁移。
- Java 定向测试 16 项、Node 测试 24 项通过，覆盖原生题目 API、禁用规则、旧全局字段隔离、严格 boolean 与失败阻断。发布持久化和数据库验收仍在实施，不能发布过渡版本。
- 说明：[私有脚本服务](docs/deployment/survey-script-runtime.md)。

## 1.18 · 2026-10-15

- 私有运行服务引入协议 2：按权威配置编译完整程序，按稳定题目／选项插槽取源码，返回版本、指纹及诊断。
- 移除运行时旧代码迁移和直接源码入口，拒绝调用方注入计算结果、未知／禁用目标和不匹配指纹；校验重复规则和显式不支持的脚本元数据。
- 私有 VM 统一使用 64 MiB 内存限制；保留纯自动计算预算及冷启动隔离测试。
- 此为 Node 中间单元，Java 配套及隔离数据库验收未完成，不可部署过渡状态。详见私有服务部署说明。

## 1.17 · 2026-10-15

- 逻辑引擎展示和下载真实配置生成的只读问卷程序；编译失败清空旧程序，显示来源诊断。
- 图形演示仅操作本地副本，不写草稿、保存接口、缓存或运行预览；移除全局逻辑写入动作。
- Monaco 的只读状态约束语言选项、插入命令和变更事件；程序适配保留题目内变量归属，避免预览重复收录。
- 工作流容器增加可选窄屏适配，逻辑页标题栏支持换行。说明见[问卷程序](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md)和[图形演示](http://design.ors-cn.com/agent-help/articles/design/logic/visual.md)。
- 本单元不代表第一阶段完整后端及数据库验收通过。

## 1.16 · 2026-10-15

- 条件设置接入只读变量素材、结果类型、引用保护及隔离计算预览；发布锁定时禁止新增、编辑和删除。
- 变量键按原样插入，保留 `$`，区分直接 ISIN/NOTIN 与 ors 集合函数；不在打开编辑器时迁移作者源码。
- 变量保存保留扩展字段及设置状态，题目内已有变量也检查删除引用。说明见[公式编辑器](http://design.ors-cn.com/agent-help/articles/design/conditions/formula-editor.md)。
- 本提交仅为第一阶段中的条件设置单元；完整浏览器、后端及数据库验收仍待完成。

系统版本显示为“主版本.小版本”。本次建立 1.0 基线；以后每次新提交递增小版本，大版本仅按用户明确要求调整。这里的系统版本与问卷的发布批次、问卷数据格式版本分别管理。

## 1.15 · 2026-10-15

- 内容编辑的数字、邮箱输入配置接入实际组件和系统校验；输入值规范化由组件、脚本设值和生命周期共用。
- 保留非负整数输入语义，支持普通数字的小数、显式零上下界及文本长度约束；系统校验失败不执行自定义校验。
- 输入默认值在渲染钩子前初始化，草稿和用户清空结果优先；缺少参数的 setValue 不再被视为清空操作。

## 1.14 · 2026-10-15

- 题目编码在规范化时绑定稳定 ID；改名保留历史别名，删除后的编码继续保留，新增题不会复用旧身份。
- 停止题目改名时扫描改写公式和旧全局源码，保留作者的 JS 局部作用域及原始字段。
- 批量编码编辑沿用相同身份约束，拒绝重定向已保留别名的交换；成功编辑记录属性设置状态。程序编译也检查别名与现有题目的冲突。
- 本提交纳入起点已有的编码绑定与批量编辑辅助依赖，继续保留其他既有未提交工作。

## 1.13 · 2026-10-15

- 选择题共用单多选语义，默认选中接入普通多选、下拉及图片选择题，在渲染钩子前初始化并保留草稿优先与取消回滚。
- 普通多选和下拉多选的数量限制进入系统校验，失败时不执行自定义答案校验；下一题代码无法选择自动勾选锁定的选项。
- 下拉的历史布尔字段在显示、提交、脚本写入和自动答案中一致解释；单选类自动规则多命中明确失败。
- 相关生命周期与全量 1329 单测通过；最终浏览器与后端验收尚未完成。

## 1.12 · 2026-10-15

- 动态矩阵行和富文本引用共用计算变量目录，新引用保存稳定变量 ID，保留显示键名；动态行编辑不再列出旧全局逻辑变量。
- 富文本变量身份随编辑器保存和回读保留，变量删除检查识别 ID 引用；引用身份失效时明确报错。
- 动态行按文本内容与重复次数产生稳定身份，避免插入、重排后答案错位；本轮动态行身份规则随新发布版本采用。
- 相关组件及全量 1321 单测通过，真实浏览器和后端持久化验收尚未完成。

## 1.11 · 2026-10-15

- 普通题和矩阵题图形条件增加计算变量来源，按稳定变量 ID 绑定；布尔、数值、文本和数组使用适合的比较控件。
- 变量条件共用目录与计算合同，编译阶段拒绝不适用运算和缺失引用，运行阶段明确报告缺失值或类型错误。
- 保留原有题目条件和图形去向语义；打开弹窗不改写草稿。浏览器端到端与后端验收继续进行。

## 1.10 · 2026-10-15

- 编辑动作记录稳定配置位置的设置来源与状态，保留显式 false、0、空文本、空数组及兄弟字段。
- 三个钩子支持自定义、继承平台默认、禁用状态；继承或禁用不删除保留源码，清空代码留下禁用记录。
- 修复清空最后一段代码丢失扩展字段及局部代码保存覆盖兄弟钩子的问题；后续图形变量和完整属性覆盖验收继续进行。

## 1.9 · 2026-10-15

- 五个有效脚本入口共用按阶段和题型生成的题目、直接公式函数与上下文补全；自动勾选只列前置题目，ors 只列集合函数。
- AI 方法目录与运行器共用；更新钩子帮助和空值示例，移除旧命名空间补全。
- 自动勾选打开时保留原始源码，语法错误定位到实际行列，不自动转换旧语言。
- 本次为编辑器语法入口单元；图形变量、设置状态、条件页整体及逻辑页隔离仍在整改。

## 1.8 · 2026-10-15

- 生命周期通过 Worker 接入受控题目写入、私有效果回传和宿主重放校验，变量写后读取同一草稿。
- 显隐快照参与稳定计算并检测振荡；渲染及下一题阶段阻止间接改写历史答案。
- 默认答案随访问准备，取消进入回滚初始化；用户清空答案、附加文本及刷新恢复均保留已作答保护。
- 相关生命周期和全量单测通过；浏览器、后端与完整配置入口验收仍未完成。

## 1.7 · 2026-10-15

- 变量、题目图形规则和自动勾选开始消费统一程序；旧全局脚本及 AST 保留但不执行，不再触发旧 AST 迁移错误。
- 变量使用原生 JS 与实际读取依赖，错误单独报告；引用中的键和身份变更在保存前阻止，显示名称可修改。
- 增加按稳定变量 ID 驱动题目显隐、保留题目局部变量富文本引用，并接受只有 dwId 的已保存选项。
- 完整生命周期事务、编辑界面与后端协议仍待后续任务，尚未达到阶段验收条件。

## 1.6 · 2026-10-15

- 新增题目写入草稿及独立宿主操作通道，支持基础输入和普通选择题方法、别名写后读、公式缓存失效。
- 校验阶段与纯变量禁止写入，已作答题和下一题阶段的当前题受保护；非法操作、取消、异常、超时不返回可提交效果。
- 宿主可对新快照重放校验，并清理取消选项的附加文本；页面生命周期接线尚未完成。

## 1.5 · 2026-10-15

- 还原锁文件的非必要格式变化，保留运行器依赖；解析后逐结构核对与上次提交依赖数据完全一致。无用户功能变化。

## 1.4 · 2026-10-15

- 沙箱提供 Q1.value、既有大写维度、稳定题目别名、原生选择数组及 AI 题目读取方法；既有公式函数改为直接调用。
- ors 仅保留 isin/notin；已移除命名空间接口明确失败。自动勾选禁止通过变量间接读取运行显隐状态。
- 更新内置素材插入、离线迁移输出和文档示例。生命周期与编辑入口的完整程序集成仍在进行。

## 1.3 · 2026-10-15

- 新增共享问卷程序编译与声明式 JS 导出模块，包含稳定来源地址、SHA-256 内容指纹、配置和源码保留、缺失引用及语法诊断。
- 编译器忽略旧全局执行字段，编译失败不产生可执行半成品；当前运行入口尚未切换。

## 1.2 · 2026-10-15

- 修复复制题目时丢失图形规则的问题。复制为题目、选项、规则创建新身份，内部图形引用随复制重绑定，外部引用保持原目标。
- 验证配置状态和未知扩展字段经过保存、回读、重排保持不变。

## 1.1 · 2026-10-15

- 新增问卷程序的版本、稳定配置地址、继承/明确设置/禁用状态及题目能力合同。仅内部基础模块，现有编辑/答题流程尚未切换。
- 保存第一阶段实施合同及可恢复基线说明。完整阶段验收尚未完成。

## 1.0 · 2026-10-14

### 新增

- 工作台左侧增加“使用文档”，新标签页打开登录后可访问的文档中心。
- 提供分级模块菜单、全文搜索、章节目录、章节直达、代码复制及前后篇阅读。
- 建立系统中文使用手册，覆盖问卷管理、题型及属性、外观、条件变量、逻辑、配额、收集、答卷数据、资源和账户操作。
- 建立函数与变量参考，说明函数签名、参数、返回结果、示例及当前实现限制。
- 提供手机端菜单抽屉、折叠目录及主题、中英文控件适配。

### 维护规则

- 系统版本统一由 package.json 管理，初始为 1.0.0，显示为 1.0。
- Agent 每次执行 commit 或 push 任务时，同步核对版本、相关使用说明和本更新日志。
- 增加文档完整性检查，验证内容链接、章节锚点、函数覆盖与版本一致性。

### 使用提示

- 正文首版为中文；系统语言切换影响文档中心的界面控件。
- 各功能的已实现范围、占位状态和运行限制以对应文章说明为准。
- [从快速入门开始](http://design.ors-cn.com/agent-help/articles/quick-start/overview.md)，或查看[函数手册](http://design.ors-cn.com/agent-help/articles/design/conditions/functions.md)。
