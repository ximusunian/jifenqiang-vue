<!--
 * @Description: 账户信息
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-24 16:31:48
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-07 15:33:14
-->
<template>
  <div id="userInfo">
    <navBar title="账户信息"></navBar>

    <van-cell-group>
      <van-cell>
        <template #title>
          <div class="cell-left">
            <img :src="userInfo.thumb != null ? userInfo.thumb : defaultHeaderImg" />
            <span class="username">{{userInfo.nickname}}</span>
          </div>
        </template>
      </van-cell>
      <van-cell title="用户ID">
        <template #right-icon>
          <div class="cell-right">
            <span class="user-id">{{userInfo.id}}</span>
            <span class="copy-btn" @click="copyId">复制</span>
          </div>
        </template>
      </van-cell>
      <van-cell title="绑定手机" :value="userInfo.phoneNumber == null ? '未绑定' : userInfo.phoneNumber" />
      <van-cell title="绑定微信" :value="userInfo.nickname == null ? '未绑定' : userInfo.nickname" />
    </van-cell-group>
  </div>
</template>

<script>
import navBar from "@/components/NavBar";
import defaultHeaderImg from "@/assets/images/head_img.png";
import Clipboard from "clipboard";
import { Cell, CellGroup, Toast } from "vant";
export default {
  name: "userInfo",
  data() {
    return {
      userInfo: {},
      defaultHeaderImg
    };
  },
  components: {
    navBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Toast.name]: Toast,
  },
  watch: {},
  created() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"))
  },
  mounted() {},
  methods: {
    copyId() {
      let _this = this
      let clipboard = new Clipboard(".copy-btn", {
        text:() => {
          return _this.userInfo.id
        }
      });
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
