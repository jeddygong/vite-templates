<template>
    <el-menu :default-active="$route.path" class="el-menu-vertical">
        <div class="logo">XX管理系统</div>
        <el-menu-item index="/">
            <template #title><i class="el-icon-s-home"></i>管理首页</template>
        </el-menu-item>
        <el-menu-item index="/list">
            <template #title><i class="el-icon-s-help"></i>列表管理</template>
        </el-menu-item>
        <el-submenu index="/pay">
            <template #title><i class="el-icon-upload"></i>支付管理</template>
            <el-menu-item index="/pay/1"><i class="el-icon-camera-solid"></i>xx管理1</el-menu-item>
            <el-menu-item index="/pay/2"><i class="el-icon-picture"></i>xx管理2</el-menu-item>
        </el-submenu>
        <el-submenu index="/root">
            <template #title><i class="el-icon-s-grid"></i>权限管理</template>
            <el-menu-item index="/root/1"><i class="el-icon-picture"></i>权限管理1</el-menu-item>
            <el-menu-item index="/root/2"><i class="el-icon-picture"></i>权限管理2</el-menu-item>
        </el-submenu>
    </el-menu>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Sidebar',
        components: {},
        data() {
            return {
                router: true
            };
        }
    });
</script>

<style lang="scss" scoped>
    .logo {
        padding-left: 25px;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        font-size: 18px;
    }
    .el-menu {
        height: 100%;
        background: #d3dce6;
        border-right: 0;
    }
</style>
