<!--
 * @Description: 
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-11-05 09:53:22
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-12 20:03:26
-->
<template>
  <div class="container-tips">
    <div class="box">
      <img :src="img" class="set_logo" />
      <p class="txt">为了保障您能切实领取到收益</p>
      <p style="color: #333333;font-size: 0.45rem;font-weight: 600;margin-top: 0.2rem;">
        需占用几秒钟验证设备
      </p>
      <div class="btn" @click="toCertification">去认证</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "certification",
  data() {
    return {
      img: "https://mobile.bktt1.top/mobile/images/set_logo.png"
    };
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    toCertification() {
      let isAPP = localStorage.getItem("isApp")
      if(isAPP == "true") {
        this.N_getUDID()
      } else {
        this.S_getUDID()
      }
    },
    N_getUDID() {
      let url = `http://${window.location.host}/#/certificationBackPage`;
      this.isShowPop = false;
      window.webkit.messageHandlers.getUDID.postMessage(url);
    },
    S_getUDID() {
      let data= {
        getUDID: ""
      }
      this.$api.getUDID(data).then(res => {
        if(res.flag !== "" && res.flag !== null && res.flag !== undefined) {
          let flag = res.flag
          let url = `https://${window.location.host}/#/certificationBackPage?flag=${flag}`
          this.$router.replace({path: "/certificationBackPage", query: { flag: flag }})
        }
        this.isShowPop = false;
      })
    }
  }
};
</script>

<style scoped lang="scss">
.container-tips {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .box {
    width: 60%;
    text-align: center;
    padding: 0 0.7rem 0.7rem;
    background-color: #ffffff;
    border-radius: 0.2rem;
  }
  .set_logo {
    width: 1.3rem;
    height: 1.3rem;
    margin-top: 0.48rem;
  }
  .txt {
    color: #333333;
    font-size: 0.45rem;
    font-weight: 600;
    margin-top: 0.4rem;
  }
  .btn {
    height: 1.2rem;
    text-align: center;
    line-height: 1.2rem;
    background-color: #ff6427;
    border-radius: 0.2rem;
    font-size: 0.5rem;
    margin-top: 0.6rem;
    color: #ffffff;
  }
}
</style>
