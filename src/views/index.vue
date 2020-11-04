<!--
 * @Description: 首页
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-09 11:31:36
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-04 17:38:03
-->
<template>
  <div id="index">
    <!-- 头部 -->
    <header>
      <img
        src="https://jifenqiang.htyvip.com/PComputer/template/images/app_logo.png"
      />
      <div id="guide-box">
        <div class="header-right" @click="toWithdrawal">
          <span class="balance">￥0.10</span>
          <span class="text">提现</span>
          <van-icon name="arrow" size="16" />
        </div>
      </div>
    </header>

    <!-- 活动banner -->
    <div class="activity-zone">
      <div @click="toInvite">
        <img src="@/assets/images/invite_banner.png" />
      </div>
      <div @click="toSafar">
        <img src="@/assets/images/lucky_draw_banner.png" />
      </div>
    </div>

    <!-- 通知 -->
    <van-notice-bar color="#666666" background="#FFF" left-icon="volume-o">任务随时更新；每天15点-20点大量任务上线</van-notice-bar>

    <!-- 进行中的任务 -->
    <div class="box" v-if="Object.keys(goingTask).length !== 0">
      <div class="tasking" @click="toDetail(goingTask)">
        <div class="tasking-left">
          <img :src="goingTask.thumb" class="tasking-left-img" />
          <img
            src="@/assets/images/alarm_clock.gif"
            class="tasking-left-clock"
          />
          <span>任务进行中...</span>
        </div>
        <div class="tasking-right">+￥{{goingTask.amount}}</div>
      </div>
    </div>

    <!-- 任务 -->
    <div class="container">
      <!-- 快速任务 -->
      <div class="fast-task" v-if="taskList.length != 0">
        <p class="task-title first">标准任务</p>
        <van-cell-group>
          <van-cell center @click="snatchAppTask(item)" v-for="(item, index) in taskList" :key="index">
            <template #title>
              <div class="task-list-item-left">
                <img :src="item.thumb" />
                <div class="task-list-item-left-desc">
                  <span>{{translateStr(item.appName)}}</span>
                  <span>剩余{{translateNum(item.kucun)}}份</span>
                </div>
              </div>
            </template>
            <template #right-icon>
              <span class="task-list-item-amount">+￥{{item.amount}}</span>
            </template>
          </van-cell>
        </van-cell-group>
      </div>

      <div class="plan-task" v-if="planTaskList.length != 0">
        <p class="task-title">任务预告</p>
        <van-cell-group>
          <van-cell center @click="planToast" v-for="(item, index) in planTaskList" :key="index">
            <template #title>
              <div class="task-list-item-left">
                <div class="task-list-item-left-box">
                  <span>{{getTimeFlag(item.creationtime)}}</span>
                  <span>{{getFormeDate(item.creationtime)}}</span>
                </div>
                <div class="task-list-item-left-desc">
                  <span>{{translateStr(item.appName)}}</span>
                  <span>剩余{{translateNum(item.kucun)}}份</span>
                </div>
              </div>
            </template>
            <template #right-icon>
              <span class="task-list-item-amount">￥{{item.amount}}</span>
            </template>
          </van-cell>
        </van-cell-group>
      </div>
    </div>

    <van-dialog v-model="show" show-cancel-button confirmButtonColor="#FF5502" cancelButtonColor="#A7A7A7" @confirm="confirmAbandon">
      <p class="repeatTips">不能同时抢多个任务！是否放弃上个任务领取该任务？</p>
    </van-dialog>

  </div>
</template>

<script>
import { Icon, NoticeBar, Cell, CellGroup, Toast, Overlay, Dialog } from "vant";
import { 
  filterTask, 
  filterGoingTask, 
  filterStandardTask, 
  taskNameTranslate, 
  taskNumTranslate, 
  getFormeDate,
  getTimeFlag
} from "@/utils/utils"
export default {
  name: "index",
  components: {
    [Icon.name]: Icon,
    [NoticeBar.name]: NoticeBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Toast.name]: Toast,
    [Overlay.name]: Overlay,
    [Dialog.Component.name]: Dialog.Component
  },
  data() {
    return {
      show: false,
      taskList: [],
      planTaskList: [],
      goingTask: {},
      task: {}
    };
  },
  created() {
    this.getTask()
  },
  mounted() {},
  methods: {
    // 获取所有任务
    getTask() {
      this.$api.getTask(
        {
          DeviceModel: '苹果系统',
          taskerModel: "试玩任务", 
          appMenu: "", 
          IsRec: 1
        }).then(res => {
          if(res.success) {
            this.taskList = filterTask("标准任务", res.result, filterStandardTask)
            this.goingTask = filterTask("标准任务", res.result, filterGoingTask)
            this.planTaskList = filterTask("计划任务", res.result)
          }
      }) 
    },

    // 去详情页
    toDetail(data) {
      this.$router.push({path: "/task", query: {data: data}})
    },

    // -----------------------------------活动banner事件开始------------------------------
    // 去邀请
    toInvite() {
      this.$router.push("/enlightening");
    },
    // 去浏览器打开外部活动界面
    toSafar() {
      let url = "https://engine.peonyta.com/index/activity?appKey=3FoScyQDrr1vudSLZzWTPHnRnUJ&adslotId=338168";
      // window.webkit.messageHandlers.openSafari.postMessage(url)
    },
    // ------------------------------------活动banner事件结束-----------------------------

    // 抢夺任务
    snatchAppTask(item) {
      console.log(item);
      let AppID = parseInt(item.appId)
      this.$api.snatchAppTask({AppID: AppID}).then(res => {
        if(res.success) {
          if(!res.result.isExist) {
            this.task = item
            this.show = true
          } else {
            this.$router.push({path: "/task", query: {data: item}})
          }
        } else {
          this.$toast(res.error)
        }
      })
    },

    // 是否绑定手机号
    isBindMobile() {
      let result = this.$api.isBindMobile().then(res => {
        if(res.success) {
           return res.result
        } else {
          this.$toast(res.error)
        }
      })
      return result
    },
    
    // 是否绑定微信
    isBindWechat() {
      let result = this.$api.isBindWechat().then(res => {
        if(res.success) {
          return res.result
        } else {
          this.$toast(res.error)
        }
      })
      return result
    },

    // 去提现
    toWithdrawal() {
      this.$router.push("/withdrawal");
    },

    // 确实放弃之前任务，进行新任务
    confirmAbandon() {
      this.$api.abortSession().then(res => {
        if(res.success) {
          this.snatchAppTask(this.task)
        }
      })
    },

    // 任务预告
    planToast() {
      Toast("任务还未开始哦");
    },

    // -------------------------------- 工具函数 --------------------------------------------------------
    // 字符串转化
    translateStr(str) {
      return taskNameTranslate(str)
    },
    // 数字转化
    translateNum(num) {
      return taskNumTranslate(num)
    },
    // 日期格式化
    getTimeFlag(data){
      return getTimeFlag(data)
    },
    // 时间格式化
    getFormeDate(data) {
      return getFormeDate(data, "hh:mm")
    },
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
          background: #fe712b;
          color: #fff;
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
  
  .repeatTips {
    padding: 0.52rem 0.933rem 0.493rem;
    color: $color33;
    font-size: 0.426rem;
    text-align: center;
  }
}
</style>
