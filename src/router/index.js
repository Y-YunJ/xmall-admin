import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

// NProgress Configuration
NProgress.configure({ showSpinner: false })

Vue.use(Router)
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
            name:'首页',
            index:0,
          }
        },
        {
          path:'productPage',
          name:'productPage',
          component:() => import('../views/productPage/productPage'),
          meta:{
            login:true,
            name:'全部产品',
            index:1,
          },
        },
        {
          path:'classificationPage',
          name:'classificationPage',
          component:() => import('../views/classificationPage/classificationPage'),
          meta:{
            login:true,
            name:'产品分类',
            index:2,
          }
        },
        {
          path:'userManagePage',
          name:'userManagePage',
          component:() => import('../views/userManagePage/userManagePage'),
          meta:{
            login:true,
            name:'用户管理',
            index:3,
          }
        },
        {
          path:'orderManagePage',
          name:'orderManagePage',
          component:() => import('../views/orderManagePage/orderManagePage'),
          meta:{
            login:true,
            name:'全部订单',
            index:4,
          }
        },
        {
          path:'rewardManagePage',
          name:'rewardManagePage',
          component:() => import('../views/rewardManagePage/rewardManagePage'),
          meta:{
            login:true,
            name:'打赏信息',
            index:5,
          }
        },
        {
          path:'accountPage',
          name:'accountPage',
          component:() => import('../views/accountPage/accountPage'),
          meta:{
            login:true,
            name:'我的账号',
            index:6,
          }
        },
        {
          path: 'productDetail',
          name:'productDetail',
          component:() => import('../views/productPage/productDetail'),
          meta:{
            login:true,
            name:'产品详情',
            index:1,
          }
        },
        {
          path: 'productAdd',
          name:'productAdd',
          component:() => import('../views/productPage/productDetail'),
          meta:{
            login:true,
            name:'添加产品',
            isAdd:true,
            index:1,
          }
        },
        {
          path: 'classificationDetail',
          name:'classificationDetail',
          component:() => import('../views/classificationPage/classificationDetail'),
          meta:{
            login:true,
            name:'分类详情',
            index:2,
          }
        },
        {
          path: 'classificationAdd',
          name:'classificationAdd',
          component:() => import('../views/classificationPage/classificationDetail'),
          meta:{
            login:true,
            name:'添加分类',
            isAdd:true,
            index:2,
          }
        },
        {
          path: 'userDetail',
          name:'userDetail',
          component:() => import('../views/userManagePage/userDetail'),
          meta:{
            login:true,
            name:'用户详情',
            index:3,
          }
        },
        {
          path: 'orderDetail',
          name:'orderDetail',
          component:() => import('../views/orderManagePage/orderDetail'),
          meta:{
            login:true,
            name:'订单详情',
            index:4,
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
      component:() => import('@/components/login/login'),
      meta:{
        name:'登录'
      }
    }
  ]
})

router.beforeEach((to,from,next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = 'xmall管理后台-'+to.meta.name

  //check login
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

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
export default router
