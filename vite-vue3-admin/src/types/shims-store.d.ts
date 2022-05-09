import { Store } from '@/store';
import { ElMessage, ElMessageBox } from 'element-plus';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store;
        $message: typeof ElMessage;
        $confirm: typeof ElMessageBox.confirm;
    }
}
