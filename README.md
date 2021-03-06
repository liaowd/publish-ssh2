## 安装命令
npm install custom-vue-cli -g

## 配置文件说明
```配置文件模板
{
  "localDir": "dist/",//本地需要发布的代码目录
  "zipName": "dist",//代码压缩后的文件名
  "servers": [
    {
      "host": "",//服务器ip
      "user": "",//用户名
      "port": "",//端口
      "password": "",//密码
      "remoteDir": ""//代码在服务器端的存放路径
    }
  ]
}
```
## 功能点说明：
### 1、初始化项目
### 2、生成部署配置文件模板
### 3、根据指定的文件路劲生成组件模板
### 4、部署代码到指定服务器
### 5、服务器代码回滚
### 6、将指定文件夹压缩成压缩包

## 命令使用说明
### 初始化项目
custom-vue-cli init [repoUrl] [dist] //repoUrl 模板名称（H5、PC）或者仓库地址 dist目标目录一定要是空目录才行

### 用命令生成配置文件模板
custom-vue-cli gcfg [cfgPath] //cfgPath为配置文件路径，可选,例如publishcfg/config.json

### 部署代码命令
custom-vue-cli publish [cfgPath] [isPrompt] //cfgPath为配置文件路径，可选,例如publishcfg/config.json; isPrompt 真正开始部署前是否让用户确认部署服务器信息，默认不需要，设置为’Y‘,则会让用户确认服务器信息

### 恢复至上个版本
custom-vue-cli revert [cfgPath] //cfgPath为配置文件路径，可选,例如publishcfg/config.json

### 生成压缩包
custom-vue-cli compress [cfgPath] //cfgPath为配置文件路径，可选,例如publishcfg/config.json

### 生成组件
custom-vue-cli ganeratorVueComp [dist]  //dist为组件的路径，可选,例如demo.vue;