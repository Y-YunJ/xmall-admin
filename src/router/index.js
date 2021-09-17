import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/home/Home.vue'),
      redirect: '/homePage',
      children:[
        {
          path:'',
          // name:'homePage',
          component:() => import('../views/homePage/homePage'),
          meta:{
            login:true,
            name:'首页'
          }
        },
        {
          path:'productPage',
          name:'productPage',
          component:() => import('../views/productPage/productPage'),
          meta:{
            login:true,
            name:'全部产品'
          },
        },
        {
          path:'classificationPage',
          name:'classificationPage',
          component:() => import('../views/classificationPage/classificationPage'),
          meta:{
            login:true,
            name:'产品分类'
          }
        },
        {
          path:'userManagePage',
          name:'userManagePage',
          component:() => import('../views/userManagePage/userManagePage'),
          meta:{
            login:true,
            name:'用户管理'
          }
        },
        {
          path:'orderManagePage',
          name:'orderManagePage',
          component:() => import('../views/orderManagePage/orderManagePage'),
          meta:{
            login:true,
            name:'全部订单'
          }
        },
        {
          path:'rewardManagePage',
          name:'rewardManagePage',
          component:() => import('../views/rewardManagePage/rewardManagePage'),
          meta:{
            login:true,
            name:'打赏信息'
          }
        },
        {
          path:'accountPage',
          name:'accountPage',
          component:() => import('../views/accountPage/accountPage'),
          meta:{
            login:true,
            name:'我的账号'
          }
        },
        {
          path: 'productDetail',
          name:'productDetail',
          component:() => import('../views/productPage/productDetail'),
          meta:{
            login:true,
            name:'产品详情'
          }
        },
        {
          path: 'classificationDetail',
          name:'classificationDetail',
          component:() => import('../views/classificationPage/classificationDetail'),
          meta:{
            login:true,
            name:'分类详情'
          }
        },
        {
          path: 'userDetail',
          name:'userDetail',
          component:() => import('../views/userManagePage/userDetail'),
          meta:{
            login:true,
            name:'用户详情'
          }
        },
        {
          path: 'orderDetail',
          name:'orderDetail',
          component:() => import('../views/orderManagePage/orderDetail'),
          meta:{
            login:true,
            name:'订单详情'
          }
        }
      ]
    },
    {
      path: '*',
      redirect :'/'
    },
    {
      path:'/login',
      name:'login',
      component:() => import('@/components/login/login')
    }
  ]
})

router.beforeEach((to,from,next) => {
  let bl = to.matched.some((item) => {
    return item.meta.login
  })
  if(bl){
    let info = router.app.$session.fetch('login')
    if(info){
      next()
    }else{
      router.push('/login')
    }
  }else{
    next()
  }
})
export default router
