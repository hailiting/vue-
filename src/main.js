// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui'
// import router from './router'
// import app from './app'
// import store from './store'
import VueLazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
// import './assets/css/index.scss'
import lazyimg from './assets/img/www/lazyloading.jpg'
// import '../static/fonts/iconfont.css'
// element-ui 自定义主题
// import '../theme/index.css'
// import {
//   uploadMonitorData,
//   uploadMonitorBrowser
// } from '@/api/api'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(infiniteScroll)
Vue.use(VueLazyLoad, {
  error: lazyimg,
  preLoad: 1.3,
  attempt: 1
})
/* eslint-disable no-new */
// let arr = ['/login', '/signup', '/index', '/helpCenter', '/index/insole', '/index/materials', '/index/outsole', '/index/shoeHeel', '/car', '/forgetpassword/personal', '/forgetpassword/company', '/detail', '/helpCenter/accountManagement', '/helpCenter/serviceSupport', '/helpCenter/aboutUs', '/helpCenter/focusUs', '/privacyPlicy', '/helpCenter/shoppingGuide', '/helpCenter/orderOperation', '/helpCenter/indemnification', '/helpCenter/contact']
// let arrOut = ['/login', '/signup', '/forgetpassword/personal', '/forgetpassword/company', '/forgetpassword', '/ucenter']
// router.afterEach((to, from, next) => {
//   if (to) {
//     if (arr.indexOf(to.path) === -1 && !localStorage.getItem('Authorization')) {
//       router.push('/login')
//     }
//     if (arrOut.indexOf(to.path) !== -1 && localStorage.getItem('Authorization')) {
//       router.push('/index')
//     }
//   }
//   window.scrollTo(0, 0)
// })
// window.vm = new Vue({
//   el: '#app',
//   router,
//   store,
//   components: {
//     App
//   },
//   template: '<App/>'
// })

// 监控console.error向后端发送数据
// window.console.error = function () {
//   let params = arguments[0]
//   if (params['url'] && params['code']) {
//     uploadMonitorData(params).then(res => {})
//   }
// }

// 监控统计浏览器信息
upBrowserData(getBrowserInfo())

function getBrowserInfo() {
  var ua = navigator.userAgent.toLocaleLowerCase()
  var browserType = null
  if (ua.match(/msie/) != null || ua.match(/trident/) != null) {
    browserType = 'IE'
  } else if (ua.match(/firefox/) != null) {
    browserType = 'Firefox'
  } else if (ua.match(/ubrowser/) != null) {
    browserType = 'UC'
  } else if (ua.match(/opera/) != null) {
    browserType = 'Opera'
  } else if (ua.match(/bidubrowser/) != null) {
    browserType = 'Baidu'
  } else if (ua.match(/metasr/) != null) {
    browserType = 'Sogou'
  } else if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
    browserType = 'QQ'
  } else if (ua.match(/chrome/) != null) {
    var is360 = _mime('type', 'application/vnd.chromium.remoting-viewer')
    if (is360) {
      browserType = '360'
    } else {
      browserType = 'Chrome'
    }
  } else if (ua.match(/safari/) != null) {
    browserType = 'Safari'
  } else {
    browserType = 'Other'
  }
  return browserType
}

function _mime(option, value) {
  var mimeTypes = navigator.mimeTypes
  for (var mt in mimeTypes) {
    if (mimeTypes[mt][option] === value) {
      return true
    }
  }
  return false
}
// 像后端发送数据
function upBrowserData(name) {
  // let params = {
  //   browserName: name
  // }
  // uploadMonitorBrowser(params).then(res => {
  //   console.log(res)
  // })
}
