# 学习笔记

## jdk
jdk直接解压就可以使用,不需要安装,注意的是配置环境变量的时候需要配置到bin那一层.

## mysql社区版下载
- [mysql社区版下载](https://dev.mysql.com/downloads/mysql/)
## 强制类型转换
```java
try
    {
        return (LoginUser) getAuthentication().getPrincipal();
    }
```        
- getUser()方法是在SecurityUtils.getLoginUser()中调用的，它用于获取当前登录用户的详细信息并返回一个LoginUser对象。而LoginUser对象中包含了SysUser对象，因此再使用getUser()方法从中获取SysUser对象。

## springboot中三个非常重要的注解
- @controller 控制器（注入服务）
- @service 服务（注入dao）
- @repository dao（注入数据源） @Mapper 通用注解（注入spring容器）
- @component 通用注解（注入spring容器）
- @autowired 自动注入

## springboot生成菜单结构列表
``` java
public List<MenuEntity> buildTree(List<MenuEntity> menuList,String parentId){
    List<MenuEntity> treeList = new ArrayList<>();
    for (MenuEntity menu : menuList) {
        if (parentId.equals(menu.getParentId())) {
            List<MenuEntity> children = buildTree(menuList, String.valueOf(menu.getMenuId()));
            menu.setChildren(children);
            treeList.add(menu);
        }
    }
    return treeList;
}
```
## 遍历List
``` java
for(Object item : arrayList){
    System.out.println(item);
}
```
## nginx
- 查看nginx版本
> nginx -v
- 启动nginx服务
> start nginx
- 重启nginx服务
> nginx -s reload
- 停止nginx服务
> nginx -s stop
## `final`的用法
- 在Java中，`final`关键字用于修饰类、方法和变量，具有不同的含义。
- 对于类和方法，`final`表示这个类或方法不能被继承或重写，这是一种防止子类修改父类的行为的机制。
- 对于变量，`final`表示这个变量的值只能被赋值一次，并且不能再修改。这是一种常量的声明机制，在程序运行期间变量的值不会发生改变，从而提高了程序的安全性和可维护性。
- 在private `final` String secret = "your-secret-key";这句话中，`final`修饰的是secret变量，表示这个变量的值只能被赋值一次，并且不能再修改。由于生成JWT token所使用的秘钥应该由服务端保管，并且在整个应用程序的生命周期内不应该被修改，因此使用`final`修饰secret变量可以保证这个变量的值在程序运行期间不会被改变。
## 实体类使用`@Component`注解
- 实体类使用了`@Component`注解，这样就可以在其他类中使用`@Autowired`注解来注入实体类了。
## java线程休眠两秒
- `Thread.sleep(2000);`
## @Value的用法
```java
yml文件中配置
student:
  name: chp

@Value("${student.name}")
    private String name;
```
## java -jar 指定端口
- `java -jar xxx.jar --server.port=8081`

## yml文件中数组的写法
```yml
steps:
  - name: Checkout
    uses: actions/checkout@v3
  - name: Setup Pages
    uses: actions/configure-pages@v3
  - name: Upload artifact
    uses: actions/upload-pages-artifact@v1
    with:
      # Upload entire repository
      path: '.'
  - name: Deploy to GitHub Pages
    id: deployment
    uses: actions/deploy-pages@v2
```
```yml
steps: [
  { name: Checkout, uses: actions/checkout@v3 },
  { name: Setup Pages, uses: actions/configure-pages@v3 },
  { name: Upload artifact, uses: actions/upload-pages-artifact@v1, with: { path: '.' } },
  { name: Deploy to GitHub Pages, id: deployment, uses: actions/deploy-pages@v2 }
]
```

## 杀死nginx进程
- `taskkill /f /t /im nginx.exe`