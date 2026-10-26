# 多行填空题

多行文本用于意见、经历和长回答，保留单题文本答案。

## 使用前提与入口

问卷编辑 → 左侧题型面板。点击题型加入当前选中题之后，或拖到画布指定位置；选中题卡设置右侧属性。结构锁定时先停止收集。

## 操作步骤

1. 填写问题及填写说明，设置必答。
2. 在“选项属性 → 填空设置”设置输入类型、占位、默认值、是否必填与最少、最多字数；支持文本、整数、小数、手机号和邮箱，数值类型还可设最小、最大值。额外内容判断使用答案校验。
3. 在手机模拟中检查输入区域与长内容显示。

## 按钮与设置

| 名称     | 位置     | 作用与结果       | 可用条件           |
| -------- | -------- | ---------------- | ------------------ |
| 多行输入 | 答题区   | 填写长文本       | 非只读             |
| 副标题   | 基本属性 | 解释建议填写内容 | 开启后编辑题卡说明 |
| 答案校验 | 基本属性 | 限制有效答案规则 | 表达式正确         |

## 结果与限制

“最少多少字”默认为 0，“最多多少字”默认为 99999；最少值不能超过最多值，调整一端越界时另一端同步调整。旧问卷已保存的限制继续保留。可选题留空可跳过；填写后须满足字数范围，必答仍由“是否必答”控制。

多行填空是文本输入，不会自动进行情感分析或生成报告。用AI访谈题才会进入多轮追问流程。

## 取值与可用函数

以下以本题实际编码为 `Q1` 为例，`Q1` 与 `context.questions.Q1` 等价。`Q1` 本身是题目对象，公式应返回具体字段或计算结果。字段支持表中的驼峰写法及大写协议名（如 `value`／`VALUE`、`hasAnswer`／`HAS_ANSWER`）；方法名区分大小写。

| 写法 | 含义与返回值 |
| --- | --- |
| `Q1.value` | 当前输入值；普通文字为字符串，例如 `"18"`，数字输入可能为数值。 |
| `Q1.values` | 有内容时为单元素数组，未答为 `[]`。 |
| `Q1.answer`／`Q1.label` | 输入内容的文本表示，不是选项标题。 |
| `Q1.answers` | 输入文本数组；未答为 `[]`。 |
| `Q1.hasAnswer` | 是否已填写；数字 0 有效。 |

通用身份字段：`Q1.id` 为内部 ID，`Q1.code` 为题目编码，`Q1.type` 为内部题型。`Q1.isShow` 仅在运行器提供显隐快照时可读；缺少快照会报错，自动选择条件禁止读取。

未答时，`value`／`answer`／`label` 为 `null`，答案数组为空，`hasAnswer` 为 `false`；分数 `0` 不能单独用来判断是否作答。常用 `LEN`、`CONTAINS`、`CONCAT` 处理文本；换行属于输入内容，不会自动转换成多个答案。

### 可用方法与写入限制

本题没有普通选择项：`Q1.select()`、`Q1.unSelect()` 返回 `[]`，`Q1.isSelected("A1")`、`Q1.unSelected("A1")` 返回 `false`。这些查询不能代替本题的答案读取。

| 写法 | 作用 |
| --- | --- |
| `Q1.setValue("新内容")` | 设置本题输入，按原输入类型规范化并检查格式。 |
| `Q1.clear()` | 清空本题。 |

仅在 `initializeAnswer` 或 `resolveNext` 钩子中可用；公式变量、显示条件、自动选择和校验禁止写入。`resolveNext` 不能修改当前已校验题，其他已受保护题也不能改；最终答案仍需通过必答、字数及业务校验。

### 计算示例

假设输入“服务很好”。在变量素材中选择 JavaScript 函数模式、结果类型“对象”：

```js
function compute(context) {
  return {
    text: Q1.value,
    length: LEN(Q1.value),
    mentionsService: CONTAINS(Q1.value, "服务"),
    answered: Q1.hasAnswer
  };
}
```

预期：

```json
{
  "text": "服务很好",
  "length": 4,
  "mentionsService": true,
  "answered": true
}
```

完整参数与阶段说明见[变量参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md#题目维度全表)和[函数参考](http://design.ors-cn.com/agent-help/articles/design/conditions/functions.md)。

## 相关说明

- [通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)
- [选项设置](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)

`initializeAnswer` 只能修改本题答案，并且一次调用不能同时返回 answer 和调用答案修改方法；`beforeShow` 只返回本题展示文案，禁止写答案。已有恢复或人工答案优先，预填执行资格与一次性状态见[四个题目钩子](http://design.ors-cn.com/agent-help/articles/design/properties/common.md#四个题目钩子)。
