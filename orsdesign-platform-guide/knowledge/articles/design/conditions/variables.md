# 变量完整参考

变量把当前问卷信息、题目答案、用户与设备信息、外部参数及公式结果带入条件和计算。在设计页的条件设置定义变量，并在内容编辑的条件或题目代码中引用后，使用下表确认它的类型和边界。本文以当前项目运行行为为准；设计器中标为 String 的题目维度，实际可能因多选答案返回数组。

## JavaScript 入口

空公式或未通过静态编译／引用校验的变量作为草稿保留，仅在条件设置中显示，不参与计算、不进入实际程序，也不作为其他编辑入口的变量素材。修正并保存后恢复生效。运行时异常仍需修正，不会自动变成空值。

脚本直接提供题目对象和既有公式函数。编码与 Math、SUM、context 等名称冲突时，使用 context.questions["编码"]；原生对象不会被覆盖。使用 `Q1.value`、`context.questions["特殊编码"].select()`、`context.formulas.total`、`context.system`。下表 GLOBAL/ENV/USER 等名称是系统变量目录的路径；在 JS 中使用上下文对象或 `context.variables[目录对应的变量键]`，可视化条件仍使用目录路径。

题目引用保存稳定 ID 绑定，重排不改变身份；改名须通过引用影响审核，原编码保留归属且不能分配给另一实体，不作为自动注册的运行别名。原生 Math、Array 及用户局部变量不会被题目编码覆盖。

## 复制题目中的计算变量

已有题目内计算定义随题目复制时获得新的变量 ID 和变量键。复制品的钩子、自动勾选及计算定义保留原始 JavaScript，通过题目内的稳定绑定读取复制品自己的变量；动态写法 `context.formulas[key]` 同样适用。其他题目和全局变量的引用保持原目标。图形条件和富文本的变量 ID 一并重映射，再次复制仍保持该关系。

变量被删除或禁用后，保留的绑定不能转向同名新变量；计算时明确报告缺失引用。删除保护按实际引用的稳定 ID 检查。条件设置预览使用同一绑定。即使变量由钩子触发计算，也没有钩子的答案写入权限，不能读取钩子临时 `context.vars`、当前访问的 `context.answer` 或 `context.questionId`；题目数据通过题目对象或只读答案快照读取。

## 命名空间与书写

| 命名空间   | 用途                             | 示例                     | 缺失时                                        |
| ---------- | -------------------------------- | ------------------------ | --------------------------------------------- |
| `GLOBAL`   | 问卷身份、页数、分数、进度与计时 | `GLOBAL.QUESTION_COUNT`  | 固定字段按当前上下文取值                      |
| `ENV`      | 答题设备和环境                   | `ENV.DEVICE`             | 未提供或不能检测时为 null                     |
| `USER`     | 服务端提供的当前用户             | `USER.IS_LOGIN`          | 未登录时登录标识为 false，身份字段一般为 null |
| `PARAM`    | 本次答题注入的自定义参数         | `PARAM.channel`          | 未提供时为 null 或属性缺失；不要假设一定存在  |
| `EXTERNAL` | 已注入的跨问卷数据               | `EXTERNAL.S101.Q5.SCORE` | 不可用或未提供时为 null                       |
| `FORMULA`  | 已计算公式结果                   | `context.formulas.total` | 必须先定义对应公式；无结果时不可当作零        |
| 题目编码   | 题目答案、选项、行列及得分       | `Q1.VALUE`、`age.VALUE`  | 未答时依维度返回 null、空数组、false 或零     |

题目编码以字母或下划线开头，后续只用字母、数字、下划线；推荐用 `age`、`department` 等稳定业务编码。`Q1` 指实际编码为 Q1 的题，不一定是当前画布的第一张卡片。自动编码会跳过分页、段落、分隔线、地图、组件和综合指标等结构题；轮播图已是可作答题，保留稳定题目编码，所选图片参与选择状态、题量及答题进度。手动模式的空编码不会自动变成 Qn。引用应从资源面板插入，避免凭位置猜测。

选择状态使用 `Q1.isSelected("选项编码")` 或 `Q1.select()`，不把 `Q1A1` 当作自动注册的 JavaScript 标识符。裸 `Q1` 是题目对象；判断是否作答使用 `Q1.hasAnswer`，读取答案使用 `Q1.value`，不能依赖隐式数值转换或把对象直接作为变量结果返回。

## 问卷变量 GLOBAL

| 路径                    | 类型/单位      | 作用及边界                                         | 示例                                                     |
| ----------------------- | -------------- | -------------------------------------------------- | -------------------------------------------------------- |
| `GLOBAL.SURVEY_ID`      | String         | 问卷内部 ID                                        | `LEN(context.variables.GLOBAL.SURVEY_ID)`                |
| `GLOBAL.SID`            | String         | 问卷短标识 sid                                     | `context.variables.GLOBAL.SID == "S101"`                 |
| `GLOBAL.SURVEY_CODE`    | String         | 业务编码；缺省依次用 sid、内部 ID                  | `context.variables.GLOBAL.SURVEY_CODE`                   |
| `GLOBAL.SURVEY_NAME`    | String         | 问卷纯文本名称                                     | `CONCAT("问卷：", context.variables.GLOBAL.SURVEY_NAME)` |
| `GLOBAL.QUESTION_COUNT` | Number         | 可作答题数，排除结构题                             | `context.variables.GLOBAL.QUESTION_COUNT > 0`            |
| `GLOBAL.PAGE_COUNT`     | Number         | 按一题一页、分页标签或页容量计算，总页数至少为一   | `context.variables.GLOBAL.PAGE_COUNT`                    |
| `GLOBAL.CURRENT_PAGE`   | Number         | 当前页码，从一开始；由答题上下文提供               | `context.variables.GLOBAL.CURRENT_PAGE == 1`             |
| `GLOBAL.SCORE`          | Number         | 当前上下文中可作答题得分总和，不是公式分数之和     | `context.variables.GLOBAL.SCORE >= 80`                   |
| `GLOBAL.PROGRESS`       | Number，百分比 | 已答题数÷可作答题数×一百，四舍五入为整数；零题为零 | `context.variables.GLOBAL.PROGRESS == 100`               |
| `GLOBAL.TIMER`          | Number，毫秒   | 从开始到当前时刻的非负经过时间                     | `context.variables.GLOBAL.TIMER / 1000`                  |

进度的分母来自整个问卷可作答题集合，不能用它推断当前页面已通过全部校验。总分和题目 `SCORE` 来自各自计算路径；AI、矩阵、自定义公式等复杂场景应以具体题目或公式结果为判断来源，不能假设所有分数始终相等。

## 环境变量 ENV

| 路径                  | 类型                     | 作用及边界                                                              |
| --------------------- | ------------------------ | ----------------------------------------------------------------------- |
| `ENV.DEVICE`          | String 或 null           | 检测为 `PC`、`TABLET`、`MOBILE`；由浏览器 UA 判断，不能保证准确识别硬件 |
| `ENV.OS`              | String 或 null           | 已识别系统，如 Windows、MacOS、Linux、Android、iOS                      |
| `ENV.BROWSER`         | String 或 null           | 已识别浏览器，如 WeChat、Edge、Chrome、Safari、Firefox                  |
| `ENV.IP`              | String 或 null           | 优先取服务端注入的 IP；浏览器本身默认不提供公网 IP                      |
| `ENV.LANGUAGE`        | String 或 null           | 浏览器语言，例如 zh-CN                                                  |
| `ENV.NETWORK`         | String 或 null           | 浏览器支持时取有效网络类型并转大写，例如 4G；部分浏览器不提供           |
| `ENV.TIMEZONE`        | String 或 null           | 浏览器报告的 IANA 时区，例如 Asia/Shanghai                              |
| `ENV.VIEWPORT_WIDTH`  | Number 或 null，CSS 像素 | 构造上下文时的可视区域宽度                                              |
| `ENV.VIEWPORT_HEIGHT` | Number 或 null，CSS 像素 | 构造上下文时的可视区域高度                                              |

示例：`context.variables.ENV.DEVICE === "MOBILE"` 判断检测到的手机环境。设备、语言、时区等信息可能由客户端报告，适合展示与分析条件；不能据此证明身份或所在地。

## 用户变量 USER

| 路径              | 类型           | 作用及缺省行为                                     |
| ----------------- | -------------- | -------------------------------------------------- |
| `USER.IS_LOGIN`   | Boolean        | 服务端明确的登录标识；未明确时按是否有用户 ID 推断 |
| `USER.ID`         | String 或 null | 用户内部标识                                       |
| `USER.LOGIN_NAME` | String 或 null | 登录账号名                                         |
| `USER.NAME`       | String 或 null | 显示姓名                                           |
| `USER.EMAIL`      | String 或 null | 电子邮箱                                           |
| `USER.PHONE`      | String 或 null | 手机号码                                           |
| `USER.AVATAR`     | String 或 null | 头像地址                                           |
| `USER.DEPT`       | String 或 null | 部门名称或标识文本，取决于服务端提供内容           |
| `USER.DEPT_OBJ`   | Object 或 null | 服务端提供的部门对象，结构没有统一字段承诺         |
| `USER.ROLE`       | String 或 null | 主角色；未明确时取 roles 第一项                    |
| `USER.ROLES`      | Array<String>  | 角色列表，缺省为空数组                             |

示例：`CONTAINS(context.variables.USER.ROLES, "admin")` 对角色列表进行精确元素匹配；`USER.IS_LOGIN` 表示答题上下文身份，不能假设访问公开问卷者一定等于管理端设计者。

## 参数、外部数据与公式

### PARAM 的动态字段

`PARAM.*` 表示由本次答题上下文传入的参数，可为文本、数字、布尔、数组或对象。`PARAM.channel`、`PARAM.customer.level` 都是路径示例，不是平台自动存在的固定字段。只有实际注入的键才可读取；URL 上随意追加参数不等于已经进入公式上下文。

例如已注入 `{ "channel": "wechat" }`，表达式 `context.variables.PARAM.channel === "wechat"` 为真。嵌套字段的类型和含义由参数提供方约定。将数值文本用于算式前可以用 `VALUE(context.variables.PARAM.age)`，并处理缺失值。

### EXTERNAL 的可用性

`EXTERNAL.*` 表示已注入的外部数据目录。JavaScript 从 `context.variables.EXTERNAL` 读取本次提供的只读快照，不会自动请求跨问卷数据。对象结构由接入侧约定；例如提供 `{ available: false }` 时，脚本应显式检查 `available`，不能假设该对象等于 `null`。

数据是否存在、访问者是否有权取得以及数据是否已经加载，由接入侧处理；变量代码不能自行授予权限。

### 计算变量的依赖和顺序

在条件设置定义键为 `total` 的变量，表达式例如 `SUM(Q1.SCORE, Q2.SCORE)`，后续脚本通过 `context.formulas.total` 读取。显示名称可修改；已被引用的变量键不能直接改名。图形条件绑定稳定变量 ID。

求值按实际读取的依赖关系计算，不依赖列表顺序。直接或动态循环、缺失引用、非 JSON 返回值和计算错误都会明确报错，不以空值代替。合法的 `null` 与计算失败分别显示。

已有题目内计算定义纳入同一变量目录并保留所属题目，本阶段不新增局部变量编辑体系。变量没有答案写入、跳转或网络能力；也不因被钩子引用而继承钩子权限。

## 可执行函数示例

在条件设置选择“JavaScript 函数”，结果类型选择“对象”，输入下列完整脚本。`Q1` 应为实际绑定的输入题编码。输入 `Alice, Bob, ` 后得到两个名字及数量；未答时得到空数组和零。系统数据通过受控快照显式读取。

```js
const normalize = value => String(value ?? "").trim();
function compute(context) {
  const names = normalize(Q1.value)
    .split(",")
    .map(name => name.trim())
    .filter(Boolean);
  return {
    names,
    count: names.length,
    surveyId: context.variables.GLOBAL.SURVEY_ID
  };
}
```

## 按题型查阅函数

“题型使用”下每篇文章的“取值与可用函数”分别列出本题字段、方法、空值、写权限及可执行示例。选择题、分项填空／评分、矩阵、AI 和展示组件使用不同数据结构，不能把单选的编码查询或写权限直接套到其他题。

- [单选题](http://design.ors-cn.com/agent-help/articles/design/questions/radio.md#取值与可用函数)、[多选题](http://design.ors-cn.com/agent-help/articles/design/questions/checkbox.md#取值与可用函数)、[下拉题](http://design.ors-cn.com/agent-help/articles/design/questions/select.md#取值与可用函数)
- [填空题](http://design.ors-cn.com/agent-help/articles/design/questions/fill-blank.md#取值与可用函数)、[多项填空](http://design.ors-cn.com/agent-help/articles/design/questions/multi-fill.md#取值与可用函数)、[单项评分](http://design.ors-cn.com/agent-help/articles/design/questions/score.md#取值与可用函数)、[多项评分](http://design.ors-cn.com/agent-help/articles/design/questions/multi-score.md#取值与可用函数)
- [矩阵题](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md#取值与可用函数)、[AI 访谈](http://design.ors-cn.com/agent-help/articles/design/questions/ai.md#取值与可用函数)、[级联题](http://design.ors-cn.com/agent-help/articles/design/questions/cascade.md#取值与可用函数)、[兼容类型](http://design.ors-cn.com/agent-help/articles/design/questions/legacy.md#取值与可用函数)

## 题目维度全表

以下维度名不带题目前缀；实际使用例如 `Q1.VALUE`。编辑器只提示适用题型的字段；不要把矩阵列、AI 对话、地区字段套用到任意题。

| 维度             | 运行值类型                | 作用和适用范围                                                                    | 未答/边界                                                           |
| ---------------- | ------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `VALUE`          | 单值、数组或 null         | 答案业务值；选择题用业务编码，填空用输入，矩阵按答案结构转换；AI 为带角色对话文本 | 没有值为 null，多值时为数组，不能始终当 String                      |
| `VALUES`         | Array                     | 选择题业务值集合；排序题按作答顺序排列                                            | 空数组                                                              |
| `ANSWER`         | 文本、文本数组或 null     | 人可读答案；选择题用选项文本                                                      | 多个答案实际为数组，不保证用分隔符连接                              |
| `LABEL`          | 富文本、富文本数组或 null | 答案富文本标签                                                                    | 多值实际为数组；使用时注意文本与 HTML 的区别                        |
| `ANSWERS`        | Array<String>             | 选择题全部已选答案文本                                                            | 空数组                                                              |
| `ANSWER_OPTIONS` | Array<OptionObject>       | 选择题已选选项协议对象                                                            | 空数组                                                              |
| `SELECTED`       | Array<OptionObject>       | `ANSWER_OPTIONS` 的兼容别名                                                       | 不是布尔值，也不是原始选项 ID 数组                                  |
| `ANSWER_ROWS`    | Array<RowObject>          | 矩阵中已经作答的行                                                                | 空数组                                                              |
| `ANSWER_NOTES`   | String                    | 已选选项的附加备注按逗号连接                                                      | 没有备注为空字符串                                                  |
| `OPTIONS`        | Array<OptionObject>       | 选择题定义中的全部选项                                                            | 包含未选项；不是只取可见项                                          |
| `ROWS`           | Array<RowObject>          | 矩阵定义中的全部行，含各行答案和单元格映射                                        | 未答行仍在集合内                                                    |
| `COLS`           | Array<ColumnObject>       | 有列定义的矩阵题全量列；排除临时空列                                              | 评分矩阵等无通用列协议的题型不提示                                  |
| `RANK`           | Array<String>             | 排序题按用户作答顺序返回业务值序列                                                | 未答为空；非排序题不使用                                            |
| `IS_SHOW`／`isShow` | Boolean | 运行器提供的显隐快照 | 缺少快照时明确报错；自动选择条件及其依赖变量禁止读取 |
| `HAS_ANSWER`     | Boolean                   | 是否有有效作答；AI 要有用户消息                                                   | 零和 false 也算作答；空串/无有效内容集合为假                        |
| `SCORE`          | Number                    | 支持计分题型的当前逻辑分数                                                        | 无作答时为零，规则因题型而异                                        |
| `MAX_SCORE`／`maxScore` | Number | 按题型与计分配置计算的上限字段 | 不等于已得分；普通单选缺少正值配置时累加全部选项分值，具体边界见各题型说明 |
| `AREA`           | String 或 null            | CITY/CASCADE 已选地区的 area 属性                                                 | 资源无 area 或无匹配时为 null                                       |
| `CONVERSATION`   | AI 对话对象               | AI 题规范化后的 messages、round、complete、summary                                | 无有效对话时是空对话对象                                            |

普通填空示例：输入二十时，`VALUE(Q1.VALUE) + 1` 为二十一。多选业务编码为 A、B 时，`ISIN(Q1.VALUES, "A", "B")` 为真；选择数量用 `SELECT_SIZE(Q1.ANSWER_OPTIONS)`。

### 选中与未选中选项方法

脚本使用 `Q1.select()` 取选项编码，永远返回原生数组：单选 `[编码]`、多选编码数组、未选 `[]`。新建选项的正式编码默认为 A1、A2 等字符串，手动改名后使用保存的正式编码；不会按当前位置或历史自定义值生成另一套引用。可直接写 `Q1.select().isin("A1", "A2")`、`.notin(["A3"])`、`.any("A1")`，分别判断全部属于、全部不属于、至少命中一个；链式严格区分数字与字符串，空数组结果为 false/true/false，缺参均 false。保留的 `ors.isin(values, choices)` 和 `ors.notin(values, choices)` 接受两个编码数组，按字符串比较。详见[集合函数合同](http://design.ors-cn.com/agent-help/articles/design/conditions/functions.md#数组链式集合判断)。原生 includes/every/some/map/filter 仍保持标准 JS 行为。

矩阵单选、多选可在静态行列对象上使用 `select()`、`unSelect()`、`isSelected(code)`、`unSelected(code)`，另支持 `isselect(code)`、`includes(code)`、`isin(codes)`、`notin(codes)`。行返回和判断列编码，列返回和判断行编码；例如 `Q1.$row.A1.select()` 读取已选列，`Q1.$col.S2.includes("A1")` 判断该列的 A1 行是否选中。`value/answer` 仍用于读取行列的值与显示文本。完整语义见[矩阵选择查询](http://design.ors-cn.com/agent-help/articles/design/questions/matrix-choice.md#可用方法与写入限制)。

`Q1.unSelect()` 返回本题全部选项中尚未选中的正式编码，按题目定义顺序排列，包含隐藏但未选中的选项。未作答时返回全部编码，全选或没有选项时返回 `[]`。返回值是独立数组，修改它不会修改答案。

`Q1.unSelected(code)` 判断指定选项是否属于未选中集合：存在且未选中为 `true`，已选中或编码不存在为 `false`。参数接受字符串或有限数字，按 `isSelected` 的规则比较（例如 `1` 与 `"1"` 等价）；其他类型报 `INVALID_OPTION_CODE`。无选项题返回 `false`，矩阵单元格仍使用行列维度读取。这两个方法仅查询状态，不会取消勾选。

```js
// 假设 Q1 的选项为 A1、A2，目前仅选中 A1
Q1.select()           // ["A1"]
Q1.unSelect()         // ["A2"]
Q1.unSelected("A2")   // true
Q1.unSelected("A1")   // false
Q1.unSelected("不存在") // false
```

方法也支持 `context.questions.Q1` 访问，可用于变量及题目逻辑；在允许写入的钩子中调用 `selectOption` / `deselectOption` / `clear` 后，立即反映更新后的选择状态。更改选项编码时，明确的 `unSelected("编码")` 和 `unSelect().includes("编码")` 引用会同步更新。

新公式推荐用明确维度与函数，例如 `ISIN(Q1.VALUES, "A", "B")`。共享 JavaScript 运行器同时提供兼容只读字段 `Q1.SELECT`；推荐调用 `select()` 获取独立数组，不要混淆大写字段与小写方法。当前轮播图片编码没有接入这组选择查询，`select()` 可能包含空字符串，`isSelected`／`unSelected` 判断不可靠；轮播使用 `values` 和 `options[].IS_SELECTED`，见[轮播题函数](http://design.ors-cn.com/agent-help/articles/design/questions/carousel.md#取值与可用函数)。

## 选项对象 OptionObject

通过 `Q1.OPTIONS` 读取选项对象数组。数组下标仅表示当前结构位置，不是选项身份；需要绑定具体选项时按对象的 `VALUE` 正式编码查找，不依赖下标。

| 字段           | 类型          | 作用                                   |
| -------------- | ------------- | -------------------------------------- |
| `VALUE`        | String        | 保存的正式选项编码，例如 A1；不按当前位置或历史自定义值生成别名 |
| `TEXT`         | String        | 选项纯文本标题                         |
| `LABEL`        | String        | 选项富文本；无富文本时用纯文本         |
| `IS_ANSWERED`  | Boolean       | 当前是否选中                           |
| `IS_SELECTED`  | Boolean       | 与 IS_ANSWERED 相同的兼容字段          |
| `ANSWER_VALUE` | 任意值或 null | 选项对应输入值；普通被选项可为 true    |
| `NOTE`         | 文本或 null   | 选项附加备注，取答题附加文本或保存字段 |
| `SCORE`        | Number        | 选项配置分值，缺省零                   |

示例：首选项标题为“北京”时 `Q1.OPTIONS[0].TEXT` 返回“北京”；是否被选中用 `Q1.OPTIONS[0].IS_SELECTED`。

## 矩阵行与列对象

### RowObject

| 字段            | 类型          | 作用                                                          |
| --------------- | ------------- | ------------------------------------------------------------- |
| `VALUE`         | String        | 行业务编码，依次优先自定义值、默认值、选项编码、内部 ID       |
| `TEXT`          | String        | 行纯文本标题                                                  |
| `LABEL`         | String        | 行富文本标题                                                  |
| `CELLS`         | Object        | 键为列业务编码，值为实际单元答案；选择单元通常为 true 或 null |
| `ANSWER_VALUES` | Array<String> | 当前有答案的列编码                                            |
| `ANSWER_TEXTS`  | Array<String> | 当前有答案的列纯文本                                          |
| `ANSWER_LABELS` | Array<String> | 当前有答案的列富文本                                          |
| `IS_ANSWERED`   | Boolean       | 此行是否有作答                                                |
| `SCORE`         | Number        | 评分行数值或已答列配置分值的和                                |

`MATRIX_ROW_TITLES(Q4.ROWS, "满意")` 返回在“满意”列严格选中的行标题；列编码可以用列对象替代。矩阵输入中的非空文本或数值属于已答，但该筛选函数仅接受单元格严格等于 true，因此不能拿它筛选数值输入。

### ColumnObject

| 字段    | 类型   | 作用               |
| ------- | ------ | ------------------ |
| `VALUE` | String | 列业务编码         |
| `TEXT`  | String | 列纯文本标题       |
| `LABEL` | String | 列富文本标题       |
| `SCORE` | Number | 列配置分值，缺省零 |

## AI 对话对象与空值

AI 题用 `AI_IS_COMPLETE(Q5.CONVERSATION)` 判断是否结束，用 `AI_LAST_USER_TEXT(...)` 读取最近用户文本，用 `AI_SUMMARY(...)` 读取已保存摘要，用 `AI_ROUND_COUNT(...)` 读取规范化的轮次字段（零到十）。轮次不是通过消息数组重新计数；缺失 round 时为零。

消息对象需有合法 role（user/assistant）、type（opening/answer/empathy/followUp/closing）、文本 content 及非负整数 round。无效消息会被忽略。`AI_TRANSCRIPT(...)` 按 `USER: 文本`、`ASSISTANT: 文本` 的行格式连接，`AI_USER_TEXT(...)` 仅连接用户文本。

空值判断优先用 `IS_EMPTY`/`IS_NOT_EMPTY`；`ISBLANK` 当前只认 null。空格字符串不是空答案；零、false 是有效答案。数组用 `SELECT_SIZE` 统计当前有答案的直接元素，不应把 `LEN` 当作数组长度，因为 `LEN` 先把数组转成文本。

参见[函数完整参考](http://design.ors-cn.com/agent-help/articles/design/conditions/functions.md)、[JavaScript 与问卷程序](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md)和[逻辑实例](http://design.ors-cn.com/agent-help/articles/design/logic/examples.md)。

## 变量预览与样例数据

在条件设置中选择变量，填写“样例答案 JSON（键为题目 ID）”，点击“计算预览”。预览使用同一 JavaScript 运行器，只运行变量及其读取到的变量依赖；题目钩子、图形动作和自动勾选不会执行。编辑过钩子的问卷也可以正常预览，题目属性状态和只读数据结构仍会保留。

有效结果（包括 `null`）与错误分别展示。JSON 格式错误、读取错误、纯计算权限违规或类型不匹配不会显示成合法空值；修改源码或样例后会清除旧结果。样例答案不保存到问卷，也不作为公开答题答案。

窄屏中编辑器优先排列，变量列表和函数素材保留在下方，可在页面内滚动访问。保存配置和计算预览是两个独立操作；保存后刷新会回读变量源码，预览样例仍需重新填写。

## 编辑身份与只读预览

变量的显示名称可以修改；存在引用时，变量键被锁定，删除操作会列出引用并拒绝删除。先移除引用后才能修改变量键或删除变量。引用使用稳定变量 ID，不能仅凭显示名称判断关联。

选择“JavaScript 函数”模式时，可以在 `compute(context)` 前声明常量、数组、对象和辅助函数。计算预览使用手动输入的样例答案，不写入真实答卷，也不会自动保存编辑器内容。预览中调用题目写方法会显示 `WRITE_FORBIDDEN`，错误不会被显示成合法空值。保存后的变量可通过 `context.formulas.<变量键>` 在题目逻辑中读取。

## 图形变量规则与题目删除

删除无关题目时，保留按稳定变量 ID 绑定的图形规则。变量来源不使用题目 ID，因此不能把空的题目来源字段当作失效条件。若变量身份缺失，程序编译明确报错；系统不通过悄悄删除规则来放行。已删除的题目来源和目标仍按原引用清理规则处理。

## 编辑辅助工具

点击题目、系统变量或函数素材可在光标处插入当前 JavaScript 写法；应用示例会替换当前编辑草稿，请按实际题目修改引用。格式化使用 JavaScript 编辑器的语言服务，保留字符串内容；清空只修改当前草稿，保存前仍需通过语法与返回合同检查。使用指南会在新标签页打开本页，不丢失正在编辑的内容。

数组的 `.notinclude(searchElement, fromIndex?)` 判断原生 `includes` 的反值：数字与字符串不同，NaN 可匹配，空位和省略搜索值按 undefined；第二参数是可选起始下标。详见[notinclude 合同](http://design.ors-cn.com/agent-help/articles/design/conditions/functions.md#数组-notinclude-方法)。
