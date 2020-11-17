import Router from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
import App from "@/App";

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'default',
            component: App,
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            redirect: '/getEntity',
            children: [
                {
                    path: '/getEntity',
                    name: 'getEntity',
                    component: () => import('@/components/entity/GetEntity')
                },
                {
                    path:'/createEntity',
                    name:'createEntity',
                    component: () => import('@/components/entity/CreateEntity')
                },
                {
                    path:'/createEntityset',
                    name:'createEntityset',
                    component: () => import('@/components/model/CreateEntityset')
                },
                {
                    path:'/selectModel',
                    name:'selectModel',
                    component: () => import('@/components/model/SelectModel')
                }
            ]
        }
    ]
})