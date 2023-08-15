# 实际工作中对async,await的理解
```javascript
async findStatReport() {
    let res = await findStatReport({ ...this.searchForm });
    this.feeCategoryList = res.data.feeCategoryList;
    this.feeProjectList = res.data.feeProjectList;
}
```        
```javascript
this.findStatReport().then(() => {
    this.$refs.feetypestat.show({ data: this.feeCategoryList });
});
```
- 上面的方法返回是一个`promise`对象,这个方法是单独用来请求数据的,不需要写业务逻辑,业务逻辑可以写在then里面,这样就可以保证数据请求完毕后再执行业务逻辑