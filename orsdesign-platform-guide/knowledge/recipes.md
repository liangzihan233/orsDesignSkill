# 经配套运行器验证的代码配方

版本：1.177.0。编码和答案均为演示；必须换成实际问卷编码并核对题型。测试预期随 recipes.json 提供；运行证据由交付验证记录说明，资料本身不代表已经验收用户问卷。

## 多选任意命中才显示本题

ID：display-any

粘贴位置：目标题目 → 题目逻辑 → 显示逻辑 → 本题显示代码（表达式）

Q1 是来源题真实编码，A1/A2 是其选项编码。未答返回 false。

```js
Q1.isSelected("A1") || Q1.isSelected("A2")
```

测试：选中 A1 → {"ok":true,"value":true}；选中 A2 → {"ok":true,"value":true}；只选 A3 → {"ok":true,"value":false}；未作答 → {"ok":true,"value":false}

## 选项显示条件

ID：option-display

粘贴位置：目标题目 → 编号和显示代码 → 目标选项行的显示代码

仅控制当前子项。不要把它放到题目渲染逻辑。

```js
Q1.isSelected("A1")
```

测试：case 1 → {"ok":true,"value":true}；case 2 → {"ok":true,"value":false}

## 自定义布尔显示函数

ID：display-function

粘贴位置：本题显示代码右侧的自定义代码 → 函数模式

复杂条件用 questionVisibility；选项或矩阵轴使用 optionVisibility。必须返回 true/false。

```js
function questionVisibility(context) { return Q1.isSelected("A1") || Q1.isSelected("A2"); }
```

测试：选中 A1 → {"ok":true,"value":true}；选中 A2 → {"ok":true,"value":true}；只选 A3 → {"ok":true,"value":false}；未作答 → {"ok":true,"value":false}

## 区分未选中与尚未回答

ID：not-answered

粘贴位置：本题显示代码（表达式）

!isSelected 包含未答；需要答过但没选 A1 时加 hasAnswer。

```js
Q1.hasAnswer && !Q1.isSelected("A1")
```

测试：case 1 → {"ok":true,"value":false}；case 2 → {"ok":true,"value":true}；case 3 → {"ok":true,"value":false}

## 全部包含、任意命中、完全不含

ID：selection-sets

粘贴位置：公式与变量 → 表达式

数组链式 isin 表示所选值全部属于给定集合，不表示给定集合全部被选。全部包含 A1/A2 用两个 isSelected 和 &&。

```js
[Q1.isSelected("A1") && Q1.isSelected("A2"), Q1.select().any("A1", "A2"), Q1.select().notin("A1", "A2"), Q1.select().isin("A1", "A2")]
```

测试：case 1 → {"ok":true,"value":[false,true,false,true]}；case 2 → {"ok":true,"value":[true,true,false,false]}；case 3 → {"ok":true,"value":[false,false,true,false]}

## 首次预填文本并保留前导零

ID：prefill-text

粘贴位置：基本属性 → 答案预填代码

用于本题为普通单值文本的情形。只在真实初始化条件满足时执行；不覆盖恢复或人工回答。

```js
function initializeAnswer(context) { return { mode: "show", answer: "001" }; }
```

测试：case 1 → {"ok":true,"value":{"mode":"show","answer":"001"}}

## 根据前题修改本题展示标题

ID：render-title

粘贴位置：基本属性 → 题目渲染逻辑

只覆盖展示，不改变保存题干、导出或答案，不允许 end/goto/网络。

```js
function beforeShow(context) { if (Q1.isSelected("A1")) return { view: { title: "您选择了 A1，请说明原因" } }; return { view: {} }; }
```

测试：case 1 → {"ok":true,"value":{"view":{"title":"您选择了 A1，请说明原因"}}}；case 2 → {"ok":true,"value":{"view":{}}}

## 数字零有效、空白不允许

ID：validate-number

粘贴位置：Q2 基本属性 → 答案校验逻辑

仅用于答案为单个字符串或数字的填空题；矩阵或多项填空不能套用。系统必答/格式检查在代码之前。

```js
function validateAnswer(context) { const x = context.answer; const missing = x === null || x === undefined || (typeof x === "string" && !x.trim()); const valid = !missing && (typeof x === "number" || typeof x === "string") && Number.isFinite(Number(x)); if (!valid) context.setError("请输入有效数字，0 可以填写"); return valid; }
```

测试：case 1 → {"ok":true,"value":true}；case 2 → {"ok":true,"value":true}；case 3 → {"ok":true,"value":false}；case 4 → {"ok":true,"value":false}；case 5 → {"ok":true,"value":false}；case 6 → {"ok":true,"value":false}；case 7 → {"ok":true,"value":false}

## 评分在指定范围内

ID：validate-score

粘贴位置：评分题基本属性 → 答案校验逻辑

先使用题型自带范围；确需附加业务限制时使用代码。示例答案为数字，范围 1 到 5。

```js
function validateAnswer(context) { const v=context.answer; const valid=typeof v === "number" && Number.isFinite(v) && v >= 1 && v <= 5; if (!valid) context.setError("请给出 1 到 5 分"); return valid; }
```

测试：case 1 → {"ok":true,"value":true}；case 2 → {"ok":true,"value":true}；case 3 → {"ok":true,"value":false}；case 4 → {"ok":true,"value":false}

## 矩阵行选择某列后跳题

ID：matrix-jump

粘贴位置：Q3 基本属性 → 跳转逻辑 → 代码块

仅用于矩阵选择题。R1/C2 必须是真实行列编码；默认编码可能是 S1/A2，不能用显示序号代替。行判断读取列编码；列判断读取行编码。

```js
if (Q3.$row.R1.isSelected("C2")) { goto("Q5"); }
```

测试：case 1 → {"ok":true,"value":{"directive":{"type":"goto","questionId":"q5"}}}；case 2 → {"ok":true,"value":{"directive":{"type":"default"}}}

## 未选 A1 时筛选结束

ID：screen-out

粘贴位置：Q1 跳转逻辑 → 代码块

Q1 确认答案并校验后执行；不会在渲染阶段执行。end 为筛选结束，不等同正常完成。

```js
if (!Q1.isSelected("A1")) { end(); }
```

测试：case 1 → {"ok":true,"value":{"directive":{"type":"finish","reason":"SCREENED_OUT"}}}；case 2 → {"ok":true,"value":{"directive":{"type":"default"}}}

## 根据前题自动勾选当前选项

ID：auto-select

粘贴位置：目标选项 → 自动选择选项 → 表达式

返回布尔值，true 仅代表此规则命中。与默认选项、预填和直接通过分别配置；只引用允许读取的前序题。

```js
Q1.isSelected("A1")
```

测试：case 1 → {"ok":true,"value":true}；case 2 → {"ok":true,"value":false}

## 普通公式读取数值

ID：formula

粘贴位置：公式与变量 → 表达式

示例 Q2 是数值答案的题目快照。实际问卷中的前序依赖及题型维度须核对。

```js
SUM([Q2.value, 5])
```

测试：case 1 → {"ok":true,"value":5}；case 2 → {"ok":true,"value":8}

## 设置本题根节点文字颜色

ID：css-root

粘贴位置：基本属性 → 自定义 CSS → 当前设备

question_demo 是演示内部 ID；替换为实际根节点 question_<内部ID>，不是题目编码。平台不会自动替换 {id}，CSS 不自动限制在本题，避免宽泛选择器。这里只做语法检查，必须另外观察效果。

```css
#question_demo { color: #2563eb; }
```

测试：CSS 语法检查，视觉需另验
