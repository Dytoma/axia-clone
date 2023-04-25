import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Application from '../views/Application.vue';
import Faqs from '../views/Faqs.vue';
import School from '../views/School.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/application',
        name: 'application',
        component: Application
    },
    {
        path: '/faqs',
        name: 'faqs',
        component: Faqs
    },
    {
        path: '/schools/:school',
        name: 'school',
        component: School
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router