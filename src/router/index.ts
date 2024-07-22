import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Root",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/resume",
    name: "Resume",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Resume.vue"),
  },
  {
    path: "/past-projects",
    name: "Past Projects",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PastProjects.vue"),
  },
  {
    path: "/current-projects",
    name: "Current Projects",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CurrentProjects.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "about" */ "../views/404.vue"),
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
