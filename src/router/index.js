import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import MSite from '../pages/MSite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

//声明使用插件
Vue.use(Router)

export default new Router({
  //所有路由
  routes: [
    {
      path: '/',
	  redirect:'/msite',	  
    },
    {
      path:'/msite',
	  component:MSite,
	  meta:{
		showFooter:true
		}
    },
    {
      path:'/search',
	  component:Search,
	  meta:{
		showFooter:true
		}
    },
    {
      path:'/order',
	  component:Order,
	  meta:{
		showFooter:true
		}
    },
    {
      path:'/profile',
	  component:Profile,
	  meta:{
		showFooter:true
		}
	},
	{
	  path:'/login',
	  component:Login
	}
    
  ]
})
