import Vue from 'vue'
import Router from 'vue-router'


import home from '@/components/home'
import cinema from '@/components/cinema'
import user from '@/components/user'
import shop from '@/components/shop'
import film from '@/components/film'
import card from '@/components/card'
import detail from '@/components/detail'
import mymap from '@/components/map'
import cinfo from '@/components/cinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/film',
      component: film
    },
    {
      path: '/cinema',
      component: cinema,
    },
    {
      path:'/cinema/:id',
      component:cinfo
    },
    {
      path: '/detail/:id',
      component: detail,

    },
    {
      path: '/shop',
      component: shop
    },
    {
      path: '/card',
      component: card
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/map',
      component: mymap
    }
  ]
})
