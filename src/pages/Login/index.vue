<template>
    <div class="loginContainer">
        <form @submit="toLogin">
            <p>
                <label for="tel">
                    电话号码：
                    <select name="" id="" v-model="loginInfo.ctcode">
                        <option value="86">86</option>
                        <option value="110">110</option>
                    </select>
                    <input v-model.trim="loginInfo.phone" type="text" name="" id="tel" minlength="11" maxlength="11"
                        required />
                </label>
            </p>
            <p>
                <label for="verCode">
                    <input type="text" name="" id="verCode" v-model.trim="verCode" />
                    <button @click="getVerCode" type="button">获取验证码<i v-if="step<waitTime">（{{step}}）</i></button>
                </label>
            </p>
            <div><button type="submit">登录</button></div>
        </form>
    </div>
</template>
<script>
import { loginForPhone, reqVerCode, reqVerfiy } from '@/api';
export default {
    name: 'Login',
    data() {
        return {
            loginInfo: {
                phone: '',
                ctcode: 86,
            },
            verCode: '',
            timer: null,
            step: 60,
            waitTime: 60,
            //验证码状态
            isVer: false
        }
    },
    methods: {
        regTelphoe() {
            //判断手机号码是否正确
            let reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
            if (!this.loginInfo.phone || !this.loginInfo.phone.match(reg)) {
                alert('号码输入不正确');
                return false;
            }
            return true;
        },
        async getVerCode() {
            console.log('getVercode')
            if (!this.regTelphoe()) {
                return;
            }
            //点击获取验证码时开启一个计时器，让step逐渐减一。当step为0时移除计时器
            if (this.timer) {
                //说明正在倒计时，不能触发
                console.log('isGetVerCode....wait....');
                alert('wait...getVercodeing')
            } else {
                this.timer = setInterval(() => {
                    if (this.step == 0) {
                        clearInterval(this.timer);
                        this.step = this.waitTime;
                        this.timer = null;
                        return;
                    }
                    this.step -= 1;
                }, 1000);

                //通过api获取验证码
                let res = await reqVerCode(this.loginInfo);
                console.log(res)
            }
        },
        async toLogin() {
            console.log('tologin')
            //验证验证码是否填写
            if (!this.verCode) { alert('缺少验证码'); return; }
            //整理参数发送请求
            let params = this.loginInfo;
            params.captcha = this.verCode;
            let ver = await reqVerfiy(params);
            this.isVer = ver.data;
            console.log('sumbit')
            if (this.isVer) {
                let telParams = {
                    captcha: this.verCode,
                    phone: this.loginInfo.phone
                }
                let loginData = await loginForPhone(telParams);
                console.log(loginData)
                //将返回的登录数据存放到本地
                localStorage.setItem('userInfo', JSON.stringify(loginData));
            } else {
                alert('验证码不正确')
            }
        }
    },
}
</script>
<style lang="less" scoped>
.loginContainer {
    margin: 0 auto;
    width: 80%;
    background-color: #fff;
    text-align: center;
}
</style>