<!--
 * @Description: 
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-09-09 11:31:36
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-09-09 17:25:09
-->
<template>
  <div id="app">
    <router-view />
    <TabBar v-if="$route.meta.showTab"></TabBar>
  </div>
</template>
<script>
import TabBar from "@/components/TabBar"
export default {
  name: 'App',
  components: {
    TabBar
  },
}
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
</style>
