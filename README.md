## 简介

前端工程文档生成工具，方便开发者通过md文档能快速构建出系统完整的文档页面。

[![npm version](https://badge.fury.io/js/tdoc-cli.svg)](http://badge.fury.io/js/doc-cli)

![](https://github.com/icey830/edoc-cli/blob/master/edoc.jpg?raw=true)

## 安装

```
npm install edoc-cli [-g]
```

## 使用方式

- ```cd /path/to/project/ ```  进入项目目录
- ```edoc init ```  初始化edoc配置文件，编写配置文件edoc.config (配置及配置文件请查看 [配置说明](./doc/config.md))
- ```edoc build ```  构建文档
- ```edoc server ``` 启动服务，访问文档页面效果

详细请查看[命令使用方式说明](./doc/usage.md)。

## 产出页面效果截图
<img src="./edoc.png" />

## 使用其他方式

1. 使用脚本：

   ```javascript
   var edoc = require("edoc");

   edoc.build('/path/to/project', options);
   ```

2. 使用Gulp：

   ```javascript
   var edoc = require("edoc");

   gulp.task('edoc', function() {
       return gulp.src('./')
           .pipe(edoc({
               // 配置
           }));
   });
   ```


## ToDo

- [x] 可以init出一个完整简单示例，方便用户能迅速入门
- [x] 要能结合gulp和browsersync
- [x] 能够起本地server服务预览
- [ ] 在子目录页面中实现异步请求数据，解决了刷新页面的烦恼
- [ ] 精简产出的页面中的source文件夹下的js和css文件
- [ ] 新增命令，能通过命令直接识别summry.md来自动生成json配置文件，将md转换成html
