import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate, { Validator } from "vee-validate";
// method1: to zh-cn
import zh from "vee-validate/dist/locale/zh_CN";
// methods2:to zh-cn
import "./local/index";
Vue.config.productionTip = false;
Vue.use(VeeValidate);
// Validator.localize("zh-CN", zh);
const validator = new Validator();
validator.localize("zh-CN");
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
