# 人员信息与常用题预设

人员信息是带默认题干、选项或校验的题型模板，不是系统身份认证。当前包含姓名、手机号、邮箱、性别、身份证、年龄、学历、收入，以及补充的省份、职业预设。

## 使用前提与入口

问卷编辑 → 左侧题型面板。点击题型加入当前选中题之后，或拖到画布指定位置；选中题卡设置右侧属性。结构锁定时先停止收集。

## 操作步骤

1. 从人员信息分组选择模板，检查已有题干、输入类型和选项。
2. 修改适合项目的字段说明及必答设置；年龄预设按非负整数输入。
3. 常用题中的城市、专业、院校、行业、职业使用级联数据，按需替换来源。
4. 保存并验证输入错误、选项边界与隐私说明。

## 按钮与设置

| 名称                   | 位置         | 作用与结果               | 可用条件                   |
| ---------------------- | ------------ | ------------------------ | -------------------------- |
| 手机号／邮箱／身份证   | 人员信息面板 | 添加带格式校验的填空模板 | 只校验格式，不核验真人身份 |
| 年龄                   | 人员信息面板 | 添加非负整数输入         | 不能填写小数或负数         |
| 性别／学历／收入       | 人员信息面板 | 添加有预设选项的选择题   | 可自行修改选项             |
| 省份                   | 人员信息面板 | 使用省份列表预设         | 检查地区口径               |
| 职业                   | 人员信息面板 | 添加职业预设             | 按实际题型与选项编辑       |
| 城市／专业／院校／行业 | 常用题面板   | 添加对应级联预设         | 数据源可用才能逐级选择     |

## 结果与限制

这些答案是受访者自行填写，不会自动获得微信身份、GPS或PersonID。系统账户资料也不会自动填入。

电话／手机号预设使用明确的 PHONE 配置，内置手机号码校验，无须编写自定义校验。受访者可以选择国家或地区，默认中国；系统按完整国际号码校验移动号码，并保存为带区号的格式。明确固话、分机和无效号码会显示错误，不能进入下一题、下一页或提交；已有电话配置也不会被通用输入的默认“无校验”覆盖。主动在“选项属性 → 填空设置”选择文本、整数、小数或邮箱后，使用新类型及其校验，旧 PHONE 标记不会再强制按手机号处理。年龄预设仍默认非负整数，InputNumber 历史配置继续兼容；也可按需要改成小数。最终提交时服务端会用相同规则重新校验。非必答题可以留空。

## 取值与可用函数

预设没有额外的一套函数，按保存后的实际题型使用。下表中的 Q1 指实际编码，`Q1.type` 可读内部题型；不能按“年龄”“性别”等题干文字推断 API。

| 预设／实际题型 | 可获取的值与方法 | 写入限制 |
| --- | --- | --- |
| 姓名、手机号、邮箱、身份证、年龄／`FILLBLANK` | `value`、`values`、`answer`、`answers`、`hasAnswer`；数字计算先用 `VALUE`。 | 仅 initializeAnswer（本题）／resolveNext 允许 `setValue`、`clear`，仍执行原格式校验。 |
| 性别、学历、收入等／`RADIO` 或 `SELECT` | `value` 编码、`answer` 标题、`options`、`answerOptions`、`answerNotes`、`score`；`select`、`isSelected`、`unSelect`、`unSelected`。 | 仅允许写阶段使用 `setSelection`、`selectOption`、`deselectOption`、`clear`。 |
| 职业等多选预设／`CHECKBOX` | 同多选题；`values`、`answers`、`select()` 为稳定集合。 | 同普通多选，受选择数量及答案保护约束。 |
| 城市、省市区及行业等／`CASCADE`、`CITY` | `values` 为路径节点值数组，`area` 为末级分类或 null，`hasAnswer` 判断有无路径。 | 当前没有受控答案写方法。 |
| 日期、时间／`DATE`、`TIME` | `value` 为日期或时间文本，`values` 为单元素数组，`hasAnswer` 判断未答。 | 当前没有普通填空的 setValue／clear 权限。 |

身份字段与大小写、空值、全部函数参数见[变量参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md)；详细示例见[填空题](http://design.ors-cn.com/agent-help/articles/design/questions/fill-blank.md#取值与可用函数)、[单选题](http://design.ors-cn.com/agent-help/articles/design/questions/radio.md#取值与可用函数)、[下拉题](http://design.ors-cn.com/agent-help/articles/design/questions/select.md#取值与可用函数)和[级联题](http://design.ors-cn.com/agent-help/articles/design/questions/cascade.md#取值与可用函数)。手机号应保留带区号文本，不作数字转换。预设不会自动读取账户资料，也没有身份核验函数。

### 计算示例

假设年龄预设为 FILLBLANK，当前保存文本 `18`。在变量素材中选择 JavaScript 函数模式、结果类型“对象”：

```js
function compute(context) {
  return {
    age: Q1.hasAnswer ? VALUE(Q1.value) : null,
    adult: Q1.hasAnswer && VALUE(Q1.value) >= 18
  };
}
```

预期：

```json
{
  "age": 18,
  "adult": true
}
```

## 相关说明

- [通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)
- [选项设置](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)
