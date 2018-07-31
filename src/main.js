import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMaterial from 'vue-material';
import VueResource from 'vue-resource';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueMaterial)
Vue.use(VueResource)

Vue.config.productionTip = true

window.urlMock = 'http://5b5f1edb8e9f160014b88db4.mockapi.io/api/';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


