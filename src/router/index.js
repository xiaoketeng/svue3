 /* jshint esversion: 6 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import List from '../views/List.vue';
import Detail from '../views/detail.vue';
import About from '../views/About.vue';
import store from '../store/index.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {path:'',component:List},
      {path:'/detail/:id',component:Detail,props:true}
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    beforeEnter(to,form,next){
//判断是否登录
    if(!store.state.islogin){
      console.log(to.path);
      next('/login?redirect='+to.path);
    }else{
      next();
    }
    },
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//每次路由激活之前都会执行回到函数
// router.beforeEach((to,form,next)=>{
//   console.log(to.path);
//     //判断是否登录
//     if(to.path === '/about'&& !window.islogin){
//       next('/login?redirect='+to.path);
//     }else{
//       next();
//     }
// });
export default router
