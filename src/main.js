import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { bigNumberTransform } from '@/utils'
import Pagination from '@/components/Pagination'
import moment from 'moment';
Vue.config.productionTip = false

//全局过滤器
Vue.filter('toBeThousand', bigNumberTransform)
Vue.filter('timer', function (time) {
  return moment(time).fromNow()
});

//全局组件
Vue.component(Pagination.name, Pagination);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
