# 看不懂的代码
## Promise
```js
Promise.resolve().then(() => {
  console.log(0);
  return Promise.resolve(4);
}).then((res) => {
  console.log(res)
})
```

## NodeJs
```js
const Router = require("koa-router");
const router = new Router();
const util = require("util");
const mysql = require("mysql2");
// 创建一个数据库连接
const connection = mysql.createConnection({
  host: "101.34.74.229",
  user: "root",
  password: "root",
  database: "test1",
});
const queryAsync = util.promisify(connection.query).bind(connection);
// 路由
router.get("/", async (ctx) => {
  try {
    // 执行查询并等待结果
    const results = await queryAsync("SELECT * FROM student");

    ctx.body = results; // 返回结果集
    console.log((results[0])); // 输出结果集
  } catch (err) {
    console.error(err);
    ctx.body = "An error occurred.";
  } finally {
    // 关闭数据库连接
    connection.end();
  }
});

router.get("/chp", async (ctx) => {
  ctx.body = "Hello chp";
});

module.exports = router.routes();
```
