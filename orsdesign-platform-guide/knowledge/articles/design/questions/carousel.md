# 轮播图

轮播图可展示多张图片并采集多选答案。点击图片或右上角复选框均可选中，再次点击可取消。切换展示图片不会改变已选状态；只读时不能修改。

## 使用前提与入口

问卷编辑 → 左侧题型面板。点击题型加入当前选中题之后，或拖到画布指定位置；选中题卡设置右侧属性。结构锁定时先停止收集。

## 操作步骤

1. 添加轮播图，在右侧“选项属性”中上传图片并按需移除。没有图片或删除全部图片后，仍可在该页签继续上传。
2. 在“题目属性”中配置高度和自动播放。
3. 在手机与桌面预览轮播内容；点击图片选中或取消，也可使用右上角复选框。切换到下一张继续选择，确认前一张保持已选，再检查提交结果。

## 按钮与设置

| 名称         | 位置     | 作用与结果       | 可用条件                 |
| ------------ | -------- | ---------------- | ------------------------ |
| 上传轮播图片 | 选项属性 | 追加图片         | 最多10张；到上限禁用上传 |
| 删除图片     | 选项属性的图片列表 | 移除当前图片     | 不删除其他图片           |
| 高度         | 题目属性 | 设置轮播展示高度 | 按设备检查               |
| 自动播放     | 题目属性 | 自动切换图片     | 不改变已选答案           |
| 图片／复选框 | 答题区 | 选择或取消该图片；图片按钮支持 Enter、空格键 | 可同时选择多张；非只读 |

## 结果与限制

轮播图可在基本属性中切换“是否必答”，并按所选图片参与答题进度、逻辑、公式、答案详情和导出。发布前应添加图片；暂时没有图片时可设为非必答。历史没有图片 ID 的问卷读取及保存时会为每张图片生成稳定且独立的身份与选项编码；历史答卷不会自动补造选择。没有图片时显示空状态。

## 等待时间与答案

轮播图是可作答的多选图片题，使用题目编码与图片选项编码参与逻辑、公式和数据读取。等待秒数在基本属性设置；开启全局倒计时时各题并行等待，未开启时保留历史同页秒数累加规则，详见[答题时间安排](http://design.ors-cn.com/agent-help/articles/collect/settings-schedule.md)。

## 取值与可用函数

以下以实际编码为 `Q1` 为例，与 `context.questions.Q1` 等价。字段支持驼峰和大写协议名，例如 `values`／`VALUES`、`answerOptions`／`ANSWER_OPTIONS`；`Q1` 本身是对象，公式应返回具体字段。

| 写法 | 含义与返回值 |
| --- | --- |
| `Q1.value`／`Q1.values` | 已选图片的正式编码；value 单项为编码、多项为数组，values 始终为数组。 |
| `Q1.answer`／`Q1.answers`／`Q1.label` | 已选图片的文件名；单项为文本，多项为数组，answers 始终为数组。 |
| `Q1.options` | 全部图片选项对象，含 VALUE、TEXT、LABEL、IS_SELECTED、IS_ANSWERED、ANSWER_VALUE、NOTE、SCORE；不提供图片 URL。 |
| `Q1.answerOptions`／`Q1.selected` | 已选图片的对象数组，selected 不是布尔值。 |
| `Q1.hasAnswer` | 是否至少选中一张图片；未答为 false。 |
| `Q1.id`／`Q1.code`／`Q1.type` | 内部 ID／题目编码／内部类型 CAROUSEL。 |

未答时 `value`／`answer`／`label` 为 `null`，答案数组为空。`options` 保留全部图片。自动播放当前显示的图片不是答案，切换展示图片不会改变所选集合。

### 可用方法与写入限制

| 写法 | 当前行为与使用建议 |
| --- | --- |
| `Q1.values.includes("A1")` | 按正式图片编码判断是否已选。 |
| `Q1.options.filter(item => !item.IS_SELECTED).map(item => item.VALUE)` | 获取未选图片编码。 |
| `SELECT_SIZE(Q1.answerOptions)` | 统计已选图片数量。 |
| `Q1.select()`／`Q1.isSelected(code)` | 当前通用方法没有正确解析轮播图片编码：已选项可能返回空字符串，编码判断不可靠；使用 values 或选项对象替代。 |
| `Q1.unSelect()`／`Q1.unSelected(code)` | 同受图片编码解析限制，不用于轮播的业务判断；这两个方法本身只查询，不会取消勾选。 |

当前未开放 CAROUSEL 的 `setValue`、`setSelection`、`selectOption`、`deselectOption` 或 `clear` 写方法；不能直接给 `value` 赋值。`isShow` 只在运行器提供显隐快照时可读，自动选择条件禁止读取。

### 计算示例

假设两张轮播图片的文件名分别是苹果、香蕉，正式编码为 A1、A2，目前两张均已选。在变量素材中选择 JavaScript 函数模式、结果类型“对象”：

```js
function compute(context) {
  return {
    codes: Q1.values,
    titles: Q1.answers,
    hasApple: Q1.values.includes("A1"),
    unselected: Q1.options.filter(item => !item.IS_SELECTED).map(item => item.VALUE),
    count: SELECT_SIZE(Q1.answerOptions)
  };
}
```

预期：

```json
{
  "codes": ["A1", "A2"],
  "titles": ["苹果", "香蕉"],
  "hasApple": true,
  "unselected": [],
  "count": 2
}
```

参见[变量参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md#题目维度全表)和[函数参考](http://design.ors-cn.com/agent-help/articles/design/conditions/functions.md)。

## 相关说明

- [通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)
- [选项设置](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)
