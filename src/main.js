import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  //使用此函数进行页面解析
  render: h => h(App),
  beforeCreate(){
    //注册事件总线
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
