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
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue'),
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "category" */ '../components/CategoryNotSelected.vue')
      },
      {
        path: ':id',
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
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
