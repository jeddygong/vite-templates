import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src') //设置别名
        }
    },
    plugins: [
        vue(),
        styleImport({
            libs: [
                {
                    libraryName: 'element-plus',
                    esModule: true,
                    resolveStyle: (name) => {
                        // 解决引入element-plus中文css不存在问题
                        // if (name === 'locale') {
                        //     return 'element-plus/lib/theme-chalk/el-option.css';
                        // }
                        return `element-plus/lib/theme-chalk/${name}.css`;
                    },
                    ensureStyleFile: true // 忽略文件是否存在, 导入不存在的CSS文件时防止错误。
                }
            ]
        })
    ],
    server: {
        port: 3000, //启动端口
        hmr: {
            host: '127.0.0.1',
            port: 3000
        }
    }
});
