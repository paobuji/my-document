# 面试

## 表单校验
- 表单校验数字类型一定要加上type="number",省太多事了
- 一般来讲>=0很危险,因为空值''==0,所以一般用>0
```js
<el-input v-model.number="scope.row.amount" type="number"></el-input>
```
## 事件循环
- 基本上，setTimeout 需要等待当前队列中所有的消息都处理完毕之后才能执行，即使已经超出了由第二参数所指定的时间。

## parseInt("abc")
- > parseInt("abc") // NaN

