import Vue from 'vue';
import VueRouter from 'vue-router';
//引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import PlayList from '@/pages/PlayList';
import RankingList from '@/pages/RankingList';

Vue.use(VueRouter);
//解决路由相同参数下跳转到当前路由
//重写push、replace方法
const originPush = VueRouter.prototype.push;
// const originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve || reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}

export default new VueRouter({
    routes: [
        {
            name: 'home',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'playlist',
                    path: 'playlist',
                    component: PlayList
                },
                {
                    name: 'rankinglist',
                    path: 'rankinglist',
                    component: RankingList
                }
            ]
        },
        {
            name: 'search',
            path: '/search',
            component: Search
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})