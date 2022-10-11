<template>
  <div>
    <MyHeader />
    <router-view></router-view>
    <MyFooter />
    <Player />
  </div>
</template>

<script>
import MyHeader from '@/components/Header';
import MyFooter from '@/components/Footer';
import Player from '@/components/Player';

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
    Player
  },
  //页面挂载时，在本地数据获取登录用户数据
  mounted() {
    console.log('app mounted');
    let info = JSON.parse(localStorage.getItem('userInfo'));
    console.log(typeof info)
    if (info) {
      this.$store.dispatch('login/renewState', info);
      console.log('end')
    }
  }
}
</script>

<style>

</style>
