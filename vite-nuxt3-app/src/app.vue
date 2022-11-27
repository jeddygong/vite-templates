<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <!-- 路由出口 -->
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/useUserStore'
const userInfo = useUserStore().userInfo
console.log(userInfo);

</script>