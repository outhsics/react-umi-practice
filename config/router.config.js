export default [
 // user
 {
  path: '/admin',
  component: '../layouts/UserLayout',
  routes: [
    { path: '/admin', redirect: '/admin/Login' },
    { path: '/admin/login', component: '../pages/Admin/Login' },
    // { path: '/user/register', component: './User/Register' },
    // { path: '/user/register-result', component: './User/RegisterResult' },
  ],
},
  // app
  {
    path: '/',
    // redirect: './welcome',
    component: '../layouts/BasicLayout',
    // Routes: ['src/pages/Authorized'],
    // authority: ['admin'],
    routes: [
      { path: '/', redirect: '/user/list' },

      // 用户管理
      {
        path: '/user',
        name: 'user-manage',
        icon: 'dashboard',
        routes: [
          // 用户资源池
          {
            path: '/user/list',
            name: 'user-list',
            component: './User/List/List',
          },
          // {
          //   path: '/user/detail/:id',
          //   // hideInMenu: true,
          //   component: './User/$Detail',
          //   title: 'route.article.detail',
          //   hideMenu: true,
          // },
          {
            path: '/user/detail',
            // hideInMenu: true,
            component: './User/Detail/Info',
          },
        ],
      },
      // 试卷管理
      {
        path: '/exam',
        name: 'exam-manage',
        icon: 'form',
        routes: [
          // 试卷列表
          {
            path: '/exam/list',
            name: 'exam-list',
            component: './Exam/List',
          },
          {
            path: '/exam/newexam',
            hideInMenu: true,
            component: './Exam/NewExam',
          },
          {
            path: '/exam/detail',
            hideInMenu: true,
            component: './Exam/Detail',
          },
          {
            path: '/exam/edit',
            hideInMenu: true,
            component: './Exam/Edit',
          },


        ],
      },

      // 数据分析
      {
        path: '/data',
        name: 'data-analysis',
        icon: 'table',
        routes: [
          // 数据看板
          {
            path: '/data/board',
            name: 'data-board',
            component: './Data/Analysis',
          },
        ],
      },

      // 基础数据
      {
        path: '/basic',
        name: 'basic-data',
        icon: 'profile',
        routes: [
          // 营运工具
          {
            path: '/basic/operate',
            name: 'operate-tool',
            component: './Basic/OperateTool',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },

]