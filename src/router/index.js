import Vue from 'vue'
import Router from 'vue-router'
import Pub from '@/components/Pub'
import Home from '@/components/Home'
import AddArticle from '@/components/Article/addArticle'
import Argument from '../components/Argument/Argument'
import Technology from '../components/Technology'
import Hot from '../components/Hot'
import articleDetails from '../components/Article/details.vue'
import argumentDetails from '../components/Argument/details.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      name: 'index',
      path: '/',
      // component: Home
      redirect: '/home'
    },
    {
      name: 'pub',
      path: '/pub',
      component: Pub,
      children: [
        {
          name: 'home',
          path: '/home',
          component: Home
        },
        {
          name: 'argument',
          path: '/argument',
          component: Argument
        },
        {
          name: 'technology',
          path: '/technology',
          component: Technology
        },
        {
          name: 'addarticle',
          path: '/addarticle',
          component: AddArticle
        },
        {
          name: 'hot',
          path: 'hot',
          component: Hot
        },
        {
          name: 'articledetails',
          path: '/articledetails',
          component: articleDetails
        },
        {
          name: 'argumentdetails',
          path: '/argumentdetails',
          component: argumentDetails
        }
      ]
    }
  ]
})
