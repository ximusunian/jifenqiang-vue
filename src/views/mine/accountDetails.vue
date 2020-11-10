<!--
 * @Description: 账户明细
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-09-24 17:15:21
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-09 19:13:11
-->
<template>
  <div id="accountDetails">
    <navBar title="收益明细"></navBar>

    <van-tabs v-model="reqData.AmountSelectType" @click="changeTab" sticky>
      <van-tab :title="item" v-for="(item, index) in navTitle" :key="index">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" style="min-height: 100vh;">
          <van-list v-model="loading" :finished="finished" @load="onLoad">
            <accountListItem :type="reqData.AmountSelectType" v-for="(item, idx) in list" :key="idx" :data="item"></accountListItem>
            <template #finished>
              <accountEmpty v-if="finished && !isLoading && list.length == 0"></accountEmpty>
              <van-divider v-if='list.length !== 0'>没有更多了</van-divider>
            </template>
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import navBar from "@/components/NavBar";
import accountEmpty from "@/components/accountEmpty";
import accountListItem from "@/components/accountListItem";
import { Tab, Tabs, List, PullRefresh, Divider } from "vant";
export default {
  name: "accountDetails",
  data() {
    return {
      active: 0,
      reqData: {
        AmountSelectType: 0,
        StartDate: "",
        EndDate: "",
        PageIndex: 1,
        PageSize: 10
      },
      navTitle: ["全部", "任务", "学徒", "提现"],
      isLoading: false,
      loading: false,
      finished: false,
      list: []
    };
  },
  components: {
    navBar,
    accountEmpty,
    accountListItem,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    [Divider.name]: Divider
  },
  watch: {},
  mounted() {},
  methods: {
    onRefresh() {
      this.reqData.PageIndex = 1
      this.reqData.PageSize = 10
      this.list = []
      this.onLoad()
    },
    onLoad() {
      this.$api.getAmountDetailList(this.reqData).then(res => {
        if(res.success) {
          this.isLoading = false
          this.reqData.PageIndex += 1
          if(this.reqData.PageIndex <= res.result.totalPage) {
            this.finished = false
            this.onLoad()
          } else {
            this.finished = true
          }
          if(res.result.items.length > 0) {
            this.list = this.list.concat(res.result.items)
          }
        }
      })
    },
    changeTab(name, title) {
      this.list = []
      this.reqData.PageIndex = 1
      this.reqData.PageSize = 10
      this.loading = true;
      this.finished = false;
      if(this.loading){
        this.onLoad();
      }
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
