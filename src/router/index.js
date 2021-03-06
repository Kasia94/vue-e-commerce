import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "static" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "static" */ '../views/Contact.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue'),
    children: [
      // {
      //   path: '/',
      //   component: () => import(/* webpackChunkName: "category" */ '../components/CategoryNotSelected.vue')
      // },
      {
        path: ':id?',
        props: route => ({ id: Number(route.params.id) || null }),
        component: () => import(/* webpackChunkName: "category" */ '../components/ProductsList.vue')
      }
    ]
  },
  {
    path: '/product/:id',
    props: route => ({ id: Number(route.params.id) || null }),
    component: () => import(/* webpackChunkName: "product" */ '../views/ProductPage.vue')
  },
  {
    path: '/basket',
    component: () => import(/* webpackChunkName: "basket" */ '../views/Basket.vue')
  },
  {
    path: '/basket/confirm',
    component: () => import(/* webpackChunkName: "basket" */ '../views/Confirm.vue')
  },
  {
    path: '/basket/summary/:id',
    props: route => ({ id: Number(route.params.id) || null }),
    component: () => import(/* webpackChunkName: "basket" */ '../views/Summary.vue')

  },
  {
    path: '/search/:name',
    props: true,
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
export default router
