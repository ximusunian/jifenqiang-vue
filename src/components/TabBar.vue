<!--
 * @Description: 底部导航公共组件
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-09 13:23:15
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-09-25 11:09:28
-->
<template>
  <div>
    <van-tabbar v-model="tab_bar" active-color="#FF702C" inactive-color="#666666" :border=false :class="['bar-shadow', isShowSpecial?'safe-area':'']">
      <van-tabbar-item name="index" to="/">
        <span>App试玩</span>
        <template #icon="props">
          <img :src="props.active ? index.active : index.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="enlightening" to="/enlightening">
        <span>收徒赚钱</span>
        <template #icon="props">
          <img :src="props.active ? enlightening.active : enlightening.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="mine" to="/mine">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? mine.active : mine.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
// import localstorage from "@/localstorage";

import index from "@/assets/index.png";
import index_active from "@/assets/index_active.png";
import enlightening_active from "@/assets/enlightening_active.png";
import enlightening from "@/assets/enlightening.png";
import mine_active from "@/assets/mine_active.png";
import mine from "@/assets/mine.png";

export default {
  name: "TabBar",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      index: {
        active: index_active,
        inactive: index
      },
      enlightening: {
        active: enlightening_active,
        inactive: enlightening
      },
      mine: {
        active: mine_active,
        inactive: mine
      },
      isShowSpecial: false
    };
  },
  created() {
    const xSeriesConfig = [
      {
        devicePixelRatio: 3,
        width: 375,
        height: 812
      },
      {
        devicePixelRatio: 3,
        width: 414,
        height: 896
      },
      {
        devicePixelRatio: 2,
        width: 414,
        height: 896
      }
    ]; // h5
    if (typeof window !== "undefined" && window) {
      const isIOS = /iphone/gi.test(window.navigator.userAgent);
      if (!isIOS) this.isShowSpecial = false;
      const { devicePixelRatio, screen } = window;
      const { width, height } = screen;
      this.isShowSpecial = xSeriesConfig.some(
        item =>
          item.devicePixelRatio === devicePixelRatio &&
          item.width === width &&
          item.height === height
      );
    }
  },
  computed: {
    tab_bar: {
      get() {
        return this.$route.name;
      },
      set() {
        
      }
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.van-tabbar {
  height: 1.7rem;
}
.van-tabbar-item__icon img {
  height: 0.55rem;
}
.safe-area {
  padding-bottom: 0.3rem;
}
.bar-shadow {
  box-shadow: 0px 0 0.2rem #E2E2E2;
}
</style>
