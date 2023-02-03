import Vue from 'vue';
import VueRouter from 'vue-router';
//引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import PlayList from '@/pages/PlayList';
import RankingList from '@/pages/RankingList';
import Login from '@/pages/Login';

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

const router = new VueRouter({
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
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
});

//配置路由拦截器
router.beforeEach((to, from, next) => {
    if (to.name == 'search') {
        console.log('search')
        try {
            let info = JSON.parse(localStorage.getItem('userInfo'));
            if (info) {
                next();
            } else {
                //未登录跳转到登录页
                next('/login')
            }
        } catch (err) {
            console.log(err)
        }

    } else {
        next();
    }
});

export default router;