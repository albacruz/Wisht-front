import Vue from "vue";
import Router from "vue-router";
import MainPage from "../views/MainPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main_page",
      component: MainPage
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import("../views/RegistroContainer")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import("../views/LoginContainer")
    },
    {
      path: "/profile/:nickname",
      name: "presentsProfile",
      component: () =>
        import("../views/UsuarioRegalos")
    },
    {
      path: "/valuation",
      name: "valuation",
      component: () =>
        import("../views/Valuation")
    },
    {
      path: "/auto",
      name: "auto",
      component: () =>
        import("../views/Auto")
    }
  ]
});
