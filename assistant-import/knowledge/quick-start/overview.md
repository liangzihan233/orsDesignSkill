# 快速入门

本手册随当前系统构建更新，具体版本以帮助中心显示及[系统更新日志](http://design.ors-cn.com/agent-help/articles/changelog.md)为准。历史开发记录保留在[系统更新日志](http://design.ors-cn.com/agent-help/articles/changelog.md)。按当前系统的可操作入口介绍建卷、设计、发布、填写和数据处理；标为“仅配置”“占位”“演示”的内容不代表完整上线能力。

## 使用前提与入口

使用账户登录后进入工作台首页。问卷负责人可以操作自己有权限的问卷；共享权限由问卷分享窗口分配。

## 操作步骤

1. 在“我的问卷”点击“创建问卷”，选择专业问卷并填写编号和名称。
2. 在“问卷编辑”添加题目，设置必答、选项和条件，点击保存。
3. 通过“模拟答题”检查题目、逻辑、隐私及手机样式；模拟模式不写入正式答卷。
4. 进入“外观设计”确认模板，再正式发布；在“问卷收集 → 收集链接”复制链接或下载二维码。
5. 到“答卷数据 → 结果数据”筛选并查看答卷；到“配额进度”看总览；按需导出 Excel。

## 按钮与设置

| 名称     | 位置           | 作用与结果                     | 可用条件                               |
| -------- | -------------- | ------------------------------ | -------------------------------------- |
| 创建问卷 | 我的问卷右上方 | 创建空白专业问卷并进入设计     | 输入通过校验                           |
| 保存     | 问卷工作室顶栏 | 保存当前设计                   | 非结构锁定状态；具体子页面另有专用保存 |
| 模拟答题 | 顶栏           | 新窗口测试，不提交真实答卷     | 浏览器允许弹窗                         |
| 发布     | 外观页顶栏     | 建立正式发布版本并进入收集链接 | 确认发布成功后才分发                   |

## 结果与限制

正式发布与预发布都会锁定答题结构。修改题目、公式或逻辑前需停止收集；外观和配额有独立更新路径。模板中心仍是分类占位页；AI 创建已接入[智能问卷工作台](http://design.ors-cn.com/agent-help/articles/workbench/ai-create.md)，可上传 DOCX 严格生成、智能改编或从需求自由生成，核对后保存为草稿。

## 新功能的常用入口

- [题目与选项操作](http://design.ors-cn.com/agent-help/articles/design/workspace/questions-options.md)：多项开放输入、选项改码与批量追加。
- [选项属性](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)：禁止引用答案及文本字数范围。
- [矩阵题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md)、[评分题](http://design.ors-cn.com/agent-help/articles/design/questions/score.md)及[轮播图](http://design.ors-cn.com/agent-help/articles/design/questions/carousel.md)：新增矩阵填空、数字评分顺序和可选轮播图片。
- [答题时间安排](http://design.ors-cn.com/agent-help/articles/collect/settings-schedule.md)：区分每题等待与整卷作答时限。
- [题目附件](http://design.ors-cn.com/agent-help/articles/design/properties/attachments.md)：为原题追加独立的附件材料。
- [公开只读分享](http://design.ors-cn.com/agent-help/articles/data/sharing.md)：从答卷数据复制信息链接，与答题链接和协作授权分别使用。

## 相关说明

- [问卷管理](http://design.ors-cn.com/agent-help/articles/workbench/surveys.md)
- [保存、测试与发布](http://design.ors-cn.com/agent-help/articles/design/workspace/save-publish.md)
- [功能状态说明](http://design.ors-cn.com/agent-help/articles/faq/availability.md)

## AI 问卷测试 Demo

仓库提供 `pnpm qa:survey-demo --scope all --planned 3 --success 3 --quota 2` 作为固定小问卷的 QA 运行入口。范围为 logic、quota 或 all；条数为预计量，成功数按正式完成入库计算，配额只适用于 Demo 的单个匹配单元。运行使用独立 QA 数据库；失败保留，只有核验通过后才删除本轮数据库。报告保留在 `.qa/survey-demo-运行ID/`。

执行器自动创建并发布四题问卷，通过真实 Chromium 点击、输入和提交，核对后端答卷、数据库答案与配额占用；支持必答、筛选、A/B 显隐、满额拒绝，以及无配额时补足成功数据。它不是任意已有问卷的通用测试入口。

对 AI 说“开始问卷测试”，它会一次询问缺失的范围、预计条数和成功目标，再调用程序。报告列出各场景、首次偏差和重跑命令；成功后自动清理专属数据库，失败保留现场。首版仅支持自动新建的固定 Demo；开发后验收限制15分钟，不附带全量回归。
