# 多项评分题

同一题对多个项目分别评分，每个项目保留独立答案。

## 使用前提与入口

问卷编辑 → 左侧题型面板。点击题型加入当前选中题之后，或拖到画布指定位置；选中题卡设置右侧属性。结构锁定时先停止收集。

## 操作步骤

1. 添加多项评分，编辑各评分项目。
2. 按需添加、删除或批量编辑项目，配置评分上限和评分样式；数字选项样式可选默认、倒序、循环或随机顺序，同一题各行保持一致。
3. 设置必答并测试每个项目是否都满足填写要求。

## 按钮与设置

| 名称           | 位置       | 作用与结果       | 可用条件           |
| -------------- | ---------- | ---------------- | ------------------ |
| 项目文字       | 题卡评分行 | 修改具体评分指标 | 每项身份独立       |
| 添加／删除项目 | 题卡       | 维护评分项目数量 | 删除会影响已有引用 |
| 最高分         | 题目属性   | 设置分项评分范围 | 以当前控件限制为准 |
| 分项评分       | 答题区     | 逐项填写分值     | 必答时检查完整性   |

## 结果与限制

多项评分需要按项目维度引用。题目总值的含义应查变量参考，不能把整个对象直接当单个数字。

## 数字评分的呈现顺序

在“题目属性”选择数字选项样式后，可设置默认、倒序、循环或随机顺序；星级、滑块、数字输入不显示此顺序设置。多项评分的各行使用同一顺序。更改显示顺序后点击的数字仍是实际分值，详情、公式和导出不按按钮位置重新赋值。

## 取值与可用函数

以下以本题实际编码为 `Q1` 为例，`Q1` 与 `context.questions.Q1` 等价。`Q1` 本身是题目对象，公式应返回具体字段或计算结果。字段支持表中的驼峰写法及大写协议名（如 `value`／`VALUE`、`hasAnswer`／`HAS_ANSWER`）；方法名区分大小写。

| 写法 | 含义与返回值 |
| --- | --- |
| `Q1.value`／`Q1.values` | 已评分项目分数的文本／文本数组；多项时 `value` 为数组。 |
| `Q1.answer`／`Q1.answers`／`Q1.label` | 答案记录中的项目标题；不是分数文本，保留空值键时标题也可能出现。 |
| `Q1.options` | 全部评分项目；`ANSWER_VALUE` 为该项实际分数，`SCORE` 为该项配置分值。 |
| `Q1.answerOptions`／`Q1.selected` | 已评分项目对象数组，0 分也保留。 |
| `Q1.score` | 各项实际分数之和。 |
| `Q1.maxScore` | 优先取 `scoreAttr.maxScore`；没有正值时累加项目配置分值，不能假设自动等于项目数乘每项最高分。 |
| `Q1.hasAnswer` | 至少一个项目已评分，不表示整题完整。 |

通用身份字段：`Q1.id` 为内部 ID，`Q1.code` 为题目编码，`Q1.type` 为内部题型。`Q1.isShow` 仅在运行器提供显隐快照时可读；缺少快照会报错，自动选择条件禁止读取。

没有答案记录时，`value`／`answer`／`label` 为 `null`，答案数组为空，`hasAnswer` 为 `false`；分数 `0` 不能单独用来判断是否作答。若记录保留了空项目键，标题字段仍可能包含该项目，使用 `answerOptions` 判断有效评分。

选项对象字段使用大写：`VALUE`（正式编码）、`TEXT`（纯文本）、`LABEL`（富文本）、`IS_SELECTED`／`IS_ANSWERED`（是否已选或已填）、`ANSWER_VALUE`（该项输入值，普通已选项通常为 `true`）、`NOTE`（附带输入，无内容通常为 `null`）、`SCORE`（配置分值）。按 `VALUE` 查找具体选项，避免把数组下标当成身份。

通过 `ANSWER_VALUE` 读取固定项目实际分数；`VALUE` 是项目编码。计算平均分使用 `Q1.values.map(Number)`，未答项目不在集合内。

### 可用方法与写入限制

| 写法 | 作用 |
| --- | --- |
| `Q1.select()` | 答案对象中记录的项目编码数组；保留的空值键也可能被计入，不是各项内容或分数。 |
| `Q1.isSelected("A1")` | 判断 A1 是否被记录在选择集合；有效填写用对应项目 IS_ANSWERED 判断。 |
| `Q1.unSelect()` | 不在上述选择集合中的项目编码数组。 |
| `Q1.unSelected("A2")` | 判断 A2 项存在且不在上述选择集合。 |

`unSelect()`／`unSelected()` 都只查询，不会取消勾选。方法参数接受字符串或有限数字，按字符串比较；纯数字编码在 `select()`／`unSelect()` 中可能返回数字，使用原生 `includes` 时注意类型。返回数组独立于答案，修改数组不会修改作答。答案对象保留空字符串或 null 键时，这组选择查询仍可能包含该项；统计有效填写优先用 `answerOptions`，获取已填编码用 `Q1.options.filter(item => item.IS_ANSWERED).map(item => item.VALUE)`。

当前未开放本题的 `setValue`、`setSelection`、`selectOption`、`deselectOption` 或 `clear` 写方法。不能直接给 `Q1.value` 赋值；返回数组或对象也只读，不会回写答案。

### 计算示例

假设 `SCORE` 题 A1（服务）得 4 分、A2（质量）得 2 分。在变量素材中选择 JavaScript 函数模式、结果类型“对象”：

```js
function compute(context) {
  return {
    service: Q1.options.find(item => item.VALUE === "A1")?.ANSWER_VALUE ?? null,
    values: Q1.values,
    titles: Q1.answers,
    total: Q1.score,
    average: AVERAGE(Q1.values.map(Number))
  };
}
```

预期：

```json
{
  "service": 4,
  "values": [
    "4",
    "2"
  ],
  "titles": [
    "服务",
    "质量"
  ],
  "total": 6,
  "average": 3
}
```

完整参数与阶段说明见[变量参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md#题目维度全表)和[函数参考](http://design.ors-cn.com/agent-help/articles/design/conditions/functions.md)。

## 相关说明

- [通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)
- [选项设置](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)
- [变量参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md)
