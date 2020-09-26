<!--
 * @Description: 我的
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-09 13:47:04
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-09-25 14:26:13
-->
<template>
  <div id="mine">
    <header @click="toUserInfo">
      <div class="info">
        <img src="@/assets/images/head_img.png" />
        <span>新手101154</span>
      </div>
      <img src="@/assets/images/icon_more.png" />
    </header>
    
    <div class="my-container">
      <div class="my-assets">
        <div class="my-assets-first">
          <div class="my-assets-first-left">
            <div class="text">今日收入</div>
            <div class="number today-earnings">￥13.00</div>
          </div>
          <div class="withdrawal-btn" @click="toWithdrawal">提现</div>
        </div>
        <div class="my-assets-second">
          <div>
            <span class="text">余额</span>
            <span class="number my-balance">￥10.00</span>
          </div>
          <div>
            <span class="text">累计收入</span>
            <span class="number my-accumulated-income">￥10.00</span>
          </div>
        </div>
      </div>
      <section>
        <van-cell-group>
          <van-cell class="cell-item radius-top" is-link @click="toAccountDetails">
            <template #title>
              <div class="title">
                <img src="@/assets/images/purse.png" class="cell-icon" />
                <span>账户明细</span>
              </div>
            </template>
          </van-cell>
          <van-cell class="cell-item" is-link @click="toHelpCenter">
            <template #title>
              <div class="title">
                <img src="@/assets/images/help_center.png" class="cell-icon" />
                <span>帮助中心</span>
              </div>
            </template>
          </van-cell>
          <van-cell class="cell-item radius-bottom" title="" is-link>
            <template #title>
              <div class="title">
                <img src="@/assets/images/contact_us.png" class="cell-icon" />
                <span>联系我们</span>
              </div>
            </template>
          </van-cell>
        </van-cell-group>
      </section>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup } from "vant";
export default {
  name: "mine",
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {};
  },
  methods: {
    toUserInfo() {
      this.$router.push("/mine/userInfo")
    },
    toWithdrawal() {
      this.$router.push("/withdrawal")
    },
    toAccountDetails() {
      this.$router.push("/mine/accountDetails")
    },
    toHelpCenter() {
      this.$router.push("/mine/helpCenter")
    }
  }
};
</script>

<style lang="scss" scoped>
#mine {
  font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, "sans-serif";
  min-height: 100vh;
  background: $localBg;
  header {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    align-items: center;
    -webkit-align-items: center;
    background-image: linear-gradient(to right, #ff8728, #ff5a16);
    padding: 0.587rem 0.907rem 1.2rem 0.84rem;
    .info {
      display: flex;
      align-items: center;
      img {
        width: 1.12rem;
        height: 1.12rem;
        border-radius: 50%;
        margin-right: 0.373rem;
      }
      span {
        color: #ffffff;
        font-size: 0.373rem;
      }
    }
    > img {
      width: 0.253rem;
      height: 0.453rem;
    }
  }
  .my-container {
    padding: 0 0.4rem 2.5rem;
  }
  .my-assets {
    padding: 0.4rem 0.51rem;
    background: #fff;
    border-radius: 0.2rem;
    margin-top: -0.64rem;
    &-first {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .today-earnings {
        font-size: 0.533rem;
        margin-top: 0.1rem;
      }
      .withdrawal-btn {
        width: 1.813rem;
        height: 0.867rem;
        color: #fff;
        font-size: 0.373rem;
        text-align: center;
        line-height: 0.867rem;
        border-radius: 0.867rem;
        background: $themeColor;
        margin-bottom: 0.1rem;
      }
    }
    &-second {
      display: flex;
      justify-content: space-between;
      .my-balance {
        font-size: 0.373rem;
      }
      .my-accumulated-income {
        font-size: 0.373rem;
      }
    }
  }
  section {
    margin-top: 0.24rem;
  }
  .van-cell-group {
    border-radius: 0.267rem;
  }
  .van-cell-group::after {
    border: 0;
  }
  .van-cell {
    color: $color33;
    font-size: 0.4rem;
    padding: 0.4rem 0.42667rem;
  }
  .van-cell::after {
    right: 0.42667rem;
  }
  .radius-top {
    border-radius: 0.2rem 0.2rem;
  }
  .radius-bottom {
    border-radius: 0 0 0.2rem 0.2rem;
  }
  .cell-item {
    .title {
      display: flex;
      align-items: center;
      img {
        width: 0.65rem;
        height: 0.65rem;
      }
      span {
        margin-left: 0.3rem;
      }
    }
  }
}
</style>>