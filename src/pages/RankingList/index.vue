<template>
    <div class="rankingList">
        <div class="category">
            <div class="c-list">
                <h2>云音乐特色榜</h2>
                <ul>
                    <li :class="activeId===i ? 'active':''" v-for="list,i in allList[0]" :key="list.id"
                        @click="handleChangeActive(i,list.id)">
                        <div class="context">
                            <img :src="list.coverImgUrl" alt="">
                            <div>
                                <p>{{list.name}}</p>
                                <p>{{list.updateFrequency}}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="c-list">
                <h2>全球媒体榜</h2>
                <ul>
                    <li :class="activeId2 === i ?'active':''" v-for="list,i in allList[1]" :key="list.id"
                        @click="handleChangeActive2(i,list.id)">
                        <div class="context">
                            <img :src="list.coverImgUrl" alt="">
                            <div>
                                <p>{{list.name}}</p>
                                <p>{{list.updateFrequency}}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="details">
            <div class="d-hd">
                <div class="d-list">
                    <img src="./images/riseList.jpg" alt="">
                    <div class="mask"></div>
                </div>
                <div class="d-context">
                    <h2 class="title">飙升榜</h2>
                    <p class="d-st"><span class="icon-clock"></span>最新更新：09月24日<span class="d-time">（刚刚更新）</span></p>
                    <div class="ctr-btns">
                        <div class="ctr-btn player">
                            <a href="#" class="icon-player">
                                <i>
                                    <em></em>
                                    播放
                                </i>
                            </a>
                            <a href="#" class="icon-increment">
                                <i></i>
                            </a>
                        </div>
                        <a href="#" class="ctr-btn collection">
                            <i>(234234)</i>
                        </a>
                        <a href="#" class="ctr-btn share">
                            <i>(3534532)</i>
                        </a>
                        <a href="#" class="ctr-btn download">
                            <i>下载</i>
                        </a>
                        <a href="#" class="ctr-btn comm">
                            <i>讨论</i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="songList">
                <div class="s-hd">
                    <h3>歌曲列表<span class="s-count">100首歌</span></h3>

                    <span class="f-right">播放：<i>234234939</i>次</span>
                </div>
                <table class="s-tb">
                    <thead>
                        <tr>
                            <th></th>
                            <th>标题</th>
                            <th>时长</th>
                            <th>歌手</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="s-td-1">
                                <span class="no">1</span>
                                <span class="no-icon no-icon-up">1</span>
                            </td>
                            <td class="s-td-2">
                                <a href="#" class="song">
                                    <img src="./images/song.jpg" alt="">
                                </a>
                                <span class="play-icon"></span>
                                <a href="#" class="songName">玫瑰少年</a>
                            </td>
                            <td class="s-td-3">
                                <span>04:21</span>
                                <div class="contrl-btns">
                                    <a href="#" class="icn icn-add"></a>
                                    <a href="#" class="icn icn-fav"></a>
                                    <a href="#" class="icn icn-share"></a>
                                    <a href="#" class="icn icn-dl"></a>
                                </div>
                            </td>
                            <td class="s-td-4">
                                伦桑
                            </td>
                        </tr>
                        <tr>
                            <td class="s-td-1">
                                <span class="no">1</span>
                                <span class="no-icon no-icon-up">1</span>
                            </td>
                            <td class="s-td-2">
                                <a href="#" class="song">
                                    <img src="./images/song.jpg" alt="">
                                </a>
                                <span class="play-icon"></span>
                                <a href="#" class="songName">玫瑰少年</a>
                            </td>
                            <td class="s-td-3">
                                <span>04:21</span>
                                <div class="contrl-btns">
                                    <a href="#" class="icn icn-add"></a>
                                    <a href="#" class="icn icn-fav"></a>
                                    <a href="#" class="icn icn-share"></a>
                                    <a href="#" class="icn icn-dl"></a>
                                </div>
                            </td>
                            <td class="s-td-4">
                                伦桑
                            </td>
                        </tr>
                        <tr>
                            <td class="s-td-1">
                                <span class="no">1</span>
                                <span class="no-icon no-icon-up">1</span>
                            </td>
                            <td class="s-td-2">
                                <a href="#" class="song">
                                    <img src="./images/song.jpg" alt="">
                                </a>
                                <span class="play-icon"></span>
                                <a href="#" class="songName">玫瑰少年</a>
                            </td>
                            <td class="s-td-3">
                                <span>04:21</span>
                                <div class="contrl-btns">
                                    <a href="#" class="icn icn-add"></a>
                                    <a href="#" class="icn icn-fav"></a>
                                    <a href="#" class="icn icn-share"></a>
                                    <a href="#" class="icn icn-dl"></a>
                                </div>
                            </td>
                            <td class="s-td-4">
                                伦桑
                            </td>
                        </tr>
                        <tr>
                            <td class="s-td-1">
                                <span class="no">1</span>
                                <span class="no-icon no-icon-up">1</span>
                            </td>
                            <td class="s-td-2">
                                <a href="#" class="song">
                                    <img src="./images/song.jpg" alt="">
                                </a>
                                <span class="play-icon"></span>
                                <a href="#" class="songName">玫瑰少年</a>
                            </td>
                            <td class="s-td-3">
                                <span>04:21</span>
                                <div class="contrl-btns">
                                    <a href="#" class="icn icn-add"></a>
                                    <a href="#" class="icn icn-fav"></a>
                                    <a href="#" class="icn icn-share"></a>
                                    <a href="#" class="icn icn-dl"></a>
                                </div>
                            </td>
                            <td class="s-td-4">
                                伦桑
                            </td>
                        </tr>
                        <tr>
                            <td class="s-td-1">
                                <span class="no">1</span>
                                <span class="no-icon no-icon-up">1</span>
                            </td>
                            <td class="s-td-2">
                                <a href="#" class="song">
                                    <img src="./images/song.jpg" alt="">
                                </a>
                                <span class="play-icon"></span>
                                <a href="#" class="songName">玫瑰少年</a>
                            </td>
                            <td class="s-td-3">
                                <span>04:21</span>
                                <div class="contrl-btns">
                                    <a href="#" class="icn icn-add"></a>
                                    <a href="#" class="icn icn-fav"></a>
                                    <a href="#" class="icn icn-share"></a>
                                    <a href="#" class="icn icn-dl"></a>
                                </div>
                            </td>
                            <td class="s-td-4">
                                伦桑
                            </td>
                        </tr>
                        <tr>
                            <td class="s-td-1">
                                <span class="no">1</span>
                                <span class="no-icon no-icon-up">1</span>
                            </td>
                            <td class="s-td-2">
                                <a href="#" class="song">
                                    <img src="./images/song.jpg" alt="">
                                </a>
                                <span class="play-icon"></span>
                                <a href="#" class="songName">玫瑰少年</a>
                            </td>
                            <td class="s-td-3">
                                <span>04:21</span>
                                <div class="contrl-btns">
                                    <a href="#" class="icn icn-add"></a>
                                    <a href="#" class="icn icn-fav"></a>
                                    <a href="#" class="icn icn-share"></a>
                                    <a href="#" class="icn icn-dl"></a>
                                </div>
                            </td>
                            <td class="s-td-4">
                                伦桑
                            </td>
                        </tr>
                        <tr>
                            <td class="s-td-1">
                                <span class="no">1</span>
                                <span class="no-icon no-icon-down">1</span>
                            </td>
                            <td class="s-td-2">
                                <a href="#" class="song">
                                    <img src="./images/song.jpg" alt="">
                                </a>
                                <span class="play-icon"></span>
                                <a href="#" class="songName">玫瑰少年</a>
                            </td>
                            <td class="s-td-3">
                                <span>04:21</span>
                                <div class="contrl-btns">
                                    <a href="#" class="icn icn-add"></a>
                                    <a href="#" class="icn icn-fav"></a>
                                    <a href="#" class="icn icn-share"></a>
                                    <a href="#" class="icn icn-dl"></a>
                                </div>
                            </td>
                            <td class="s-td-4">
                                伦桑
                            </td>
                        </tr>
                        <tr>
                            <td class="s-td-1">
                                <span class="no">1</span>
                                <span class="no-icon no-icon-up">1</span>
                            </td>
                            <td class="s-td-2">
                                <a href="#" class="song">
                                    <img src="./images/song.jpg" alt="">
                                </a>
                                <span class="play-icon"></span>
                                <a href="#" class="songName">玫瑰少年</a>
                            </td>
                            <td class="s-td-3">
                                <span>04:21</span>
                                <div class="contrl-btns">
                                    <a href="#" class="icn icn-add"></a>
                                    <a href="#" class="icn icn-fav"></a>
                                    <a href="#" class="icn icn-share"></a>
                                    <a href="#" class="icn icn-dl"></a>
                                </div>
                            </td>
                            <td class="s-td-4">
                                伦桑
                            </td>
                        </tr>
                        <tr>
                            <td class="s-td-1">
                                <span class="no">1</span>
                                <span class="no-icon no-icon-up">1</span>
                            </td>
                            <td class="s-td-2">
                                <a href="#" class="song">
                                    <img src="./images/song.jpg" alt="">
                                </a>
                                <span class="play-icon"></span>
                                <a href="#" class="songName">玫瑰少年</a>
                            </td>
                            <td class="s-td-3">
                                <span>04:21</span>
                                <div class="contrl-btns">
                                    <a href="#" class="icn icn-add"></a>
                                    <a href="#" class="icn icn-fav"></a>
                                    <a href="#" class="icn icn-share"></a>
                                    <a href="#" class="icn icn-dl"></a>
                                </div>
                            </td>
                            <td class="s-td-4">
                                伦桑
                            </td>
                        </tr>
                        <tr>
                            <td class="s-td-1">
                                <span class="no">1</span>
                                <span class="no-icon no-icon-up">1</span>
                            </td>
                            <td class="s-td-2">
                                <a href="#" class="song">
                                    <img src="./images/song.jpg" alt="">
                                </a>
                                <span class="play-icon"></span>
                                <a href="#" class="songName">玫瑰少年</a>
                            </td>
                            <td class="s-td-3">
                                <span>04:21</span>
                                <div class="contrl-btns">
                                    <a href="#" class="icn icn-add"></a>
                                    <a href="#" class="icn icn-fav"></a>
                                    <a href="#" class="icn icn-share"></a>
                                    <a href="#" class="icn icn-dl"></a>
                                </div>
                            </td>
                            <td class="s-td-4">
                                伦桑
                            </td>
                        </tr>
                        <tr>
                            <td class="s-td-1">
                                <span class="no">1</span>
                                <span class="no-icon no-icon-new">1</span>
                            </td>
                            <td class="s-td-2">
                                <a href="#" class="song">
                                    <img src="./images/song.jpg" alt="">
                                </a>
                                <span class="play-icon"></span>
                                <a href="#" class="songName">玫瑰少年</a>
                            </td>
                            <td class="s-td-3">
                                <span>04:21</span>
                                <div class="contrl-btns">
                                    <a href="#" class="icn icn-add"></a>
                                    <a href="#" class="icn icn-fav"></a>
                                    <a href="#" class="icn icn-share"></a>
                                    <a href="#" class="icn icn-dl"></a>
                                </div>
                            </td>
                            <td class="s-td-4">
                                伦桑
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="comment">
                <div class="c-hd">
                    <h2>评论</h2>
                    <p>共215377条评论</p>
                </div>
                <div class="c-send">
                    <img src="./images/default_avatar.jpg" alt="" class="avatar">
                    <div class="s-form">
                        <div class="s-input">
                            <div class="icon-sj">
                                <em>◆</em>
                                <span>◆</span>
                            </div>
                            <textarea>评论</textarea>
                        </div>

                        <div class="s-function">
                            <div class="fn-btns">
                                <span class="exp"></span>
                                <span class="at"></span>
                            </div>
                            <div class="sumbit">
                                <span>140</span>
                                <button type="sumbit">评论</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="c-comm">
                    <h3>最新评论（{{playComments.total}}）</h3>
                    <div class="itm" v-for="comment,i in playComments.comments" :key="comment.commentId">
                        <a href="#" class="user-avatar"><img :src="comment.user.avatarUrl" alt=""></a>
                        <div class="ctn">
                            <div class="user-ctn">
                                <a href="#">{{comment.user.nickname}}</a>
                                <span v-html="' : '+ content(comment)"></span>
                            </div>
                            <div class="timer">
                                <div class="time">{{comment.time | timer}}</div>
                                <div class="c-reply">
                                    <a href="#" class="zan"><i class="icon-zan"></i>({{comment.likedCount}})</a>
                                    <span>|</span>
                                    <a href="#" class="reply">回复</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pager">
                <button class="pre btns" disabled="true">&lt;上一页</button>
                <li class="page active">1</li>
                <li class="page">2</li>
                <li class="page">3</li>
                <li class="page">4</li>
                <li class="page">5</li>
                <li class="page">6</li>
                <li class="page">7</li>
                <li class="page">8</li>
                <li class="page more">...</li>
                <li class="page">10770</li>
                <button class="next btns">下一页&gt;</button>
            </div>
        </div>
    </div>
</template>
<script>
import { reqAllList, reqPlayListCommend } from '@/api'
export default {
    name: 'RankingList',
    data() {
        return {
            allList: [],
            activeId: 0,
            activeId2: -1,
            playListId: 19723756,
            playComments: []
        }
    },
    computed: {

    },
    methods: {
        handleChangeActive(index, id) {
            this.activeId = index;
            this.activeId2 = -1;
            this.playListId = id;
        },
        handleChangeActive2(index, id) {
            this.activeId2 = index;
            this.activeId = -1;
            this.playListId = id;
        },
        getCommend() {

        },
        content(comment) {
            return comment.richContent != null ? comment.richContent : comment.content
        }
    },
    async mounted() {
        let data = await reqAllList();
        this.allList.push(data.list.slice(0, 4));
        this.allList.push(data.list.slice(4))
        //获取歌单评论
        let comments = await reqPlayListCommend({ id: this.playListId });
        this.playComments = comments;

        //获取榜单详情
    }
}
</script>
<style lang="less" scoped>
@import '@/less/config.less';

.rankingList {
    width: 982px;
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;

    .category {
        position: absolute;
        width: 240px;
        height: 100%;
        box-sizing: border-box;
        background-color: #f9f9f9;
        padding-top: 20px;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;

        .c-list {
            h2 {
                padding: 20px 10px 12px 15px;
                font-size: 14px;
                color: #000;
            }

            li {
                width: 240px;
                height: 62px;
                box-sizing: border-box;
                padding: 10px 0px 10px 20px;

                &:hover {
                    background-color: #f4f2f2;
                }

                &.active {
                    background-color: #e6e6e6;
                }


                .context {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    height: 100%;

                    img {
                        width: 40px;
                        height: 40px;
                        margin-right: 10px;
                    }

                    div {
                        font-size: 12px;

                        p:nth-child(2) {
                            color: #999;
                            line-height: 36px;
                        }
                    }
                }
            }
        }
    }

    .details {
        width: 740px;
        margin-left: 240px;
        border-right: 1px solid #ccc;
        box-sizing: border-box;
        background-color: #fff;

        .d-hd {
            width: 740px;
            height: 238px;
            box-sizing: border-box;
            padding: 40px;
            display: flex;
            flex-direction: row;

            .d-list {
                width: 150px;
                height: 150px;
                border: 1px solid #ccc;
                padding: 2px;
                box-sizing: border-box;
                position: relative;

                img {
                    width: 100%;
                    height: 100%;
                }

                .mask {
                    position: absolute;
                    left: 0;
                    top: 0;
                    background-image: url(./images/coverall.png);
                    width: 150px;
                    height: 150px;
                    background-position: -230px -380px;
                }
            }

            .d-context {
                width: 473px;
                height: 114px;
                margin-left: 30px;

                .title {
                    font-size: 20px;
                    color: #333;
                    margin: 16px 0 4px;
                    font-weight: 500;
                }

                .d-st {
                    margin-bottom: 20px;

                    .icon-clock {
                        float: left;
                        width: 13px;
                        height: 13px;
                        margin-right: 3px;
                        background-position: -18px -682px;
                        background-image: url(./images/icon.png);
                    }

                    .d-time {
                        color: #ccc;
                    }
                }

                .ctr-btns {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    width: 100%;


                    .ctr-btn {
                        height: 31px;
                        background-image: url(./images/button2.png);
                        border-right: 1px solid #ccc;
                        border-top-right-radius: 5px;
                        border-bottom-right-radius: 5px;
                        position: relative;

                        &>i {
                            position: absolute;
                            right: 5px;
                            bottom: 8px;
                        }
                    }

                    .player {
                        color: #fff;
                        display: flex;
                        flex-direction: row;

                        .icon-player {
                            color: inherit;
                            width: 66px;
                            height: 31px;
                            background: linear-gradient(#3c8bd6, #2273c2);
                            border-top-left-radius: 5px;
                            border-bottom-left-radius: 5px;

                            i {
                                display: flex;
                                flex-direction: row;
                                justify-content: center;
                                align-items: center;
                                width: 100%;
                                height: 100%;
                                // background-position: right -428px;
                                // background-image: url(./images/button2.png);

                                em {
                                    display: block;
                                    width: 20px;
                                    height: 18px;
                                    background-position: 0 -1622px;
                                    background-image: url(./images/button2.png);
                                }
                            }
                        }

                        .icon-increment {
                            float: left;
                            width: 31px;
                            height: 31px;
                            background-position: 0 -1588px;
                            background-image: url(./images/button2.png);
                        }
                    }

                    .collection {
                        display: block;
                        width: 84px;
                        // background: linear-gradient(#fefefe, #f2f2f2);
                        background-position: 0 -977px;
                    }

                    .share {
                        background-position: 0 -1225px;
                        width: 90px;
                    }

                    .download {
                        width: 60px;
                        background-position: 0 -2761px;
                    }

                    .comm {
                        width: 60px;
                        background-position: 0 -1465px;
                    }
                }
            }
        }

        .songList {
            width: 740px;
            box-sizing: border-box;
            padding: 0px 30px 40px 40px;

            .s-hd {
                height: 35px;
                line-height: 35px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                h3 {
                    color: #333;

                    .s-count {
                        margin-left: 10px;
                        color: #666;
                        font-size: 12px;
                    }
                }

                .f-right {

                    i {
                        color: red;
                    }
                }
            }

            .s-tb {
                thead {
                    border: 1px solid #ccc;
                    border-top: 2px solid @nav2-color;
                    background: linear-gradient(#fdfdfd, #f0f0f0);

                    th {
                        text-align: left;
                        padding: 8px 10px;
                        border-left: 1px solid #ccc;
                    }
                }

                tbody {
                    border: 1px solid #ccc;

                    tr:nth-child(odd) {
                        background-color: #f7f7f7;
                    }

                    td {
                        height: 70px;
                        box-sizing: border-box;
                    }

                    .s-td-1 {
                        width: 78px;
                        box-sizing: border-box;
                        padding: 6px 10px;
                        vertical-align: middle;

                        .no {
                            display: inline-block;
                            width: 25px;
                            height: 18px;
                            color: #999;
                            text-align: center;
                            line-height: 18px;
                        }

                        .no-icon {
                            &::before {
                                content: "";
                                display: inline-block;
                                width: 11px;
                                height: 13px;
                                background-image: url(./images/icon.png);
                            }
                        }

                        .no-icon-up {
                            &::before {
                                background-position: -74px -299px;
                            }
                        }

                        .no-icon-new {
                            &::before {
                                width: 16px;
                                background-position: -67px -283px;
                            }
                        }

                        .no-icon-down {
                            &::before {
                                background-position: -74px -318px;
                            }
                        }
                    }

                    .s-td-2 {
                        display: flex;
                        align-items: center;
                        padding: 10px;
                        width: 327px;

                        &:hover+td .contrl-btns {
                            display: block;
                        }

                        &:hover+td span {
                            display: none;
                        }

                        .song {
                            box-sizing: border-box;
                            margin-right: 14px;

                            img {
                                width: 50px;
                                height: 50px;
                            }
                        }

                        span.play-icon {
                            cursor: pointer;
                            margin-right: 8px;
                            width: 17px;
                            height: 17px;
                            display: block;
                            background-position: 0 -103px;
                            background-image: url(./images/table.png);
                        }

                        .songName {
                            display: inline-block;
                            width: 260px;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                            color: #333;
                        }
                    }

                    .s-td-3 {
                        width: 91px;
                        padding: 6px 10px;
                        position: relative;

                        &:hover span {
                            display: none;
                        }

                        &:hover .contrl-btns {
                            display: block;
                        }

                        .contrl-btns {
                            display: none;
                            position: absolute;
                            top: 20px;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            padding: 6px 10px;


                            .icn {
                                display: inline-block;
                                width: 18px;
                                height: 16px;
                                overflow: hidden;
                                vertical-align: middle;
                                background-image: url(./images/table.png);

                                &:hover {
                                    background-position-x: -20px;
                                }
                            }

                            .icn-add {
                                width: 13px;
                                height: 13px;
                                background-image: url(./images/icon.png);
                                background-position: 0 -700px;

                                &:hover {
                                    background-position: 63px -700px;
                                }
                            }

                            .icn-fav {
                                background-position: 0 -174px;
                            }

                            .icn-share {
                                background-position: 0 -195px;
                            }

                            .icn-dl {
                                background-position: -81px -174px;

                                &:hover {
                                    background-position-x: -105px;
                                }
                            }
                        }
                    }

                    .s-td-4 {
                        width: 173px;
                        padding: 6px 10px;
                    }
                }
            }
        }
    }

    .comment {
        width: 670px;
        margin: 0 auto;
        padding: 0px 30px 40px 40px;

        .c-hd {
            display: flex;
            align-items: center;
            width: 670px;
            height: 35px;
            color: #333;
            border-bottom: 2px solid @nav2-color;

            p {
                padding-top: 5px;
                padding-left: 15px;
                font-size: 12px;
                transform: scale(0.9);
            }
        }

        .c-send {
            width: 100%;
            height: 98px;
            margin: 20px 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;


            .avatar {
                width: 50px;
                height: 50px;
            }

            .s-form {
                width: 608px;

                .s-input {
                    position: relative;

                    .icon-sj {
                        position: absolute;
                        top: 11px;
                        left: -7px;
                        width: 13px;
                        height: 14px;
                        overflow: hidden;

                        em,
                        span {
                            display: block;
                            font-family: "SimSun";
                            font-style: normal;
                            font-weight: normal;
                            height: 10px;
                            line-height: normal;
                            font-size: 15px;
                        }

                        em {
                            text-align: left;
                            color: #cdcdcd;
                        }

                        span {
                            margin: -10px 0 0 1px;
                            color: #fff;
                        }
                    }

                    textarea {
                        box-sizing: border-box;
                        width: 608px;
                        height: 63px;
                        padding: 5px 6px 6px;
                        outline: none;
                        border: 1px solid #ccc;
                    }
                }

                .s-function {
                    height: 35px;
                    padding-top: 10px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    box-sizing: border-box;

                    .fn-btns span {
                        display: inline-block;
                        overflow: hidden;
                        vertical-align: middle;
                        width: 18px;
                        height: 18px;
                        margin-right: 10px;
                        background-image: url(./images/icon.png);
                    }

                    .exp {
                        background-position: -40px -490px;
                    }

                    .at {
                        background-position: -60px -490px;
                    }

                    .sumbit {
                        span {
                            color: #ccc;
                            margin-right: 10px;
                        }

                        button {
                            width: 46px;
                            height: 25px;
                            background-position: -84px -64px;
                            color: #fff;
                            text-align: center;
                            line-height: 25px;
                            background-image: url(./images/button.png);
                            outline: none;
                            border: none;
                            cursor: pointer;
                        }
                    }
                }
            }
        }

        .c-comm {
            h3 {
                height: 20px;
                color: #333;
                font-size: 12px;
                border-bottom: 1px solid #ccc;
                font-weight: 600;
            }

            .itm {
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 15px 0;
                border-top: 1px dotted #ccc;

                .user-avatar {
                    position: absolute;
                    top: 15px;
                    left: 0;
                    width: 50px;
                    height: 50px;


                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                .ctn {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    box-sizing: border-box;
                    margin-left: 60px;


                    .timer {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        height: 16px;
                        margin-top: 20px;

                        .time {
                            color: #999;
                        }

                        .c-reply {
                            .zan {
                                .icon-zan {
                                    display: inline-block;
                                    width: 15px;
                                    height: 14px;
                                    line-height: 14px;
                                    margin-right: 5px;
                                    background-position: -150px 0;
                                    background-image: url(./images/icon2.png);
                                }
                            }

                            span {
                                margin: 0 5px;
                                color: #ccc;
                            }
                        }
                    }
                }
            }
        }
    }

    .pager {
        width: 670px;
        height: 26px;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .btns {
            border: 1px solid #ccc;
            padding: 0px 22px;
            height: 24px;
            cursor: pointer;
            background: linear-gradient(#f8f8f8, #e9e9e9);

            &:disabled {
                cursor: not-allowed;
                opacity: 0.5;
            }
        }

        .pre {
            margin-right: 2px;
        }

        .page {
            list-style: none;
            padding: 0px 10px;
            text-align: center;
            line-height: 24px;
            color: #333;
            margin-right: 2px;
            border: 1px solid #ccc;

            &.active {
                color: #fff;
                background: linear-gradient(#ed232d, #c40a0f);
            }
        }

        .more {
            border: none;
            cursor: text;
        }
    }
}
</style>