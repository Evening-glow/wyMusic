import Vuex from 'vuex';
import Vue from 'vue';
import player from './player';

Vue.use(Vuex)
export default new Vuex.Store({
    //state,actions,mutations,getters
    modules: {
        player
    }
})