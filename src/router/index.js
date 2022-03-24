import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/HomePage"),
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: () => import("@/views/RegisterPage"),
  },
  {
    name: "LoginPage",
    path: "/login",
    component: () => import("@/views/LoginPage"),
  },
  {
    name: "NewBookmarkPage",
    path: "/new",
    component: () => import("@/views/NewBookmark"),
  }
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
