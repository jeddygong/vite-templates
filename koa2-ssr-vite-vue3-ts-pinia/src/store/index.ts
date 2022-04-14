import { createPinia } from 'pinia';
import useUserStore from './user';

export default () => {
    const pinia = createPinia();

    useUserStore(pinia);

    return pinia;
};
