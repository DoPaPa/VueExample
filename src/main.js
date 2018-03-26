// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './Utils/myAxios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'swiper/dist/css/swiper.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import Moment from 'moment'
Moment.locale('zh-cn')
Vue.config.productionTip = false
Vue.use((Vue) => {
  Vue.prototype.$axios = axios
})
Vue.use((Vue) => {
  Vue.prototype.$moment = Moment
})
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(VueQuillEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
