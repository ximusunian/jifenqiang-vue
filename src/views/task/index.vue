<!--
 * @Description: 任务详情
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-09-22 09:38:18
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-17 11:13:43
-->
<template>
  <div id="task">
    <navBarTask title="任务详情"></navBarTask>
    
    <div class="container">
      <div class="countdown-box">
        <p class="countdown-box-title">抢到任务啦，快去完成吧</p>
        <div class="countdown-box-next">
          <span class="countdown-box-next-num">￥{{tFixed(taskInfo.amount)}}</span>
          <div class="countdown-box-next-clock">
            <img src="https://mobile.bktt1.top/mobile/images/alarm_clock.gif" class="countdown-box-next-clock-img"/>
            <span class="countdown-box-next-clock-time">
              <span>剩余时间:</span><van-count-down :time="Math.ceil(taskInfo.expireSecs)*1000" format="mm:ss"/>
              </span>
          </div>
        </div>
      </div>
      <div class="steps-box">
        <div class="step">
          <img :src="taskInfo.url" class="app-logo"/>
          <div class="step-text">
            <p>
              <span class="step-icon">1</span>
              <span>前往App Store 搜索：</span>
              <span class="app-name">{{taskInfo.keyword}}</span>
            </p>
            <p>约在第<span class="app-rank">{{taskInfo.softRank}}</span>位，找到该图标应用下载安装</p>
          </div>
          <div class="step-btn" @click="showDownloadPop">如何下载？</div>
        </div>
        <van-divider class="divider"/>
        <div class="step">
          <div class="step-text">
            <p>
              <span class="step-icon">2</span>
              <span>点击开始试玩，体验{{timeTranslate(taskInfo.tryDate)}}</span>
            </p>
            <p class="step-tips">打开应用时，必须“允许网络接入”</p>
          </div>
          <div class="step-btn" @click="wake">开始试玩</div>
        </div>
        <van-divider class="divider"/>
        <div class="step">
          <div class="step-text">
            <p>
              <span class="step-icon">3</span>
              <span>试玩{{timeTranslate(taskInfo.tryDate)}}后，回本页领取奖励</span>
            </p>
          </div>
          <div :class="taskInfo.isInProgress?'step-btn' :'step-btn disabled'" @click="toReceiveAward">领取奖励</div>
        </div>
      </div>
    </div>

    <!-- 开始任务 -->
    <van-popup v-model="show" round :close-on-click-overlay=false :style="style">
      <div class="popup-box">
        <div class="popup-top">
          <p>返回桌面，打开 AppStore<img src="@/assets/images/appStore.png" /></p>
          <p>在搜索框内输入 <span class="app-name">{{taskInfo.keyword}}</span></p>
        </div>
        <van-divider/>
        <div class="popup-next">
          <img :src="taskInfo.url" />
          <div>
            <p>请认准图标下载</p>
            <p>约在第 <span class="app-rank">{{taskInfo.softRank}}</span> 位</p>
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
          <img :src="taskInfo.url" />
          <div>
            <p>App Store搜索</p>
            <p>约在第 <span class="app-rank">{{taskInfo.softRank}}</span> 位</p>
          </div>
        </div>
        <div class="popup-last" @click="closePlayPop">知道了</div>
      </div>
    </van-popup>

    <!-- 领取成功 -->
    <van-popup v-model="successPopupShow" round :close-on-click-overlay=false :style="style">
      <div class="result-popup">
        <img src="https://mobile.bktt1.top/mobile/images/gold_coins.png" class="top-img"/>
        <span class="result-tips">完成任务</span>
        <p><span>￥</span>{{taskInfo.amount}}</p>
        <span>已到账</span>
        <div class="operation">
          <img src="https://mobile.bktt1.top/mobile/images/invited_money.png" @click="showShareSheet"/>
          <img src="https://mobile.bktt1.top/mobile/images/continue_play.png" @click="continuePlay"/>
        </div>
      </div>
    </van-popup>

    <!-- 领取失败 -->
    <van-popup v-model="errorPopupShow" round :close-on-click-overlay=false :style="style">
      <div class="result-error-popup">
        <p class="result-tips">时间还不够哦~</p>
        <p style="display: flex; align-items: center;margin-top: 0.2rem">
          <span style="margin-right: 0.2rem">还需试玩</span>
          <span class="continue-time">{{timeTranslate(remainingTime)}}</span>
          <!-- <van-count-down :time="Math.ceil(remainingTime)*1000" format="mm分ss秒"></van-count-down> -->
        </p>
        <img src="https://mobile.bktt1.top/mobile/images/gold_coins.png" class="app-img"/>
        <img src="https://mobile.bktt1.top/mobile/images/continue_play_big.png" class="continue-btn" @click="errorContinuePlay"/>
      </div>
    </van-popup>

    <!-- 分享 -->
    <van-share-sheet
      v-model="showShare"
      :options="options"
      title="邀请好友 收Ta为徒"
      description="更多收益 一起赚钱"
      @select="share"
      @cancel="toBack"
    />
  </div>
</template>

<script>
import navBarTask from "@/components/NavBarTask"
import { Divider, Popup, ShareSheet, CountDown  } from "vant"
import weChat from '@/assets/images/weChat.png';
import friend from '@/assets/images/friend.png';
import {tFixed} from "@/utils/utils"
export default {
  name: "task",
  components: {
    navBarTask,
    [Divider.name]: Divider,
    [Popup.name]: Popup,
    [ShareSheet.name]: ShareSheet,
    [CountDown.name]: CountDown
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
      },
      taskInfo: {
        appName: "",
        startContext: "",
        sortContext: "",
        tryContext: "",
        fishContext: "",
        hotContext: "",
        uldContext: "",
        strIndex: "",
        sampThumb1: "",
        isDisplay: 0,
        softRank: "",
        amount: "",
        tryDate: "",
        expireSecs: "",
        url: "",
        isInProgress: false
      },
      taskAll: {},
      remainingTime: '',
      shareInfo: {}
    }
  },
  created() {
    this.getTaskContext()
    this.getShareInfo()
    let _this = this
    window["startCallBack"] = function(result) {
      _this.startCallBack(result)
    }
    window["tryAppBack"] = function(data) {
      _this.tryAppBack(data)
    }

    window["finishApplicationCallBack"] = function(data) {
      _this.finishApplicationCallBack(data)
    }
  },
  methods: {
    // 获取任务详情
    getTaskContext() {
      let data = JSON.parse(this.$route.query.data) 
      this.taskAll = JSON.parse(this.$route.query.data)
      this.$api.getTaskContext({appId: data.appId}).then(res => {
        if(res.success) {
          this.taskInfo = res.result
          this.taskInfo.url = data.thumb
        } else {
          this.$toast(res.error.message)
        }
      })
    },
    
    // 时间转换
    translateMinutes(data) {
      let time = Number(parseInt(data))
      if(time > 60) {
        return time / 60 + "分钟"
      } else {
        return time + "秒"
      }
    },
    
    showDownloadPop() {
      this.show = true
    },

    closeDownloadPop() {
      this.show = false
    },

    // 开始任务
    startTask() {
      let {appId, appKey, isKeep} = this.taskInfo
      let str = `type=download&appid=${appId}&appkey=${appKey}&iskeep=${isKeep}`

      let isAPP = localStorage.getItem("isApp")
      if(isAPP == "true") {
        window.webkit.messageHandlers.startTask.postMessage(str)
      } else {
        let data = {
          startTask: str
        }
        this.$api.startTask(data).then(res => {
          let data = JSON.parse(res.startCallBack)
          if(data.state == "true"){
            this.taskInfo.isInProgress = true
          }
        })
      }
      
    },

    // 开始任务回调
    startCallBack(result) {
      let data = JSON.parse(result)
      if(data.state == "true"){
        this.taskInfo.isInProgress = true
      }
    },

    // 唤起app
    wake() {
      let {packername, processname } = this.taskAll
      let {appId, appModel, appKey, isKeep} = this.taskInfo
      let data = `identify=${packername}&packagename=${processname}&appid=${appId}&istype=${appModel}&appkey=${appKey}&iskeep=${isKeep}`

      let isAPP = localStorage.getItem("isApp")
      if(isAPP == "true") {
        window.webkit.messageHandlers.toWake.postMessage(data)
      } else {
        let pa = {
          toWake: data
        }
        this.$api.toWake(pa).then(res => {
          let data = JSON.parse(res.tryAppBack)
          if(data.state === "true") {
            this.startTask()
          } else {
            this.playShow = true
          }
        })
      }
      
    },

    // 开始任务客户端回调
    tryAppBack(state) {
      let data = JSON.parse(state)
      if(data.state === "true") {
        this.startTask()
        this.taskInfo.isInProgress = true
      } else {
        this.playShow = true
      }
    },

    // 领取奖励
    toReceiveAward() {
      let {packername, processname } = this.taskAll
      let {appId, appModel, appKey, isKeep, tryDate} = this.taskInfo
      let data = `identify=${packername}&packagename=${processname}&appid=${appId}&istype=${appModel}&appkey=${appKey}&iskeep=${isKeep}&trydate=${tryDate}`
      
      let isAPP = localStorage.getItem("isApp")
      if(isAPP == "true") {
        window.webkit.messageHandlers.receiveAward.postMessage(data)
      } else {
        let pa = {
          receiveAward: data
        }
        this.$api.receiveAward(pa).then(res => {
          let result = JSON.parse(res.finishApplicationCallBack)
          let tips = result.tips
          if(tips.indexOf('试玩时间未到')!=-1) {
            let time = result.time
            this.remainingTime = time
            this.errorPopupShow = true
          } else if((tips.indexOf('提交成功')!=-1)){
            this.successPopupShow = true
          } else{
            this.$toast(tips)
          }
        })
      }
    },

    // 领取奖励回调
    finishApplicationCallBack(data) {
      let result = JSON.parse(data)
      let tips = result.tips 
      if(tips.indexOf('试玩时间未到')!=-1) {
        let time = result.time
        this.remainingTime = time
        this.errorPopupShow = true
      } else if((tips.indexOf('提交成功')!=-1)){
        this.successPopupShow = true
      } else{
        this.$toast(tips)
      }
    },

    // 试玩时间处理
    timeTranslate(date) {
      let oldTime = Number(date)
      if(oldTime < 60) {
        return Math.ceil(oldTime) + "秒"
      } else if(oldTime === 60) {
        return "1分钟"
      } else if(oldTime%60 == 0){
        return parseInt(oldTime/60) + "分钟"
      } else {
        return parseInt(oldTime/60) + "分钟" + Math.ceil(oldTime%60) + "秒"
      }
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
      this.$router.replace("/")
    },

    errorContinuePlay() {
      this.errorPopupShow = false
      this.wake()
    },

    // 获取分享信息
    getShareInfo() {
      this.$api.getShareInfo().then(res => {
        if(res.success) {
          this.shareInfo = res.result
        }
      })
    },

    // 分享
    share(option, index) {
      let shareModel = ""
      if(option.name == "微信") {
        shareModel = "weixin"
      } else if(option.name == "朋友圈") {
        shareModel = "friend"
      }
      let {uid, key, shareLogo, subTitle, title, urlStr} = this.shareInfo
      let url = `${urlStr}?uid=${uid}&key=${key}&title=${title}&subtitle=${subTitle}&sharelogo=${shareLogo}`
      let data = `type=${shareModel}&url=${url}`

      let isAPP = localStorage.getItem("isApp")
      if(isAPP == "true") {
        window.webkit.messageHandlers.toShare.postMessage(data)
      } else {
        this.$toast("请前往App内分享！")
        this.showShare = false
      }
    },

    toBack() {
      this.$router.back()
    },

    tFixed(num) {
      return tFixed(num)
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
          font-weight: 800;
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
            display: flex;
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
    .van-count-down {
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