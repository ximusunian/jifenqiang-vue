<!--
 * @Description: 账户信息
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-24 16:31:48
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-09-24 17:25:27
-->
<template>
  <div id="userInfo">
    <navBar title="账户信息"></navBar>

    <van-cell-group>
      <van-cell>
        <template #title>
          <div class="cell-left">
            <img src="https://thirdwx.qlogo.cn/mmopen/vi_32/tM9JJ9mpVp4PuO35iaLcUVWJxlsYIG0oFhAlg7HNZJmuBlBsBtdpxCffeNQHAPn0PNIBs0XLf06gvgNFXfsnJnQ/132" />
            <span class="username">溪木素年</span>
          </div>
        </template>
      </van-cell>
      <van-cell title="用户ID">
        <template #right-icon>
          <div class="cell-right">
            <span class="user-id">100158</span>
            <span class="copy-btn" data-clipboard-action="copy" data-clipboard-text="100158" @click="copyId">复制</span>
          </div>
        </template>
      </van-cell>
      <van-cell title="绑定手机" value="18256049895" />
      <van-cell title="绑定微信" value="溪木素年" />
    </van-cell-group>
  </div>
</template>

<script>
import navBar from "@/components/NavBar";
import Clipboard from "clipboard";
import { Cell, CellGroup, Toast } from "vant";
export default {
  name: "userInfo",
  data() {
    return {};
  },
  components: {
    navBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Toast.name]: Toast,
  },
  watch: {},
  mounted() {},
  methods: {
    copyId() {
      let clipboard = new Clipboard(".copy-btn");
      clipboard.on("success", function() {
        Toast("已复制到剪切板");
      });
      clipboard.on("error", function() {
        Toast("复制失败");
      });
    }
  }
};
</script>

<style scoped lang="scss">
#userInfo {
  background: #f2f3f4;
  height: 100vh;
  .cell-left {
    display: flex;
    align-items: center;
    img {
      width: 1.334rem;
      height: 1.334rem;
      border-radius: 1.334rem;
    }
    .username {
      margin-left: 0.4rem;
    }
  }
  .cell-right {
    display: flex;
    align-items: center;
    .user-id {
      color: #969799;
    }
    .copy-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.2rem;
      height: 0.6rem;
      border-radius: 0.09rem;
      color: #ED7840;
      font-size: 0.3rem;
      border: 1px solid #FDB795;
      text-align: center;
      margin-left: 0.3rem;
    }
  }
  .van-cell {
    padding: 0.4rem 0.42667rem;
  }
  .van-cell__title {
    font-size: 0.4rem;
  }
  .van-hairline--top-bottom::after {
      border-width: 0.02667rem 0;
      border-top: 0;
  }
}
</style>
