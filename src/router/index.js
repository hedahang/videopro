import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import member from '@/views//member/index'
import publish from '@/views//member/publish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'member',
      component: member,
      children:[{
        path: '/pub',
        name: "pub",
        component: publish
      }]
    },
  ]
})
