import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
import Full from '@/containers/Full'
import Full2 from '@/containers/Full2'

import Buttons from '@/views/components/Buttons'


// Views - Pages
import Page404 from '@/views/errorPages/Page404'
import Page500 from '@/views/errorPages/Page500'


/* login */
const Login = _import('login/index');
Vue.use(Router);

export const constantRouterMap = [
    { path: '/login', component: Login, hidden: true },
    {path: '/pages',redirect: '/pages/p404', name: 'Pages',
          component: {
            render (c) { return c('router-view') }
              // Full,
          },
          children: [{path: '404',  name: 'Page404', component: _import('errorPages/Page404') },
                     {path: '500',name: 'Page500',component: _import('errorPages/Page404')},
                    ]
    }


]

export default new Router({
  mode: 'hash', 
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [

 {
    path: '/',
    redirect: '/userManage/introduction',
    name: '首页',
    component: Full,
    hidden:false,
    children: [
     //{path: '/dashboard',name: 'Dashboard',icon:'speedometer',component: _import('Dashboard')},
     {path: '/userManage/introduction',name: '介绍',icon:'thumbsup',component: _import('Introduction')},
    ]
  },

   {
    path: '/userManage',
    redirect: '/userManage/memberList',
    name: '用户管理',
    component: Full,
    //meta: { role: ['admin'] },
    hidden:false,
    children: [
     {path: '/userManage/memberList',name: '会员列表',icon:'thumbsup',component: _import('userManage/memberList')},
     {path: '/userManage/Demo',name: '表格实例',icon:'thumbsup',component: _import('Demo')},
    ]
  },
  {
    path: '/systemSetup',
    redirect: '/systemSetup/Demo2',
    name: '系统设置',
    component: Full,
    //meta: { role: ['admin'] },
    hidden:false,
    children: [
     {path: '/systemSetup/Demo2',name: '组织架构',icon:'thumbsup',component: _import('systemSetup/Demo2')},
     {path: '/carChart',name: '角色管理',icon:'pie-graph',
        component: {render (c) { return c('router-view') }},
        children: [ {path: 'carChart',name: '车辆热力轨迹图',icon:'stats-bars',component: _import('yunyingjiankong/carChart'), hidden:false, },
                    {path: 'zhonghe',name: '车辆综合数据监控',icon:'arrow-graph-up-right',component: _import('yunyingjiankong/che_zonghe')},
                  ]
      },
    ]
  },
  {
    path: '/dataCenter',
    redirect: 'carChart/carChart',
    name: '运营监控',
    component: Full,
    hidden:false,
    children: [
     //{path: '/hetongdaoqi',name: '合同到期预警',icon:"social-html5",component: _import('yunyingjiankong/hetongdaoqi')},
     {path: '/carChart',name: '车辆监控预警',icon:'pie-graph',
        component: {render (c) { return c('router-view') }},
        children: [ {path: 'carChart',name: '车辆热力轨迹图',icon:'stats-bars',component: _import('yunyingjiankong/carChart'), hidden:false, },
                    {path: 'zhonghe',name: '车辆综合数据监控',icon:'arrow-graph-up-right',component: _import('yunyingjiankong/che_zonghe')},
                  ]
      },
     
    ]
  },
  { path: '*', redirect: '/pages/404', hidden: true }
  
];
