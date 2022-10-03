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
  }
}
</script>

<style>

</style>
