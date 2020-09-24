<!--
 * @Description: NavBar
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-09-24 16:27:40
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-09-24 16:39:29
-->
<template>
   <div id="navBar">
    <van-sticky>
      <van-nav-bar
        :title="title"
        left-arrow
        @click-left="onBack"
      />
    </van-sticky>
  </div>
</template>

<script>
import { Sticky, NavBar } from 'vant';
export default {
  name: "navBar",
  components: {
    [Sticky.name]: Sticky,
    [NavBar.name]: NavBar,
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {

    }
  },
  watch: {},
  mounted() {},
  methods: {
    onBack() {
      this.$router.back()
    },
  }
}
</script>

<style scoped lang="scss">
.van-nav-bar__title {
  font-weight: normal;
}
</style>
