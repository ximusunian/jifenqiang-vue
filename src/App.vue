<!--
 * @Description: 
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-09-09 11:31:36
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-12 17:46:53
-->
<template>
  <div id="app">
    <div>
      <router-view />
    </div>
    <TabBar v-if="$route.meta.showTab"></TabBar>
  </div>
</template>
<script>
import TabBar from "@/components/TabBar";
import Checkers from "@/utils/Checkers"
export default {
  name: "App",
  components: {
    TabBar,
  },
  created() {
    window["setToken"] = function(data) {
      localStorage.setItem("token", data);
      location.reload()
    }
    if(Checkers.isApp()) {
      localStorage.setItem("isApp","true")
    } else {
      localStorage.setItem("isApp","false")
    }
  },
  watch: {},
  data() {
    return {};
  },
  methods: {}
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
</style>
