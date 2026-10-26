# 日期题

日期题使用日期控件填写单个日期，属于常用预设中的可见入口。

## 使用前提与入口

问卷编辑 → 左侧题型面板。点击题型加入当前选中题之后，或拖到画布指定位置；选中题卡设置右侧属性。结构锁定时先停止收集。

## 操作步骤

1. 添加日期题，写清日期含义。
2. 设置必答及需要的校验。
3. 打开日历选择日期，测试保存后回显。

## 按钮与设置

| 名称     | 位置     | 作用与结果   | 可用条件               |
| -------- | -------- | ------------ | ---------------------- |
| 日历选择 | 答题区   | 选择日期     | 非只读                 |
| 清空     | 日期输入 | 移除当前日期 | 非只读；必答仍需重选   |
| 答案校验 | 基本属性 | 追加业务判断 | 使用日期可支持的表达式 |

## 结果与限制

不要将系统开始、结束时间与受访者填写的日期混用。日期时间组合类型在兼容模型中存在，但不是当前正常面板保证提供的入口。

## 取值与可用函数

以下以本题实际编码为 `Q1` 为例，`Q1` 与 `context.questions.Q1` 等价。`Q1` 本身是题目对象，公式应返回具体字段或计算结果。字段支持表中的驼峰写法及大写协议名（如 `value`／`VALUE`、`hasAnswer`／`HAS_ANSWER`）；方法名区分大小写。

| 写法 | 含义与返回值 |
| --- | --- |
| `Q1.value` | 当前日期或时间文本，未答为 `null`。 |
| `Q1.values` | 有答案时为单元素数组。 |
| `Q1.answer`／`Q1.label`／`Q1.answers` | 相同文本／单元素文本数组。 |
| `Q1.hasAnswer` | 是否有答案；格式是否合法仍需校验。 |

通用身份字段：`Q1.id` 为内部 ID，`Q1.code` 为题目编码，`Q1.type` 为内部题型。`Q1.isShow` 仅在运行器提供显隐快照时可读；缺少快照会报错，自动选择条件禁止读取。

未答时，`value`／`answer`／`label` 为 `null`，答案数组为空，`hasAnswer` 为 `false`；分数 `0` 不能单独用来判断是否作答。日期控件通常保存 `YYYY-MM-DD` 文本；日期时间兼容题保存 `YYYY-MM-DD HH:mm:ss`。可用原生字符串方法拆分；调用 `YEAR`、`MONTH`、`DAY`、`HOUR`、`MINUTE` 等日期函数前，按其参数合同构造有效日期。不要直接把时间文本当数值相减。`DATE`、`TIME`、`DATETIME` 当前没有普通填空题的 `setValue`／`clear` 权限。

### 可用方法与写入限制

本题没有普通选择项：`Q1.select()`、`Q1.unSelect()` 返回 `[]`，`Q1.isSelected("A1")`、`Q1.unSelected("A1")` 返回 `false`。这些查询不能代替本题的答案读取。

当前未开放本题的 `setValue`、`setSelection`、`selectOption`、`deselectOption` 或 `clear` 写方法。不能直接给 `Q1.value` 赋值；返回数组或对象也只读，不会回写答案。

### 计算示例

假设当前答案为 `2026-10-22`。在变量素材中选择 JavaScript 函数模式、结果类型“对象”：

```js
function compute(context) {
  return {
    raw: Q1.value,
    parts: Q1.hasAnswer ? String(Q1.value).split("-") : [],
    answered: Q1.hasAnswer
  };
}
```

预期：

```json
{
  "raw": "2026-10-22",
  "parts": [
    "2026",
    "10",
    "22"
  ],
  "answered": true
}
```

完整参数与阶段说明见[变量参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md#题目维度全表)和[函数参考](http://design.ors-cn.com/agent-help/articles/design/conditions/functions.md)。

## 相关说明

- [通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)
- [选项设置](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)
