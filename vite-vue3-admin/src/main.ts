import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { store } from '@/store';
import { setupElement } from '@/config/element';

// 创建vue实例
const app = createApp(App);

// 按需引入element-plus插件
setupElement(app);

app.use(router);
app.use(store);

// 挂载实例
app.mount('#app');
