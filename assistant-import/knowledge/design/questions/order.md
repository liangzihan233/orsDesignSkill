# 排序题

排序题收集受访者对多个项目的先后次序。

## 使用前提与入口

问卷编辑 → 左侧题型面板。点击题型加入当前选中题之后，或拖到画布指定位置；选中题卡设置右侧属性。结构锁定时先停止收集。

## 操作步骤

1. 填写需要排序的项目，避免含义重复。
2. 配置必答、说明和初始呈现顺序。
3. 在模拟答题中拖动排序，检查保存次序与导出。

## 按钮与设置

| 名称           | 位置   | 作用与结果               | 可用条件               |
| -------------- | ------ | ------------------------ | ---------------------- |
| 添加／批量编辑 | 题卡   | 维护排序项目             | 有足够项目才有排序意义 |
| 拖动排序项     | 答题区 | 改变项目先后             | 非只读                 |
| 题目说明       | 副标题 | 说明首位代表最优还是最差 | 设置清晰方向           |

## 结果与限制

项目身份与显示位置分别保存。更改初始随机顺序不会改变选项编码；统计和公式需要按排序维度取值。

## 取值与可用函数

以下以本题实际编码为 `Q1` 为例，`Q1` 与 `context.questions.Q1` 等价。`Q1` 本身是题目对象，公式应返回具体字段或计算结果。字段支持表中的驼峰写法及大写协议名（如 `value`／`VALUE`、`hasAnswer`／`HAS_ANSWER`）；方法名区分大小写。

| 写法 | 含义与返回值 |
| --- | --- |
| `Q1.rank`／`Q1.values` | 按实际排序先后排列的编码数组。 |
| `Q1.value` | 只有一项时为编码，多项时为编码数组；未答为 `null`。 |
| `Q1.answers` | 按实际排序排列的项目标题数组。 |
| `Q1.answer`／`Q1.label` | 按排序排列的纯文本／富文本；单项为文本，多项为数组。 |
| `Q1.options` | 按题目定义顺序排列的全部项目，不代表参与者排名。 |
| `Q1.answerOptions`／`Q1.selected` | 已答项目对象；顺序按题目定义，不应用于取第一名。 |
| `Q1.hasAnswer` | 是否已经形成排序答案。 |

通用身份字段：`Q1.id` 为内部 ID，`Q1.code` 为题目编码，`Q1.type` 为内部题型。`Q1.isShow` 仅在运行器提供显隐快照时可读；缺少快照会报错，自动选择条件禁止读取。

未答时，`value`／`answer`／`label` 为 `null`，答案数组为空，`hasAnswer` 为 `false`；分数 `0` 不能单独用来判断是否作答。

选项对象字段使用大写：`VALUE`（正式编码）、`TEXT`（纯文本）、`LABEL`（富文本）、`IS_SELECTED`／`IS_ANSWERED`（是否已选或已填）、`ANSWER_VALUE`（该项输入值，普通已选项通常为 `true`）、`NOTE`（附带输入，无内容通常为 `null`）、`SCORE`（配置分值）。按 `VALUE` 查找具体选项，避免把数组下标当成身份。

`select()` 也按作答顺序返回编码；`unSelect()` 按定义顺序返回未进入答案的项目。取第一名使用 `rank[0]` 或 `answers[0]`。

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

假设项目 A1 为苹果、A2 为香蕉，参与者把香蕉排在苹果之前。在变量素材中选择 JavaScript 函数模式、结果类型“对象”：

```js
function compute(context) {
  return {
    codes: Q1.rank,
    titles: Q1.answers,
    first: Q1.rank[0] ?? null,
    selected: Q1.select()
  };
}
```

预期：

```json
{
  "codes": [
    "A2",
    "A1"
  ],
  "titles": [
    "香蕉",
    "苹果"
  ],
  "first": "A2",
  "selected": [
    "A2",
    "A1"
  ]
}
```

完整参数与阶段说明见[变量参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md#题目维度全表)和[函数参考](http://design.ors-cn.com/agent-help/articles/design/conditions/functions.md)。

## 相关说明

- [通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)
- [选项设置](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)
