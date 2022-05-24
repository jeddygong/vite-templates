/**
 * @description 按需引入element-plus库
 * @author gongjin@addcn.com
 * @created 2021-03-25 14:50:20
 */

import lang from 'element-plus/lib/locale/lang/zh-tw';
import 'dayjs/locale/zh-tw';
import {
    locale,
    ElAside,
    ElButton,
    ElContainer,
    ElHeader,
    ElMain,
    ElMenu,
    ElSubmenu,
    ElMenuItem,
    ElCard,
    ElForm,
    ElFormItem,
    ElInput,
    ElIcon,
    ElInfiniteScroll,
    ElLoading,
    ElMessage,
    ElMessageBox,
    ElNotification
} from 'element-plus';

const components = [
    ElAside,
    ElButton,
    ElContainer,
    ElHeader,
    ElMain,
    ElMenu,
    ElSubmenu,
    ElMenuItem,
    ElCard,
    ElForm,
    ElFormItem,
    ElInput,
    ElIcon
];

const plugins = [ElInfiniteScroll, ElLoading, ElMessage, ElMessageBox, ElNotification];

export const setupElement = (app: any, options = {}) => {
    // 引入语言
    locale(lang);
    // 全局注册组件
    components.forEach((component) => {
        app.component(component.name, component);
    });

    // 注册element-plus services
    plugins.forEach((plugin) => {
        app.use(plugin);
    });

    // 设置全局option，默认 {}
    app.config.globalProperties.$ELEMENT = options;
};
