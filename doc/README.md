# 开发步骤

## ejs (feature-page)
1. 登录注册页面
2. 博客列表页面

## mysql 

1. 使用 `sequelize` 插件，node 需要 10.0+
2. 结合插件 `mysql2`，为所选的数据库手动安装驱动程序，支持 Promise 和 async/await

## redis

1. 使用 `koa-redis` 和 `koa-generic-session` 插件进行 session 的设置


## eslint

1. 使用些简单的 eslint 检查，配合 `babel-eslint` 插件，对一些实验性语法进行支持
2. 提交前使用 `pre-commit` 插件进行语法检测，若不通过，不允许提交


## router

1. 路由分两类，`view` 层面和 `api` 接口层面 
