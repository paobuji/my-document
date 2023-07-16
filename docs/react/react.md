
# react学习笔记


## 使用npx create-react-app创建react项目很慢的解決办法
1. 使用淘宝镜像
```js
npx create-react-app my-app --registry=https://registry.npm.taobao.org
```
2. 怎么设置npm地址为淘宝地址
```js
npm config set registry https://registry.npm.taobao.org
```
3. 怎么查看npm的地址
```js
npm config get registry
```
4. npm的默认下载地址
```js
https://registry.npmjs.org/
```

## 杂记
- useState是异步执行的,性能很好.
- 当调用`useState()`需要用旧的state值来计算新的state值时,可以传递一个函数给`useState()`.这个函数接收旧的state值,并返回新的值.
- [react官方文档](https://react.docschina.org/)
- react组件是一个返回标签的函数
- react函数组件需要返回一个对象(卧槽,返回的不是一个对象,这么夸张的嘛,我眼睛咋了?)
- useRef()返回一个可变的ref对象,其.current属性被初始化为传入的参数(initialValue).返回的ref对象在组件的整个生命周期内保持不变.
```js
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}
```
- 官网的一些实例代码
```js
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
```

- react的事件
```js
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```
