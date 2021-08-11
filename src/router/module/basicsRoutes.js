/*
 * @Author: your name
 * @Date: 2021-08-09 22:57:14
 * @LastEditTime: 2021-08-11 15:47:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-router-permissions/src/router/module/staticRoutes.js
 */
import Login from "../../views/Login.vue";
import Home from "../../views/Home.vue";
import Error_404 from "../../views/404error.vue";
import AboutChild from "../../views/aboutChild.vue";

const basicsRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "children",
        name: "HomeAboutChild",
        component: AboutChild,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "*",
    component: Error_404,
  },
];

export default basicsRoutes;
