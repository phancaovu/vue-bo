import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: "/",
    name: "",
    component: () => import("@/views/ViewRoot.vue"),
    children: [
      {
        path: "history",
        name: "history",
        component: () => import("@/views/ViewHistory.vue")
      }, 
      {
        path: "index",
        name: "index",
        component: () => import("@/views/ViewIndex.vue")
      }, 

    ]
  }, 
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/ViewLogin.vue")
  }, 
  {
    path: "/loginform",
    name: "loginform",
    component: () => import("@/views/ViewLoginForm.vue")
  }, 
  


  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
