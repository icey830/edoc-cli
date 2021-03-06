## 简介

前端工程文档生成工具

[![npm version](https://badge.fury.io/js/tdoc-cli.svg)](http://badge.fury.io/js/tdoc-cli)

![](https://nodei.co/npm/tdoc-cli.png?downloads=true&downloadRank=true&stars=true)

## 安装

```
npm install edoc-cli [-g]
```

## 使用方式

- ```cd /path/to/project/ ```  进入项目目录
- ```edoc init ```  初始化edoc配置文件，编写配置文件edoc.config (配置及配置文件请查看 [配置说明](./config.md))
- ```edoc build ```  构建文档
- ```edoc server``` 启动服务，访问文档页面效果

详细请查看[命令使用方式说明](./usage.md)。

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
