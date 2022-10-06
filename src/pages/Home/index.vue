<template>
    <div>
        <div class="top-nav2">
            <ul>
                <li :class="$route.path=='/home'?'active':''">
                    <router-link to="/home">推荐</router-link>
                </li>
                <li :class="$route.path=='/home/rankinglist'?'active':''">
                    <router-link to="/home/rankinglist">排行榜</router-link>
                </li>
                <li :class="$route.path=='/home/playlist'?'active':''">
                    <router-link to="/home/playlist">歌单</router-link><i></i>
                </li>
                <li><a href="#">主播电台</a></li>
                <li><a href="#">歌手</a></li>
                <li><a href="#">新碟上架</a></li>
                <span class="triangle"></span>
            </ul>
        </div>
        <router-view></router-view>
        <div class="recommendContainer" v-show="isShow">
            <!-- 轮播图 -->
            <div class="banner">
                <div class="filter"></div>
                <div class="my-swiper swiper-container" ref="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="b,i in banner" :key="b.targetId">
                            <img :src="b.imageUrl" alt="">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="my-prev swiper-button-prev"></div>
                <!--左箭头。如果放置在swiper外面，需要自定义样式。-->
                <div class="my-next swiper-button-next"></div>
                <!--右箭头。如果放置在swiper外面，需要自定义样式。-->
                <div class="download">
                    <div class="loadImg">
                        <div class="activeBtn"></div>
                    </div>
                    <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                </div>
            </div>
            <div class="recommend">
                <div class="leftSide">
                    <!-- 热门推荐 -->
                    <div class="hotRecommend">
                        <div class="hd">
                            <div class="title">
                                <h2>热门推荐</h2>
                                <ul>
                                    <li>华语<i>|</i></li>
                                    <li>流行<i>|</i></li>
                                    <li>摇滚<i>|</i></li>
                                    <li>民谣<i>|</i></li>
                                    <li>电子</li>
                                </ul>
                            </div>
                            <p class="more">更多<span>-></span></p>
                        </div>
                        <ul class="sheets">
                            <li class="sheet" v-for="itm,i in playlist.slice(0,8)" :key="itm.id">
                                <div class="s-cover">
                                    <img :src="itm.picUrl" alt="歌单图片">
                                    <!-- 优质歌单icon -->
                                    <i class="u-jp" v-if="itm.highQuality"></i>
                                    <a href="#" class="mask"></a>
                                    <div class="controlBtn">
                                        <span class="icon-headset"></span>
                                        <span class="nb">{{itm.playCount | toBeThousand}}</span>
                                        <a href="#"></a>
                                    </div>
                                </div>
                                <p class="intrText">
                                    <!-- 电台节目icon -->
                                    <!-- <i></i> -->
                                    <a href="#">温柔英文歌-睡觉专用</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <!-- 新碟上线 -->
                    <div class="newVideo">
                        <div class="hd">
                            <div class="title">
                                <h2>新碟上架</h2>
                            </div>
                            <p class="more">更多<span>-></span></p>
                        </div>
                        <div class="video-swiper" ref="videoSwiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="alblist,i in albumlist">
                                    <ul class="swiper-item">
                                        <li v-for="(album,i) in alblist" :key="i">
                                            <div class="v-cover">
                                                <img :src="album.picUrl" alt="">
                                                <a href="#" class="mask"></a>
                                                <a href="#" class="play"></a>
                                            </div>
                                            <div class="videoText">
                                                <p><a href="#">{{album.name}}</a></p>
                                                <p class="singer"><a href="#">{{album.artist.name}}</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="video-prev swiper-button-prev"></div>
                        <div class="video-next swiper-button-next"></div>
                    </div>
                    <!-- 榜单 -->
                    <div class="list">
                        <div class="hd">
                            <div class="title">
                                <h2>榜单</h2>
                            </div>
                            <p class="more">更多<span>-></span></p>
                        </div>
                        <div class="container">
                            <dl class="columns" v-for="itm,i in list" :key="itm.id">
                                <dt class="top">
                                    <div class="left">
                                        <a href="#" class="mask"></a>
                                        <img :src="itm.coverImgUrl" alt="">
                                    </div>
                                    <div class="right">
                                        <a href="#">{{itm.name}}</a>
                                        <div class="btns">
                                            <a href="#" class="icon-play"></a>
                                            <a href="#" class="icon-coll"></a>
                                        </div>
                                    </div>
                                </dt>
                                <dd>
                                    <ol>
                                        <li v-for="song,i in itm.tracks" :key="i">
                                            <span class="lelNo">{{i+1}}</span>
                                            <a href="#">{{song.first}}</a>
                                            <div class="oper">
                                                <a href="#" class="c-icon player"></a>
                                                <a href="#" class="c-icon inc"></a>
                                                <a href="#" class="c-icon coll"></a>
                                            </div>
                                        </li>
                                    </ol>
                                    <div class="all">
                                        <a href="#">查看全部></a>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class="rightSide"></div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import { reqRecommendPlayList, reqAlbumList, reqListDetail, reqBanner } from '@/api/index'
export default {
    name: 'Home',
    data() {
        return {
            playlist: [],
            albumlist: [],
            list: [],
            banner: []
        }
    },
    computed: {
        isShow() {
            return this.$route.path === '/home';
        },
        // triangleX() {
        //     let x = 40;
        //     switch (this.$route.path) {
        //         case '/home': x *= 1; break;
        //         case '/home/playlist': x *= 2; break;
        //         case '/home/rankinglist': x *= 3; break;
        //     }
        //     return x + 'px';
        // }
    },
    watch: {
        albumlist: {
            immediate: true,
            handler(n, o) {
                this.$nextTick(() => {
                    new Swiper(this.$refs.videoSwiper, {
                        autoplay: true,
                        navigation: {
                            nextEl: '.video-next',
                            prevEl: '.video-prev',
                        },
                        loop: true,
                        direction: 'horizontal',
                    });
                })
            }
        },
        banner: {
            immediate: true,
            handler(n, o) {
                this.$nextTick(() => {
                    new Swiper(this.$refs.swiper, {
                        autoplay: true,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                        loop: true,
                        direction: 'horizontal',
                    });
                })
            }
        }
    },
    async mounted() {
        let data = await reqRecommendPlayList();
        this.playlist = data.result;
        let albumData = await reqAlbumList();
        this.albumlist.push(albumData.weekData.slice(0, 5));
        this.albumlist.push(albumData.weekData.slice(6, 11));
        let listData = await reqListDetail();
        this.list = listData.list.slice(0, 3);

        let bannerData = await reqBanner();
        this.banner = bannerData.banners;
    }
}
</script>
<style lang="less" scoped>
@import '@/less/config.less';

.top-nav2 {
    height: 35px;
    background-color: @nav2-color;
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        transform: translateX(-50px);

        li {
            padding: 0 13px;
            height: 20px;
            border-radius: 20px;
            color: #fff;
            margin: 0 17px;
            line-height: 20px;

            &.active,
            &:hover {
                background-color: #9b0909;
            }

            a {
                color: #fff;
                text-align: center;
            }
        }

        .triangle {
            position: absolute;
            top: -26px;
            width: 0;
            left: 40px;
            height: 7px;
            border: 6px solid @nav2-color;
            border-top-color: transparent;
            border-left-color: transparent;
            border-right-color: transparent;

        }
    }

}

.recommendContainer {
    width: 100%;
    background-color: @global-bg;


    .banner {
        display: flex;
        justify-content: center;
        position: relative;
        overflow: hidden;

        .filter {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url(./images/swiper1.jpg);
            transform: scale(1.5);
            background-position: 50%;
            filter: blur(20px);

            &::after {
                content: " ";
                display: block;
                width: 100%;
                height: 400rpx;
                background: rgba(17, 17, 17, .2);
                z-index: 1;
            }
        }


        .my-swiper {
            width: 730px;
            height: 285px;
            z-index: 2;
            margin: 0;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .my-prev {
            left: 10%;
            top: 50%;
        }

        .my-next {
            position: absolute;
            right: 10%;
            top: 50%;
        }

        .download {
            width: 254px;
            height: 284px;
            background-color: #000;
            z-index: 2;

            .loadImg {
                position: relative;
                height: 245px;
                background-image: url(./images/download.png);

                .activeBtn {
                    position: absolute;
                    top: 189px;
                    left: 19px;
                    width: 215px;
                    height: 56px;
                    cursor: pointer;
                    background-image: url(./images/download.png);
                    background-position: 0px 60px;
                    opacity: 0;

                    &:hover {
                        opacity: 1;
                    }
                }
            }

            p {
                color: #ccc;
                font-size: 12px;
                text-align: center;
                margin: 10px 0;
            }
        }
    }

    .recommend {
        width: 980px;
        height: 1425px;
        margin: 0 auto;
        display: flex;

        .leftSide {
            background-color: #fff;
            width: 729px;
            height: 1425px;
            display: flex;
            flex-direction: column;
            padding: 0 20px;
            border: 1px solid #d3d3d3;
            border-width: 0 1px;

            .hotRecommend {
                margin-bottom: 50px;

                .hd {
                    width: 729px;
                    height: 35px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 30px;
                    box-sizing: border-box;
                    border-bottom: 2px solid #9b0909;

                    .title {
                        display: flex;
                        align-items: center;

                        h2 {
                            margin-right: 30px;
                        }

                        ul {
                            li {
                                float: left;

                                i {
                                    margin: 0 15px;
                                }
                            }
                        }
                    }
                }

                .sheets {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    margin-top: 20px;

                    .sheet {
                        width: 140px;
                        height: 140px;
                        padding-right: 56px;
                        padding-bottom: 56px;

                        &:nth-child(4n) {
                            padding-right: 0;
                        }

                        .s-cover {
                            width: 140px;
                            height: 140px;
                            position: relative;

                            img {
                                width: 100%;
                                height: 100%;
                            }

                            .u-jp {
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 40px;
                                height: 40px;
                                background-position: -135px -220px;
                                display: inline-block;
                                overflow: hidden;
                                vertical-align: middle;
                                background-image: url(./images/icon2.png);
                            }

                            a {
                                display: block;
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                background-image: url(./images/coverall.png);
                                background-position: 0 0;
                            }

                            .controlBtn {
                                position: absolute;
                                z-index: 3;
                                bottom: 0;
                                left: 0;
                                width: 100%;
                                height: 27px;
                                // line-height: 27px;
                                display: flex;
                                align-items: center;
                                color: #ccc;
                                background-image: url(./images/coverall.png);
                                background-position: 0 -537px;

                                .icon-headset {
                                    width: 14px;
                                    height: 11px;
                                    background-position: 0 -24px;
                                    margin: 9px 5px 9px 10px;
                                    background-image: url(./images/iconall.png);
                                }

                                a {
                                    display: block;
                                    width: 16px;
                                    height: 17px;
                                    background-position: 0 0;
                                    margin-top: 5px;
                                    margin-left: 120px;
                                    background-image: url(./images/iconall.png);
                                }
                            }
                        }
                    }

                    .intrText {
                        font-size: 12px;
                        color: #000;
                        margin-top: 5px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 4;
                        -webkit-box-orient: vertical;
                        word-break: break-word;

                        i {
                            display: inline-block;
                            width: 35px;
                            height: 15px;
                            margin: -1px 3px 0 0;
                            background-position: -31px -658px;
                            background-image: url(./images/icon.png);
                        }

                        a {
                            font-size: inherit;
                            color: inherit;
                        }
                    }
                }
            }

            .newVideo {
                position: relative;

                .hd {
                    width: 729px;
                    height: 35px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 30px;
                    box-sizing: border-box;
                    border-bottom: 2px solid #9b0909;

                    .title {
                        display: flex;
                        align-items: center;

                        h2 {
                            margin-right: 30px;
                        }

                        ul {
                            li {
                                float: left;

                                i {
                                    margin: 0 15px;
                                }
                            }
                        }
                    }
                }

                .video-swiper {
                    width: 729px;
                    margin-top: 20px;
                    margin-bottom: 75px;
                    border: 1px solid #d3d3d3;
                    box-sizing: border-box;
                    overflow: hidden;

                    .swiper-item {
                        background-color: #f5f5f5;
                        padding: 30px 30px 5px 30px;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;


                        li {
                            width: 118px;
                            height: 150px;
                            position: relative;

                            .v-cover {
                                width: 100px;
                                height: 100px;
                                position: relative;
                                box-shadow: 0 5px 6px #ccc;

                                img {
                                    width: 100%;
                                    height: 100%;
                                }

                                &:hover .play {
                                    display: block;
                                }

                                .play {
                                    display: none;
                                    position: absolute;
                                    right: 10px;
                                    bottom: 5px;
                                    width: 22px;
                                    height: 22px;
                                    background-position: 0 -85px;
                                    background-image: url(./images/iconall.png);
                                }

                                .mask {
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 118px;
                                    height: 100px;
                                    background-position: 0 -570px;
                                    background-image: url(./images//coverall.png);
                                    -webkit-box-reflect: below 0px -webkit-linear-gradient(transparent, transparent 50%, rgba(255, 255, 255, .3));
                                }

                            }

                            .videoText {
                                position: absolute;
                                left: 0;
                                bottom: 5px;
                                width: 118px;
                                height: 35px;
                                background-color: #f5f5f5;
                            }
                        }
                    }
                }

                .video-next {
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: scale(0.8) translateY(-50%);
                    --swiper-navigation-color: #666;
                }

                .video-prev {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: scale(0.8) translateY(-50%);
                    --swiper-navigation-color: #666;
                }
            }

            .list {
                .hd {
                    width: 729px;
                    height: 35px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 30px;
                    box-sizing: border-box;
                    border-bottom: 2px solid #9b0909;

                    .title {
                        display: flex;
                        align-items: center;

                        h2 {
                            margin-right: 30px;
                        }

                        ul {
                            li {
                                float: left;

                                i {
                                    margin: 0 15px;
                                }
                            }
                        }
                    }
                }

                .container {
                    margin-top: 20px;
                    border: 1px solid #ccc;
                    border-right: none;
                    display: flex;
                    flex-direction: row;

                    .columns {
                        width: 242px;
                        border-right: 1px solid #ccc;

                        .top {
                            width: 242px;
                            height: 120px;
                            padding-top: 20px;
                            padding-left: 19px;
                            display: flex;
                            box-sizing: border-box;
                            background-color: #f4f4f4;


                            .left {
                                position: relative;
                                width: 80px;
                                height: 80px;

                                img {
                                    width: 100%;
                                    height: 100%;
                                }

                                .mask {
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                    background-position: -145px -57px;
                                    background-image: url(./images/coverall.png);
                                }
                            }

                            .right {
                                margin-top: 6px;
                                margin-left: 10px;
                                height: 100%;

                                a {
                                    font-weight: bolder;
                                }

                                .btns {
                                    margin-top: 10px;

                                    a {
                                        display: inline-block;
                                        width: 22px;
                                        height: 22px;
                                        margin-right: 10px;
                                        background-image: url(./images/index.png);
                                    }

                                    .icon-play {
                                        background-position: -267px -205px;

                                        &:hover {
                                            background-position-y: -235px;
                                        }
                                    }

                                    .icon-coll {
                                        background-position: -300px -205px;

                                        &:hover {
                                            background-position-y: -235px;
                                        }
                                    }
                                }

                            }
                        }

                        dd {
                            width: 242px;
                            height: 352px;
                            display: block;

                            ol {
                                height: 319px;
                                line-height: 32px;

                                li {
                                    padding-left: 50px;
                                    box-sizing: border-box;
                                    background-color: #f4f4f4;

                                    &:nth-child(odd) {
                                        background-color: #e8e8e8;
                                    }

                                    &:nth-child(1),
                                    &:nth-child(2),
                                    &:nth-child(3) {
                                        span {
                                            color: @nav2-color;
                                        }
                                    }

                                    width: 100%;
                                    height: 32px;
                                    line-height: 32px;
                                    color: #000;

                                    &:hover .oper {
                                        display: block;
                                    }

                                    a {
                                        color: inherit;
                                    }

                                    .lelNo {
                                        float: left;
                                        position: relative;
                                        width: 35px;
                                        height: 32px;
                                        margin-left: -35px;
                                        text-align: center;
                                        color: #666;
                                        font-size: 16px;
                                    }

                                    .oper {
                                        display: none;
                                        float: right;
                                        width: 82px;
                                        margin-top: 7px;
                                        vertical-align: middle;

                                        .c-icon {
                                            width: 17px;
                                            height: 17px;
                                            margin-right: 10px;
                                            float: left;
                                            background-image: url(./images/index.png);

                                            &:hover {
                                                background-position-y: -288px;
                                            }
                                        }

                                        .player {
                                            background-position: -267px -268px;
                                        }

                                        .inc {
                                            background-image: url(./images/icon.png);
                                            background-position: 0 -700px;

                                            &:hover {
                                                background-position-x: -22px;
                                                background-position-y: -700px;
                                            }
                                        }

                                        .coll {
                                            background-position: -297px -268px;
                                        }
                                    }
                                }
                            }

                            .all {
                                width: 100%;
                                height: 32px;
                                text-align: right;
                                line-height: 32px;
                                background-color: #e8e8e8;
                                clear: both;

                                a {
                                    margin-right: 32px;
                                }
                            }
                        }
                    }
                }

            }
        }

        .rightSide {
            background-color: #fff;
            width: 220px;
            height: 1425px;
        }
    }
}
</style>