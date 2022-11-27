<template>
  <div>
    <h1>欢迎来到易师傅的第一个页面</h1>

    <NuxtLink to="/list">进入列表页</NuxtLink>

    <br>
    <br>
    
    <NuxtLink to="/user-admin/111">进入管理员 id 为 111 的用户中心</NuxtLink>
    
  </div>
</template>

<script setup>
const foo = useFoo()
console.log(foo.value);
</script>