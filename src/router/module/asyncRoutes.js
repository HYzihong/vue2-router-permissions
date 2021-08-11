/*
 * @Author: your name
 * @Date: 2021-08-09 22:59:32
 * @LastEditTime: 2021-08-11 16:23:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-router-permissions/src/router/module/asyncRoutes.js
 */
import Form from "../../views/Form.vue";
import About from "../../views/About.vue";
import List from "../../views/List.vue";

const asyncRoutes = [
  {
    path: "/form",
    name: "Form",
    component: Form,
    meta: {
      role: ["admin"],
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      role: ["admin"],
    },
    children: [
      {
        path: "aboutChild",
        name: "AboutChild",
        component: About,
      },
    ],
  },
  {
    path: "/list",
    name: "List",
    component: List,
    meta: {
      role: ["admin"],
    },
  },
];

export default asyncRoutes;
