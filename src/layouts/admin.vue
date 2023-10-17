<template>
    <Header />
    <div class="container-fluid mt-3    ">
        <div class="row">
            <div class="col-sm-3  d-none d-sm-flex">

                <a-list bordered style="width: 100%">
                    <Menu />
                    <template #header>
                        <div>Bảng Điều Khiển</div>
                    </template>

                </a-list>

            </div>
            <div class="col-12 col-sm-9 ">
                <route-view>
                    <div>

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
                </route-view>
            </div>
        </div>
    </div>
</template>

<script>

import Header from '../components/Header.vue'
import Menu from '../components/Menu.vue'

export default {
    components: {
        Header,
        Menu
    }
}
</script>