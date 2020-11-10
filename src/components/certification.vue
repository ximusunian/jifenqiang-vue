<!--
 * @Description: 
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-11-05 09:53:22
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-09 13:07:35
-->
<template>
  <div class="container-tips">
    <div class="box">
      <img src="http://img.bktt1.top/mobile/images/set_logo.png" class="set_logo" />
      <p class="txt">为了保障您能切实领取到收益</p>
      <p
        style="color: #333333;font-size: 0.32rem;font-weight: 600;margin-top: 0.2rem;"
      >
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
    return {};
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    toCertification() {
      let url = `http://${window.location.host}/#/certificationBackPage`;
      this.isShowPop = false;
      window.webkit.messageHandlers.getUDID.postMessage(url);
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
