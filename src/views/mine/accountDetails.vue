<!--
 * @Description: 账户明细
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-09-24 17:15:21
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-09-24 19:30:29
-->
<template>
  <div id="accountDetails">
    <navBar title="收益明细"></navBar>

    <van-tabs v-model="active">
      <van-tab title="全部">
        <!-- <van-list v-model="loading" :finished="finished" finished-text="到底了"> -->
        <van-cell-group>
          <accountListItem type="1"></accountListItem>
        </van-cell-group>
        <!-- <accountEmpty></accountEmpty> -->
        <!-- </van-list> -->
      </van-tab>
      <van-tab title="任务">
        <accountEmpty></accountEmpty>
      </van-tab>
      <van-tab title="学徒">
        <accountEmpty></accountEmpty>
      </van-tab>
      <van-tab title="提现">
        <accountEmpty></accountEmpty>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import navBar from "@/components/NavBar";
import accountEmpty from "@/components/accountEmpty";
import accountListItem from "@/components/accountListItem";
import { Tab, Tabs, List } from "vant";
export default {
  name: "accountDetails",
  data() {
    return {
      active: 0,
      loading: false,
      finished: false
    };
  },
  components: {
    navBar,
    accountEmpty,
    accountListItem,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [List.name]: List
  },
  watch: {},
  mounted() {},
  methods: {
    onLoad() {
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   // 加载状态结束
      //   this.loading = false;
      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);
    }
  }
};
</script>

<style scoped lang="scss">
#accountDetails {
  .van-hairline--top-bottom::after {
    border-width: 0.02667rem 0;
    border-top: 0;
  }
}
</style>
