import {RouteRecordRaw} from 'vue-router'

const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        redirect: '/demo',
        meta: {
            title: '首页',
        },
        children: [],
        component: () => import('@/views/demo/demo.vue'),
    },
    {
        path: '/demo',
        name: 'Demo',
        meta: {
            title: 'demo',
        },
        component: () => import('@/views/demo/demo.vue'),
    },
]

export {constantRoutes}
