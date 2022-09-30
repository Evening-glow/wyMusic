<template>
    <!-- 头部 -->
    <header>
        <div class="nav">
            <div class="logo" id="logo">
                <router-link to="/home" class="home"></router-link>
            </div>
            <div class="nav-list">
                <ul>
                    <li class="active"><a href="#">发现音乐</a></li>
                    <li><a href="#">我的音乐</a></li>
                    <li><a href="#">关注</a></li>
                    <li><a href="#">商城</a></li>
                    <li><a href="#">音乐人</a></li>
                    <li class="h-smallIcon"><a href="#">下载客户端</a><i class="hot"></i></li>
                </ul>
            </div>
            <div class="searchContainer">
                <span class="searchIcon"></span>
                <input type="text" placeholder="音乐/视频/电台/用户" @keydown.enter="$router.push({name:'search'})">
            </div>
            <a href="#" class="creatorCenter">创作者中心</a>
            <a href="#" class="login">登录</a>
        </div>
    </header>
</template>
<script>
export default {
    name: 'MyHeader',
    data() {
        return {
            searchParams: {
                limit: 20,
                offset: 0,
                type:1
            }
        }
    }
}
</script>
<style lang="less" scoped>
@import '@/less/config.less';

header {
    width: 100%;
    background-color: @nav-color;

    .nav {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 1100px;
        height: 70px;
        margin: 0 auto;
        color: @text-color;

        .logo {
            padding-right: 20px;
            background: url(./images/topbar.png) no-repeat;

            .home {
                width: 170px;
                height: 69px;
                display: block;
            }
        }

        .nav-list {
            ul {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                li {

                    &.active,
                    &:hover {
                        background-color: #000;
                    }

                    &.active>a {
                        color: @active-text-color;
                    }

                    &.h-smallIcon {
                        position: relative;

                        .hot {
                            position: absolute;
                            right: -14px;
                            top: 15px;
                            width: 38px;
                            height: 19px;
                            background-image: url(./images/topbar.png);
                            background-position: 295px 0;
                        }
                    }

                    a {
                        display: block;
                        box-sizing: border-box;
                        padding: 0 19px;
                        line-height: 70px;
                        text-align: center;
                        color: @text-color;
                        font-size: @font-size;

                    }
                }

            }
        }

        .searchContainer {
            margin-left: 40px;
            width: 158px;
            height: 32px;
            border-radius: 32px;
            background-color: #fff;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            padding: 0 5px;

            .searchIcon {
                display: block;
                width: 20px;
                height: 20px;
                background-image: url(./images/topbar.png);
                background-position: -6px 112px;
            }

            input {
                border: none;
                width: 125px;
                height: 100%;
                font-size: 12px;
                outline: none;
            }
        }

        .creatorCenter {
            width: 90px;
            height: 32px;
            border: 1px solid #4F4F4F;
            border-radius: 20px;
            text-align: center;
            line-height: 32px;
            margin: 0 12px;
            color: inherit;
        }

        .login {
            font-size: 12px;
        }
    }
}
</style>