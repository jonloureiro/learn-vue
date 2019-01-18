const routes = [
  {
    path: '/',
    component: httpVueLoader('components/store/Home.vue')
  },
  {
    path: '/cart',
    component: httpVueLoader('components/store/Cart.vue')
  },
  {
    path: '/login',
    component: httpVueLoader('components/login/Login.vue')
  },
  {
    path: '/register',
    component: httpVueLoader('components/login/Register.vue')
  }
]

const router = new VueRouter({
  routes
})
