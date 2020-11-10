<!--
 * @Description: 提现成功
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-11-07 09:17:10
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-09 09:24:28
-->
<template>
   <div id="withdrawalSuccess">
      <img src="http://img.bktt1.top/mobile/images/success.png" />
      <div class="title">提现审核中</div>
      <div class="des">预计一个工作日内打款</div>
      <div class="btn" @click="backIndex">返回</div>
   </div>
</template>

<script>
export default {
  name: "withdrawalSuccess",
  data() {
    return {}
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    backIndex() {
      this.$router.replace("/")
    }
  }
}
</script>

<style scoped lang="scss">
#withdrawalSuccess {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 1.2rem;
    height: 1.2rem;
    margin-top: 4rem;
  }
  .title, .des {
      color: darkgray;
      font-size: 0.45rem;
      margin-top: 0.3rem;
    }
    .btn {
      width: 80%;
      height: 1rem;
      text-align: center;
      line-height: 1rem;
      color: #FFFFFF;
      font-size: 0.35rem;
      margin-top: 1rem;
      border-radius: 1rem;
      background-image: linear-gradient(#FFC388, #F48E20);
    }
}
</style>
