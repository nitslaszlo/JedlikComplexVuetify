import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import Demo from "@/views/Demo.vue";
import Demo2 from "@/views/Demo2.vue";
import VuexDemo from "@/views/VuexDemo.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/demo",
    name: "Demo",
    component: Demo
  },
  {
    path: "/demo2",
    name: "Demo2",
    component: Demo2
  },
  {
    path: "/vuex",
    name: "Vuex",
    component: VuexDemo
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  {
    path: "/about2",
    name: "About2",
    component: () => import("@/views/About2.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
