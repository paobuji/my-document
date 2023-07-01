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
