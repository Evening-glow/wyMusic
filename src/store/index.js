import Vuex from 'vuex';
import Vue from 'vue';
import player from './player';
import login from './login';

Vue.use(Vuex)
export default new Vuex.Store({
    //state,actions,mutations,getters
    modules: {
        player,
        login
    }
})