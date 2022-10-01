<template>
    <!-- 播放条 -->
    <div class="playerCtn">
        <div class="showCtl">
            <a href="#"><i></i></a>
            <div class="ct"></div>
        </div>
        <div class="player">
            <div class="ctls">
                <div class="btns">
                    <a href="#" class="s-pre"></a>
                    <a href="#" class="s-play"></a>
                    <a href="#" class="s-next"></a>
                </div>
                <div class="al">
                    <img src="./images/playImg.jpg" alt="">
                    <a class="mask" href="#"></a>
                </div>
                <div class="flag">
                    <div class="f-t">
                        <a href="#">Faded</a>
                        <a href="#" class="mv"></a>
                        <span class="ar">Alan Walker</span>
                        <a href="#" class="link"></a>
                    </div>
                    <div class="f-b">
                        <div class="pro-bar">
                            <div class="pl-bar bar"></div>
                            <div class="cache-bar bar"></div>
                            <div class="pl-ico"></div>
                            <div class="cur"></div>
                        </div>
                        <span><i>02:41</i>/03:48</span>
                    </div>
                </div>
                <div class="open-fl">
                    <a href="#" class="o-ico ly"></a>
                    <a href="#" class="o-ico inc"></a>
                    <a href="#" class="o-ico sr"></a>
                </div>
                <div class="ctr-fl">
                    <a href="#" class="ctr-ico vs"></a>
                    <a href="#" class="ctr-ico suiji"></a>
                    <a href="#" class="lis ctr-ico">19</a>
                </div>
            </div>
            <div class="showList">
                <div class="listHd"></div>
                <ul>
                    <li>
                        <div class="lf"></div>
                        <div class="rt"></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Player'
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
                            width: 50px;
                            background-position: left -66px;
                        }

                        .cache-bar {
                            width: 100px;
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
    }
}
</style>