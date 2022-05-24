<template>
    <AppLayout v-if="$route.name && $route.name !== 'Login'" />
    <RouterView v-else />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import AppLayout from '@/layout/AppLayout.vue';

    export default defineComponent({
        name: 'App',
        components: {
            AppLayout
        }
    });
</script>
<style src="./assets/css/reset.css"></style>
