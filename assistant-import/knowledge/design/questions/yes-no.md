# 判断题

判断题以两个选项采集是／否或同类二元答案。它与通用单选共享选择行为，但保留判断题语义。

## 使用前提与入口

判断题已从当前左侧新增面板隐藏。已有问卷中的判断题仍可选中题卡并设置右侧属性；结构锁定时先停止收集。

## 操作步骤

1. 在已有问卷中选中判断题，修改题干和两个答案文字。
2. 设置必答、默认项及排列，保存并测试只选一个答案。

## 按钮与设置

| 名称     | 位置     | 作用与结果                 | 可用条件               |
| -------- | -------- | -------------------------- | ---------------------- |
| 选项文字 | 题卡     | 修改两个判断答案           | 不依赖默认“是／否”文字 |
| 默认选中 | 选项属性 | 初始化一个答案             | 已有草稿优先           |
| 题目逻辑 | 题卡     | 按选中答案显示、隐藏或跳转 | 目标有效               |

## 结果与限制

条件或配额可用性按具体编辑器题型列表决定；不能仅因它看起来像单选，就认定所有单选专属功能都开放。

## 取值与可用函数

以下以本题实际编码为 `Q1` 为例，`Q1` 与 `context.questions.Q1` 等价。`Q1` 本身是题目对象，公式应返回具体字段或计算结果。字段支持表中的驼峰写法及大写协议名（如 `value`／`VALUE`、`hasAnswer`／`HAS_ANSWER`）；方法名区分大小写。

| 写法 | 含义与返回值 |
| --- | --- |
| `Q1.value`／`Q1.values` | 已选正式选项编码；单项为 `"A1"`，多个为编码数组；`values` 始终为数组。 |
| `Q1.answer`／`Q1.answers` | 已选选项纯文本；单项为文本，多个为文本数组；`answers` 始终为数组。 |
| `Q1.label` | 已选选项富文本，单项为文本，多个为数组。 |
| `Q1.hasAnswer` | 是否作答，返回布尔值。 |
| `Q1.answerOptions`／`Q1.selected` | 已选选项对象数组；`selected` 不是布尔值。 |
| `Q1.answerNotes` | 已选选项附带输入按逗号连接；没有时为 `""`。 |
| `Q1.options` | 题目定义的全部选项对象，包含未选项，并非只取可见项。 |
| `Q1.score`／`Q1.maxScore` | 当前已选项分值之和／当前配置计算的上限字段。 |

通用身份字段：`Q1.id` 为内部 ID，`Q1.code` 为题目编码，`Q1.type` 为内部题型。`Q1.isShow` 仅在运行器提供显隐快照时可读；缺少快照会报错，自动选择条件禁止读取。

未答时，`value`／`answer`／`label` 为 `null`，答案数组为空，`hasAnswer` 为 `false`；分数 `0` 不能单独用来判断是否作答。

选项对象字段使用大写：`VALUE`（正式编码）、`TEXT`（纯文本）、`LABEL`（富文本）、`IS_SELECTED`／`IS_ANSWERED`（是否已选或已填）、`ANSWER_VALUE`（该项输入值，普通已选项通常为 `true`）、`NOTE`（附带输入，无内容通常为 `null`）、`SCORE`（配置分值）。按 `VALUE` 查找具体选项，避免把数组下标当成身份。

`maxScore` 优先读取明确配置的 `scoreAttr.maxScore`；缺少正值配置时累加全部选项分值，单选也如此，不保证等于最高单项分值。

### 可用方法与写入限制

| 写法 | 作用 |
| --- | --- |
| `Q1.select()` | 已选正式编码数组，单选也返回数组；未选为 `[]`。 |
| `Q1.isSelected("A1")` | 判断 A1 是否已选，编码不存在时为 `false`。 |
| `Q1.unSelect()` | 未选编码数组，未答为全部编码，包含隐藏但未选的选项。 |
| `Q1.unSelected("A2")` | 判断 A2 是否存在且未选；不存在或已选为 `false`。 |

`unSelect()`／`unSelected()` 都只查询，不会取消勾选。方法参数接受字符串或有限数字，按字符串比较；纯数字编码在 `select()`／`unSelect()` 中可能返回数字，使用原生 `includes` 时注意类型。返回数组独立于答案，修改数组不会修改作答。

当前未开放本题的 `setValue`、`setSelection`、`selectOption`、`deselectOption` 或 `clear` 写方法。不能直接给 `Q1.value` 赋值；返回数组或对象也只读，不会回写答案。

### 计算示例

假设历史判断题两个选项的正式编码为 A1、A2，文字已改为苹果、香蕉，目前只选 A1。在变量素材中选择 JavaScript 函数模式、结果类型“对象”：

```js
function compute(context) {
  return {
    value: Q1.value,
    answer: Q1.answer,
    selected: Q1.select(),
    unselected: Q1.unSelect(),
    hasApple: Q1.isSelected("A1"),
    count: SELECT_SIZE(Q1.answerOptions),
    inSet: ors.isin(Q1.select(), ["A1", "A2"])
  };
}
```

预期：

```json
{
  "value": "A1",
  "answer": "苹果",
  "selected": [
    "A1"
  ],
  "unselected": [
    "A2"
  ],
  "hasApple": true,
  "count": 1,
  "inSet": true
}
```

完整参数与阶段说明见[变量参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md#题目维度全表)和[函数参考](http://design.ors-cn.com/agent-help/articles/design/conditions/functions.md)。

判断题不会自动返回 `true`／`false`，也不能假设编码就是“是”／“否”；使用保存的正式编码判断。`YESNO` 虽与单选共用读取，当前没有 `RADIO` 的写方法；该入口已从当前新增面板隐藏。

## 相关说明

- [通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)
- [选项设置](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)
