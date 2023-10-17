import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap-utilities.min.css"
import {
    Checkbox,
    Input,
    Select,
    Avatar,
    Table,
    Card,
    Menu,
    List,
    Drawer,
    Button,
    message
} from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import "./static/fontawesome-free-6.4.2-web/fontawesome-free-6.4.2-web/css/all.min.css"

// khai báo axios để call api
import axios from 'axios'
window.axios = axios

const app = createApp(App);
app.use(Table);
app.use(Select);
app.use(Avatar);
app.use(Checkbox);

app.use(Card);
app.use(Button);
app.use(List);
app.use(Input);
app.use(message);
app.use(Drawer);
app.use(router);
app.use(Menu);
app.mount('#app');

app.config.globalProperties.$message = message;