<!--
 * @Description: 绑定微信
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-26 13:20:41
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-11 20:22:49
-->
<template>
  <div id="bindWeChat">
    <navBar title="绑定微信"></navBar>

    <div class="container">
      <p>为保证收益及时提现</p>
      <p style="margin-top: 0.2rem">请绑定微信</p>
      <div class="bind-btn" @click="bindWeChat">绑定微信</div>
    </div>

  </div>
</template>

<script>
import navBar from "@/components/NavBar";
export default {
  name: "bindWeChat",
  data() {
    return {};
  },
  components: {
    navBar
  },
  watch: {},
  created() {
    let _this = this
    window["successBind"] = function(data) {
      _this.successBind(data)
    }
  },
  mounted() {},
  methods: {
    bindWeChat() {
      this.$api.bindWeChat().then(res => {})
      // window.webkit.messageHandlers.wxLogin.postMessage({})
    },
    successBind(data) {
      let state = JSON.parse(data)
      if(state.state == "true") {
        this.$router.replace("/")
      }
    }
  }
};
</script>

<style scoped lang="scss">
#bindWeChat {
  .container {
    margin-top: 3.5rem;
    text-align: center;
    color: $color33;
    font-size: 0.75rem;
    .bind-btn {
      width: 88%;
      height: 1.2rem;
      text-align: center;
      line-height: 1.2rem;
      font-size: 0.45rem;
      border-radius: 1.2rem;
      background-color: #18AD1A;
      color: #FFFFFF;
      margin: 2rem auto 0;
    }
  }
}
</style>
