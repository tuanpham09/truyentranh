<template>
    <a-menu v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys">

        <a-menu-item key="admin-users">
            <router-link :to="{ name: 'admin-users' }">
                <span>
                    <UserOutlined /> Quản lý User
                </span>
            </router-link>
        </a-menu-item>
        <a-menu-item key="admin-roles">
            <router-link :to="{ name: 'admin-roles' }">
                <span>
                    <TagOutlined /> Quản lý quyền
                </span>
            </router-link>
        </a-menu-item>
        <a-menu-item key="admin-settings">
            <router-link :to="{ name: 'admin-settings' }">
                <span>
                    <SettingOutlined /> Quản lý Settings
                </span>
            </router-link>
        </a-menu-item>

    </a-menu>
</template>

<script>
import { reactive, toRef } from 'vue';
import { UserOutlined, TagOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default {
    components: {
        UserOutlined, TagOutlined, SettingOutlined
    },
    setup() {
        const state = reactive({
            openKeys: [],
            selectedKeys: [],
        });
        return {
            state: toRef(state),
        };
    }
};

</script>