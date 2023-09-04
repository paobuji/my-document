# 对promise的理解
```javascript
const getStudentList = () => {
   getAllStudent(params).then((res) => {
    this.xxx = res;
  });
};
```
- 这是一个普通的异步请求接口数据方法,如果直接在请求数据完成之后直接写逻辑处理,逻辑一多就看的有点杂乱了,所以可以把逻辑处理的方法拆分出来,这个时候就可以使用`promise`的特性了,有以下三种方法.

1 使用return直接返回一个promise,然后就可以在.then后面也业务逻辑了
```javascript
const getStudentList = () => {
   return getAllStudent(params).then((res) => {
    this.xxx = res;
  });
};

getStudentList().then(()=>{
    xxx...
})
```
2. 使用async await,这种方法是直接就会返回一个promise
```javascript
const getStudentList = async () => {
   let res = await getAllStudent(params)
};

getStudentList().then(()=>{
    xxx...
})
```
3. 第三种是最麻烦的一种吧,不过也是见得比较多的一种.就是新建一个promise对象的方法.
```javascript
const getStudentList = () => {
    return new Promise(resolve,reject){
        getAllStudent(params)
        .then((res) => {
            this.xxx = res;
            resolve(res)
        })
        .catch((error)=>{
            reject(error)
        });
    }
};

getStudentList().then(()=>{
    xxx...
})
```