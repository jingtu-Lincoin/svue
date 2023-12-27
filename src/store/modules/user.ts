import {store} from '@/store'
import {defineStore} from 'pinia'

interface info {
    id: number
    name: string
    tel: string
    userHead: string
    gender: string
}

interface UserState {
    token: string
    userInfo: info
}

const useUserStore = defineStore({
    id: 'app-user',
    state: (): UserState => {
        return {
            token: '',
            userInfo: {
                id: 0,
                name: '',
                tel: '',
                userHead: '',
                gender: '',
            },
        }
    },
    getters: {
        getToken: (state: UserState): string => state.token,
        getUserInfo: (state: UserState): info => state.userInfo,
    },
    actions: {
        setToken(token: string) {
            this.token = token
        },
        setUserinfo(userInfo: info) {
            this.userInfo = {...userInfo}
        },
        logout() {
            this.userInfo= null;
        }
    },
    //开启持久化
    persist: {
        key: 'app-user',
        storage: window.sessionStorage,
        paths: ['token', 'userInfo'],
    },
})

const useUserStoreWithOut = () => {
    // store.use(piniaPersist)
    return useUserStore(store)
}

export {useUserStore, useUserStoreWithOut}
