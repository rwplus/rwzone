export default [
  {
    path: '*',
    meta: {
      public: true,
    },
    redirect: {
      path: '/404'
    }
  },
  {
    path: '/login',
    meta: {
      public: true,
    },
    name: 'Login',
    component: () => import(
      `@/views/Login.vue`
    )
  },
  {
    path: '/',
    meta: { },
    name: 'Root',
    redirect: {
      name: 'Login'
    }
  },
  {
    path: '/dashboard',
    meta: { breadcrumb: true },
    name: 'Dashboard',
    component: () => import(
      `@/views/Dashboard.vue`
    )
  },
    {
    path: '/dingtalk',
    meta: { breadcrumb: true },
    name: 'Dingtalk',
    component: () => import(
      `@/views/Dingtalk.vue`
    )
  },

];
