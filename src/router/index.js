import Vue from 'vue'
import Router from 'vue-router'
import Global from './modules/global'

Vue.use(Router)

const routes = new Router({
  mode: 'history',
  routes: [
    ...Global
  ]
})

export default routes
