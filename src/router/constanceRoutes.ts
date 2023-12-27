import {RouteRecordRaw} from 'vue-router'

const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        redirect: '/index',
        meta: {
            title: '首页',
        },
        children: [],
        component: () => import('@/views/index/index.vue'),
    },
    {
        path: '/index',
        name: 'Index',
        redirect: '/body',
        meta: {
            title: '首页',
        },
        children: [
            {
                path: '/article',
                name: 'Article',
                meta: {
                    title: '文章列表',
                },
                component: () => import('@/views/article/article.vue'),
            },
            {
                path: '/message',
                name: 'Message',
                meta: {
                    title: '留言板',
                },
                component: () => import('@/views/message/message.vue'),
            },
            {
                path: '/appoint',
                name: 'Appoint',
                meta: {
                    title: '在线预约',
                },
                component: () => import('@/views/appoint/appoint.vue'),
            },
            {
                path: '/teacher',
                name: 'Teacher',
                meta: {
                    title: '教师介绍',
                },
                component: () => import('@/views/teacher/teacher.vue'),
            },
            {
                path: '/articleDetail/:id',
                name: 'ArticleDetail',
                meta: {
                    title: '文章明细',
                },
                component: () => import('@/views/article/articleDetail.vue'),
            },
            {
                path: '/body',
                name: 'Body',
                meta: {
                    title: '文章明细',
                },
                component: () => import('@/views/index/Body.vue'),
            },
        ],
        component: () => import('@/views/index/index.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            title: '注册',
        },
        component: () => import('@/views/user/register.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
        component: () => import('@/views/user/login.vue'),
    },


    {
        path: '/user',
        name: 'User',
        meta: {
            title: '个人信息',
        },
        component: () => import('@/views/user/user.vue'),
    }
 ]


export {constantRoutes}
