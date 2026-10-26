# 隐藏与兼容题型附录

题型模型或渲染器中存在某个名称，不等于左侧面板可新增。当前工具栏先读取服务端模板，再过滤隐藏类型、分组和标签，并主动补入部分入口。

## 使用前提与入口

用于阅读历史问卷、题库快照或工具栏加载失败时的备用题型；正常新增以当前左侧可见入口为准。

## 操作步骤

1. 先在题型面板确认入口，不能仅按历史教程寻找。
2. 打开历史问卷后选中该题，查看当前实际提供的属性与渲染。
3. 需迁移时优先替换为可见题型，先测试答案、逻辑与导出。

## 按钮与设置

| 名称                                             | 位置           | 作用与结果                       | 可用条件                 |
| ------------------------------------------------ | -------------- | -------------------------------- | ------------------------ |
| 矩阵选择                                         | 正常面板       | 合并矩阵单选／多选，模式可切换   | 当前主动提供             |
| 矩阵数值／下拉／组合／自动增加／量表／滑块 | 隐藏类型       | 保留兼容模型与部分编辑、渲染     | 不作为正常新增能力       |
| 分组多选／分组题型                               | 隐藏类型       | 历史数据兼容                     | 建议使用当前选择题分组   |
| 旧矩阵 CHEN 系列                                 | 隐藏类型       | 兼容旧数据身份                   | 不作为正常新增入口       |
| 图片单选／签名／定位／热区／图片上传／颜色       | 隐藏扩展标签内 | 可能有运行渲染，但正常标签被隐藏 | 不要据此承诺完整新增配置 |
| 核销码／地图／滚动文字／综合指标                 | 隐藏扩展组件   | 部分为兼容或通用展示             | 不代表独立业务系统       |
| 图片多选／轮播                                   | 主动提升入口   | 在过滤后补入可见面板             | 与被隐藏扩展标签不同     |

## 结果与限制

兼容签名题使用画布绘制，定位题请求浏览器位置权限；它们不等于欢迎页签名或导出IP所在地。隐藏类型没有与正常面板同等的新增、配置与回归保证。工具栏失败会使用本地备用列表，内容可能与正常接口列表不同。

## 取值与可用函数

隐藏题型按实际 `quType` 使用接口，不会因为外观相似自动取得普通题写权限。可作答题通用身份字段为 `id`、`code`、`type`，未答通常 `value = null`、`values = []`、`hasAnswer = false`；`Q1` 必须是实际题目编码。字段支持驼峰与大写协议名。

| 实际类型 | 可读值／方法 | 专用边界 |
| --- | --- | --- |
| `YESNO`、`COMPRADIO`、`IMGRADIO`、`ENUMQU` | `value`／`values` 选项编码、`answer`／`answers` 标题、`label`、`options`／`answerOptions`／`selected`、`answerNotes`、`hasAnswer`、`score`／`maxScore`；四个选择查询方法。 | 不是布尔答案，无普通单选的写方法。 |
| `COMPCHECKBOX`、`CHECKBOXGROUP`、`IMGCHECKBOXGROUP` | 同多选题的值、标题、选项对象和四个选择查询方法；分组题的普通选项从各组展开。 | 分组显示不产生独立题目变量，无普通多选的写方法。 |
| `MULTIFILLBLANKLINE` | `values` 输入文本数组、`options[].ANSWER_VALUE` 分项值；四个查询方法读取答案记录中的项目编码；有效填写使用 options[].IS_ANSWERED。 | 按项目编码定位，无 setValue／clear。 |
| `ANSWER` | 无普通选项时 `value` 为输入，`answer` 为文本、`hasAnswer` 判断已填。 | 只有带 AI 子类型并规范化为 AI 后才有 AI 方法；普通历史问答无写方法。 |
| `CHENRADIO`、`CHENCHECKBOX`、`COMPCHENRADIO` | `rows`、`answerRows`、`cols` 与行 `CELLS`；`values` 为行列标识。 | 按矩阵读取，无普通选项写方法。 |
| `MATRIX_NUMBER`、`MATRIX_SELECT`、`MATRIX_GROUP`、`MATRIX_AUTO_ADD`、`CHENFBK` | `rows[].CELLS` 读取文本／数值／选择单元，`values` 为展平文本。 | 按真实行列编码读，无矩阵写方法。 |
| `MATRIX_SCALE`、`MATRIX_SLIDER`、`CHENSCORE` | `rows[].SCORE` 为每行数值、`score` 为行分数之和、`values` 如 `["A1:4"]`；`answer` 为分数文本。 | 无普通 cols 选择协议；maxScore 优先题目计分配置，无配置时按行数乘题目 maxScore 或缺省 10。 |
| `DATETIME` | `value` 日期时间文本、`values` 单元素数组、`answer`／`answers` 文本、`hasAnswer`。 | 无普通填空的写权限，详见日期题。 |
| `UPLOAD_IMAGE` | `values` 上传链接数组、`value` 单项收缩、`hasAnswer`。 | 无选项查询意义或写方法，详见文件上传题。 |
| `COLOR_PICKER` | `value` 颜色文本、`answer` 相同文本、`hasAnswer`。 | 控件默认颜色不等于已答，无 setValue。 |
| `SIGNATURE` | `value` PNG data URL 文本、`hasAnswer`。 | 不提供笔画、OCR 或签名验证函数，无 setValue。 |
| `GEOLOCATION` | `value` 为 `纬度,经度` 文本，`hasAnswer`。 | 不是 ENV.IP，不提供自动地区反查；无写方法。 |
| `IMAGE_HOT` | `value` 为 `{x,y}` 相对坐标对象，使用 `Q1.value?.x`／`.y`。 | 不是选项编码；answer 不作为坐标协议，无写方法。 |
| `BIGQU` | 有正式编码时仍是通用题目对象，可读 id/code/type；当前不提供分组题专用函数。 | 不要把行配置当成子题答案或承诺独立计算能力。 |
| `PAGETAG`、`PARAGRAPH`、`DIVIDER`、`MAP`、`DW_COMPONENT`、`COMPOSITE_INDICATOR` | 展示／结构类型不进入 context.questions。 | 没有独立答案函数；CAROUSEL 已独立规范化成可作答题，见轮播图。 |

四个选择查询是 `select()`、`isSelected(code)`、`unSelect()`、`unSelected(code)`；只有实际存在普通选项／项目时才有对应集合意义，矩阵用行列协议。`unSelect()` 不取消选择。全部上述隐藏类型均未开放受控答案写方法；不能给只读字段赋值。`isShow` 只在提供显隐快照时可读，自动选择禁止读取。

参见[矩阵题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md#取值与可用函数)、[文件上传题](http://design.ors-cn.com/agent-help/articles/design/questions/upload.md#取值与可用函数)、[判断题](http://design.ors-cn.com/agent-help/articles/design/questions/yes-no.md#取值与可用函数)、[变量参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md#选项对象-optionobject)。

### 计算示例

假设兼容量表矩阵 MATRIX_SCALE 的 A1（服务）得 4 分，A2（质量）得 2 分。在变量素材中选择 JavaScript 函数模式、结果类型“对象”：

```js
function compute(context) {
  return {
    values: Q1.values,
    scores: Q1.rows.map(row => row.SCORE),
    total: Q1.score
  };
}
```

预期：

```json
{
  "values": [
    "A1:4",
    "A2:2"
  ],
  "scores": [
    4,
    2
  ],
  "total": 6
}
```

## 相关说明

- [题型选择](http://design.ors-cn.com/agent-help/articles/design/workspace/overview.md)
- [欢迎页签名](http://design.ors-cn.com/agent-help/articles/design/appearance/welcome.md)
- [功能状态说明](http://design.ors-cn.com/agent-help/articles/faq/availability.md)

## 已有矩阵输入列

新建矩阵填空或加载已有矩阵填空、数值、下拉或组合题时，在“题目属性 → 选项配置”的下拉框选中具体列后，可选择文本、多行文本、数字、下拉选择、日期、时间或日期时间；可以设置输入提示，下拉选项按每行一项填写。保存后应在预览中检查实际控件和答案。矩阵填空已在左侧矩阵题区域开放，其他兼容类型未开放新增入口。
