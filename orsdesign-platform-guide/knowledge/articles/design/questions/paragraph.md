# 分段说明

分段节点展示说明文字，适用于模块介绍与填写指导。

## 使用前提与入口

问卷编辑 → 左侧题型面板。点击题型加入当前选中题之后，或拖到画布指定位置；选中题卡设置右侧属性。结构锁定时先停止收集。

## 操作步骤

1. 添加分段题，编辑标题或富文本内容。
2. 按需插入图片或前序答案引用。
3. 拖到目标题之前，模拟答题检查其出现位置。

## 按钮与设置

| 名称       | 位置         | 作用与结果           | 可用条件             |
| ---------- | ------------ | -------------------- | -------------------- |
| 说明文字   | 题卡         | 编辑展示内容         | 不保存独立答题值     |
| 富文本编辑 | 文字编辑入口 | 设置格式、图片、引用 | 引用仅限有效前序维度 |
| 移动／删除 | 题卡工具栏   | 调整说明位置或移除   | 非锁定               |

## 结果与限制

分段说明不自动形成分页。需要分页时使用分页节点；需要逻辑显示时检查当前逻辑目标列表是否允许该辅助节点。

## 取值与可用函数

分段说明／描述题不收集答案，不分配普通题目变量，也不会进入 `context.questions`。不能使用它的 `Q1.value`、`Q1.hasAnswer` 或选项方法。

| 需求 | 可用方式 |
| --- | --- |
| 读取本组件答案 | 没有独立答案及答案函数。 |
| 读取其他题答案 | 使用那道可作答题的实际编码，例如 `age.value`。 |
| 读取页码与进度 | 在允许系统快照的上下文读取 `context.variables.GLOBAL.CURRENT_PAGE`、`PAGE_COUNT`、`PROGRESS`。 |
| 修改组件或跳转 | 不通过答案写方法修改；使用实际提供的页面配置和下一题规则。 |

### 计算示例

假设问卷仅含一个 `PARAGRAPH` 展示节点，没有可作答题目。在变量素材中选择 JavaScript 函数模式、结果类型“对象”：

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
