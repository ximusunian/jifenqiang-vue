<!--
 * @Description: 分享回流页
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-25 20:02:55
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-09 09:24:17
-->
<template>
  <div id="shareDownload">
    <div @click="show = true">
      <header>
        <img src="https://mobile.bktt1.top/mobile/images/download_banner.png" />

        <!-- 通知 -->
        <van-notice-bar :scrollable="false" background="#FFF">
          <van-swipe
            vertical
            class="notice-swipe"
            :autoplay="3000"
            :show-indicators="false"
          >
            <van-swipe-item>
              <span class="name">用户 李**** 3秒前 </span>
              <span class="earnings">赚了10.00元</span>
            </van-swipe-item>
            <van-swipe-item>
              <span class="name">用户 张**** 5秒前 </span>
              <span class="earnings">赚了15.00元</span>
            </van-swipe-item>
            <van-swipe-item>
              <span class="name">用户 王**** 3秒前 </span>
              <span class="earnings">赚了8.00元</span>
            </van-swipe-item>
            <van-swipe-item>
              <span class="name">用户 孟**** 2秒前 </span>
              <span class="earnings">赚了8.00元</span>
            </van-swipe-item>
            <van-swipe-item>
              <span class="name">用户 崔**** 6秒前 </span>
              <span class="earnings">赚了20.00元</span>
            </van-swipe-item>
          </van-swipe>
        </van-notice-bar>
      </header>

      <!-- 列表 -->
      <div class="list-box">
        <div class="list-nav">
          <span class="active">标准任务</span>
          <span>高额任务</span>
          <span>游戏赚钱</span>
          <span>注册赚钱</span>
        </div>

        <div class="list">
          <div class="list_item">
            <div class="item_left">
              <img src="https://mobile.bktt1.top/mobile/images/1.png" />
              <div class="item_info">
                <p class="name">唐******</p>
                <p class="remaining">搜索有剩余200</p>
              </div>
            </div>
            <div class="item_right">+<span class="num">1.50</span>元</div>
          </div>
          <div class="list_item">
            <div class="item_left">
              <img src="https://mobile.bktt1.top/mobile/images/2.png" />
              <div class="item_info">
                <p class="name">惠******</p>
                <p class="remaining">搜索有剩余53</p>
              </div>
            </div>
            <div class="item_right">+<span class="num">1.50</span>元</div>
          </div>
          <div class="list_item">
            <div class="item_left">
              <img src="https://mobile.bktt1.top/mobile/images/3.png" />
              <div class="item_info">
                <p class="name">花******</p>
                <p class="remaining">搜索有剩余46</p>
              </div>
            </div>
            <div class="item_right">+<span class="num">1.50</span>元</div>
          </div>
          <div class="list_item">
            <div class="item_left">
              <img src="https://mobile.bktt1.top/mobile/images/4.png" class="blur" />
              <div class="item_info">
                <p class="name">封******</p>
                <p class="remaining">搜索有剩余100</p>
              </div>
            </div>
            <div class="item_right">+<span class="num">1.00</span>元</div>
          </div>
          <div class="list_item">
            <div class="item_left">
              <img src="https://mobile.bktt1.top/mobile/images/5.png" />
              <div class="item_info">
                <p class="name">云******</p>
                <p class="remaining">搜索有剩余93</p>
              </div>
            </div>
            <div class="item_right">+<span class="num">1.00</span>元</div>
          </div>
          <div class="list_item">
            <div class="item_left">
              <img src="https://mobile.bktt1.top/mobile/images/6.png" />
              <div class="item_info">
                <p class="name">健******</p>
                <p class="remaining">搜索有剩余20</p>
              </div>
            </div>
            <div class="item_right">+<span class="num">2.00</span>元</div>
          </div>
          <div class="list_item">
            <div class="item_left">
              <img src="https://mobile.bktt1.top/mobile/images/7.png" />
              <div class="item_info">
                <p class="name">贷******</p>
                <p class="remaining">搜索有剩余63</p>
              </div>
            </div>
            <div class="item_right">+<span class="num">2.00</span>元</div>
          </div>
          <div class="list_item">
            <div class="item_left">
              <img src="https://mobile.bktt1.top/mobile/images/8.png" />
              <div class="item_info">
                <p class="name">贷****极速版</p>
                <p class="remaining">搜索有剩余52</p>
              </div>
            </div>
            <div class="item_right">+<span class="num">1.50</span>元</div>
          </div>
        </div>
      </div>

      <!-- 底部下载浮层 -->
      <div class="supernatant">
        <div class="supernatant-left">
          <img src="https://mobile.bktt1.top/mobile/images/youxiang_logo.png" />
          <div class="slogan">
            <p>下载试玩助手</p>
            <p>领取<span>0.88元</span>新人红包</p>
          </div>
        </div>
        <div class="supernatant-right">下载试玩助手</div>
      </div>
    </div>

    <van-overlay :show="show" @click="show = false">
      <div
        class="wrapper"
        data-clipboard-action="copy"
        :data-clipboard-text="uid"
      >
        <img
          src="https://mobile.bktt1.top/mobile/images/popup.png"
          class="bg"
          @click="toDownload"
          id="copy"
        />
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { NoticeBar, Swipe, SwipeItem, Overlay } from "vant";
import Clipboard from "clipboard";
export default {
  name: "shareDownload",
  data() {
    return {
      uid: "",
      show: false,
      downloadUrl: "",
    };
  },
  components: {
    [NoticeBar.name]: NoticeBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Overlay.name]: Overlay
  },
  watch: {},
  created() {
    let id = this.$route.query.uid;
    this.uid = `**uid=${id}**`;
    let clipboard = new Clipboard(".wrapper", {
      text:() => {
          return this.uid;
        }
    });
    clipboard.on("success", function() {
      console.log("success");
    });
    clipboard.on("error", function() {
      console.log("error");
    });

    this.getInstallUrl()
  },
  mounted() {},
  methods: {
    copy() {},
    getInstallUrl() {
      this.$api.getInstallUrl().then(res => {
        if(res.success) {
          this.downloadUrl = res.result
        }
      })
    },
    toDownload() {
       window.location = this.downloadUrl
    }
  }
};
</script>

<style scoped lang="scss">
#shareDownload {
  min-height: 100vh;
  background: #fafafa;
  padding-bottom: 2.5rem;
  header {
    padding: 0.4rem 0.4rem 0.2rem;
    background: #fff;
    img {
      height: 5.546rem;
    }
    .notice-swipe {
      height: 40px;
      line-height: 40px;
    }
    .name {
      color: $color33;
    }
    .earnings {
      color: #ed0201;
    }
  }

  .list-box {
    .list-nav {
      padding: 0.5rem 0.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: #7f7f7f;
        font-size: 0.42rem;
      }
      .active {
        color: $color33;
        font-size: 0.48rem;
        position: relative;
      }
      .active::after {
        display: block;
        content: "";
        bottom: 0;
        margin: 0.1rem auto 0;
        width: 1rem;
        height: 0.06rem;
        background-color: #ef2a0c;
      }
    }
    .list {
      padding: 0.3rem 0.4rem 0;
      .list_item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.54rem;
        .item_left {
          display: flex;
          img {
            width: 1.4rem;
            height: 1.4rem;
            border-radius: 0.2rem;
          }
          .item_info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 0.4rem;
            .name {
              color: $color33;
              font-size: 0.426rem;
            }
            .remaining {
              color: $color99;
              font-size: 0.346rem;
              margin-top: 0.1rem;
            }
          }
        }
        .item_right {
          color: #f44c48;
          font-size: 0.373rem;
          font-weight: 600;
          .num {
            font-size: 0.666rem;
          }
        }
      }
    }
  }

  .supernatant {
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    padding: 0.4rem 0;
    justify-content: space-between;
    align-items: center;
    background: #fcebe5;
    box-shadow: 0px -5px 10px -5px rgba(0, 0, 0, 0.06);
    .supernatant-left {
      display: flex;
      margin-left: 0.4rem;
      img {
        width: 1.36rem;
        height: 1.36rem;
        margin-right: 0.24rem;
      }
      .slogan {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: $color33;
        font-size: 0.4rem;
        p {
          span {
            color: #cf1509;
          }
        }
        p:last-child {
          margin-top: 0.12rem;
        }
      }
    }
    .supernatant-right {
      width: 3.16rem;
      height: 1.013rem;
      font-size: 0.4rem;
      color: #fff;
      text-align: center;
      line-height: 1.013rem;
      border-radius: 1.013rem;
      background: #fe421a;
      margin-right: 0.4rem;
      box-shadow: 0 2px 3px 1px rgba(215, 0, 0, 0.28);
    }
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .bg {
      width: 8rem;
      height: 9.573rem;
    }
  }
}
</style>
 