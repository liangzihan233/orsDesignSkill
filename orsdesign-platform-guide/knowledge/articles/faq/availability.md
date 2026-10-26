# 功能状态说明

本表对应系统 1.164，核对日期为 2026-10-21。区分可用主流程、仅配置入口、占位页面和历史兼容功能；菜单存在或提示成功本身不代表业务已完成。

## 使用前提与入口

遇到与教程预期不同的操作时，先核对本表、当前发布状态与权限，再查对应专题。

## 按钮与设置

| 功能 | 当前能力与入口 | 限制或相关说明 |
| ---- | -------------- | -------------- |
| 专业建卷、复制、删除、文件夹、标签、协作分享 | 工作台接入真实保存与权限接口 | 删除进入回收站；[创建与复制](http://design.ors-cn.com/agent-help/articles/workbench/create.md)、[目录管理](http://design.ors-cn.com/agent-help/articles/workbench/folders-tags.md) |
| 问卷更多菜单的外观／预览 | 仍为提示入口 | 实际操作进入设计工作室 |
| 问卷回收站 | 真实列表、30 天保留、恢复为草稿 | 与不可恢复的答卷回收站不同；[回收站](http://design.ors-cn.com/agent-help/articles/workbench/recycle.md) |
| AI 创建 | DOCX 严格生成、智能改编、需求自由生成；核对后保存 | 需共享模型；[智能问卷工作台](http://design.ors-cn.com/agent-help/articles/workbench/ai-create.md) |
| AI 配置、角色卡与访谈 | 共享模型由管理员维护；角色卡由登录用户共享维护；公开访谈使用真实接口 | 公开访谈失败保留输入并重试，设计预览可本地模拟；[AI 配置](http://design.ors-cn.com/agent-help/articles/resources/ai-models.md)、[角色卡](http://design.ors-cn.com/agent-help/articles/resources/ai-roles.md) |
| 矩阵填空、评分顺序、轮播图片多选 | 从可见题型面板或题目属性配置并保存 | 其他隐藏矩阵不因此开放；[矩阵](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md)、[评分](http://design.ors-cn.com/agent-help/articles/design/questions/score.md)、[轮播图](http://design.ors-cn.com/agent-help/articles/design/questions/carousel.md) |
| 编码审核、禁止引用答案、字数限制 | 右侧属性与工作区批量窗口真实保存，公开答题消费 | [选项属性](http://design.ors-cn.com/agent-help/articles/design/properties/options.md) |
| 每题等待与全问卷倒计时 | 收集设置 → 答题时间安排 | 整卷超时保存为未完成；[时间安排](http://design.ors-cn.com/agent-help/articles/collect/settings-schedule.md) |
| 题目附件 | 基本属性中配置，公开答题上传、校验并提交 | 仅此入口单文件最大 100MB；[题目附件](http://design.ors-cn.com/agent-help/articles/design/properties/attachments.md) |
| 问卷信息分享 | 答卷数据顶栏复制匿名只读链接 | 可筛选、分页、看详情，不能审核／删除／导出；[信息分享](http://design.ors-cn.com/agent-help/articles/data/sharing.md) |
| 原始数据 | 登录页有真实列表、CSV 导出与删除 | 行内查看、清空、导入、题目编码导出仍为提示；完整详情与 Excel 使用结果数据 |
| 模板中心与应用中心 | 分类占位与预设展示卡片 | 上传 DOCX 从 AI 创建进入；不是此处模板复制或应用开通 |
| 题库 Excel／文本导入、运行时动态抽题 | 导入菜单禁用或抽题字段仅配置 | 手动编辑、复制入卷已接入；[题库](http://design.ors-cn.com/agent-help/articles/resources/question-bank.md) |
| 附件总控、BI、验证码等部分收集项 | 配置保存不等于公开执行 | 逐项查[收集设置生效范围](http://design.ors-cn.com/agent-help/articles/collect/settings-overview.md) |
| 访问设置、统计图表、答题日志及旧工作室邻近路由 | 部分占位或未接入主导航 | 使用现有编辑、逻辑、收集及结果数据入口 |
| 隐藏媒体与旧矩阵 | 保留部分模型或渲染兼容 | 不保证正常新增；[隐藏题型](http://design.ors-cn.com/agent-help/articles/design/questions/legacy.md) |

## 问卷多语言

内容编辑的“问卷多语言（未开放）”为禁用入口；没有问卷翻译配置、保存或运行能力。管理界面的中英文切换不会翻译题目正文。

## 结果与限制

资料按当前仓库实现核对，部署环境仍需具备配套服务和数据库迁移。配置保存、前端预览、真实接口验证分别判断；网络或权限报错请先保留提示并按专题排查。联系人组件虽有接口和邮件客户端草稿流程，当前路由没有独立联系人入口，不列为正常模块。

## 相关说明

- [快速入门](http://design.ors-cn.com/agent-help/articles/quick-start/overview.md)
- [常见问题排查](http://design.ors-cn.com/agent-help/articles/faq/troubleshooting.md)
- [收集设置生效范围](http://design.ors-cn.com/agent-help/articles/collect/settings-overview.md)
