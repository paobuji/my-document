
# linux学习笔记
- `ls /` 查看根目录下的文件
- `pwd` 查看当前工作目录
- `cd` `change directory` 切换目录
- `cd`：不带参数的"cd"命令会将当前工作目录更改为当前用户的主目录（通常是"/home/username"）。
- `cd /`：将当前工作目录更改为根目录。
- `cd ..`：将当前工作目录更改为上一级目录（父目录）。
- `cd -`：将当前工作目录更改为先前所在的目录。
- `cat test.txt` 查看文件内容
- `|` 管道符:将左边的结果作为右边内容的输入
- `cat test.txt | grep itheima` 查看文件内容并且过滤出来包含itheima的文件
- `tail -5 test.txt`  查看文件后5行
- `tail -f test.txt`  查看文件后10行,并且实时更新
- `ll` === `ls -l` 查看文件详细信息
- `getent` 获取系统信息
## 服务器学习
- `netstat -ano | find “5173”` 查看端口号是否被占用,这个也可以看出来启动的IP地址是ipv4还是ipv6
## docker
![示例图片](/images/docker-install.png)
```js
1. yum update
2. yum install -y yum-utils device-mapper-persistent-data lvm2
3. yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
4. yum install -y docker-ce
5. docker -v
```
```js
- systemctl start docker   //启动docker
- systemctl status docker //查看docker状态
- systemctl enable docker //开机自启
- docker images //查看镜像
- docker search nginx //搜索镜像
- docker pull nginx //拉取镜像 版本号默认latest
- docker rmi nginx //删除镜像
- docker rm 容器id //删除容器
- docker run -it //进入容器
- docker run -id //后台运行
- docker ps //查看正在运行的容器
- docker ps -a //查看所有容器   
```



