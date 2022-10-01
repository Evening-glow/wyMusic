import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import moment from 'moment';
import { bigNumberTransform } from '@/utils'
import Pagination from '@/components/Pagination'

Vue.config.productionTip = false

//时间本土化
moment.locale('zh-cn')

//全局过滤器
Vue.filter('toBeThousand', bigNumberTransform)

moment.locale('zh-cn')
Vue.filter('timer', function (time) {
  return moment(time).calendar()
});

Vue.filter('duration', function (time) {
  return moment(time).format('mm:ss')
})

//全局组件
Vue.component(Pagination.name, Pagination);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
