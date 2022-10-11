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
                <input type="text" placeholder="音乐/视频/电台/用户" v-model.trim="searchParams.keywords"
                    @keydown.enter="handleEnter" @blur="isShow = false;" @focus="isShow=true">
                <div class="searchTips" v-show="isShow">
                    <p class="t-hd"><a href="#">搜“{{searchParams.keywords}}” 相关用户&gt;</a></p>
                    <div class="info-container">
                        <div class="itm" v-show="isHave('songs')">
                            <div class="itm-lf">
                                <i></i>
                                <span>单曲</span>
                            </div>
                            <ul class="itm-rt">
                                <li v-for="song,i in guess.songs" :key="song.id"><a
                                        href="#">{{song.name}}-{{song.artists[0].name}}</a></li>
                            </ul>
                        </div>
                        <div class="itm" v-show="isHave('artists')">
                            <div class="itm-lf">
                                <i class="icn-singer"></i>
                                <span>歌手</span>
                            </div>
                            <ul class="itm-rt itm-bg">
                                <li v-for="singer,i in guess.artists" :key="singer.id"><a href="#">{{singer.name}}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="itm" v-show="isHave('albums')">
                            <div class="itm-lf">
                                <i class="icn-video"></i>
                                <span>专辑</span>
                            </div>
                            <ul class="itm-rt">

                                <li v-for="album,i in guess.albums" :key="album.id"><a
                                        href="#">{{album.name}}-{{album.artist.name}}</a></li>
                            </ul>
                        </div>
                        <div class="itm" v-show="isHave('playlists')">
                            <div class="itm-lf">
                                <i class="icn-sheet"></i>
                                <span>歌单</span>
                            </div>
                            <ul class="itm-rt itm-bg">
                                <li v-for="list,i in guess.playlists" :key="list.id"><a href="#">{{list.name}}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" class="creatorCenter">创作者中心</a>
            <router-link class="login" to="/login">登录</router-link>
        </div>
    </header>
</template>
<script>
import { reqGuessKeyword } from '@/api'
export default {
    name: 'MyHeader',
    data() {
        return {
            searchParams: {
                limit: 20,
                offset: 0,
                type: 1,
                keywords: ''
            },
            guess: {},
            isShow: false
        }
    },
    watch: {
        searchParams: {
            deep: true,
            async handler() {
                if (this.searchParams.keywords) {
                    //当输入的关键字变化时，重新获取推荐关键词
                    let guessDate = await reqGuessKeyword({ keywords: this.searchParams.keywords });
                    this.guess = guessDate.result;
                    this.isShow = true
                }
            }
        }
    },
    methods: {
        handleEnter() {
            //跳转到search页
            if (this.searchParams.keywords) {
                this.$router.push({ name: 'search', query: this.searchParams });
            }
            this.isShow = false;
        },
        isHave(string) {
            if (Object.hasOwn(this.guess, 'order')) {
                return this.guess.order.indexOf(string) >= 0;
            } else {
                return false
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

            .searchTips {
                position: absolute;
                z-index: 120;
                top: 56px;
                width: 250px;
                box-sizing: border-box;
                border: 1px solid #bebebe;
                border-radius: 4px;
                background: #fff;
                box-shadow: 0 4px 7px #555;
                text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);

                .t-hd {
                    height: 17px;
                    padding: 11px 10px;
                    font-size: 12px;
                    color: #666;
                }

                .info-container {
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    .itm {
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        align-items: flex-start;
                        border-top: 1px solid #ccc;

                        .itm-bg {
                            background-color: #f9f8f8;
                        }

                        .itm-lf {
                            width: 52px;
                            padding: 10px 5px;
                            flex-shrink: 0;
                            text-align: center;
                            color: #000;


                            i {
                                display: inline-block;
                                line-height: 15px;
                                vertical-align: middle;
                                width: 14px;
                                height: 15px;
                                background-position: -35px -300px;
                                background-image: url(./images/icon.png);
                            }

                            .icn-singer {
                                background-position: -50px -300px;
                            }

                            .icn-video {
                                background-position: -35px -320px;
                            }

                            .icn-sheet {
                                background-position: -50px -320px;
                            }
                        }

                        .itm-rt {
                            flex-grow: 1;
                            padding: 6px 0;
                            border-left: 1px solid #e2e2e2;

                            li {
                                padding: 6px;
                                box-sizing: border-box;

                                &:hover {
                                    background-color: #ccc;
                                }

                                a {
                                    width: 100px;
                                    font-size: 12px;
                                    display: inline-block;
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                    white-space: nowrap;
                                }
                            }
                        }
                    }
                }
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