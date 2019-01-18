const routes = [
  {
    path: '*',
    name: '404',
    component: httpVueLoader('src/views/404.vue')
  },
  {
    path: '/',
    name: 'home',
    component: httpVueLoader('src/views/Home.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: httpVueLoader('src/views/Cart.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: httpVueLoader('src/views/Login.vue'),
    meta: {
      requiresNonAuth: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: httpVueLoader('src/views/Register.vue'),
    meta: {
      requiresNonAuth: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: httpVueLoader('src/views/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})
