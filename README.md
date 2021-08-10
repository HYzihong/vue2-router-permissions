<!--
 * @Author: your name
 * @Date: 2021-08-08 17:32:43
 * @LastEditTime: 2021-08-10 09:40:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-router-permissions/README.md
-->

# vue2-router-permissions

## 对于 vue 的权限

- 路由权限
- 组件级别的权限

#### 简单的权限方案

对于后端可以给予的权限方案：

- 返回权限级别,比如:`['admin','admin-delete','page1-all']`，我们可以在路由表的 meta 中匹配角色
- 返回路由 name 的是否可访问的表，例如：`{page1:true,page2:true,page3:false}`
- 返回完整的路由表，例如:`{[{path: "/",name: "Home",component: Home,},}`,不能返回绝对路径，要返回 Home
