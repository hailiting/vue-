// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import INDEX from './INDEX.vue'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#index',
  router,
  components: { INDEX },
  template: '<INDEX/>'
})
