# 分页题

分页节点把题目划分为不同答题页面，不采集答案。

## 使用前提与入口

分页题已从当前左侧新增面板隐藏；已有问卷中的分页节点保留兼容。选中已有节点检查位置，结构锁定时先停止收集。

## 操作步骤

1. 在已有问卷中定位需要调整的分页节点。
2. 拖动分页节点调整页边界，检查每页题目。
3. 用整页模式模拟答题测试上一页、下一页与页内校验。

## 按钮与设置

| 名称           | 位置         | 作用与结果         | 可用条件                     |
| -------------- | ------------ | ------------------ | ---------------------------- |
| 分页节点       | 题型辅助组件 | 在该位置建立页边界 | 当前新增面板隐藏；已有问卷兼容 |
| 拖动／删除     | 题卡工具栏   | 修改或移除页边界   | 非锁定                       |
| 上一页／下一页 | 答题页底部   | 按当前页面移动     | 收集设置允许返回；校验通过   |

## 结果与限制

一页一题与对话模式另有呈现规则，不能把分页节点当成普通题或可用答案变量。

## 取值与可用函数

分页节点不收集答案，不分配普通题目变量，也不会进入 `context.questions`。不能使用它的 `Q1.value`、`Q1.hasAnswer` 或选项方法。

| 需求 | 可用方式 |
| --- | --- |
| 读取本组件答案 | 没有独立答案及答案函数。 |
| 读取其他题答案 | 使用那道可作答题的实际编码，例如 `age.value`。 |
| 读取页码与进度 | 在允许系统快照的上下文读取 `context.variables.GLOBAL.CURRENT_PAGE`、`PAGE_COUNT`、`PROGRESS`。 |
| 修改组件或跳转 | 不通过答案写方法修改；使用实际提供的页面配置和下一题规则。 |

### 计算示例

假设问卷仅含一个 `PAGETAG` 展示节点，没有可作答题目。在变量素材中选择 JavaScript 函数模式、结果类型“对象”：

```js
function compute(context) {
  return { questionCodes: Object.keys(context.questions) };
}
```

预期：

```json
{
  "questionCodes": []
}
```

参见[变量参考](http://design.ors-cn.com/agent-help/articles/design/conditions/variables.md)和[逻辑代码](http://design.ors-cn.com/agent-help/articles/design/logic/dsl.md)。

## 相关说明

- [通用属性](http://design.ors-cn.com/agent-help/articles/design/properties/common.md)
- [选项设置](http://design.ors-cn.com/agent-help/articles/design/properties/options.md)
