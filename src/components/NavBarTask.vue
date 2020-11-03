<!--
 * @Description: navBarTask
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-09-22 13:11:08
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-03 14:49:01
-->
<template>
  <div id="navBarTask">
    <van-sticky>
      <van-nav-bar
        :title="title"
        left-arrow
        @click-left="onBack"
        @click-right="onGiveUp"
      >
        <template #right>
          <span class="abandon-btn">放弃</span>
        </template>
      </van-nav-bar>
    </van-sticky>
    <van-dialog v-model="show" show-cancel-button width=270 className="abandon-dialog" :beforeClose="confirmAbandon">
      <p class="abandon-text">是否放弃任务?</p>
    </van-dialog>
  </div>
</template>

<script>
import { Sticky, NavBar, Dialog } from 'vant';
export default {
  name: "navBarTask",
  components: {
    [Sticky.name]: Sticky,
    [NavBar.name]: NavBar,
    [Dialog.name]: Dialog
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      show: false
    }
  },
  created() {

  },
  methods: {
    onBack() {
      this.$router.back()
    },
    onGiveUp() {
      this.show = true
    },
    confirmAbandon(action, done) {
      if (action === 'confirm') {
        this.abortSession()
      } else {
        done();
      }
    },
    // 放弃任务
    abortSession() {
      this.$api.abortSession().then(res => {
        if(res.success) {
          this.onBack()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#navBarTask {
  .abandon-btn {
    display: inline-block;
    width: 1.36rem;
    height: 0.733rem;
    line-height: 0.733rem;
    border: 1px solid $colorF6;
    border-radius: 0.733rem;
    color: $color33;
  }
  .van-dialog {
    border-radius: 0.2rem;
  }
  .abandon-text {
    padding: 0.6rem 0;
    display: flex;
    font-size: 0.4rem;
    justify-content: center;
  }
}
</style>