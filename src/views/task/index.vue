<!--
 * @Description: 任务详情
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-09-22 09:38:18
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-09-25 14:58:29
-->
<template>
  <div id="task">
    <navBarTask title="任务详情"></navBarTask>
    
    <div class="container">
      <div class="countdown-box">
        <p class="countdown-box-title">抢到任务啦，快去完成吧</p>
        <div class="countdown-box-next">
          <span class="countdown-box-next-num">￥0.50</span>
          <div class="countdown-box-next-clock">
            <img src="@/assets/alarm_clock.gif" class="countdown-box-next-clock-img"/>
            <span class="countdown-box-next-clock-time">剩余55:30</span>
          </div>
        </div>
      </div>
      <div class="steps-box">
        <div class="step">
          <img src="" class="app-logo"/>
          <div class="step-text">
            <p>
              <span class="step-icon">1</span>
              <span>前往App Store 搜索：</span>
              <span class="app-name">小兔快跑</span>
            </p>
            <p>约在第<span class="app-rank">3</span>位，找到该图标应用下载安装</p>
          </div>
          <div class="step-btn" @click="showDownloadPop">如何下载？</div>
        </div>
        <van-divider class="divider"/>
        <div class="step">
          <div class="step-text">
            <p>
              <span class="step-icon">2</span>
              <span>点击开始试玩，体验2分钟</span>
            </p>
            <p class="step-tips">打开应用时，必须“允许网络接入”</p>
          </div>
          <div class="step-btn" @click="showPlayPop">开始试玩</div>
        </div>
        <van-divider class="divider"/>
        <div class="step">
          <div class="step-text">
            <p>
              <span class="step-icon">3</span>
              <span>试玩2分钟后，回本页领取奖励</span>
            </p>
          </div>
          <div class="step-btn disabled">领取奖励</div>
        </div>
      </div>
    </div>

    <!-- 开始任务 -->
    <van-popup v-model="show" round :close-on-click-overlay=false :style="style">
      <div class="popup-box">
        <div class="popup-top">
          <p>返回桌面，打开 AppStore<img src="@/assets/appStore.png" /></p>
          <p>在搜索框内输入 <span class="app-name">塔防游戏</span></p>
        </div>
        <van-divider/>
        <div class="popup-next">
          <img src="" />
          <div>
            <p>请认准图标下载</p>
            <p>约在第 <span class="app-rank">2</span> 位</p>
          </div>
        </div>
        <div class="popup-last" @click="closeDownloadPop">知道了</div>
      </div>
    </van-popup>

    <!-- 试玩失败 -->
    <van-popup v-model="playShow" round :close-on-click-overlay=false :style="style">
      <div class="popup-box">
        <div class="popup-top">
          <p style="font-weight: 600">未检测到应用</p>
          <p style="font-size: 0.373rem">应用下载错误或尚未下载完成</p>
        </div>
        <van-divider/>
        <div class="popup-next">
          <img src="" />
          <div>
            <p>App Store搜索</p>
            <p>约在第 <span class="app-rank">2</span> 位</p>
          </div>
        </div>
        <div class="popup-last" @click="closePlayPop">知道了</div>
      </div>
    </van-popup>

    <!-- 领取成功 -->
    <van-popup v-model="successPopupShow" round :close-on-click-overlay=false :style="style">
      <div class="result-popup">
        <img src="@/assets/gold_coins.png" class="top-img"/>
        <span class="result-tips">完成任务</span>
        <p><span>￥</span>0.80</p>
        <span>已到账</span>
        <div class="operation">
          <img src="@/assets/invited_money.png" @click="showShareSheet"/>
          <img src="@/assets/continue_play.png" @click="continuePlay"/>
        </div>
      </div>
    </van-popup>

    <!-- 领取失败 -->
    <van-popup v-model="errorPopupShow" round :close-on-click-overlay=false :style="style">
      <div class="result-error-popup">
        <p class="result-tips">时间还不够哦~</p>
        <p>还需试玩 <span class="continue-time">2分钟52秒</span></p>
        <img src="@/assets/gold_coins.png" class="app-img"/>
        <img src="@/assets/continue_play_big.png" class="continue-btn" @click="errorContinuePlay"/>
      </div>
    </van-popup>

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
import navBarTask from "@/components/NavBarTask"
import { Divider, Popup, ShareSheet } from "vant"
import weChat from '@/assets/weChat.png';
import friend from '@/assets/friend.png';
export default {
  name: "task",
  components: {
    navBarTask,
    [Divider.name]: Divider,
    [Popup.name]: Popup,
    [ShareSheet.name]: ShareSheet,
  },
  data() {
    return {
      show: false,
      playShow: false,
      successPopupShow: false,
      errorPopupShow: false,
      showShare: false,
      options: [
        { name: '微信', icon: weChat },
        { name: '朋友圈', icon: friend },
      ],
      style: {
        'min-width': '71%',
        'width': 'auto',
        'background': 'none'
      }
    }
  },
  created() {

  },
  methods: {
    showDownloadPop() {
      this.show = true
    },
    closeDownloadPop() {
      this.show = false
    },
    showPlayPop() {
      this.playShow = true
    },
    closePlayPop() {
      this.playShow = false
    },
    showShareSheet() {
      this.successPopupShow = false
      this.showShare = true
    },
    continuePlay() {
      this.successPopupShow = false
      this.$router.back()
    },
    errorContinuePlay() {
      this.errorPopupShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
#task {
  .container {
    margin-top: 0.293rem;
    padding: 0 0.4rem 1.3rem;
    .countdown-box {
      padding: 0.35rem 0.96rem 0.35rem 0.44rem;
      background-color: #FFF7F6;
      border-radius: 0.267rem;
      &-title {
        color: $color33;
        font-size: 0.4rem;
        font-weight: 600;
      }
      &-next {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.5rem;
        &-num {
          color: #F44D49;
          font-size: 0.56rem;
          font-weight: 600;
        }
        &-clock {
          display: flex;
          align-items: center;
          &-img {
            width: 0.48rem;
            height: 0.48rem;
            margin-right: 0.1467rem;
          }
          &-time {
            color: $color33;
            font-size: 0.3733rem;
          }
        }
      }
    }
    .steps-box {
      margin-top: 0.293rem;
      padding: 0.68rem 0.33rem 1.613rem;
      border-radius: 0.3rem;
      box-shadow: 0px 0.3px 0.18rem #DFDFDF;
      .step {
        display: flex;
        flex-direction: column;
        align-items: center;
        .app-logo {
          width: 1.56rem;
          height: 1.56rem;
          margin-bottom: 0.84rem;
        }
        &-text {
          color: $color33;
          font-size: 0.36rem;
          p {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          p:not(:first-child) {
            margin-top: 0.213rem;
          }
        }
        &-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 0.43rem;
          height: 0.43rem;
          border-radius: 50%;
          margin-right: 0.1rem;
          font-size: 0.32rem;
          color: #FFF;
          background: #FF6427;
        }
        &-btn {
          width: 4.266rem;
          height: 1.067rem;
          text-align: center;
          line-height: 1.067rem;
          border-radius: 1.067rem;
          background: #FF6427;
          color: #FFF;
          font-size: 0.426rem;
          margin-top: 0.627rem;
        }
        &-tips {
          color: #FD5257;
        }
      }
      .divider {
        margin-top: 0.613rem;
        margin-bottom: 0.746rem;
      }
      .disabled {
        background: #CECECE;
      }
    }
  }
  .app-name, .app-rank {
    color: #FF6427;
    font-weight: 600;
  }
  .van-popup--center.van-popup--round {
      border-radius: 0.2rem;
  }
  .popup-box {
    padding: 0.9rem 0.933rem;
    background: #FFF;
    .popup-top {
      font-size: 0.4rem;
      p {
        display: flex;
        align-items: center;
      }
      p:not(:first-child) {
        margin-top: 0.2rem;
      }
      img {
        width: 0.5rem;
        height: 0.5rem;
      }
    }
    .popup-next {
      display: flex;
      align-items: center;
      img {
        width: 1.533rem;
        height: 1.533rem;
      }
      div {
        margin-left: 0.4rem;
        font-size: 0.4rem;
        p:not(:first-child) {
          margin-top: 0.267rem;
        }
      }
    }
    .popup-last {
      width: 4.267rem;
      height: 1rem;
      text-align: center;
      line-height: 1rem;
      border-radius: 1rem;
      background: #FF6427;
      color: #FFF;
      margin: 0.7rem auto 0;
      font-size: 0.4rem;
    }
  }
  .result-popup {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0.66rem 1.146rem;
    color: #FFF;
    background: linear-gradient(#F85423, #FC2B77);
    .top-img {
      width: 1.61rem;
    }
    span {
      font-size: 0.4rem;
      margin-top: 0.1rem;
    }
    span.result-tips {
      margin-top: 0.3rem;
    }
    p {
      font-weight: 600;
      font-size: 1.493rem;
      margin-top: 0.3rem;
      span {
        font-size: 0.693rem;
      }
    }
    .operation {
      display: flex;
      justify-content: space-between;
      margin-top: 0.853rem;
      img {
        width: 3rem;
        height: 1.067rem;
      }
      img:last-child {
        margin-left: 1.067rem;
      }
    }
  }
  .result-error-popup {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0.66rem 1.146rem;
    background: #FFF;
    p {
      font-size: 0.4rem;
      color: $color66;
    }
    p.result-tips {
      margin-bottom: 0.3rem;
      font-weight: 600;
      color: $color33;
    }
    .continue-time {
      font-size: 0.9rem;
      color: #EA4203;
    }
    .app-img {
      width: 1.61rem;
      margin-top: 0.7rem;
    }
    .continue-btn {
      width: 6.6133rem;
      margin-top: 0.9rem;
    }
  }
}
</style>