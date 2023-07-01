# 学习笔记

## 每个js文件都自带两个属性值
- `__filename` 文件名字 
 `__dirname`  文件路径
## 使用npm命令快速生成package.json文件
```javascript
npm init -y
```
## fs.readFile 和 fs.writeFile 
```javascript
fs.readFile(path,[encoding],[callback]) 是异步IO操作
```
## process.argv
- `process.argv` 是 `Node.js` 中的一个全局变量，它返回一个数组，包含了当前 `Node.js` 进程运行时的命令行参数。其中，第一个参数为 `Node.js` 可执行文件所在路径，第二个参数为被执行的 `JavaScript` 文件所在路径，后面的参数则是用户在命令行中传入的其他参数。
```JavaScript
function main(argv) {
    console.log(argv);
}

main(process.argv.slice(2));
```
## node读取文件列表
```JavaScript
const fs = require("fs");
fs.readdir(process.argv[2], (err, files) => {
    if (err) {
        console.log(err);
    } else {
        files.forEach(file => {
            if (file.endsWith("." + process.argv[3])) {
                console.log(file);
            }
        });
    }
})
```