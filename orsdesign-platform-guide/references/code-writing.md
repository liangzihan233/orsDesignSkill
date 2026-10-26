# 平台代码与逻辑表达式

先读取同版本 knowledge/code-contract.json 的相关入口，再查 knowledge/recipes.md。函数签名从 function-catalog.json 定位，具体语义从 function-reference.json 和命中文章读取。相同名称的普通函数、数组方法、ors 帮助函数和矩阵轴方法不能假设等价。

## 五个按钮

**自定义 CSS**：按实际 CSS 选择器生效，不自动限制在本题。根节点是 `question_<内部题目ID>`，不是 `question_Q1`；说明中的 `{id}` 是占位含义，不会被平台自动替换。先取得真实节点身份或提供明确模板。桌面、平板、手机分别配置，语法通过仍需页面观察。不要假造类名。

**答案预填**：完整入口 `function initializeAnswer(context)`。返回 `{mode:"show",answer:...}` 或 `{mode:"autoComplete",answer:...}`；只有本题可写。必须先核对题型的答案结构，不能给单选直接塞选项文字，也不能伪造上传或签名。首次实际进入且没有恢复／人工回答才运行；自动完成仍走校验和下一题，不能用它绕过校验或配额。

**题目渲染**：完整入口 `function beforeShow(context)`，返回 `{view:{...}}`。title/note 为展示文案；options/rows/columns 按本题编码定位。每次进入重建，未覆盖项使用原文案。不改变定义、导出、答案或结构。禁止 end/complete/full/goto、网络或写变量。想结束问卷应把判断放到回答确认后的跳转逻辑。

**答案校验**：完整入口 `function validateAnswer(context)`，读取 `context.answer`，返回严格 boolean；失败可 `context.setError("提示")` 后返回 false。系统必答、题型和格式检查在其之前；图形重试和筛选是另一层。不要在这里修改答案。判空须区分 null/undefined/空字符串与 0/"0"；普通单值填空、数组及矩阵对象需要不同判断。

**跳转逻辑**：跳转规则列表的代码块，支持完整 resolveNext 函数，及合同允许的顶层 goto/end/complete/full 简写。完整函数未命中返回 `{directive:{type:"default"}}`；简写未命中由平台默认继续。第一个明确去向生效，default 继续后续条目。goto 目标为真实题目编码。end 是筛选结束，complete 正常完成，full 配额满；最终结束仍走服务端收取。不能修改刚校验的当前答案或受保护历史回答。

## 其他代码入口

- 本题显示代码：表达式如 `Q1.isSelected("A1")`；自定义函数模式入口 questionVisibility，子项函数为 optionVisibility。严格返回 boolean，同步、只读、无副作用。旧表达式保留，不把函数源码直接塞到表达式框。
- 自动选择：shouldSelect 或表达式返回 boolean，读取允许的前序题；与预填、默认选项和直接通过不同。
- 变量：compute 或表达式，纯只读计算，通过 `context.formulas` 引用已定义变量。不能在公式中写答案或跳转。
- 图形逻辑：优先教可视化界面；它与显示表达式、跳转规则、图形校验的执行阶段不同，不能把旧跨题 show/hide 当成所有显隐入口都允许。

## 题目和集合

`Q1.isSelected("A1")` 判断一个选项；`Q1.select()` 返回编码数组。任意命中可用两个 isSelected 加 `||`；全部选中用 `&&`；完全不含可用链式 `.notin("A1","A2")`。未答 `.notin` 也会为 true，需根据业务决定是否加 `Q1.hasAnswer`。

特别注意：`Q1.select().isin("A1","A2")` 表示所选答案全部属于给定集合，不是 A1 和 A2 都选中。数组 `.any` 是任意命中，当前没有直接全局 `any()` 或 `ors.any()`。直接 isin、ors.isin 和数组链式方法的参数及类型转换不同，查参考后使用。

矩阵真实编码可能为 S1/A2，也可能自定义为 R1/C2。行方法读取列编码，列方法读取行编码；有名称碰撞时使用 `$row`/`$col`。只有矩阵选择题具备对应选择方法，不给矩阵填空套用 isSelected。

遇到题目编码与 Math、SUM 等原生名称冲突时，使用 `context.questions["编码"]` 的正式题目访问方式。不要使用旧 `ors.questions`，也不要假定 ID、题号或文字就是编码。

## 测试与限制

复制 knowledge/recipes.json 的相近用例作为示例，调整真实入口与合成输入，预期结果应先根据需求独立写出，不用当前执行结果回填 expected。有工具时调用同版本 validator；不要直接用宿主 eval 执行用户代码，也不要以 Node 普通 JS 的可运行性代替平台沙箱验证。

网络依赖只能说明宿主许可和单独验收要求；随包 validator 不联网，不伪造外部接口已通。超时和内存限制沿用平台运行器。错误、取消和过期不会因为助手建议而自动重试真实提交。
