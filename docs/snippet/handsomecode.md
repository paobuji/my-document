# 优秀代码
## 拷贝对象
```js
Object.keys(this.dynamicValidateForm).forEach((key) => {
    this.dynamicValidateForm[key]=par[key];
});
```
## 使用ES6的结构和扩展运算符快捷操作对象
```js
// get the corpId from the search form
let { selectedCorpId: corpId, ...rest } = this.searchForm;
// create the params object
let params = {
    corpId,
    ...rest
};
```
## forEach的坑
1. forEach不支持return
```js
//错误的写法
findNameByGeneral(data, id) {
    data.forEach((res) => {
        if (res.id == id) {
            console.log(res.name);
            return res.name;
        }
    });
},
```
```js
//正确的写法
for (let item of array) {
    if (item.id === id) {
        return item.name;
    }
}
```
## 循环嵌套树结构数据
```js
let arr = [
    {
      id: 1,
      name: 1,
      children: [
        { 
          id: 2, 
          name: 2,
          children:[]
        },
        {
          id: 3,
          name: 3,
          children:[]
        }
      ]
    },
    {
      id: 4,
      name: 4,
      children:[]
    }
];
let name = findNameById(arr,20);
console.log('name', name);

function findNameById(data, id) {
  for (let item of data) {
    console.log(item.id);
    if (item.id === id) {
      return item.name;
    }
    // 如果当前对象有子项children且不为空，则递归调用findNameById函数进行查找
    if (item.children && item.children.length > 0) {
      const foundName = findNameById(item.children, id);
      if (foundName !== "no") {
        return foundName;
      }
    }
  }
  return "no"; // 如果未找到匹配的id，返回默认值"no"
}
```
## 在vue3中使用computed记得加上return
```js
<script setup>
import { ref,computed } from 'vue'
import * as dayjs from 'dayjs'
import { useNow } from '@vueuse/core'

const { now, pause, resume } = useNow({ controls: true })
const formattedNow = computed(()=>{
    return dayjs(now.value).format('YYYY-MM-DD HH:mm:ss')
})
</script>
```