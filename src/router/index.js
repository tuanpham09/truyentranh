import { createRouter, createWebHistory } from 'vue-router';
import admin from './admin';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...admin,
    ]
})
export default router;