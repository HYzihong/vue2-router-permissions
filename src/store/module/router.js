/*
 * @Author: your name
 * @Date: 2021-08-10 08:34:33
 * @LastEditTime: 2021-08-11 16:37:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-router-permissions/src/store/module/router.js
 */
import basicsRoutes from "../../router/module/basicsRoutes";
import ajaxRouter from "../../utils/ajaxRouter";
import routerMap from "../../utils/routerMap";

const state = {
  routers: [],
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

// 方案一：简单的view结构使用
// const returnView = (url) => {
//   return () => import(`../../views/${url}.vue`);
// };
// const initRoute = (router) => {
//   router.component = returnView(router.component);
//   if (router.children) getAccesRouterList(router.children);
//   return router;
// };

// 方案二：复杂的view结构使用
const initRoute = (router) => {
  router.component = routerMap[router.component];
  if (router.children) getAccesRouterList(router.children);
  return router;
};

const getAccesRouterList = (ajaxRouter) => {
  return ajaxRouter.map((item) => initRoute(item));
};

const actions = {
  concatRoutes({ commit }) {
    return new Promise((resolve, reject) => {
      try {
        let routerList = [];
        routerList = getAccesRouterList(ajaxRouter);
        commit("CONCAT_ROUTES", routerList);
        console.log(routerList);
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
