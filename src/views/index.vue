<!--
 * @Description: 首页
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-09 11:31:36
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-09-25 18:05:50
-->
<template>
  <div id="index">
    <!-- 头部 -->
    <header>
      <img src="https://jifenqiang.htyvip.com/PComputer/template/images/app_logo.png" />
      <div id="guide-box">
        <div class="header-right" @click="toWithdrawal">
          <span class="balance">￥0.10</span>
          <span class="text">提现</span>
          <van-icon name="arrow" size="16" />
        </div>
      </div>
      
      <!-- <div class="header-right border">
        <span class="balance">￥0.10</span>
        <span class="text">提现</span>
        <van-icon name="arrow" size="16" />
      </div> -->
    </header>

    <!-- 活动banner -->
    <div class="activity-zone">
      <div @click="toInvite">
        <img src="@/assets/invite_banner.png" />
      </div>
      <div @click="toSafar">
        <img src="@/assets/lucky_draw_banner.png" />
      </div>
    </div>

    <!-- 通知 -->
    <van-notice-bar color="#666666" background="#FFF" left-icon="volume-o">任务随时更新；每天15点-20点大量任务上线</van-notice-bar>

    <!-- 进行中的任务 -->
    <div class="box">
      <div class="tasking" @click="startTask">
        <div class="tasking-left">
          <img src="@/assets/3.png" class="tasking-left-img" />
          <img src="@/assets/alarm_clock.gif" class="tasking-left-clock" />
          <span>任务进行中...</span>
        </div>
        <div class="tasking-right">+￥1.10</div>
      </div>
    </div>

    <!-- 任务 -->
    <div class="container">
      <!-- 快速任务 -->
      <div class="fast-task">
        <p class="task-title first">标准任务</p>
        <van-cell-group>
          <van-cell center @click="startTask">
            <template #title>
              <div class="task-list-item-left">
                <img src="@/assets/3.png" />
                <div class="task-list-item-left-desc">
                  <span>名称</span>
                  <span>剩余100份</span>
                </div>
              </div>
            </template>
            <template #right-icon>
              <span class="task-list-item-amount">+￥0.80</span>
            </template>
          </van-cell>
          <van-cell center>
            <template #title>
              <div class="task-list-item-left">
                <img src="@/assets/3.png" />
                <div class="task-list-item-left-desc">
                  <span>名称</span>
                  <span>剩余100份</span>
                </div>
              </div>
            </template>
            <template #right-icon>
              <span class="task-list-item-amount">+￥0.80</span>
            </template>
          </van-cell>
        </van-cell-group>
      </div>

      <div class="plan-task">
        <p class="task-title">任务预告</p>
        <van-cell-group>
          <van-cell center @click="planToast">
            <template #title>
              <div class="task-list-item-left">
                <div class="task-list-item-left-box">
                  <span>今日</span>
                  <span>14:52</span>
                </div>
                <div class="task-list-item-left-desc">
                  <span>名称</span>
                  <span>剩余100份</span>
                </div>
              </div>
            </template>
            <template #right-icon>
              <span class="task-list-item-amount">￥0.80</span>
            </template>
          </van-cell>
        </van-cell-group>
      </div>
    </div>

    <van-overlay :show="showGuide"></van-overlay>
  </div>
</template>

<script>
import { Icon, NoticeBar, Cell, CellGroup, Toast, Overlay } from "vant";
export default {
  name: "index",
  components: {
    [Icon.name]: Icon,
    [NoticeBar.name]: NoticeBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Toast.name]: Toast,
    [Overlay.name]: Overlay
  },
  data() {
    return {
      showGuide: false
    };
  },
  created() {},
  mounted() {
    // console.log(document.getElementsByClassName("first")[0].offsetTop);
    // let target = document.querySelector('.header-right')
    // let pos = target.getBoundingClientRect()

    // let clone = target.cloneNode(true)
    // clone.style.position = 'fixed'
    // clone.style.left = pos.left + "px"
    // clone.style.top = pos.top + "px"
    // clone.style.background = "#FFF"
    // clone.style.zIndex = 100
    // document.querySelector('.header-right').style.display = "none"
    // document.getElementById("guide-box").appendChild(clone)
  },
  methods: {
    // 去提现
    toWithdrawal() {
      this.$router.push("/withdrawal")
    },

    // 活动banner事件开始-----------------------------
    // 去邀请
    toInvite() {
      this.$router.push("/enlightening");
    },
    // 去浏览器打开外部活动界面
    toSafar() {
      let url =
        "https://engine.peonyta.com/index/activity?appKey=3FoScyQDrr1vudSLZzWTPHnRnUJ&adslotId=338168";
      // window.webkit.messageHandlers.openSafari.postMessage(url)
    },
    // 活动banner事件结束-----------------------------

    startTask() {
      this.$router.push("/task")
    },
    planToast() {
      Toast('任务还未开始哦');
    }
  }
};
</script>

<style lang="scss" scoped>
#index {
  font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, WenQuanYi Micro Hei, "sans-serif" !important;
  // 头部
  header {
    display: flex;
    padding: 0.3rem 0.387rem;
    justify-content: space-between;
    align-items: center;
    img {
      width: 3.733rem;
      height: 0.893rem;
    }
    .header-right {
      display: flex;
      align-items: center;
      .balance {
        color: #f4504c;
        font-size: 0.45rem;
        margin-right: 0.12rem;
        font-family: number;
      }
      .text {
        color: $color66;
        font-size: 0.373rem;
        margin-right: 0.16rem;
      }
    }
  }

  // 活动banner
  .activity-zone {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.387rem;
    img {
      width: 4.4rem;
      height: 1.76rem;
    }
    .van-notice-bar {
      font-size: 0.347rem !important;
    }
  }

  // 进行中的任务
  .box {
    padding: 0.267rem 0.387rem;
    .tasking {
      padding: 0.32rem 0.32rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff6f4;
      border-radius: 0.19rem;
      &-left {
        display: flex;
        align-items: center;
        &-img {
          width: 1.013rem;
          height: 1.013rem;
          margin-right: 0.373rem;
        }
        &-clock {
          width: 0.42rem;
          height: 0.42rem;
          margin-right: 0.133rem;
        }
        span {
          color: #0bcca9;
          font-size: 0.4rem;
        }
      }
      &-right {
        font-size: 0.48rem;
        font-family: number;
        color: #f4504c;
      }
    }
  }

  // 任务列表
  .container {
    padding: 0.2rem 0.387rem 2.5rem;
    .task-title {
      color: $color33;
      font-size: 0.44rem;
    }
    .van-hairline--top-bottom::after {
      border-width: 0.02667rem 0;
      border-top: 0;
    }
    .van-cell {
      padding-left: 0;
      padding-right: 0;
    }
    .van-cell:last-child::after {
      position: absolute;
      box-sizing: border-box;
      content: " ";
      pointer-events: none;
      bottom: 0;
      border-bottom: 0.02667rem solid #ebedf0;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
    .van-cell::after {
      left: 0;
      right: 0;
    }
    .fast-task {
      .task-list-item-left {
        display: flex;
        align-items: center;
        img {
          width: 1.3328rem;
          height: 1.3328rem;
        }
        &-desc {
          margin-left: 0.386rem;
          display: flex;
          flex-direction: column;
          span:first-child {
            font-size: 0.4rem;
            color: $color33;
          }
          span:last-child {
            font-size: 0.346rem;
            color: #9a9a9a;
            margin-top: -0.1rem;
          }
        }
      }
      .task-list-item-amount {
        width: 2.6rem;
        height: 0.853rem;
        text-align: center;
        line-height: 0.853rem;
        border-radius: 0.853rem;
        background: #fff6f4;
        font-family: number;
        font-size: 0.43rem;
        color: #f44d49;
      }
    }

    // 任务预告
    .plan-task {
      margin-top: 0.5rem;
      .task-list-item-left {
        display: flex;
        align-items: center;
        &-box {
          display: flex;
          flex-direction: column;
          text-align: center;
          justify-content: center;
          width: 1.3328rem;
          height: 1.3328rem;
          border-radius: 0.2rem;
          background: #FE712B;
          color: #FFF;
          span:last-child {
            margin-top: -0.2rem;
          }
        }
        &-desc {
          margin-left: 0.386rem;
          display: flex;
          flex-direction: column;
          span:first-child {
            font-size: 0.4rem;
            color: $color33;
          }
          span:last-child {
            font-size: 0.346rem;
            color: #9a9a9a;
            margin-top: -0.1rem;
          }
        }
      }
      .task-list-item-amount {
        font-family: number;
        font-size: 0.43rem;
        color: #f44d49;
      }
    }
  }

  .border {
    height: 0.893rem;
    width: 3.2rem;
    justify-content: center;
    border-radius: 0.2rem;
    box-shadow: 0px 0px 0 800px rgba(0, 0, 0, 0.6);
    z-index: 2;
  }
}
</style>
