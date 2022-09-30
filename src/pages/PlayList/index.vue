<template>
    <!-- 歌单 -->
    <div class="playList">
        <div class="hd pl-hd">
            <div class="title">
                <h2>热门推荐</h2>
                <select name="pl" id="" v-model="playParams.cat" @change="handleChangeCat">
                    <option value="全部" selected>全部</option>
                    <optgroup label="language">
                        <!-- Chinese, European, American, Japanese, Korean, Cantonese -->
                        <option value="华语">华语</option>
                        <option value="欧美">欧美</option>
                        <option value="日语">日语</option>
                        <option value="韩语">韩语</option>
                        <option value="粤语">粤语</option>
                    </optgroup>
                    <optgroup label="style">
                        <!-- Pop music, rock, folk, electronic, dance music, rap, light music, jazz, country, R&B/Soul, classical, national, British, metal, punk, blues, reggae, world music, Latin, New Age, antique, backward, Bossa Nova -->
                        <!-- 流行乐，摇滚，民谣，电子，舞曲，说唱，轻音乐，爵士，乡村，R&B/Soul，古典，民族，英伦，金属，朋克，蓝调，雷鬼，世界音乐，拉丁，New Age，古风，后摇，Bossa Nova -->
                        <option value="流行乐">流行乐</option>
                        <option value="摇滚">摇滚</option>
                        <option value="民谣">民谣</option>
                        <option value="电子">电子</option>
                        <option value="舞曲">舞曲</option>
                        <option value="说唱">说唱</option>
                        <option value="轻音乐">轻音乐</option>
                        <option value="爵士">爵士</option>
                        <option value="乡村">乡村</option>
                        <option value="R&B/Soul">R&amp;B/Soul</option>
                        <option value="古典">古典</option>
                        <option value="民族">民族</option>
                        <option value="英伦">英伦</option>
                        <option value="金属">金属</option>
                        <option value="朋克">朋克</option>
                        <option value="蓝调">蓝调</option>
                        <option value="雷鬼">雷鬼</option>
                        <option value="世界音乐">世界音乐</option>
                        <option value="拉丁">拉丁</option>
                        <option value="New Age">New Age</option>
                        <option value="古风">古风</option>
                        <option value="后摇">后摇</option>
                        <option value="Bossa Nova">Bossa Nova</option>
                    </optgroup>
                    <optgroup label="scene">
                        <!-- 清晨，夜晚，学习，工作，午休，下午茶，地铁，驾车，运动，旅游，散步，酒吧 -->
                        <!-- Morning, night, study, work, lunch break, afternoon tea, subway, driving, sports, travel, walk, bar -->
                        <option value="清晨">清晨</option>
                        <option value="夜晚">夜晚</option>
                        <option value="学习">学习</option>
                        <option value="工作">工作</option>
                        <option value="午休">午休</option>
                        <option value="下午茶">下午茶</option>
                        <option value="地铁">地铁</option>
                        <option value="驾车">驾车</option>
                        <option value="运动">运动</option>
                        <option value="旅游">旅游</option>
                        <option value="散步">散步</option>
                        <option value="酒吧">酒吧</option>
                    </optgroup>
                    <optgroup label="emotion">
                        <!-- 怀旧，清新，浪漫，伤感，治愈，放松，孤独，感动，兴奋，快乐，安静，思念 -->
                        <!-- Nostalgic, fresh, romantic, sad, healing, relaxing, lonely, moved, excited, happy, quiet, missing -->
                        <option value="怀旧">怀旧</option>
                        <option value="清新">清新</option>
                        <option value="浪漫">浪漫</option>
                        <option value="伤感">伤感</option>
                        <option value="治愈">治愈</option>
                        <option value="放松">放松</option>
                        <option value="孤独">孤独</option>
                        <option value="感动">感动</option>
                        <option value="兴奋">兴奋</option>
                        <option value="快乐">快乐</option>
                        <option value="安静">安静</option>
                        <option value="思念">思念</option>
                    </optgroup>
                    <optgroup label="theme">
                        <!-- 综艺，影视原声，ACG，儿童，校园，游戏，70后，80后，90后，网络，KTV，经典，翻唱，吉他，钢琴，器乐，榜单，00后 -->
                        <!-- Variety, movie soundtrack, ACG, children, campus, games, post-70s, post-80s, post-90s, network, KTV, classic, cover singing, guitar, piano, instrumental music, list, post-00s -->
                        <option value="综艺">综艺</option>
                        <option value="影视原声">影视原声</option>
                        <option value="ACG">ACG</option>
                        <option value="儿童">儿童</option>
                        <option value="校园">校园</option>
                        <option value="游戏">游戏</option>
                        <option value="70后">70后</option>
                        <option value="80后">80后</option>
                        <option value="90后">90后</option>
                        <option value="网络音乐">网络音乐</option>
                        <option value="KTV">KTV</option>
                        <option value="经典">经典</option>
                        <option value="翻唱">翻唱</option>
                        <option value="吉他">吉他</option>
                        <option value="钢琴">钢琴</option>
                        <option value="器乐">器乐</option>
                        <option value="榜单">榜单</option>
                        <option value="00后">00后</option>
                    </optgroup>
                </select>
            </div>
            <p class="more hot-btn" @click="changeHotCat">热门</p>
        </div>
        <div class="pl-box">
            <ul class="pl-container">
                <li class="sheet" v-for="play,i in playlists.playlists" :key="play.id">
                    <div class="s-cover">
                        <img :src="play.coverImgUrl" alt="歌单图片">
                        <a href="#" class="mask"></a>
                        <div class="controlBtn">
                            <span class="icon-headset"></span>
                            <span class="nb">{{play.playCount | toBeThousand}}</span>
                            <a href="#"></a>
                        </div>
                    </div>
                    <p class="intrText"><a href="#">{{play.name}}</a>
                    </p>
                    <p class="author">by
                        <span>{{play.creator.nickname}}</span>
                        <img v-if="play.creator.avatarDetail != null" :src="play.creator.avatarDetail.identityIconUrl"
                            alt="avatarUrl">
                    </p>
                </li>
            </ul>
        </div>
        <Pagination :total="playlists.total" :size="35" :pageNo="pageNo" @changePageNo="handleChangePage" />
    </div>
</template>
<script>
import { reqPlayList } from '@/api'

export default {
    name: 'PlayList',
    data() {
        return {
            playParams: {
                order: 'hot',
                cat: '全部',
                offset: 0,
                limit: 35
            },
            playlists: {}
        }
    },
    computed: {
        pageNo: {
            get() {
                return this.playParams.offset / this.playParams.limit == 0 ? 1 : this.playParams.offset / this.playParams.limit + 1;
            }
        }
    },
    watch: {
        $route: {
            async handler() {
                //再次整合参数，发起请求
                Object.assign(this.playParams, this.$route.query);
                this.playlists = await reqPlayList(this.playParams);
            }
        }
    },
    methods: {
        handleChangePage(page) {
            this.playParams.offset = (page - 1) * 35;
            //不仅要去更新数据，还要通过编程式路由导航跳转
            this.$router.push({ name: 'playlist', query: this.playParams })
        },
        handleChangeCat() {
            this.playParams.offset = 0;
            // this.pageNo = 1;
            this.$router.push({ name: 'playlist', query: this.playParams })
        },
        changeHotCat() {
            //点击重新更改order为hot cat为全部
            let params = { order: 'hot', cat: '全部', offset: 0, limit: 35 };
            Object.assign(this.playParams, params);
            this.$router.push({ name: 'playlist', query: this.playParams });
        }
    },
    async mounted() {
        //刷新时，将query参数保存到playParams
        Object.assign(this.playParams, this.$route.query)
        //发起请求获取歌单数据
        //整理请求参数
        let playListData = await reqPlayList(this.playParams);
        this.playlists = playListData;
    }
}
</script>
<style lang="less" scoped>
@import '@/less/config.less';

.playList {
    width: 980px;
    box-sizing: border-box;
    padding: 40px;
    margin: 0 auto;
    overflow: hidden;
    background-color: #fff;

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

    .pl-hd {
        width: 900px;
        box-sizing: border-box;
        padding: 0;

        .hot-btn {
            padding: 5px;
            cursor: pointer;
            color: #fff;
            background-position: 0 0;
            border-radius: 3px;
            background-image: url(./images/button.png);
        }
    }

    .pl-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 30px;

        .sheet {
            width: 140px;
            height: 140px;
            padding-right: 30px;
            padding-bottom: 70px;

            &:nth-child(5n) {
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
            height: 19px;
            line-height: 19px;
            font-size: 12px;
            color: #000;
            margin-top: 5px;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
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

        .author {
            color: #999;
            display: flex;
            align-items: center;


            span {
                display: inline-block;
                padding-right: 10px;
                margin-left: 5px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #666;
            }

            img {
                height: 13px;
                width: 13px;
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
}
</style>