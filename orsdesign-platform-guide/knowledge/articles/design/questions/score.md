# 评分题

单项评分对一个指标打分，可选择数字选项、星级、滑块或数字输入样式。数字选项可设置默认、倒序、循环或随机顺序；顺序只改变显示位置，不改变实际分值。

## 使用前提与入口

问卷编辑 → 左侧题型面板。点击题型加入当前选中题之后，或拖到画布指定位置；选中题卡设置右侧属性。结构锁定时先停止收集。

## 操作步骤

1. 添加评分题并写明指标。
2. 在题目属性设置最高分和显示样式。
3. 测试最低分、最高分及未作答；设置必答时必须形成有效答案。

## 按钮与设置

| 名称     | 位置     | 作用与结果             | 可用条件         |
| -------- | -------- | ---------------------- | ---------------- |
| 最高分   | 题目属性 | 调整评分上限           | 遵循输入范围     |
| 显示样式 | 题目属性 | 数字选项／星级／滑块／数字输入 | 当前单项评分可选 |
| 评分控件 | 答题区   | 记录一个分数           | 未作答与0分不同  |

## 结果与限制

显示占位值不等于答题者已作答；导出未作答为空。不要把单项评分与多项评分的数组或分项维度混用。

## 数字评分的呈现顺序

在“题目属性”选择数字选项样式后，可设置默认、倒序、循环或随机顺序；星级、滑块、数字输入不显示此顺序设置。多项评分的各行使用同一顺序。更改显示顺序后点击的数字仍是实际分值，详情、公式和导出不按按钮位置重新赋值。

## 取值与可用函数

以下以本题实际编码为 `Q1` 为例，`Q1` 与 `context.questions.Q1` 等价。`Q1` 本身是题目对象，公式应返回具体字段或计算结果。字段支持表中的驼峰写法及大写协议名（如 `value`／`VALUE`、`hasAnswer`／`HAS_ANSWER`）；方法名区分大小写。

| 写法 | 含义与返回值 |
| --- | --- |
| `Q1.value`／`Q1.values` | 单项分数的文本，例如 `"4"`／`["4"]`。 |
| `Q1.answer`／`Q1.answers`／`Q1.label` | 分数文本／单元素文本数组。 |
| `Q1.score` | 实际分数，数值类型，例如 `4`；未答为 `0`。 |
| `Q1.maxScore` | `scoreQuAttr.max` 配置值，缺省为 `5`。 |
| `Q1.hasAnswer` | 是否已评分；允许范围内的 0 分也算作答。 |

通用身份字段：`Q1.id` 为内部 ID，`Q1.code` 为题目编码，`Q1.type` 为内部题型。`Q1.isShow` 仅在运行器提供显隐快照时可读；缺少快照会报错，自动选择条件禁止读取。

未答时，`value`／`answer`／`label` 为 `null`，答案数组为空，`hasAnswer` 为 `false`；分数 `0` 不能单独用来判断是否作答。本页指 `SCORE_SINGLE`；计算分数可使用 `SUM`、`AVERAGE`、`ROUND`、`IF`，先以 `hasAnswer` 区分未答与零分。

### 可用方法与写入限制

本题没有普通选择项：`Q1.select()`、`Q1.unSelect()` 返回 `[]`，`Q1.isSelected("A1")`、`Q1.unSelected("A1")` 返回 `false`。这些查询不能代替本题的答案读取。

当前未开放本题的 `setValue`、`setSelection`、`selectOption`、`deselectOption` 或 `clear` 写方法。不能直接给 `Q1.value` 赋值；返回数组或对象也只读，不会回写答案。

### 计算示例

假设最高分为 5，当前打 4 分。在变量素材中选择 JavaScript 函数模式、结果类型“对象”：

```js
function compute(context) {
  return {
    raw: Q1.value,
    score: Q1.score,
    percent: Q1.hasAnswer ? ROUND(Q1.score / Q1.maxScore * 100, 1) : null
  };
}
```

预期：

```json
{
  "raw": "4",
  "score": 4,
  "percent": 80
}
```

完整参数与阶段说明见[变量参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md#题目维度全表)和[函数参考](http://design.ors-cn.com/agent-help/articles/design/conditions/functions.md)。

## 相关说明

- [通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)
- [选项设置](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)
- [多项评分](http://design.ors-cn.com/agent-help/articles/design/questions/multi-score.md)
