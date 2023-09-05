# 优秀代码

## 拷贝对象

```js
Object.keys(this.dynamicValidateForm).forEach((key) => {
  this.dynamicValidateForm[key] = par[key];
});
```

## 替换对象的 key 值

1.

```js
// get the corpId from the search form
let { selectedCorpId: corpId, ...rest } = this.searchForm;
// create the params object
let params = {
  corpId,
  ...rest,
};
```

2.

```js
let { selectedCorpId, ...rest } = this.searchForm;
// create the params object
let params = {
  corpId: selectedCorpId,
  ...rest,
};
```

## 替换对象的 value 值

1.

```js
import { ref, computed, onMounted } from "vue";
const obj = ref({
  name: "chp",
  age: 18,
});
onMounted(() => {
  console.log({ ...obj.value, name: "修改阿斯蒂芬" });
  console.log(obj.value);
});
```

2.

```js
const filterData = (data) => {
  let newArray = data.map((element) => {
    return { ...element, children: {} };
  });
  return newArray;
};
```

## forEach 的坑

1. forEach 不支持 return

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
        children: [],
      },
      {
        id: 3,
        name: 3,
        children: [],
      },
    ],
  },
  {
    id: 4,
    name: 4,
    children: [],
  },
];
let name = findNameById(arr, 20);
console.log("name", name);

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

## 在 vue3 中使用 computed 记得加上 return

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

## 获取 index

```js
if (index === this.feeMonthDistributionByCorp.length - 1) {
  index = 0;
} else {
  index++;
}
```

```js
index = (index + 1) % this.feeMonthDistributionByCorp.length;
```

## 封装开启定时器的方法,这个不错。

```js
startInterval(index) {
  clearInterval(this.timer);
  let ind = index;
  this.timer = setInterval(() => {
    ind = (ind + 1) % this.feeMonthDistributionByCorp.length;
    this.selectedValue = ind;
    this.myChart.setOption(this.getEchartsOptions(ind));
  }, 10000);
},
```

## 怎么快速把一个对象中的某些属性拿出来组成一个新的对象

```js
const originalObject = {
  name: "John",
  age: 30,
  email: "john@example.com",
  address: "123 Main St",
};
const { name, age } = originalObject;
const newObject = { name, age };
console.log(newObject);
```
