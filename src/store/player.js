//播放器状态

const state = { playlist: [], currentIndex: 0 };
const actions = {
    incrementSong(store, songObj) {
        if (songObj) {
            store.commit('setSongs', songObj)
        }
    },
    delSong(store, index) {
        if (index >= 0 && index < store.state.playlist.length) {
            store.commit('deleteSong', index)
        }
    }
};
const mutations = {
    setSongs(state, songObj) {
        if (Array.isArray(songObj)) {
            state.playlist.unshift(...songObj);
        }
        state.playlist.unshift(songObj);
    },
    setCurrentIdx(state, idx) {
        state.currentIndex = idx
    },
    deleteSong(state, index) {
        state.playlist.splice(index, 1)
    }
};
const getters = {
    getSong(state) {
        return state.playlist[state.currentIndex] || { ar: {}, al: {} }
    }
};
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}