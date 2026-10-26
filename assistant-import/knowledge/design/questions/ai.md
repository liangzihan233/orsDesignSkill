# AI 访谈题

AI 题收集多轮文字对话。公开答题请求访谈接口，失败时保留输入并提示重试；内容设计预览可明确使用本地模拟回复，模拟内容不能当成真实模型分析。

## 使用前提与入口

问卷编辑 → 左侧题型面板。点击题型加入当前选中题之后，或拖到画布指定位置；选中题卡设置右侧属性。结构锁定时先停止收集。

## 操作步骤

1. 填写题干和访谈目标，选择共享模型及角色卡，并核对角色快照。
2. 设置1至10轮对话，默认3轮；选择是否必答。
3. 模拟答题输入内容并发送，检查追问、结束和保存的对话。

## 按钮与设置

| 名称     | 位置       | 作用与结果                     | 可用条件                         |
| -------- | ---------- | ------------------------------ | -------------------------------- |
| 角色卡   | 题目属性   | 把角色名称与提示词快照写入题目 | 资源来自服务器共享角色卡         |
| AI 模型  | 题目属性   | 选择用于访谈回复的已启用模型   | 模型配置由管理员维护             |
| 访谈目标 | 题目属性   | 提供本题追问方向               | 真实访谈接口可用时用于请求       |
| 对话轮次 | 题目属性   | 限制最多用户答复轮次           | 1至10                            |
| 发送     | 答题对话区 | 提交文字并等待回复             | 非空、非只读、未完成且未等待回复 |
| 对话记录 | 答题／详情 | 保存用户与助手消息，可能含摘要 | 以实际回复数据为准               |

## 结果与限制

角色卡的提示词与访谈目标同时用于访谈请求；填写目标不会覆盖角色要求。未选择角色卡时使用默认友好语气。

等待回复时防止重复发送；达到轮次或服务端判定完成后结束。已写入问卷的角色快照不会随共享角色卡编辑自动变化。

## 模型选择与建卷入口

在题目属性的模型选择框选择已启用的共享配置；尚未选择时使用已启用的共享默认模型，没有默认值则需手动选择。原模型不可用时重新选择。需要生成整份问卷时使用[智能问卷工作台](http://design.ors-cn.com/agent-help/articles/workbench/ai-create.md)，它与收集受访者对话的本题分别使用。

## 取值与可用函数

以下以本题实际编码为 `Q1` 为例，`Q1` 与 `context.questions.Q1` 等价。`Q1` 本身是题目对象，公式应返回具体字段或计算结果。字段支持表中的驼峰写法及大写协议名（如 `value`／`VALUE`、`hasAnswer`／`HAS_ANSWER`）；方法名区分大小写。

| 写法 | 含义与返回值 |
| --- | --- |
| `Q1.value`／`Q1.answer`／`Q1.label` | 带角色的对话文本；无有效消息时为 `null`。 |
| `Q1.values`／`Q1.answers` | 对话全文的单元素数组，非逐条消息数组。 |
| `Q1.conversation` | 结构化对话对象：schema、messages、round、complete 和可选 summary。 |
| `Q1.hasAnswer` | 是否有非空用户回答；只有助手开场时为 false，即使 value 已有开场文本。 |

通用身份字段：`Q1.id` 为内部 ID，`Q1.code` 为题目编码，`Q1.type` 为内部题型。`Q1.isShow` 仅在运行器提供显隐快照时可读；缺少快照会报错，自动选择条件禁止读取。

空对话对象为 messages 空数组、round 为 0、complete 为 false；没有摘要不代表计算错误。每条消息包含 `role`、`type`、`content`、`round`，非法消息会被忽略。

| AI 专用方法 | 含义与空值 |
| --- | --- |
| `Q1.userText()` | 全部用户回答按换行连接；无回答为 `""`。 |
| `Q1.lastUserText()` | 最近一次非空用户回答；没有为 `""`。 |
| `Q1.transcript()` | 带 USER／ASSISTANT 角色的对话全文；无消息为 `""`。 |
| `Q1.summary()` | 已保存摘要；没有为 `""`，不会调用模型生成。 |
| `Q1.roundCount()` | 规范化轮次字段，0 至 10；不是重新统计消息数。 |
| `Q1.isComplete()` | 是否标记完成，布尔值。 |

也可直接调用 `AI_USER_TEXT(Q1)`、`AI_LAST_USER_TEXT(Q1)`、`AI_TRANSCRIPT(Q1)`、`AI_SUMMARY(Q1)`、`AI_ROUND_COUNT(Q1)`、`AI_IS_COMPLETE(Q1)`，或传入 `Q1.conversation`；AI 方法不适用于普通题。脚本读取记录不会发起访谈请求，也不自动生成分析摘要。

### 可用方法与写入限制

本题没有普通选择项：`Q1.select()`、`Q1.unSelect()` 返回 `[]`，`Q1.isSelected("A1")`、`Q1.unSelected("A1")` 返回 `false`。这些查询不能代替本题的答案读取。

当前未开放本题的 `setValue`、`setSelection`、`selectOption`、`deselectOption` 或 `clear` 写方法。不能直接给 `Q1.value` 赋值；返回数组或对象也只读，不会回写答案。

### 计算示例

假设已保存一条用户消息“服务很好”，轮次为 1、complete 为 true、summary 为“体验良好”。在变量素材中选择 JavaScript 函数模式、结果类型“对象”：

```js
function compute(context) {
  return {
    text: Q1.userText(),
    last: Q1.lastUserText(),
    transcript: Q1.transcript(),
    summary: Q1.summary(),
    rounds: Q1.roundCount(),
    complete: AI_IS_COMPLETE(Q1),
    answered: Q1.hasAnswer
  };
}
```

预期：

```json
{
  "text": "服务很好",
  "last": "服务很好",
  "transcript": "USER: 服务很好",
  "summary": "体验良好",
  "rounds": 1,
  "complete": true,
  "answered": true
}
```

完整参数与阶段说明见[变量参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md#题目维度全表)和[函数参考](http://design.ors-cn.com/agent-help/articles/design/conditions/functions.md)。

## 相关说明

- [通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)
- [选项设置](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)
- [AI角色卡](http://design.ors-cn.com/agent-help/articles/resources/ai-roles.md)
- [公式变量](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md)

对话窗口完成最后一题后，已展示的对话记录会保留到提交前；提前结束不会把未访问题目计入已完成数量。

## 请求失败与重试

公开答题中的访谈服务失败或返回空回复时，页面保留参与者输入并提示重试，不增加轮次、不生成模拟答案，也不把题目标记为完成。重试成功后才记录本轮对话。内容设计预览可明确使用本地模拟回复；模拟回复不是实际 AI 服务验证。
