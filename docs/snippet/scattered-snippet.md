# 零散的代码片段

## box-shadow

```css
#dragbox {
  border-radius: 8px;
  border: 1px solid rgb(225, 225, 225);
  background-color: white;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: move;
    box-shadow: 1px 6px 10px 0px rgba(0, 0, 0, 0.1);
  }
}
```

- 第一个参数：水平偏移量
- 第二个参数：垂直偏移量
- 第三个参数：模糊半径
- 第四个参数：阴影尺寸
- 第五个参数：阴影颜色

## for of循环数组

```js
for (let key of Object.keys(obj)) {
  console.log(key, obj[key]);
}
```

## fro in循环对象

```js
for (let key in obj) {
  console.log(key, obj[key]);
}
```

## squares.slice()
>
> str.slice(beginIndex[, endIndex])

- squares.slice() 是一个数组的方法，它返回一个新的数组，包含原始数组中的所有元素。如果没有提供参数，则新数组将包含与原数组相同的元素。

## 默认的函数传参

```js
function Square({ value, onSquareClick = () => {} }) {
    return (
        <>
            <button className="square" onClick={() => { onSquareClick(1) }}>{value}</button>
        </>
    )
}
```

## 命名

- 在 React 中，通常使用 onSomething 命名代表事件的 props，使用 handleSomething 命名处理这些事件的函数。
