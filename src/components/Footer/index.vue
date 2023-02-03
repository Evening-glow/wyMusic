<template>
    <!-- 底部 -->
    <footer>
        <div class="footerContainer">
            <div class="links">
                <ul>
                    <li><a href="#" class="firstLink">服务条款</a></li>
                    <li><a href="#">隐私政策</a></li>
                    <li><a href="#">儿童隐私政策</a></li>
                    <li><a href="#">版权投诉</a></li>
                    <li><a href="#">投资者关系</a></li>
                    <li><a href="#">广告合作</a></li>
                    <li><a href="#">廉正举报</a></li>
                    <li><a href="#" class="lastLink">联系我们</a></li>
                </ul>
                <div class="licenceLinks">
                    <p><a href="#">网易公司版权所有©1997-2022</a><a href="#">&nbsp;&nbsp;杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</a>
                    </p>
                    <p><a href="#">粤B2-20090191-18 工业和信息化部备案管理系统网站</a><a href="#">&nbsp;&nbsp;浙公网安备 33010902002564号</a>
                    </p>
                    <p><a href="#">互联网宗教信息服务许可证：浙（2022）0000120</a><a
                            href="#">&nbsp;&nbsp;监督举报邮箱：51jubao@service.netease.com</a></p>
                </div>
            </div>
            <div class="footerEnter">
                <ul>
                    <li>
                        <a href="#">
                            <span class="enterImg" :style="{backgroundImage:`url(${img1})`}"
                                style="--x:50px;--y:95;"></span>
                            <span class="enterText special" :style="{backgroundImage:`url(${img2})`}"
                                style="--y:33px;"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="enterImg" :style="{backgroundImage:`url(${img1})`}"
                                style="--x:50px;--y:451px;"></span>
                            <span class="enterText" :style="{backgroundImage:`url(${img2})`}" style="--y:-87px"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="enterImg" :style="{backgroundImage:`url(${img1})`}"
                                style='--x:0;--y:0px;'></span>
                            <span class="enterText" :style="{backgroundImage:`url(${img2})`}" style="--y:4px"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="enterImg" :style="{backgroundImage:`url(${img1})`}"
                                style='--x:50px;--y:502px;'></span>
                            <span class="enterText" :style="{backgroundImage:`url(${img2})`}" style="--y:-51px"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="enterImg" :style="{backgroundImage:`url(${img1})`}"
                                style='--x:0;--y:451px;'></span>
                            <span class="enterText" :style="{backgroundImage:`url(${img2})`}" style="--y:-68px"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'MyFooter',
    data() {
        return {
            img1: require('./images/foot_enter_new.png'),
            img2: require('./images/foot_enter_tt.png')
        }
    }
}
</script>
<style lang="less" scoped>
@import '@/less/config.less';

footer {
    width: 100%;
    height: 173px;
    background-color: @global-bg;
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;
    padding-top: 15px;
    border-top: 1px solid #ccc;

    a {
        color: inherit;
    }

    .footerContainer {
        width: 980px;
        height: 115px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .links {
            width: 535px;
            font-size: 12px;
            height: 115px;

            ul {
                display: flex;
                flex-direction: row;
                align-items: center;
                color: #999;
                height: 24px;
                line-height: 24px;

                a {
                    padding: 0 5px;
                    border-right: 1px #999 solid;

                    &.firstLink {
                        padding-left: 0;
                    }

                    &.lastLink {
                        border: none;
                    }
                }
            }

            .licenceLinks {
                color: #666;

                p {
                    height: 24px;
                    line-height: 24px;
                }
            }
        }

        .footerEnter {
            ul {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                a {
                    display: flex;
                    flex-direction: column;
                    // justify-content: center;
                    // align-items: center;
                    width: 60px;
                    height: 70px;
                    margin-left: 15px;

                    .enterImg {
                        width: 50px;
                        height: 45px;
                        background-size: 110px 552px;
                        background-position: var(--x) var(--y);
                        // background-position: 50px 150px;
                    }

                    .enterText {
                        width: 72px;
                        height: 14px;
                        background-size: 180px 139px;
                        // background-position: 0px 0px;
                        background-position: 0px var(--y);

                        &.special {
                            transform: translateX(-15px);
                        }
                    }
                }
            }
        }
    }
}
</style>