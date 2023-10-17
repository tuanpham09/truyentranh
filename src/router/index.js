import { createRouter, createWebHistory } from 'vue-router';
import adminRoutes from './admin';

const routes = [
    ...adminRoutes, // Sử dụng các tuyến từ tệp admin.js
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;