/*
 * @Author: your name
 * @Date: 2021-08-10 08:34:33
 * @LastEditTime: 2021-08-11 14:37:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-router-permissions/src/store/module/router.js
 */
import asyncRoutes from "../../router/module/asyncRoutes";
import basicsRoutes from "../../router/module/basicsRoutes";

const state = {
  routers: basicsRoutes,
  hasGetRules: false,
};

const mutations = {
  CONCAT_ROUTES(state, routerList) {
    // 这里要注意路由的前后问题
    state.routers = routerList.concat(basicsRoutes);
    // console.log(state.routers);
    state.hasGetRules = true;
  },
};

const isRoleTrue = (role, rules) => {
  // console.log(
  //   role,
  //   rules,
  //   role.filter((_role) => rules.indexOf(_role) > -1)
  // );
  // a.filter(function(v){ return b.indexOf(v) > -1 })
  return role.filter((_role) => rules.indexOf(_role) > -1).length > 0;
};

const getAccesRouterList = (basicsRoutes, rules) => {
  return basicsRoutes.filter((item) => {
    // console.log(item);
    // console.log("isRoleTrue", isRoleTrue(item.meta.role, rules));
    if (isRoleTrue(item.meta.role, rules)) {
      // console.log(true, item);
      // if (item.children) {
      // console.log(
      //   "item.children",
      //   item.children,
      //   rules
      //   // getAccesRouterList(item.children.meta.role, rules)
      // );
      if (item.children)
        item.children = getAccesRouterList(item.children, rules);
      // }
      return true;
    } else return false;
    // console.log(item);
    // if (rules[item.name]) {
    //   if (item.children)
    //     item.children = getAccesRouterList(item.children, rules);
    //   return true;
    // } else return false;
    // rules.forEach((rule) => {
    //   if (item.role.indexOf(rule)) {
    //     return true;
    //   }
    // });
  });
};

const actions = {
  concatRoutes({ commit }, rules) {
    // console.log(rules);
    return new Promise((resolve, reject) => {
      try {
        let routerList = [];
        if (rules.indexOf("admin") > -1) {
          routerList = asyncRoutes;
        } else {
          // 递归asyncRoutes，看是否有权限访问
          routerList = getAccesRouterList(asyncRoutes, rules);
          // console.log(routerList);
        }
        commit("CONCAT_ROUTES", routerList);
        // console.log(routerList);
        resolve(state.routers);
      } catch (err) {
        reject(err);
      }
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
