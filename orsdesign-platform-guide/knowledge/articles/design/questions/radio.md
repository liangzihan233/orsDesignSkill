# 单选题

每题选择一个答案，适用于分类、资格判断和分支入口。

## 使用前提与入口

问卷编辑 → 左侧题型面板。点击题型加入当前选中题之后，或拖到画布指定位置；选中题卡设置右侧属性。结构锁定时先停止收集。

## 操作步骤

1. 填写题干和选项，按需添加“其他”输入。
2. 设置必答、顺序、排列和选项编码；只能保留一个默认项。
3. 需要条件自动填写时打开自动选择；用模拟答题核对各分支。

## 按钮与设置

| 名称                 | 位置     | 作用与结果             | 可用条件               |
| -------------------- | -------- | ---------------------- | ---------------------- |
| 添加／其他／批量编辑 | 题卡     | 维护选项及开放补充     | 至少保留有效选项       |
| 默认选中／固定       | 选项属性 | 初始答案／随机位置控制 | 针对当前配置选项       |
| 禁止引用答案         | 选项属性 → 选项配置 | 将当前选项排除出富文本引用和矩阵动态行 | 默认关闭；仍可正常选择和提交 |
| 多项选择             | 题目属性 | 转成多选模式           | 切换后检查默认项与限制 |
| 自动选择             | 选项属性 | 按表达式选中选项       | 表达式通过校验         |
| 选项分组／绑定       | 选项属性 | 设置分组布局和关联     | 有足够选项             |

## 结果与限制

选择“其他”后如设置必填输入，还需填写补充内容。随机呈现不会改变导出选项编码。
“测试本题”首次打开或点击重置时，也会应用当前默认选项。

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

假设本题的 A1 为苹果、A2 为香蕉，仅选中 A1。在变量素材中选择 JavaScript 函数模式、结果类型“对象”：

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

## 相关说明

- [通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)
- [选项设置](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)
- [自动选择](http://design.ors-cn.com/agent-help/articles/design/properties/auto-select.md)
- [普通配额](http://design.ors-cn.com/agent-help/articles/design/quota/normal.md)

`initializeAnswer` 只能修改本题答案，并且一次调用不能同时返回 answer 和调用答案修改方法；`beforeShow` 只返回本题展示文案，禁止写答案。已有恢复或人工答案优先，预填执行资格与一次性状态见[四个题目钩子](http://design.ors-cn.com/agent-help/articles/design/properties/common.md#四个题目钩子)。
