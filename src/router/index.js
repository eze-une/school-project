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
    children:[
      {
        path: '/classlist',
        name: 'ClassesList',
        component: ()=>import("../components/right-column/ClassList")
      },
      {
        path: '/marklist',
        name: 'MarkList',
        component: ()=>import("../components/right-column/MarkList")
      },
      {
        path: '/submissions',
        name: 'Submissions',
        component:()=> import("../components/right-column/Submissions")
      },
      {
        path: '/assigments',
        name: 'Assigments',
        component:()=> import("../components/right-column/Assigments")
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
