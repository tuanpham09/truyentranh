<template>
    <div class="container-fuild">
        <div class="row text-white" style="background-color: #4c97e3; padding: 1rem">

            <div class="col-1 d-flex d-sm-nome align-items-center justify-content-center">
                <span @click="showDrawer()"><i class="fa-solid fa-align-justify"></i></span>
            </div>
            <div class="col-9 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start">
                <img src="../assets/images.png" alt="Logo" height="32px" weight="34px">
                <span class=" d-sm-flex">Trang Quản Trị</span>
            </div>
            <div class="col-1  d-sm-flex align-items-center justify-content-sm-end">
                <span @click="showDrawer_user()"><i class="fa-solid fa-user"></i></span>
            </div>

        </div>
    </div>

    <a-drawer v-model:open="open" title="Danh Mục" placement="left">
        <Menu />
    </a-drawer>

    <a-drawer v-model:open="open_user" title="Danh Mục" placement="right">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </a-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Menu from '../components/Menu.vue';
export default defineComponent({
    components: {
        Menu,
    },
    setup() {

        const open = ref(false);
        const open_user = ref(false);

        const showDrawer = () => {
            open.value = true;
        };

        const showDrawer_user = () => {
            open_user.value = true;
        };
        return {
            open,
            open_user,
            showDrawer,
            showDrawer_user
        }
    }
})
</script>