<!--
 * @Description: 证书安装成功
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-25 19:14:57
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-09-25 19:31:16
-->
<template>
  <div id="installSuccess">
    <img src="@/assets/images/success.png" />
    <p>验证成功</p>
    <p style="margin-top: 0.25rem">可以继续开始任务了</p>
    <div class="btn" @click="toApp">继续赚钱</div>
  </div>
</template>

<script>
export default {
  name: "installSuccess",
  data() {
    return {
      openAppUrl: ""
    };
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    toApp() {
      window.location = this.openAppUrl
    }
  }
};
</script>

<style scoped lang="scss">
#installSuccess {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 1.6rem;
    height: 1.6rem;
    margin-top: 2rem;
    margin-bottom: 0.4rem;
  }
  p{
    color: darkgray;
    font-size: 0.4rem;
  }
  .btn {
    width: 85%;
    height: 1.2rem;
    text-align: center;
    line-height: 1.2rem;
    color: #ffffff;
    font-size: 0.45rem;
    margin-top: 1.5rem;
    border-radius: 1.2rem;
    background-image: linear-gradient(#ffc388, #f48e20);
  }
}
</style>
