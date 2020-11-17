<!--
 * @Description: 
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-09-09 11:31:36
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-17 14:35:52
-->
<template>
  <div id="app">
    <div>
      <router-view />
    </div>
    <van-overlay
      :show="netWork"
      @click="closeBox"
    >
      <div class="network_box">
        <div class="box">
          <div class="top">
            <img src="@/assets/images/net_close.png" class="close_img" @click="closeBox"/>
          </div>
          <img src="@/assets/images/net_logo.png" class="new_logo" />
          <div class="tips">
            <p>需要开启助手才能做任务</p>
            <p>如打开失败，请重新安装</p>
          </div>
          <div class="operation">
            <span class="download" @click="download">重新下载</span>
            <span class="wake" @click="openApp">打开助手</span>
          </div>
        </div>
      </div>
    </van-overlay>
    <TabBar v-if="$route.meta.showTab"></TabBar>
  </div>
</template>
<script>
import {Overlay} from "vant"
import TabBar from "@/components/TabBar";
import Checkers from "@/utils/Checkers"
export default {
  name: "App",
  components: {
    TabBar,
    [Overlay.name]: Overlay,
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
    return {
      netWork: this.$store.state.netWork,
      downloadUrl: ""
    };
  },
  computed: {
    netWorkStatus() {
      return this.$store.state.network
    }
  },
  watch: {
    netWorkStatus: function(newData, oldData) {
      this.netWork = newData
      this.$api.getInstallUrl().then(res => {
        if(res.success) {
          this.downloadUrl = res.result
        }
      })
    }
  },
  methods: {
    closeBox() {
      this.$store.commit("setNetWork", false)
    },
    download() {
      window.location = this.downloadUrl
    },
    openApp() {
      window.location = "com.BoyEye.cn:/"
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
.network_box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .box {
    width: 74%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.453rem 0.426rem 0.666rem;
    background-color: #ffffff;
    border-radius: 0.2rem;
    .top {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
    .close_img {
      width: 0.53rem;
      height: 0.53rem;
      right: 0.2rem;
    }
    .new_logo {
      width: 2.4rem;
      height: 2.4rem;
      margin-top: 0.48rem;
    }
    .tips {
      color: #333;
      font-size: 0.426rem;
      margin-top: 0.933rem;
    }
    .operation {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 0.8133rem;
      font-size: 0.48rem;
      span {
        width: 3.2rem;
        height: 1rem;
        border-radius: 1rem;
        line-height: 1rem;
        text-align: center;
      }
      .download {
        color: #F4370F;
        border: 1px solid #F4370F;
      }
      .wake {
        color: white;
        background-image: linear-gradient(#FB6823, #F4370F);
      }
    }
  }
}
</style>
