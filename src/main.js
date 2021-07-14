import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueModalTor from "vue-modaltor/dist/vue-modaltor.common";
import "vue-modaltor/dist/vue-modaltor.css";
import { store } from "./store/store";

Vue.use(VueModalTor);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
