import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import member from '@/views//member/index'
import publish from '@/views//member/publish'
import useraction from '@/views//users/useraction'
import userlogin from '@/views//users/userlogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/member'
    },
    {
      path: '/member',
      name: 'member',
      component: member,
      children:[{
        path: '/member/pub',
        name: "pub",
        component: publish
      }]
    },
    {path: '/users',
      name: 'users',
      component: useraction,
      redirect: '/users/login',
      children:[{
          path: '/users/login',
          name: "userlogin",
          component: userlogin
      }]
    },
  ]
})
