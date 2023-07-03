# react学习笔记
1. [react官方文档](https://react.docschina.org/)
2. react组件是一个返回标签的函数
3. react函数组件需要返回一个对象(卧槽,返回的不是一个对象,这么夸张的嘛,我眼睛咋了?)
```js
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}
```


4. 官网的一些实例代码
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

5. react的事件
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
> react中定义组件确实很方便