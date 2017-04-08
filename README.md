# yixin-eslint
公司内部的eslint配置文件，方便公司内部快速更新本地配置文件


### 原理说明
这个包主要作用是获取当前最新eslint[配置文件](http://p.evenhidata.com/sitianming/eslintrc/.eslintrc.js)，然后写入到本地

### 安装
在命令行里输入：npm i -g yixin-eslint request

### 使用
切换到需要更新配置文件的目录，执行 yixin-eslint filename。其中filename是你的eslint配置文件名。
