import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/profile",
    name: "Proflie",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/News.vue"),
  },
  {
    path: "/classes",
    name: "Classes",
    component: () => import("../views/Classes.vue"),
  },
  {
    path: "/auth",
    name: "Auth",
    redirect: { name: "login" },
    component: () => import("@/views/Auth.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/pages/Login.vue")
      },
      {
        name: "register",
        path: "register",
        component: () => import("@/pages/Register.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
