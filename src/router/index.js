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
          component: resolve => require(['../components/allMap.vue'], resolve),
      },

      {
          path: '/login',
          component: resolve => require(['../login/login.vue'], resolve)
      },

      {
          path: '/searchSingle',
          component: resolve => require(['../admin/common/adminHome.vue'], resolve),
          children:[
              {
                  path: '/admin',
                  component: resolve => require(['../components/allMap.vue'], resolve)
              },
              {
                  path: '/listuser',
                  component: resolve => require(['../admin/page/controlUser.vue'], resolve)
              },
              {
                  path: '/compare',
                  component: resolve => require(['../admin/page/compare.vue'], resolve)
              },
              {
                  path: '/searchSingle',
                  component: resolve => require(['../admin/page/searchSingle.vue'], resolve)
              },
          ]
      },

  ]
})
