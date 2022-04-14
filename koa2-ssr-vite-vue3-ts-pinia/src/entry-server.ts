import { createApp } from './main';
import { renderToString } from '@vue/server-renderer';
import type { ParameterizedContext } from 'koa';
import { createRouter } from './router';
import createStore from '@/store';

export const render = async (
    ctx: ParameterizedContext,
    manifest: Record<string, string[]>
): Promise<[string, string, string]> => {
    const { app } = createApp();

    // 路由注册
    const router = createRouter('server');
    app.use(router);
    await router.push(ctx.path);
    await router.isReady();

    // pinia
    const pinia = createStore();
    app.use(pinia);
    const state = JSON.stringify(pinia.state.value);

    const renderCtx: { modules?: string[] } = {};

    const renderedHtml = await renderToString(app, renderCtx);

    const preloadLinks = renderPreloadLinks(renderCtx.modules, manifest);

    return [renderedHtml, state, preloadLinks];
};

/**
 * 解析需要预加载的链接
 * @param modules
 * @param manifest
 * @returns
 */
function renderPreloadLinks(
    modules: undefined | string[],
    manifest: Record<string, string[]>
): string {
    let links = '';
    const seen = new Set();
    if (modules === undefined) throw new Error();
    modules.forEach((id) => {
        const files = manifest[id];
        if (files) {
            files.forEach((file) => {
                if (!seen.has(file)) {
                    seen.add(file);
                    links += renderPreloadLink(file);
                }
            });
        }
    });
    return links;
}

/**
 * 预加载的对应的地址
 * 下面的方法只针对了 js 和 css，如果需要处理其它文件，自行添加即可
 * @param file
 * @returns
 */
function renderPreloadLink(file: string): string {
    if (file.endsWith('.js')) {
        return `<link rel="modulepreload" crossorigin href="${file}">`;
    } else if (file.endsWith('.css')) {
        return `<link rel="stylesheet" href="${file}">`;
    } else {
        return '';
    }
}
