<template>
    <h2> 这里是用户中心页面 </h2>
    <br />
    <router-link to="/">点击跳转至首页</router-link>
    <br /><br />
    <router-link to="/login">点击跳转至login</router-link>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'UserPage'
    });
</script>
