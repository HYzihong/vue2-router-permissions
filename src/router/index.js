/*
 * @Author: your name
 * @Date: 2021-08-08 17:32:34
 * @LastEditTime: 2021-08-11 14:40:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-router-permissions/src/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import basicsRoutes from "./module/basicsRoutes";
import { setTitle } from "../utils/router";
import store from "../store";
Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue"),
//   },
// ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  basicsRoutes,
});

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title);

  let token = "...";
  if (token) {
    if (!store.state.router.hasGetRules) {
      // store
      //   .dispatch("authorization")
      //   .then((rules) => {
      const rules = ["about"];
      store
        .dispatch("concatRoutes", rules)
        .then((routers) => {
          console.log(JSON.stringify(routers));
          router.addRoutes(routers);
          // console.log(router);
          next({ ...to, replace: true });
        })
        .catch(() => {
          next({ name: "login" });
        });
      // })
      // .catch(() => {
      //   token = '';
      //   next({ name: "login" });
      // });
    } else {
      next();
    }
  } else {
    if (to.name === "login") next();
    else next({ name: "login" });
  }
});

export default router;
