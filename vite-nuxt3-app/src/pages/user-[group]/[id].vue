<template>
  <NuxtLayout name="header"/>
  <div>
    <h1>用户中心</h1>
    <p>当前用户所属的群组：{{ route.params.group }}</p>
    <p>当前用户的id：{{ route.params.id }}</p>
  </div>

  <div>坐标: {{x}}, {{y}}</div>
</template>
<script setup lang="ts">
// 禁用默认的 layout
definePageMeta({
  layout: false,
});

const route = useRoute()
console.log(route.params);

// 使用 vueuse
const { x, y } = useMouse()
</script>