# 滑块题

滑块在数值区间内选择值，适合连续或固定步长评价。

## 使用前提与入口

问卷编辑 → 左侧题型面板。点击题型加入当前选中题之后，或拖到画布指定位置；选中题卡设置右侧属性。结构锁定时先停止收集。

## 操作步骤

1. 设置题干及区间含义。
2. 配置最小、最大和步长。
3. 拖动或用键盘操作滑块，检查边界和必答判断。

## 按钮与设置

| 名称           | 位置             | 作用与结果       | 可用条件       |
| -------------- | ---------------- | ---------------- | -------------- |
| 最小值／最大值 | 题目属性滑块设置 | 定义可选择范围   | 区间必须有效   |
| 步长           | 题目属性         | 定义每次变化幅度 | 正数且适配区间 |
| 滑块           | 答题区           | 记录当前选值     | 非只读         |

## 结果与限制

初始控件位置可能是视觉占位，不应据此认定已作答。导出保留合法0分，不会把未答统一写成0。

范围与步长来自本题滑块设置，公开页与最终系统校验使用同一合同。当前编辑器步长最小为 1；最大端点即使不能被步长整除也可以选择。越界值或不符合步长的中间值不能提交。

## 取值与可用函数

以下以本题实际编码为 `Q1` 为例，`Q1` 与 `context.questions.Q1` 等价。`Q1` 本身是题目对象，公式应返回具体字段或计算结果。字段支持表中的驼峰写法及大写协议名（如 `value`／`VALUE`、`hasAnswer`／`HAS_ANSWER`）；方法名区分大小写。

| 写法 | 含义与返回值 |
| --- | --- |
| `Q1.value`／`Q1.values` | 当前数值／单元素数组；若历史答案为数字文本则保留其原类型，计算时可用 `Number` 转换。 |
| `Q1.answer`／`Q1.answers`／`Q1.label` | 数值的文本表示／文本数组。 |
| `Q1.score` | 当前数值转换成的分数；未答为 0。 |
| `Q1.maxScore` | 优先取 `scoreAttr.maxScore`；没有正值时当前读取 `scaleAttr.max` 或回退 10，不会自动读取 `sliderAttr.max`。 |
| `Q1.hasAnswer` | 是否实际作答；合法 0 与未答不同。 |

通用身份字段：`Q1.id` 为内部 ID，`Q1.code` 为题目编码，`Q1.type` 为内部题型。`Q1.isShow` 仅在运行器提供显隐快照时可读；缺少快照会报错，自动选择条件禁止读取。

未答时，`value`／`answer`／`label` 为 `null`，答案数组为空，`hasAnswer` 为 `false`；分数 `0` 不能单独用来判断是否作答。节点或滑块位置不是普通选项编码，不使用 `isSelected("A1")` 判断数值。需要业务阈值时直接比较 `score`，不要把 `maxScore` 当成控件区间的可靠来源。

### 可用方法与写入限制

本题没有普通选择项：`Q1.select()`、`Q1.unSelect()` 返回 `[]`，`Q1.isSelected("A1")`、`Q1.unSelected("A1")` 返回 `false`。这些查询不能代替本题的答案读取。

当前未开放本题的 `setValue`、`setSelection`、`selectOption`、`deselectOption` 或 `clear` 写方法。不能直接给 `Q1.value` 赋值；返回数组或对象也只读，不会回写答案。

### 计算示例

假设 `SCALE_SLIDER` 题当前选择 40，`scoreAttr.maxScore` 明确配置为 100。在变量素材中选择 JavaScript 函数模式、结果类型“对象”：

```js
function compute(context) {
  return {
    value: Q1.value,
    answer: Q1.answer,
    score: Q1.score,
    answered: Q1.hasAnswer,
    percent: Q1.hasAnswer ? ROUND(Q1.score / Q1.maxScore * 100, 1) : null
  };
}
```

预期：

```json
{
  "value": 40,
  "answer": "40",
  "score": 40,
  "answered": true,
  "percent": 40.0
}
```

完整参数与阶段说明见[变量参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md#题目维度全表)和[函数参考](http://design.ors-cn.com/agent-help/articles/design/conditions/functions.md)。

## 相关说明

- [通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)
- [选项设置](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)
