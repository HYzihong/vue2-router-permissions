/*
 * @Author: your name
 * @Date: 2021-08-08 17:32:34
 * @LastEditTime: 2021-08-10 08:34:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-router-permissions/src/store/index.js
 */
import Vue from "vue";
import Vuex from "vuex";
import router from "./module/router";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: false,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    router,
  },
});
