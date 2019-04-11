import Vue from 'vue'
import App from './App.vue'
import '@/config';
import router from './router';
import './plugins/vuetify';
import '@/assets/css/index.scss';
import Vuex from 'vuex';
import Notifications from 'vue-notification';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(Notifications);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
