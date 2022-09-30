<template>
    <div class="searchContainer">
        <div class="search-hd">
            <input type="text" v-model.trim="params.keywords" @keydown.enter="handleEnter" @blur="isShow=false"
                @focus="isShow=true">
            <a href="#" class="icon-search"></a>
            <div class="searchTips" v-if="isShow">
                <p class="t-hd"><a href="#">搜“{{params.keywords}}” 相关用户&gt;</a></p>
                <div class="info-container">
                    <div class="itm" v-if="isHave('songs')">
                        <div class="itm-lf">
                            <i></i>
                            <span>单曲</span>
                        </div>
                        <ul class="itm-rt">
                            <li v-for="song,i in guess.songs" :key="song.id"><a
                                    href="#">{{song.name}}-{{song.artists[0].name}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="itm" v-if="isHave('artists')">
                        <div class="itm-lf">
                            <i class="icn-singer"></i>
                            <span>歌手</span>
                        </div>
                        <ul class="itm-rt itm-bg">
                            <li v-for="singer,i in guess.artists" :key="singer.id"><a href="#">{{singer.name}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="itm" v-if="isHave('albums')">
                        <div class="itm-lf">
                            <i class="icn-video"></i>
                            <span>专辑</span>
                        </div>
                        <ul class="itm-rt">

                            <li v-for="album,i in guess.albums" :key="album.id"><a
                                    href="#">{{album.name}}-{{album.artist.name}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="itm" v-if="isHave('playlists')">
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
        <div class="resContainer">
            <h3>搜索“{{params.keywords}}”，找到<span class="redTxt">20</span>首单曲</h3>
            <div class="result">
                <ul class="res-hd">
                    <!--  1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音 -->
                    <li class="active">单曲</li>
                    <li>歌手</li>
                    <li>专辑</li>
                    <li>视频</li>
                    <li>歌词</li>
                    <li>歌单</li>
                    <li>声音主播</li>
                    <li>用户</li>
                </ul>
                <div class="res-tbody">
                    <div class="res-tr" v-for="itm,i in getTypeStr" :key="itm.id">
                        <div class="song">
                            <span></span>
                            <a href="#">{{itm.name}}<i v-if="itm.tns" style="color:#ccc;">-（{{itm.tns[0]}}）</i></a>
                        </div>
                        <div class="td-rt">
                            <div class="ctrs">
                                <span class="add"></span>
                                <span class="coll"></span>
                                <span class="share"></span>
                                <span class="dl"></span>
                            </div>
                            <div class="singers">
                                <a href="#">{{itm.ar[0].name}}</a>
                                <span v-if="itm.ar.length>1">/</span>
                                <a href="#" v-for="a,i in itm.ar.slice(1)" :key="a.id">{{a.name}}/</a>
                            </div>
                            <div class="album">
                                <a href="#">《{{itm.al.name}}》</a>
                            </div>
                            <p>03:31</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { reqSearch, reqGuessKeyword } from '@/api';
export default {
    name: 'Search',
    data() {
        return {
            params: {
                limit: 20,
                keywords: '',
                type: 1,
            },
            searchRes: {},
            guess: { order: '' },
            isShow: false,
            typeStr: {
                '1': 'songs',
                '10': 'albums',
                '100': 'artists',
                '1000': 'playlists',
                '1002': 'userprofiles',
                '1004': 'mvs',
                '1006': 'songs',
                '1009': 'djRadios',
                '1014': 'videos',
                '1018': '',
                '2000': 'resources'
            }
        }
    },
    methods: {
        async handleEnter(e) {
            //重新获取数据
            let data = await reqSearch(this.params);
            this.searchRes = data.result;
            this.$router.push({ name: 'search', query: this.params });
            this.isShow = false;
            e.target.blur();
        },
        isHave(string) {
            if (Object.hasOwn(this.guess, 'order')) {
                return this.guess.order.indexOf(string) >= 0;
            } else {
                return false
            }

        },
        async changeType(type) {
            this.params.type = type;
            let data = await reqSearch(this.params);
            this.searchRes = data.result;
            this.$router.push({ name: 'search', query: this.params });
        }
    },
    watch: {
        params: {
            deep: true,
            async handler() {
                if (this.params.keywords) {
                    let guessData = await reqGuessKeyword({ keywords: this.params.keywords });
                    this.guess = guessData.result;
                }
            }
        },
        $route: {
            async handler() {
                Object.assign(this.params, this.$route.query);

                //重新获取数据
                let data = await reqSearch(this.params);
                this.searchRes = data.result;
            }
        }
    },
    computed: {
        getTypeStr() {
            let str = this.typeStr;
            let type = str[this.params.type];
            // console.log(type)
            return this.searchRes[type];
        }
    },
    async mounted() {
        //获取query参数记录到data中
        Object.assign(this.params, this.$route.query);
        //获取搜索结果
        let data = await reqSearch(this.params);
        console.log('search', data)
        this.searchRes = data.result;
    }
}
</script>
<style lang="less" scoped>
@import '@/less/config.less';

.searchContainer {
    background-color: #fff;
    width: 980px;
    padding: 40px;
    box-sizing: border-box;
    margin: 0 auto;

    .search-hd {
        position: relative;
        width: 420px;
        height: 40px;
        margin: 0 auto;
        background-position: 0 0;
        z-index: 10;
        background-image: url(./images/sprite.png);

        input {
            position: absolute;
            left: 0;
            top: 0;
            width: 370px;
            height: 100%;
            z-index: 100;
            outline: none;
            border: none;
            background-color: transparent;
            padding-left: 15px;
        }

        .icon-search {
            float: right;
            width: 50px;
            height: 40px;
        }

        .searchTips {
            position: absolute;
            z-index: 120;
            left: 0;
            top: 43px;
            width: 418px;
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
                width: 418px;
                display: flex;
                flex-direction: column;

                .itm {
                    width: 418px;
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
                        flex-grow: 0.9;
                        padding: 6px 0;
                        border-left: 1px solid #e2e2e2;

                        li {
                            padding: 6px;
                            box-sizing: border-box;

                            &:hover {
                                background-color: #ccc;
                            }

                            a {
                                width: 300px;
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

    .resContainer {
        width: 900px;

        h3 {
            margin: 28px 0 17px 0;
            color: #999;
            font-size: 12px;

            span {
                color: @nav2-color;
            }
        }

        .result {
            .res-hd {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-left: 1px solid #ccc;
                border-right: 1px solid #ccc;
                box-sizing: border-box;
                background: linear-gradient(#f9f9f9, #f6f6f6);

                li {
                    color: #333;
                    font-size: 14px;
                    font-weight: normal;
                    width: 900./8px;
                    height: 39px;
                    line-height: 39px;
                    text-align: center;
                    box-sizing: border-box;
                    padding: 2px 2px 0px 0px;
                    border-top: 2px solid #ccc;
                    border-bottom: 1px solid #ccc;
                    cursor: pointer;

                    &:hover {
                        border-top-color: @nav2-color;
                    }

                    &.active {
                        border-bottom: none;
                        border-right: 1px solid #ccc;
                        border-top-color: @nav2-color;
                        background: linear-gradient(#f8f8f8, #fefefe);
                    }
                }
            }

            .res-tbody {
                margin-top: 10px;

                .res-tr {
                    width: 100%;
                    height: 43px;
                    padding: 10px 8px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;

                    &:nth-child(even) {
                        background-color: #f7f7f7;
                    }

                    &:hover {
                        background-color: #f2f2f2;
                    }

                    &:hover .td-rt .ctrs {
                        display: block;
                    }

                    .song {
                        display: flex;
                        flex-direction: row;

                        span {
                            width: 17px;
                            height: 17px;
                            background-image: url(./images/table.png);
                            margin-right: 15px;
                            cursor: pointer;
                            background-position: 0 -103px;
                        }

                        a {
                            width: 370px;
                            height: 23px;
                        }
                    }

                    .td-rt {
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        flex-grow: 1;

                        .ctrs {
                            display: none;
                            height: 16px;

                            span {
                                display: inline-block;
                                vertical-align: middle;
                                width: 18px;
                                height: 16px;
                                cursor: pointer;
                                margin: 0 7px 0 0;
                                background-image: url(./images/table.png);
                            }

                            .add {
                                width: 13px;
                                height: 13px;
                                background-position: 0 -700px;
                                background-image: url(./images/icon.png);

                                &:hover {
                                    background-position-x: -22px;
                                }
                            }

                            .coll {
                                margin-left: 0;
                                background-position: 0 -174px;

                                &:hover {
                                    background-position-x: -20px;
                                }
                            }

                            .share {
                                background-position: 0 -195px;

                                &:hover {
                                    background-position-x: -20px;
                                }
                            }

                            .dl {
                                background-position: -81px -174px;

                                &:hover {
                                    background-position-x: -103px;
                                }
                            }
                        }

                        .singers {
                            width: 27%;
                            margin-right: 12px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }

                        .album {
                            width: 28%;
                            margin-right: 12px;
                            min-height: 16px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }

                        p:last-child {
                            width: 85px;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
}
</style>