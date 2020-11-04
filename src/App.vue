<!--
 * @Description: 
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-09-09 11:31:36
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-04 18:31:07
-->
<template>
  <div id="app">
    <div>
      <router-view />
      <van-overlay :show="show && $route.meta.showInstall" class-name="transparent" @click="showPop" />
      <van-overlay :show="isShowPop && $route.meta.showInstall" @click="isShowPop = false">
        <div class="container-tips">
          <div class="box">
            <img src="@/assets/images/set_logo.png" class="set_logo" />
            <p class="txt">为了保障您能切实领取到收益</p>
            <p
              style="color: #333333;font-size: 0.32rem;font-weight: 600;margin-top: 0.2rem;"
            >
              需占用几秒钟验证设备
            </p>
            <div class="btn" @click="toCertification">去认证</div>
          </div>
        </div>
      </van-overlay>
    </div>
    <TabBar v-if="$route.meta.showTab"></TabBar>
    <!-- <van-overlay :show="showGuide"></van-overlay> -->
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
  created() {
    let token = this.$route.query.token;
    if(token == undefined || token == null || token == "") {
      // this.show = true
    } else {
      localStorage.setItem("token", token)
      this.show = false
    }
  },
  watch: {
    // token: {
    //   handler(newValue, oldValue) {
    //     if(newValue == undefined || newValue == null || newValue == "") {
    //       this.show = true
    //     } else {
    //       localStorage.setItem("token", newValue)
    //       this.show = false
    //     }
    //   },
    //   immediate:true
    // }
  },
  data() {
    return {
      token: this.$route.query.token,
      showGuide: false,
      show: false,
      isShowPop: false
    };
  },
  methods: {
    showPop() {
      this.isShowPop = true;
    },
    toCertification() {
      let url =  `http://${window.location.host}/#/certificationBackPage`
      this.isShowPop = false
      window.webkit.messageHandlers.getUDID.postMessage(url)
    }
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
  background-color: transparent;
}
.container-tips {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .box {
    width: 55%;
    text-align: center;
    padding: 0 0.7rem 0.7rem;
    background-color: #ffffff;
    border-radius: 0.2rem;
  }
  .set_logo {
    width: 1.2rem;
    height: 1.2rem;
    margin-top: 0.48rem;
  }
  .txt {
    color: #333333;
    font-size: 0.32rem;
    font-weight: 600;
    margin-top: 0.4rem;
  }
  .btn {
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    background-color: #ff6427;
    border-radius: 0.1rem;
    font-size: 0.36rem;
    margin-top: 0.6rem;
    color: #ffffff;
  }
}
</style>
