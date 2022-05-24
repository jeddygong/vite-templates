import { createStore } from 'vuex';

export interface State {
    userInfo: {
        id: number;
        username: string;
        nickname: string;
    };
}

export const store = createStore<State>({
    state() {
        return {
            userInfo: {
                id: 0,
                username: '',
                nickname: ''
            }
        };
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        }
    }
});
