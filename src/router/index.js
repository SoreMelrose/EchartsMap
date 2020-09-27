import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
      {
          path: '/',
          redirect: '/login'
      },
      {
          path: '/home',
          name: 'home',
          component: () => import(/* webpackChunkName: "home" */ "@/views/home"),
      },

      {
          path: '/login',
          component: resolve => require(['../login/login.vue'], resolve)
      },

      {
          path: '/admin',
          component: resolve => require(['../admin/common/adminHome.vue'], resolve),
          children:[
              {
                  path: '/list',
                  component: resolve => require(['../views/home.vue'], resolve)
              },
          ]
      },

  ]
})
