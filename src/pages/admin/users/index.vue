<template>
    <div>
        <a-card title="Tài Khoản" :bordered="false">


            <a-table :columns="columns" :data-source="users">

                <template #bodyCell="{ column, index, record }">
                    <template v-if="column.key === 'index'">
                        <a>
                            {{ index + 1 }}
                        </a>
                    </template>

                    <template v-else-if="column.key === 'status'">
                        <span v-if="record.status_id == 1" class="text-primary">{{ record.status }}</span>
                        <span v-else-if="record.status_id == 2" class="text-danger">{{ record.status }}</span>
                    </template>

                    <template v-if="column.key === 'action'">
                        <router-link>
                            <a-button type="primary">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </a-button>
                        </router-link>
                    </template>
                    
                </template>
            </a-table>
        </a-card>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({

    setup() {
        const columns = [
            {
                title: "#",
                key: "index",
            },
            {
                title: "Tài khoản",
                dataIndex: "username",
                key: "username",
            },
            {
                title: "Họ Tên",
                dataIndex: "name",
                key: "name",
            },
            {
                title: "Phòng ban",
                dataIndex: "department",
                key: "department",
                responsive: ["sm"],
            },
            {
                title: "Tình trạng",
                dataIndex: "status",
                key: "status",
            },
            {
                title: "Công cụ",
                key: "action",
                fixed: "right",
            },
        ];
        const users = ref([]);

        const getUser = () => {
            axios.get("http://127.0.0.1:8000/api/users")
                .then(function (response) {
                    users.value = response.data;
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

        };
        getUser();



        return {
            users,
            columns,

        };


    }

});
export { };
</script>