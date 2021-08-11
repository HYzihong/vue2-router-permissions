/*
 * @Author: your name
 * @Date: 2021-08-11 15:57:22
 * @LastEditTime: 2021-08-11 16:30:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-router-permissions/src/utils/ajaxRouter.js
 */
const ajaxRouter = [
  {
    path: "/form",
    name: "Form",
    component: "Form",
  },
  {
    path: "/about",
    name: "About",
    component: "About",
    children: [
      {
        path: "aboutChild",
        name: "AboutChild",
        component: "AboutChild",
      },
    ],
  },
  {
    path: "/list",
    name: "List",
    component: "List",
  },
];
export default ajaxRouter;
