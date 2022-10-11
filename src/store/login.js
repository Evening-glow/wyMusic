//存放登录状态
const state = {
    //用户数据
    userInfo: {}
}
const actions = {
    //存放状态数据
    renewState(store, data) {
        //做判断从本地数据中获取存放到state
        if (data) {
            store.commit('setState', data);
        }
    }
}
const mutations = {
    setState(state, data) {
        state.userInfo = data;
    }
}
const getters = {
    isLogin(state) {
        return Object.hasOwn(state.userInfo, 'token') ? true : false;
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}