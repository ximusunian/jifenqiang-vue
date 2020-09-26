<!--
 * @Description: 收徒赚钱
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-09 13:46:29
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-09-25 14:56:55
-->
<template>
  <div id="enlightening">
    <img src="@/assets/images/invitation_bg.png" class="header-bg" />
    <div class="container">
      <div class="asset-analysis-box">
        <div class="asset-analysis-box-item">
          <span class="item-name">今日收徒</span>
          <span class="item-num">0</span>
        </div>
        <div class="asset-analysis-box-item">
          <span class="item-name">累计收徒</span>
          <span class="item-num">0</span>
        </div>
        <div class="asset-analysis-box-item">
          <span class="item-name">收徒已奖励</span>
          <span class="item-num">0</span>
        </div>
      </div>
      <div class="invitation-step">
        <div class="rule-description">
          <img src="@/assets/images/rule_description.png" />
        </div>
        <p>
          每个徒弟完成1个任务，你得
          <span class="unit_price">0.3</span> 元/任务
        </p>
        <p>每个徒弟均无限奖励，永不封顶</p>
        <div class="step">
          <div class="step-item">
            <img src="@/assets/images/invitation_icon.png" />
            <span>邀请好友</span>
          </div>
          <div class="step-arrow">
            <img src="@/assets/images/step_arrow_icon.png" />
            <span></span>
          </div>
          <div class="step-item">
            <img src="@/assets/images/assignment_icon.png" />
            <span>好友完成任务</span>
          </div>
          <div class="step-arrow">
            <img src="@/assets/images/step_arrow_icon.png" />
            <span></span>
          </div>
          <div class="step-item">
            <img src="@/assets/images/reward_icon.png" />
            <span>你获得奖励</span>
          </div>
        </div>
      </div>
      <div class="invite-btn" @click="toShare">立即收徒</div>
      <div class="invite_tips">
        <span class="tips">Tips</span>
        <span>徒弟违规将会扣除徒弟为师傅带来的收益</span>
      </div>
    </div>
    <!-- 分享 -->
    <van-share-sheet
      v-model="showShare"
      :options="options"
      title="邀请好友 收Ta为徒"
      description="更多收益 一起赚钱"
    />
  </div>
</template>

<script>
import { ShareSheet } from "vant";
import weChat from '@/assets/images/weChat.png';
import friend from '@/assets/images/friend.png';
export default {
  name: "enlightening",
  data() {
    return {
      showShare: false,
      options: [
        { name: '微信', icon: weChat },
        { name: '朋友圈', icon: friend },
      ],
    };
  },
  components: {
    [ShareSheet.name]: ShareSheet
  },
  watch: {},
  mounted() {},
  methods: {
    toShare() {
      this.showShare = true
    }
  }
};
</script>

<style scoped lang="scss">
#enlightening {
  position: relative;
  .header-bg {
    width: 100%;
  }
  .container {
    padding: 0 0.4rem 2.5rem;
    margin-top: -1rem;
    position: relative;
    .asset-analysis-box {
      padding: 0.5rem 0.6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 0 0.2rem #dfdfdf;
      background: #fff;
      border-radius: 0.2rem;
      &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 0.4rem;
        .item-name {
          color: #37255f;
          margin-bottom: 0.2rem;
        }
        .item-num {
          font-family: number;
          color: #f44e4a;
          font-size: 0.5rem;
        }
      }
    }
    .invitation-step {
      padding-bottom: 0.6rem;
      box-shadow: 0 0 0.2rem #dfdfdf;
      margin-top: 0.426rem;
      border-radius: 0.2rem;
      .rule-description {
        display: flex;
        justify-content: flex-end;
        img {
          width: 3.213rem;
          height: 0.626rem;
        }
      }
      p {
        color: #331c64;
        font-size: 0.4rem;
        text-align: center;
        margin-top: 0.4rem;
        span {
          color: #f44e4a;
          font-size: 0.5rem;
        }
      }
      .step {
        display: flex;
        justify-content: space-around;
        margin-top: 0.6rem;
        padding: 0 0.3rem;
        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          img {
            width: 1.093rem;
            height: 1.093rem;
          }
          span {
            color: #7a6e95;
            font-size: 0.38rem;
            margin-top: 0.32rem;
          }
        }
        .step-arrow {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          img {
            width: 0.64rem;
            height: 0.36rem;
          }
          span {
            margin-top: 0.7rem;
          }
        }
      }
    }
    .invite-btn {
      margin-top: 0.6rem;
      width: 100%;
      height: 1.2rem;
      border-radius: 1.2rem;
      background: #ff44aa;
      text-align: center;
      line-height: 1.2rem;
      color: #fff;
      font-size: 0.48rem;
    }
    .invite_tips {
      margin-top: 0.48rem;
      display: flex;
      font-size: 0.38rem;
      color: $color66;
      align-items: center;
      .tips {
        width: 1.453rem;
        height: 0.586rem;
        line-height: 0.586rem;
        margin-right: 0.24rem;
        background: #2cc6e9;
        border-radius: 0.08rem;
        position: relative;
        color: #fff;
        text-align: center;
      }
      .tips::after {
        content: "";
        position: absolute;
        right: -0.18rem;
        top: 0.18rem;
        width: 0;
        height: 0;
        border: 0.098rem solid transparent;
        border-left-color: #2cc6e9;
      }
    }
  }
}
</style>
