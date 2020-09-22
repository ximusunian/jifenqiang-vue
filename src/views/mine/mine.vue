<!--
 * @Description: 我的
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-09 13:47:04
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-09-22 13:13:52
-->
<template>
  <div id="mine">
    <header>
      <div class="info">
        <img src="@/assets/head_img.png" />
        <span>新手101154</span>
      </div>
      <img src="@/assets/icon_more.png" />
    </header>
    <div class="my-container">
      <div class="my-assets">
        <div class="my-assets-first">
          <div class="my-assets-first-left">
            <div class="text">今日收入</div>
            <div class="number today-earnings">￥13.00</div>
          </div>
           <div class="withdrawal-btn">提现</div>
        </div>
        <div class="my-assets-second">
          <div><span class="text">余额</span><span class="number my-balance">￥10.00</span></div>
          <div><span class="text">累计收入</span><span class="number my-accumulated-income">￥10.00</span></div>
        </div>
      </div>
      <section>
        <van-cell-group>
          <van-cell class="radius-top" title="账户明细" is-link >
            <template #icon>
              <img src="@/assets/purse.png" class="cell-icon" />
            </template>
          </van-cell>
          <van-cell title="帮助中心" is-link />
          <van-cell class="radius-bottom" title="联系我们" is-link />
        </van-cell-group>
      </section>
      
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup} from "vant";
export default {
  name: "mine",
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
  #mine {
    font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,"sans-serif";
    height: 100vh;
    background: $localBg;
    header {
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      -webkit-justify-content: space-between;
      align-items: center;
      -webkit-align-items: center;
      background-image: linear-gradient(to right, #FF8728 , #FF5A16);
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
          color: #FFFFFF;
          font-size: 0.373rem;
        }
      }
      >img {
        width: 0.253rem;
        height: 0.453rem;
      }
    }
    .my-container {
      padding: 0 0.4rem 2rem;
    }
    .my-assets {
      padding: 0.4rem 0.51rem;
      background: #FFF;
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
          color: #FFF;
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
      // align-items: center;
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
    .cell-icon {
      width: 0.733rem;
      height: 0.733rem;
    }
  }
</style>>