<template>
    <el-container>
        <el-aside width="200px"><Sidebar /></el-aside>
        <el-container>
            <el-header>
                <div
                    class="user-info"
                    @mouseover="userMenuShow = true"
                    @mouseleave="userMenuShow = false"
                >
                    <img
                        src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                        alt="avatar"
                    />test
                    <div v-show="userMenuShow" class="user-menu">
                        <div class="user-menu-item" @click="logout">登出</div>
                    </div>
                </div></el-header
            >
            <el-main><RouterView /></el-main>
        </el-container>
    </el-container>
</template>
<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import Sidebar from '@/layout/Sidebar.vue';

    export default defineComponent({
        name: 'Index',
        components: {
            Sidebar
        },
        setup() {
            const router = useRouter();
            const userMenuShow = ref<boolean>(false);

            const methods = {
                logout() {
                    router.push({
                        path: '/login'
                    });
                }
            };

            return {
                userMenuShow,
                ...methods
            };
        }
    });
</script>
<style lang="scss" scoped>
    .el-header {
        height: 60px;
        line-height: 60px;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        display: flex;
        flex-direction: row-reverse;
        background-color: #b3c0d1;
        .user-info {
            position: relative;
            display: flex;
            align-items: center;
            margin-right: 100px;
            cursor: pointer;
            padding: 0 12px;
            img {
                margin-right: 10px;
                width: 24px;
            }
            .user-menu {
                width: 100%;
                position: absolute;
                padding: 10px 0;
                left: 0;
                top: 60px;
                text-align: center;
                font-size: 14px;
                background: #fff;
                border: 1px solid #e4e7ed;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                line-height: 36px;
                .user-menu-item:hover {
                    background-color: #ecf5ff;
                    color: #66b1ff;
                }
            }
            &:hover {
                background: rgba(0, 0, 0, 0.025);
            }
        }
    }
</style>
