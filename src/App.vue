<!--
 * @Description: 
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-09-09 11:31:36
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-02 13:44:18
-->
<template>
  <div id="app">
    <div>
      <router-view />
      <van-overlay :show="show" class-name="transparent" />
    </div>
    <TabBar v-if="$route.meta.showTab"></TabBar>
    <van-overlay :show="showGuide"></van-overlay>
  </div>
</template>
<script>
import TabBar from "@/components/TabBar";
import { Overlay } from "vant";
export default {
  name: "App",
  components: {
    TabBar,
    [Overlay.name]: Overlay
  },
  data() {
    return {
      showGuide: false,
      show: false
    };
  }
};
</script>
<style lang="scss">
@import "./assets/reset.scss";
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  height: 100%;
  font-family: -apple-system, Arial, Helvetica, Microsoft YaHei, Tohoma,
    sans-serif;
}
.transparent {
  background-color: transparent
}
</style>
