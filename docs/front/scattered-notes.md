# 杂记

## 深度选择器
- `/deep/`是一个`深度选择器`,它可以使得样式穿透到子组件中,但是它只能作用于子组件的样式中,不能作用于父组件的样式中.

## 回调函数
- `回调函数`是指将一个函数作为参数传递给另一个函数,在另一个函数中调用这个函数,这个被传递的函数就是`回调函数`

## cookie
在网页中，`cookie` 是一种用于跟踪用户状态和行为的机制。当用户访问一个网站时，网站通过设置 `cookie` 来存储一些数据，可以在接下来的页面访问过程中轻松地读取这些数据。具体来说，`cookie` 在网页中有以下几个实质作用：
- 保持登录状态：如果一个网站需要用户登录才能访问某些内容，那么该网站可以在用户登录后设置一个 cookie，以便在用户在之后的页面中仍然被认为是已登录状态。这样，用户无需在每次访问网站时都重新登录。
- 记录用户偏好：网站可以使用 `cookie` 记录用户的偏好和设置，以便在用户下次访问时提供更为个性化的体验。例如，一个购物网站可以记录用户浏览过的商品，然后在后续页面展示相关产品或推荐类似产品。
- 跨域会话管理：如果一个网站包含多个子域名，那么这些子域名可以共享同一个 cookie。这意味着，用户在一个子域名下登录后，即可在其他子域名下访问其登录状态，无需再次登录。
- 跟踪用户行为：网站可以使用 `cookie` 跟踪用户在网站上的行为和喜好，以便更好地了解用户需求和口味，并提供更为个性化的推荐和服务。例如，一个新闻网站可以使用 `cookie` 跟踪用户所关注的主题，然后在下次访问时展示相关新闻。
需要注意的是，`cookie` 也存在一些潜在的安全隐患。例如，如果某个网站设置的 `cookie` 被黑客窃取，黑客可以通过读取该 `cookie` 中的数据来模拟用户登录该网站。因此，在使用网站时，需要保护自己的 `cookie` 不被盗用，以及遵守网站的隐私政策。

## JavaScript闭包
```javascript
function outerFunction() {
  var num1 = 5;
  return function() {
    var num2 = 10;
    return num1 + num2;
  };
}
var innerFunction = outerFunction();
console.log(innerFunction()); // 输出 15
```
- 在这个示例中，outerFunction() 定义了一个局部变量 num1，并返回了一个内部函数（也就是闭包）。该内部函数定义了另一个局部变量 num2，并将 num1 和 num2 相加后返回结果。然后，将内部函数赋值给变量 innerFunction，然后调用该函数并输出结果。
- 由于 innerFunction 记住了 outerFunction 的作用域，因此可以访问 num1 变量，从而实现将 num1 和 num2 相加的功能。
- 闭包在实际开发中有着各种应用场景，例如：实现 JavaScript 模块化、处理回调函数、缓存数据等。

## 模块化编程
- `模块化编程`简单来说就是把一个大的程序拆分成一个个小的模块，每个模块都有自己的功能，这样做的好处是可以让程序更加清晰，方便维护.
- 比如在一个增删改查页面中,把新增和编辑弹窗单独抽离出来做成一个组件,这样做的好处是可以让代码更加清晰,方便维护,而且可以复用。
- 还比如把`请求方法`单独写在一个文件里,页面通过引入这个文件请求数据,这也是简单的模块化.
## 断点
- 在代码中使用debugger;
## 饿了么级联选择器
- [饿了么级联选择器](https://element.eleme.cn/#/zh-CN/component/cascader)
## 跨域问题
> Access to XMLHttpRequest at 'http://127.0.0.1:8081/api/getAllMenu' from origin 'http://127.0.0.1:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
- 妈的重新测试了一般还是不明所以
## 定义变量
- customXXX

## 换行符
- `<br>`
## 空格符
- `&nbsp;`

## 伪类和伪元素
- 伪类有`:hover`和`:active`等等.
- 伪元素和伪类都是用来修饰元素的,但是伪元素是用来修饰元素中的内容,而伪类是用来修饰元素本身的.
- 伪元素有`::before`和`::after`
- 其中::before 和 :before 是等价的,::after 和 :after 是等价的

## provide和inject是个很大的坑
- 其实是能传递的,只是因为是响应式的数据,修改了子组件,父组件会同时修改,这不好解决
- 为什么我只是在data里定义了一个空对象,然后在mounted里赋了下值,就通过provide传递不过去了呢?
- 他妈的就算赋好了值传递了过去也不能实现子组件改变,父组件不改变的效果,简直是垃圾,不用了.

## grid的两个属性
- `justify-content`属性是整个内容区域在容器里面的水平位置（左中右）
- `align-content`属性是整个内容区域的垂直位置（上中下）

## google浏览器
- google浏览器启用自定义格式设置工具,可以更好的查看ref的值

## el-form中:model="form"
- 这个:model="form"其实是可以不用定义的,把它定义成对象是为了更好地展示数据
- 不过定义这个model可以使用from组件自带的验证功能,[ElForm] model is required for validate to work.

## git强制推送
- git push -f origin master