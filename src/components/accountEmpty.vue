<!--
 * @Description: 收益明细空状态
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-09-24 17:35:15
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-09 09:19:08
-->
<template>
   <div id="accountEmpty">
     <van-empty
        class="custom-image"
        image="https://mobile.bktt1.top/mobile/images/noting-bg.png"
        description="好像什么东西也没有..."
      />
   </div>
</template>

<script>
// import emptyImg from "@/assets/images/noting-bg.png";
import { Empty } from "vant";
export default {
  name: "accountEmpty",
  data() {
    return {
      // emptyImg: emptyImg
    }
  },
  components: {
    [Empty.name]: Empty
  },
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss">
#accountEmpty {
  .van-empty__image {
    width: 3.733rem;
    height: 3.733rem;
  }
}
</style>
