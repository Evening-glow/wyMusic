<template>
    <!-- 播放条 -->
    <div class="playerCtn">
        <audio :src="getSong.url ? getSong.url : '' " ref="audio" @ended="ended" preload="auto"></audio>
        <div class="showCtl">
            <a href="#"><i></i></a>
            <div class="ct"></div>
        </div>
        <div class="player">
            <div class="ctls">
                <div class="btns">
                    <a href="#" class="s-pre"></a>
                    <a href="#" :style="{'backgroundPositionY':isPlay?'-165px':'-204px'}" class="s-play"
                        @click.prevent="handlePlay"></a>
                    <a href="#" class="s-next"></a>
                </div>
                <div class="al">
                    <img :src="getSongInfo.picUrl" alt="">
                    <a class="mask" href="#"></a>
                </div>
                <div class="flag" @mouseup="moveover">
                    <div class="f-t">
                        <a href="#">{{getSongInfo.name}}</a>
                        <a href="#" class="mv"></a>
                        <span class="ar">{{getSongInfo.arName}}</span>
                        <a href="#" class="link"></a>
                    </div>
                    <div class="f-b">
                        <div class="pro-bar" @mousemove="movestart" ref="prograss" @mousedown="movedown">
                            <div class="pl-bar bar" ref="proPlay" style="z-index:200;"></div>
                            <div class="cache-bar bar" style="z-index:100;"></div>
                            <div class="pl-ico" style="z-index:300;" ref="proCtl" @mousemove="movestart"
                                @mousedown="movebegin"></div>
                            <div class="cur"></div>
                        </div>
                        <span><i>{{cTime | duration}}</i>/{{getSong.time?getSong.time:0 | duration}}</span>
                    </div>
                </div>
                <div class="open-fl">
                    <a href="#" class="o-ico ly"></a>
                    <a href="#" class="o-ico inc"></a>
                    <a href="#" class="o-ico sr"></a>
                </div>
                <div class="ctr-fl">
                    <a href="#" class="ctr-ico vs"></a>
                    <a href="#" class="ctr-ico" :class="ico[icoIdx]" @click.prevent="changeIco"></a>
                    <a href="#" class="lis ctr-ico" @click.prevent="isShowList=!isShowList">{{playlist.length}}</a>
                </div>
            </div>
            <div class="showList" :style="{display:isShowList?'block':'none'}">
                <div class="listHd">播放列表({{playlist.length}})</div>
                <ul>
                    <li v-for="song,i in playlist" :class="i===currentIndex?'active':''" :key="song.id"
                        @click="changePlaySong(i)">
                        <div class="lf"><i class="playing"></i>{{song.al.name}}</div>
                        <div class="rt">
                            <span style="margin-right:5px;">{{song.ar[0].name}}</span>
                            <span>{{song.time | duration}}</span>
                            <span class="delSong" @click="delSong(i)"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'Player',
    data() {
        return {
            isPlay: false,
            move: false,
            clickmove: false,
            mouseStartX: 0,
            progressLength: 0,
            startLeft: 0,
            cTime: 0,
            ico: ['loop', 'suiji', 'one'],
            icoIdx: 0,
            isShowList: false
        }
    },
    watch: {
        getSong: {
            // deep: true,
            handler(newSong) {
                //当有计时器时，删除计时器
                if (this.timer) {
                    clearInterval(this.timer)
                }
                //当删除的是正在播放的歌曲，并且是最后一首时，判断新获取的song有无url和还有没有可播放的歌曲，根据播放类型决定下一首
                if (newSong.url == null && this.playlist.length > 0) {
                    switch (this.ico[this.icoIdx]) {
                        case this.ico[0]:
                            this.$store.commit('player/setCurrentIdx', 0);
                        case this.ico[1]:
                            let random = Math.floor(Math.random() * this.playlist.length);
                            this.$store.commit('player/setCurrentIdx', random);
                        case this.ico[2]:
                            this.$store.commit('player/setCurrentIdx', 0);
                        default: return;
                    }
                }
                //判断当前有无可播放判断有无可播放 :1、当删除列表项最后一项时，不播放音乐 2、当前playlist获取不到歌曲时
                if (this.playlist.length == 0) {
                    this.isPlay = false;
                    return;
                }

                this.$refs.audio.src = newSong.url;
                this.$nextTick(() => { this.prograssPlay(); })
                this.isPlay = true
            }
        }
    },
    computed: {
        ...mapState('player', ['playlist', 'currentIndex']),
        ...mapGetters('player', ['getSong']),
        getSongInfo() {
            let name = this.getSong.al.hasOwnProperty('name') ? this.getSong.al.name : '';
            let picUrl = this.getSong.al.hasOwnProperty('picUrl') ? this.getSong.al.picUrl : '';

            let arName = this.getSong.ar[0] ? this.getSong.ar[0].name : '';
            return { name, picUrl, arName };
        },
    },
    methods: {
        //循环播放
        loop() {
            if (this.currentIndex >= this.playlist.length - 1) {
                this.$store.commit('player/setCurrentIdx', 0);
            } else {
                this.$store.commit('player/setCurrentIdx', this.currentIndex + 1)
            }
        },
        //单曲播放
        one() {
            //在这里添加loop属性只能在后一次才能生效,而且添加后ended事件就不会被触发
            // 让播放时间回到0
            this.$refs.audio.currentTime = 0;
            this.$refs.audio.play()
        },
        //随机播放
        suiji() {
            if (this.playlist.length > 0) {
                let random = Math.floor(Math.random() * this.playlist.length);
                this.$store.commit('player/setCurrentIdx', random);
                this.$refs.audio.pause();
                this.isPlay = false
                this.prograssPlay();
            }
        },
        //播放完毕后，播放下一首
        ended() {
            let icoFn = this.ico[this.icoIdx]
            this[icoFn]()
        },
        handlePlay() {
            if (this.getSong.url == null) { alert('暂无歌曲可播放'); return }
            if (this.isPlay) {
                this.$refs.audio.pause();
                this.isPlay = false;
                //移除计时器
                clearInterval(this.timer);
            } else {
                this.prograssPlay();
            }
        },
        prograssPlay() {
            if (this.timer) {
                clearInterval(this.timer)
            }
            this.$nextTick(() => { this.$refs.audio.play(); })
            this.isPlay = true
            //开启一个计时器，每秒改变进度条
            this.timer = setInterval(() => {
                let newPercent = this.$refs.audio.currentTime * 100 / this.getSong.time * 1000;
                this.$refs.proCtl.style.left = newPercent + '%';
                this.$refs.proPlay.style.width = newPercent + '%';
                //当前播放的时间
                this.cTime = this.$refs.audio.currentTime * 1000;
                if (newPercent >= 100) {
                    this.isPlay = false;
                }

            }, 1000)
        },
        // 滑块点击时
        movebegin() { this.move = true; this.clickmove = true; },
        // 滑块松开时
        moveover() {
            this.move = false;
            if (this.clickmove) {
                let newPercent = (this.mouseStartX / this.progressLength) * 100;
                let a = newPercent / 100 * this.getSong.time / 1000;

                //滑块松开后判断是否有可播放的歌曲
                if (this.getSong.url == null) return;
                this.$refs.audio.currentTime = a;
            }
            this.clickmove = false;
        },
        // 滑块拖拽时
        movestart(e) {
            if (this.move) {
                this.mouseStartX = e.clientX - this.startLeft;
                this.progressLength = this.$refs.prograss.clientWidth;
                let newPercent = (this.mouseStartX / this.progressLength) * 100;
                if (newPercent <= 100) {
                    this.$refs.proCtl.style.left = newPercent + '%';
                    this.$refs.proPlay.style.width = newPercent + '%';
                } else {
                    this.moveover();
                }
            }
        },
        //点击进度条
        movedown(e) {

            //用点击位置减去播放原点位置，就是当前播放条的宽度
            this.mouseStartX = e.clientX - this.startLeft;
            //获取总播放条宽度，除以100算出宽度的%单位
            this.progressLength = this.$refs.prograss.clientWidth;
            let newPercent = (this.mouseStartX / this.progressLength) * 100;
            if (newPercent <= 100) {
                this.$refs.proCtl.style.left = newPercent + '%';
                this.$refs.proPlay.style.width = newPercent + '%';
            } else {
                this.moveover();
            }

            //排除特殊情况，当播放路径不存在时 return
            if (this.getSong.url == null) { return }
            //总长度*百分长度 * （总时长秒数/总长度）
            let a = newPercent / 100 * this.getSong.time / 1000;
            this.$refs.audio.currentTime = a;
            //点击进度条并播放
            this.prograssPlay();
        },
        changeIco() {
            if (this.icoIdx >= 2) {
                this.icoIdx = 0;
                return;
            }
            this.icoIdx += 1;

        },
        //播放列表删除歌曲
        delSong(index) {
            this.$store.dispatch('player/delSong', index);
            //属于中断播放，不会触发ended事件 下一首调用对应的播放
            // this.ended();

        },
        //点击列表项播放
        changePlaySong(idx) {
            this.$store.commit('player/setCurrentIdx', idx);

        }
    },
    mounted() {
        //歌曲url不再挂载时请求，通过store actions获取
        // this.$store.dispatch('player/getSong');

        //获取当前播放控件的原点位置，在播放器拖动时不会改变
        this.startLeft = this.$refs.proCtl.getBoundingClientRect().left;

    },
    beforeDestroy() {
        clearInterval(this.timer);
    }
}
</script>
<style scoped lang="less">
.playerCtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    .showCtl {
        position: absolute;
        width: 100%;
        height: 20px;
        top: -10px;
        cursor: pointer;

        a {
            position: absolute;
            right: 15px;
            top: -5px;
            padding-top: 5px;
            display: flex;
            justify-content: center;
            width: 52px;
            height: 67px;
            background-image: url(./images/playbar.png);
            background-position: 0 -380px;

            i {
                width: 18px;
                height: 18px;
                background-image: url(./images/playbar.png);
                background-position: -100px -380px;
            }
        }

        .ct {
            position: absolute;
            right: 0;
            top: 8px;
            width: 15px;
            height: 54px;
            background-repeat: repeat-x;
            background-image: url(./images/playbar.png);
            background-position: -52px -393px;
        }
    }

    .player {
        height: 47px;
        box-sizing: border-box;
        margin-right: 67px;
        background-image: url(./images/playbar.png);
        background-position: 0 0;
        background-repeat: repeat-x;

        .ctls {
            width: 1047px;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 47px;

            .btns {
                display: flex;
                justify-content: center;
                align-items: center;

                a {
                    display: inline-block;
                    width: 28px;
                    height: 28px;
                    margin: 5px 8px 0 0;
                    background-image: url(./images/playbar.png);
                }

                .s-pre {
                    background-position: 0 -130px;

                    &:hover {
                        background-position-x: -30px;
                    }
                }

                a.s-play {
                    width: 36px;
                    height: 36px;
                    background-position: 0 -204px;

                    &:hover {
                        background-position-x: -40px;
                    }
                }

                .s-next {
                    background-position: -80px -130px;

                    &:hover {
                        background-position-x: -110px;
                    }
                }
            }

            .al {
                position: relative;
                width: 35px;
                height: 34px;
                margin: 6px 15px 0 0;

                img {
                    width: 34px;
                }

                .mask {
                    position: absolute;
                    left: 0;
                    top: 0;
                    display: block;
                    width: 34px;
                    height: 34px;
                    background-image: url(./images/playbar.png);
                    background-position: 0 -80px;
                }
            }

            .flag {
                width: 581px;

                .f-t {
                    height: 28px;
                    display: flex;
                    align-items: center;
                    color: #e8e8e8;

                    a {
                        color: inherit;
                    }

                    .mv {
                        width: 19px;
                        height: 17px;
                        margin: 0 6px;
                        margin-left: 3px;
                        display: inline-block;
                        background-image: url(./images/playbar.png);
                        background-position: 0 -57px;

                        &:hover {
                            background-position-x: -20px;
                        }
                    }

                    .ar {
                        color: #9b9b9b;
                    }

                    .link {
                        display: inline-block;
                        width: 14px;
                        height: 15px;
                        margin-left: 13px;
                        background-position: -110px -103px;
                        background-image: url(./images/playbar.png);

                        &:hover {
                            background-position-x: -130px;
                        }
                    }
                }

                .f-b {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;

                    .pro-bar {
                        position: relative;
                        width: 466px;
                        height: 9px;
                        background-position: right 0px;
                        background-image: url(./images/statbar.png);

                        .bar {
                            position: absolute;
                            top: 0;
                            left: 0;
                            background-image: url(./images/statbar.png);
                            height: 9px;
                        }

                        .pl-bar {
                            background-position: left -66px;
                        }

                        .cache-bar {
                            background-position: right -30px;
                        }

                        .pl-ico {
                            position: absolute;
                            left: 0;
                            top: -7px;
                            width: 22px;
                            height: 24px;
                            margin-left: -11px;
                            background-image: url(./images/ply_btn.png)
                        }
                    }

                    span {
                        color: #797979;

                        i {
                            color: #a1a1a1;
                        }
                    }
                }
            }

            .open-fl {

                .o-ico {
                    display: inline-block;
                    width: 25px;
                    height: 25px;
                    margin: 11px 2px 0 0;
                    background-image: url(./images/playbar.png);
                }

                .ly {
                    background: url(./images/ly.png) no-repeat 0 0;
                }

                .inc {
                    background-position: -88px -163px;
                }

                .sr {
                    background-position: -114px -163px;
                }
            }

            .ctr-fl {
                display: flex;
                align-items: center;

                .ctr-ico {
                    display: inline-block;
                    width: 25px;
                    height: 25px;
                    margin: 11px 2px 0 0;
                    background-image: url(./images/playbar.png);
                }

                .vs {
                    background-position: -2px -248px;
                }

                .suiji {
                    background-position: -66px -248px;
                }

                .one {
                    background-position: -93px -344px;
                }

                .loop {
                    background-position: -3px -344px;
                }

                .lis {
                    display: block;
                    width: 38px;
                    padding-left: 21px;
                    background-position: -42px -68px;
                    text-align: center;
                    color: #666;
                    text-shadow: 0 1px 0 #080707;
                    line-height: 27px;
                }
            }
        }

        .showList {
            display: none;
            position: absolute;
            bottom: 44px;
            right: 5%;
            width: 400px;
            height: 200px;
            background: linear-gradient(45deg, #333, #222);
            border-radius: 5px;
            padding: 10px;

            .listHd {
                width: 100%;
                height: 20px;
                color: #ccc;
                font-size: 16px;
            }

            ul {
                width: 100%;
                height: 180px;
                overflow-y: scroll;

                li {
                    display: flex;
                    justify-content: space-between;
                    color: #fff;
                    font-size: 14px;
                    padding: 5px;

                    &.active {
                        background-color: #000;
                    }

                    &:hover {
                        background-color: #333;
                    }

                    .delSong {
                        display: inline-block;
                        width: 13px;
                        height: 13px;
                        margin-left: 15px;
                        background-image: url(./images/playlist.png);
                        background-position: -51px 0;
                        cursor: pointer;

                        &:hover {
                            background-position-y: -20px;
                        }
                    }
                }
            }
        }
    }
}
</style>