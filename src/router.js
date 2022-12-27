import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const Home = () => import(/* webpackChunkName:'home'*/ "./views/Home.vue");
const Login = () => import(/* webpackChunkName:'login'*/ "./views/Login.vue");
const Reg = () => import(/* webpackChunkName:'reg'*/ "./views/Reg.vue");
const Forget = () =>
  import(/* webpackChunkName:'forget'*/ "./views/Forget.vue");
const Index = () =>
  import(/* webpackChunkName:'index'*/ "./views/channels/Index.vue");
const Template1 = () =>
  import(/* webpackChunkName:'template1'*/ "./views/channels/Template1.vue");
export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "",
          name: "index",
          component: Index,
        },
        {
          path: "/index/:catalog",
          name: "catalog",
          component: Template1,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/reg",
      name: "reg",
      component: Reg,
      beforeEnter: (to, from, next) => {
        if (from.name === "login") {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "/forget",
      name: "forget",
      component: Forget,
    },
  ],
});
