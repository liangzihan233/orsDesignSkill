# 多选题

允许选择多个答案，可设置最少和最多选择数。

## 使用前提与入口

问卷编辑 → 左侧题型面板。点击题型加入当前选中题之后，或拖到画布指定位置；选中题卡设置右侧属性。结构锁定时先停止收集。

## 操作步骤

1. 添加并编辑选项，设置必答。
2. 填写最少／最多选择数量，确保不超出有效选项数。
3. 配置选项分组、绑定、固定或自动选择；测试超限与不足时的提示。

## 按钮与设置

| 名称               | 位置     | 作用与结果         | 可用条件             |
| ------------------ | -------- | ------------------ | -------------------- |
| 最少选择／最多选择 | 题目属性 | 限制可接受选择数量 | 数量需与有效选项一致 |
| 多项选择           | 题目属性 | 切回单选模式       | 转换后重新核对默认项 |
| 其他选项           | 题卡     | 增加补充输入       | 可结合开放项必填     |
| 选项顺序／排列     | 选项属性 | 随机或分行分列呈现 | 分组启用时由分组控制 |
| 禁止引用答案       | 选项属性 → 选项配置 | 引用及矩阵动态行只使用允许引用的已选项 | 每项独立，默认关闭 |

## 结果与限制

更新于 2026-10-25。公开答题页的普通多选项将复选框与文字在选项卡内垂直居中；长文本可以换行，换行后的文字块仍保持居中。选中后需要填写的补充输入继续显示在对应选项下方。

多选参与多项命中时可能同时命中多个配额检查点。审核标签不改变其答案；隐藏选项会清除原选择及其他输入。

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

仅在 `initializeAnswer`（本题答案预填）或 `resolveNext`（下一题）钩子中可写：

| 写法 | 作用 |
| --- | --- |
| `Q1.setSelection(["A2"])` | 整体替换选择；空数组清空。 |
| `Q1.selectOption("A2")` | 选中 A2；单选替换原选项，多选追加。 |
| `Q1.deselectOption("A2")` | 取消 A2。 |
| `Q1.clear()` | 清空选择及对应附带输入。 |

公式变量、显示条件、自动选择条件和答案校验不能写答案；`resolveNext` 不能修改当前已校验题，其他已受保护题也不能改。无效、隐藏或禁用选项会被拒绝；单选同时设置多个编码会报错，取消选项会清除对应附带输入。

### 计算示例

假设本题的 A1 为苹果、A2 为香蕉，两项均已选。在变量素材中选择 JavaScript 函数模式、结果类型“对象”：

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
  "value": [
    "A1",
    "A2"
  ],
  "answer": [
    "苹果",
    "香蕉"
  ],
  "selected": [
    "A1",
    "A2"
  ],
  "unselected": [],
  "hasApple": true,
  "count": 2,
  "inSet": true
}
```

完整参数与阶段说明见[变量参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md#题目维度全表)和[函数参考](http://design.ors-cn.com/agent-help/articles/design/conditions/functions.md)。

## 相关说明

- [通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)
- [选项设置](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)
- [配额概念](http://design.ors-cn.com/agent-help/articles/design/quota/overview.md)

`initializeAnswer` 只能修改本题答案，并且一次调用不能同时返回 answer 和调用答案修改方法；`beforeShow` 只返回本题展示文案，禁止写答案。已有恢复或人工答案优先，预填执行资格与一次性状态见[四个题目钩子](http://design.ors-cn.com/agent-help/articles/design/properties/common.md#四个题目钩子)。
