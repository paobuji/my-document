# mysql

## 在服务上设置mysql用户权限使得可以在本地的navicat中访问
1. 首先在服务器上登录mysql
> use mysql;
2. 查看数据库的user和host表中的权限信息
> select user,host from user;
3. 修改root的host值,将host设置为%表示任何ip都能连接mysql
> update user set host='%' where user='root' and host='localhost';
4. 再次通过以下查询语句来显示所有的用户
> select user,host from user;
5. 最后一步不要忘了,要刷新mysql
> flush privileges;
6. 提示`Query OK, 0 rows affected (0.15 sec)`就可以打开navicat连接了.如果服务器没开放端口的话开放下端口就可以了.

## 使用cmd进入mysql
1. 首先在cmd中输入`mysql -u root -p`回车,然后输入密码,回车,进入mysql
2. 输入`show databases;`回车,查看数据库
3. 输入`use mysql;`回车,选择数据库
4. 输入`show tables;`回车,查看表
5. 输入`select * from user;`回车,查看表中的内容
6. 输入`exit;`回车,退出mysql