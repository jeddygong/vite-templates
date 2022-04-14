import { createSSRApp } from 'vue';
import App from './App.vue';

export const createApp = () => {
    const app = createSSRApp(App);
    return { app };
};
