# 填空题

单行输入适合短文本、数字和有格式要求的信息。人员信息预设会附带不同输入或校验规则。

## 使用前提与入口

问卷编辑 → 左侧题型面板。点击题型加入当前选中题之后，或拖到画布指定位置；选中题卡设置右侧属性。结构锁定时先停止收集。

## 操作步骤

1. 填写题干，在“选项属性 → 填空设置”选择文本、整数、小数、手机号或邮箱。
2. 设置占位、默认值、是否必填及字数限制；整数和小数还可设置最小、最大值。整数沿用年龄预设的非负整数规则。额外业务约束使用答案校验。
3. 测试空值、格式错误和正常输入。

## 按钮与设置

| 名称     | 位置             | 作用与结果             | 可用条件               |
| -------- | ---------------- | ---------------------- | ---------------------- |
| 输入类型 | 选项属性填空设置 | 改变输入控件或校验类型 | 以当前下拉选项为准     |
| 答案校验 | 基本属性         | 配置额外表达式校验     | 公式诊断通过           |
| 输入框   | 答题区           | 保存文本或数字答案     | 必答和校验通过才可继续 |

## 结果与限制

“最少多少字”默认为 0，“最多多少字”默认为 99999；最少值不能超过最多值，调整一端越界时另一端同步调整。旧问卷已保存的限制继续保留。可选题留空可跳过；填写后须满足字数范围，必答仍由“是否必答”控制。

证件号和带前导零编号应按文本处理，不要用数字输入丢失前导零；手机号选择专用手机号类型。导出会保护超过15位或带前导零的内容。
电话／手机号预设内置手机号码校验，无须额外配置答案校验代码；答题时可选择国家或地区，默认中国，保存为带国际区号的号码。填写无效号码、明确的固话或分机后会显示错误，不能进入下一题、下一页或提交；修正后才能继续。非必答题可以留空。

## 取值与可用函数

以下以本题实际编码为 `Q1` 为例，`Q1` 与 `context.questions.Q1` 等价。`Q1` 本身是题目对象，公式应返回具体字段或计算结果。字段支持表中的驼峰写法及大写协议名（如 `value`／`VALUE`、`hasAnswer`／`HAS_ANSWER`）；方法名区分大小写。

| 写法 | 含义与返回值 |
| --- | --- |
| `Q1.value` | 当前输入值；普通文字为字符串，例如 `"18"`，整数与小数也按规范化后的字符串保存，例如 `"02"` 变为 `"2"`。 |
| `Q1.values` | 有内容时为单元素数组，未答为 `[]`。 |
| `Q1.answer`／`Q1.label` | 输入内容的文本表示，不是选项标题。 |
| `Q1.answers` | 输入文本数组；未答为 `[]`。 |
| `Q1.hasAnswer` | 是否已填写；数字 0 有效。 |

通用身份字段：`Q1.id` 为内部 ID，`Q1.code` 为题目编码，`Q1.type` 为内部题型。`Q1.isShow` 仅在运行器提供显隐快照时可读；缺少快照会报错，自动选择条件禁止读取。

未答时，`value`／`answer`／`label` 为 `null`，答案数组为空，`hasAnswer` 为 `false`；分数 `0` 不能单独用来判断是否作答。数字计算前先判断 `hasAnswer`，再用 `VALUE(Q1.value)` 或 `Number(Q1.value)` 转换。手机号、身份证和带前导零编号应保留文本。

### 可用方法与写入限制

本题没有普通选择项：`Q1.select()`、`Q1.unSelect()` 返回 `[]`，`Q1.isSelected("A1")`、`Q1.unSelected("A1")` 返回 `false`。这些查询不能代替本题的答案读取。

| 写法 | 作用 |
| --- | --- |
| `Q1.setValue("新内容")` | 设置本题输入，按原输入类型规范化并检查格式。 |
| `Q1.clear()` | 清空本题。 |

仅在 `initializeAnswer` 或 `resolveNext` 钩子中可用；公式变量、显示条件、自动选择和校验禁止写入。`resolveNext` 不能修改当前已校验题，其他已受保护题也不能改；最终答案仍需通过必答、字数及业务校验。

### 计算示例

假设普通文本填空输入 `18`。在变量素材中选择 JavaScript 函数模式、结果类型“对象”：

```js
function compute(context) {
  return {
    raw: Q1.value,
    next: Q1.hasAnswer ? VALUE(Q1.value) + 1 : null,
    length: LEN(Q1.value),
    empty: IS_EMPTY(Q1.value)
  };
}
```

预期：

```json
{
  "raw": "18",
  "next": 19,
  "length": 2,
  "empty": false
}
```

完整参数与阶段说明见[变量参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md#题目维度全表)和[函数参考](http://design.ors-cn.com/agent-help/articles/design/conditions/functions.md)。

## 相关说明

- [通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)
- [选项设置](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)
- [人员信息与常用预设](http://design.ors-cn.com/agent-help/articles/design/questions/presets.md)

`initializeAnswer` 只能修改本题答案，并且一次调用不能同时返回 answer 和调用答案修改方法；`beforeShow` 只返回本题展示文案，禁止写答案。已有恢复或人工答案优先，预填执行资格与一次性状态见[四个题目钩子](http://design.ors-cn.com/agent-help/articles/design/properties/common.md#四个题目钩子)。
