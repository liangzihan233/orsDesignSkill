# 代码入口合同

版本：1.200.0。下列为使用说明，执行语义以该版本运行器为准。

## 自定义 CSS

- 阶段：css
- 入口：CSS
- 返回：CSS rules
- 时机：当前设备的可见题目渲染
- 范围：按实际选择器作用，不自动限定本题；question_<内部ID> 不是题目编码
- 网络：not applicable
- 写入：样式

## 答案预填代码

- 阶段：initializeAnswer
- 入口：initializeAnswer(context)
- 返回：{mode:'show'|'autoComplete', answer?:本题答案}
- 时机：首次实际进入且没有恢复或人工回答
- 范围：只能预填本题；不能同时通过返回值和修改方法双写
- 网络：仅宿主允许的受控请求
- 写入：本题答案

## 题目渲染逻辑

- 阶段：beforeShow
- 入口：beforeShow(context)
- 返回：{view:{title?,note?,options?,rows?,columns?}}
- 时机：进入本题的展示准备阶段
- 范围：只改本题展示；不改定义、答案、结构或变量；不允许流程控制
- 网络：forbidden
- 写入：仅返回本题 view 覆盖

## 答案校验逻辑

- 阶段：validateAnswer
- 入口：validateAnswer(context)
- 返回：boolean
- 时机：系统必答、题型及格式校验通过后
- 范围：只读答案；false 阻止继续，可调用 context.setError；不等同图形重试筛选
- 网络：仅宿主允许的受控请求
- 写入：错误提示；不能写答案

## 跳转逻辑

- 阶段：resolveNext
- 入口：resolveNext(context)，或受支持的顶层 goto/end/complete/full 简写
- 返回：{directive:{type:'default'|'goto'|'gotoGroup'|'finish',...},vars?:{...}}
- 时机：本题校验通过后按规则列表顺序执行
- 范围：首个明确去向生效；default 继续；不能修改刚校验本题或受保护历史答案
- 网络：仅宿主允许的受控请求
- 写入：受控跨题修改与运行变量；实际权限以目标版本合同为准

## 本题显示代码

- 阶段：questionVisibility
- 入口：布尔表达式或 questionVisibility(context)
- 返回：boolean
- 时机：纯显隐计算
- 范围：仅答案和确定性变量；禁止写入、网络和流程控制
- 网络：forbidden
- 写入：none

## 选项／矩阵行列显示代码

- 阶段：optionVisibility
- 入口：布尔表达式或 optionVisibility(context)
- 返回：boolean
- 时机：纯显隐计算
- 范围：仅控制目标子项；与 beforeShow 文案覆盖分开
- 网络：forbidden
- 写入：none

## 自动选择选项

- 阶段：shouldSelect
- 入口：布尔表达式或 shouldSelect(context)
- 返回：boolean
- 时机：平台自动选项计算
- 范围：只读允许的前序答案；不读运行显隐；不等同答案预填
- 网络：forbidden
- 写入：规则返回值由平台消费

## 公式变量

- 阶段：compute
- 入口：表达式或 compute(context)
- 返回：声明的变量类型
- 时机：按依赖计算纯变量
- 范围：只读题目和受控快照；不写答案或跳转
- 网络：forbidden
- 写入：none
