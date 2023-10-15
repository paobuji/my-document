import{_ as e,o as l,c as o,f as s}from"./app-2278246b.js";const t={},c=s('<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> mysql</h1><h2 id="在服务上设置mysql用户权限使得可以在本地的navicat中访问" tabindex="-1"><a class="header-anchor" href="#在服务上设置mysql用户权限使得可以在本地的navicat中访问" aria-hidden="true">#</a> 在服务上设置mysql用户权限使得可以在本地的navicat中访问</h2><ol><li>首先在服务器上登录mysql</li></ol><blockquote><p>use mysql;</p></blockquote><ol start="2"><li>查看数据库的user和host表中的权限信息</li></ol><blockquote><p>select user,host from user;</p></blockquote><ol start="3"><li>修改root的host值,将host设置为%表示任何ip都能连接mysql</li></ol><blockquote><p>update user set host=&#39;%&#39; where user=&#39;root&#39; and host=&#39;localhost&#39;;</p></blockquote><ol start="4"><li>再次通过以下查询语句来显示所有的用户</li></ol><blockquote><p>select user,host from user;</p></blockquote><ol start="5"><li>最后一步不要忘了,要刷新mysql</li></ol><blockquote><p>flush privileges;</p></blockquote><ol start="6"><li>提示<code>Query OK, 0 rows affected (0.15 sec)</code>就可以打开navicat连接了.如果服务器没开放端口的话开放下端口就可以了.</li></ol><h2 id="使用cmd进入mysql" tabindex="-1"><a class="header-anchor" href="#使用cmd进入mysql" aria-hidden="true">#</a> 使用cmd进入mysql</h2><ol><li>首先在cmd中输入<code>mysql -u root -p</code>回车,然后输入密码,回车,进入mysql</li><li>输入<code>show databases;</code>回车,查看数据库</li><li>输入<code>use mysql;</code>回车,选择数据库</li><li>输入<code>show tables;</code>回车,查看表</li><li>输入<code>select * from user;</code>回车,查看表中的内容</li><li>输入<code>exit;</code>回车,退出mysql</li></ol><h2 id="修改mysql8的密码插件" tabindex="-1"><a class="header-anchor" href="#修改mysql8的密码插件" aria-hidden="true">#</a> 修改mysql8的密码插件</h2><ol><li>首先在cmd中输入<code>mysql -u root -p</code>回车,然后输入密码,回车,进入mysql</li><li>输入<code>select user,plugin from mysql.user;</code>回车,查看密码插件</li><li>输入<code>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH &#39;mysql_native_password&#39; BY &#39;123456&#39;;</code>回车,修改密码插件</li><li>输入<code>exit;</code>回车,退出mysql</li></ol>',17),a=[c];function i(r,d){return l(),o("div",null,a)}const m=e(t,[["render",i],["__file","mysql.html.vue"]]);export{m as default};
