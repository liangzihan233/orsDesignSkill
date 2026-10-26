# 文件上传题

文件上传题接收受访者附件，上传成功后保存附件链接及可用原文件名。

## 使用前提与入口

上传题已从左侧题型面板隐藏。已有问卷中的上传题仍可选中、编辑和答题；选中题卡设置右侧属性，结构锁定时先停止收集。

## 操作步骤

1. 在已有问卷中选中上传题，检查题目说明。
2. 设置必答，模拟上传成功、失败及删除／重选场景。
3. 提交测试答卷后在详情查看附件，在Excel的attachment表核对链接。

## 按钮与设置

| 名称     | 位置     | 作用与结果             | 可用条件                     |
| -------- | -------- | ---------------------- | ---------------------------- |
| 上传     | 答题区   | 上传文件并加入当前答案 | 非只读；文件符合上传服务限制 |
| 文件列表 | 答题区   | 展示已上传内容         | 上传成功才形成有效附件       |
| 附件链接 | 答卷详情 | 打开实际保存文件       | 附件存在且当前访问可用       |

## 结果与限制

收集设置里的“仅单个文件”“隐藏链接”目前主要保存配置，不应据此保证限制已执行。历史答案仅有URL时，导出无法还原原始文件名。

## 取值与可用函数

以下以本题实际编码为 `Q1` 为例，`Q1` 与 `context.questions.Q1` 等价。`Q1` 本身是题目对象，公式应返回具体字段或计算结果。字段支持表中的驼峰写法及大写协议名（如 `value`／`VALUE`、`hasAnswer`／`HAS_ANSWER`）；方法名区分大小写。

| 写法 | 含义与返回值 |
| --- | --- |
| `Q1.value` | 上传答案本身；当前控件为文件链接集合，一个链接时此维度会收缩成字符串。 |
| `Q1.values` | 文件链接数组；未答为 `[]`，读取集合优先用此字段。 |
| `Q1.answer`／`Q1.answers` | 当前链接的文本表示／文本数组；不会自动变成原文件名。 |
| `Q1.hasAnswer` | 是否已存在上传答案；不代表链接永久有效或文件可下载。 |

通用身份字段：`Q1.id` 为内部 ID，`Q1.code` 为题目编码，`Q1.type` 为内部题型。`Q1.isShow` 仅在运行器提供显隐快照时可读；缺少快照会报错，自动选择条件禁止读取。

未答时，`value`／`answer`／`label` 为 `null`，答案数组为空，`hasAnswer` 为 `false`；分数 `0` 不能单独用来判断是否作答。常用 `Q1.values.length` 或 `SELECT_SIZE(Q1.values)` 统计链接数量；`select()` 返回普通选项编码，不能用来统计上传文件。历史扩展答案可能含元数据，需先检查实际结构；本文不承诺从链接还原文件名。题目基本属性中的“题目附件”是独立附加数据，不进入这些主答案字段。

### 可用方法与写入限制

本题没有普通选择项：`Q1.select()`、`Q1.unSelect()` 返回 `[]`，`Q1.isSelected("A1")`、`Q1.unSelected("A1")` 返回 `false`。这些查询不能代替本题的答案读取。

当前未开放本题的 `setValue`、`setSelection`、`selectOption`、`deselectOption` 或 `clear` 写方法。不能直接给 `Q1.value` 赋值；返回数组或对象也只读，不会回写答案。

### 计算示例

假设 `UPLOADFILE` 题已上传一个文件，当前答案为链接数组 `["https://example.com/files/report.pdf"]`；此地址仅为示例。在变量素材中选择 JavaScript 函数模式、结果类型“对象”：

```js
function compute(context) {
  return {
    count: SELECT_SIZE(Q1.values),
    first: Q1.values[0] ?? null,
    answered: Q1.hasAnswer
  };
}
```

预期：

```json
{
  "count": 1,
  "first": "https://example.com/files/report.pdf",
  "answered": true
}
```

完整参数与阶段说明见[变量参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md#题目维度全表)和[函数参考](http://design.ors-cn.com/agent-help/articles/design/conditions/functions.md)。

## 相关说明

- [通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)
- [选项设置](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)
- [附件控制](http://design.ors-cn.com/agent-help/articles/collect/settings-upload-bank.md)
- [Excel导出](http://design.ors-cn.com/agent-help/articles/data/export.md)
