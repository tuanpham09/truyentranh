<template>
    <div>
        <h1>Đây là trang quản lý user</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {

    setup() {
        const axios = require('axios');
        const users = ref([]);

        const getUser = () => {
            axios.get("http://127.0.0.1:8000/api/users")
                .then(function (response) {
                    users.value = response.data;
                     console.log();
                })
                .catch(function (error) {
                    console.log(error);
                });

        };
        getUser();

        return {
            users,
        };
    }
}

</script>