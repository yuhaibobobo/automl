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
                    path: '/getDataset',
                    name: 'getDataset',
                    component: () => import('@/components/dataset/GetDataset')
                },
                {
                    path:'/getModel',
                    name:'getModel',
                    component: () => import('@/components/model/GetModel')
                },
                {
                    path:'/predict',
                    name:'predict',
                    component: () => import('@/components/predict/Predict')
                }
            ]
        }
    ]
})