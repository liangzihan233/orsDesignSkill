# JavaScript 逻辑实例

本阶段在条件设置、自动勾选或题目四个钩子中编写代码。逻辑引擎页展示实际程序及图形演示，不接受整卷代码。以下示例分别放入注明的入口，不要把不同入口合并成一个脚本。

示例约定：Q1 为年龄填空题，Q2 为普通单选题（选项编码 A1、A2），Q3 为文本题。请替换为问卷中的真实编码。特殊编码通过 `context.questions["编码"]` 访问；公式变量通过 `context.formulas.<变量键>` 读取。

## 变量：数值处理

在条件设置新增变量，选择表达式。文本转换使用原生 Number；无法转换得到 NaN，必须处理后才能作为可保存结果返回。

<!-- prettier-ignore -->
```js
Number(Q1.value) * 2
```

年龄输入 20 时结果为 40。需要检查输入合法性时用下一例的函数形式。

## 变量：函数、数组和局部常量

选择函数形式。辅助函数、解构、数组和函数调用均为标准 JavaScript。

```js
const offsets = [1, 2, 3];
function finiteAge(value) {
  const age = Number(value);
  if (!Number.isFinite(age)) throw new Error("年龄不是数值");
  return age;
}
function compute(context) {
  const [first, ...rest] = offsets;
  return finiteAge(Q1.value) + SUM([first, ...rest]);
}
```

年龄输入 20 时结果为 26。局部声明只在本次执行内有效，不写回答案。

## 变量：引用其他变量

先创建变量键 `age`，表达式为 `Number(Q1.value)`；再创建依赖变量：

<!-- prettier-ignore -->
```js
context.formulas.age >= 18
```

年龄 20 返回 true，年龄 16 返回 false。按实际读取追踪依赖；循环依赖会报错。不能在计算变量中调用题目写方法。

## 自动勾选：严格布尔结果

在 Q2 的某个选项自动勾选入口选择函数形式，Q1 必须位于 Q2 前面。

```js
function shouldSelect(context) {
  const age = Number(Q1.value);
  return Number.isFinite(age) && age >= 18;
}
```

不能返回字符串 `"true"` 或数字 1。自动勾选不允许读取当前题、后置题或钩子运行变量；通过变量间接读取也受同样限制。

## 答案预填代码：预填当前题

将此函数放在 Q3 的答案预填代码。写入通过事务提交，取消、失败或超时不会留下部分答案。

```js
function initializeAnswer(context) {
  if (!Q3.hasAnswer) Q3.setValue("已预填");
  return { mode: "show" };
}
```

仅能写本题。首次进入且没有恢复或人工答案时执行，返回和恢复不重填；静态默认值先提供，预填可覆盖它。不要同时用写方法和返回值 answer 修改当前题。

## 答案校验逻辑：年龄区间

将此函数放在 Q1 的答案校验逻辑。系统必答、格式等校验通过后才调用它；此阶段不能修改答案。

```js
function validateAnswer(context) {
  const age = Number(Q1.value);
  if (!Number.isFinite(age) || age < 18 || age > 65) {
    context.setError("请输入18至65之间的年龄");
    return false;
  }
  return true;
}
```

返回 false 保留输入并等待修改；异常、超时及非 boolean 返回阻止推进。必答属性仍需在内容编辑中配置。

## 答案校验逻辑：旧平台集合便捷函数

将此函数放在 Q2，确保 A1、A2 是本题实际选项编码。

```js
async function validateAnswer(context) {
  await Promise.resolve();
  const valid = ors.isin(Q2.select(), ["A1", "A2"]);
  if (!valid) context.setError("请选择允许的选项");
  return valid;
}
```

单选 select() 也返回数组。isin 要求非空且全部命中；notin 要求全部不命中，空答案返回 true。两者不能代替必答校验。异步钩子总时限 10 秒，包含等待时间；实际网络调用还受平台网络能力限制。

## 题号与筛选结束的简写（2026-10-25）

在下一题代码框可直接写条件和 `end()`，无需包装 `resolveNext`，没有命中时默认继续。以下示例在年龄题通过必答和数字校验后，筛选不在 18–35 岁范围的回答：

```js
if (Q1.value < 18 || Q1.value > 35) end();
```

`Q1` 与 `context.questions["Q1"]` 指向同题。普通填空的 `.value` 通常是字符串；数值比较会转换，加法请显式使用 `Number()`。若业务要求未答时不匹配，需另外判断 `Q1.hasAnswer`，不能在改写已有问卷时擅自改变空值语义。

合并选项判断时注意集合方法的严格类型：普通题的纯数字编码由 `select()` 返回数字，矩阵轴选择编码按字符串读取；`isSelected()` 接受数字或字符串。不要将“全部属于”的 `isin()` 当作“至少一个”的 `any()`。预填、渲染和答案校验仍保留各自函数入口，不能把 `end()` 用到这些阶段。

## 下一题逻辑：明确去向与默认规则

将此函数放在 Q2。选择 A1 时去 Q3；其他答案使用题目图形跳转及自然顺序。

```js
function resolveNext(context) {
  return Q2.isSelected("A1")
    ? { directive: { type: "goto", questionId: Q3.id } }
    : { directive: { type: "default" } };
}
```

去向仍需通过系统目标检查。下一题逻辑不能修改已经校验的当前答案或历史已作答题。提前结束可返回 `{ directive: { type: "finish", reason: "SCREENED_OUT" } }`，最终收取分类由后端负责。

## 显示逻辑：本题布尔条件

在 Q3 的显示代码中输入表达式，Q2 选择 A1 时本题隐藏。代码只决定所属对象，不指定显隐目标。

<!-- prettier-ignore -->
```js
!Q2.isSelected("A1")
```

空代码无额外限制，false 追加隐藏，true 不能解除父级或关联限制。可读全卷答案及纯变量，禁止系统环境、时间、随机、可变运行变量和副作用。

## 下一题逻辑：直接跳转与结束（2026-10-22）

在 Q2 的下一题代码框直接输入。选择 A1 时去 Q3，否则被筛选结束。也可按业务条件使用 `complete()` 正常完成或 `full()` 配额满结束；结束后仍走原提交流程。若希望未命中时继续其他规则，省略 `else` 分支即可。

```js
if (Q2.isSelected("A1")) goto("Q3");
else end();
```

旧 `show`、`hide` 显示指令不再用于当前问卷；`goto`、`end`、`complete`、`full` 继续用于下一题逻辑。渲染、校验、变量和自动选择禁止平台控制操作。详见[简写规则](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md#逻辑操作简写)。

## 动态字符串目标（2026-10-23）

在下一题逻辑中，字符串变量、模板字符串或拼接结果都可以作为目标：

```js
const a = 3;
goto("Q" + a); // 跳转到 Q3
```

读取特殊题目编码时使用只读问题集合：

<!-- prettier-ignore -->
```js
!context.questions["Q2"].isSelected("A1")
```

渲染代码使用 beforeShow(context)，只返回 `{view:{title:"本题文案",rows:{R1:"矩阵行文案"}}}` 等展示覆盖；不能填写答案、请求网络或控制流程。矩阵行列和选项以本题编码寻址，未知目标报错。
