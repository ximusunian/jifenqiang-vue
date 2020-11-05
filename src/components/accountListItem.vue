<!--
 * @Description: 收益明细列表项
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-24 17:51:07
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-05 14:00:56
-->
<template>
  <div id="accountListItem">
    <van-cell center v-if="type == 3">
      <template #title>
        <div class="pay-list-left">
          <p class="title">
            <span>提现</span>
            <img src="@/assets/images/pay-wechat-icon.png" class="type-icon" />
            <span>微信</span>
          </p>
          <p class="time">{{getFormeDate(data.creationTime)}}</p>
        </div>
      </template>
      <template #right-icon>
        <div class="pay-list-right">
          <span class="num">{{data.affairs == 1? '+': '-'}}{{data.amount}}</span>
          <span class="statue">成功</span>
        </div>
      </template>
    </van-cell>
    <van-cell center v-else>
      <template #title>
        <div class="all-list-left">
          <p class="title">{{data.displayTitle}}</p>
          <p class="time">{{getFormeDate(data.creationTime)}}</p>
        </div>
      </template>
      <template #right-icon>
        <div class="all-list-right">
          <span class="num">{{data.affairs == 1? '+': '-'}}{{data.amount}}</span>
        </div>
      </template>
    </van-cell>
    
  </div>
</template>

<script>
import { Cell } from "vant";
import {getFormeDate} from "@/utils/utils";
export default {
  name: "accountListItem",
  props: {
    type: {
      type: String,
      default: 0
    },
    data: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  },
  components: {
    [Cell.name]: Cell
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    getFormeDate(data) {
      getFormeDate(data, "yyyy-mm-dd hh:mm")
    }
  }
};
</script>

<style scoped lang="scss">
#accountListItem {
  .all-list-left {
    .title {
      font-size: 0.4rem;
      color: $color33;
    }
    .time {
      color: #9a9a9a;
      font-size: 0.346rem;
    }
  }
  .all-list-right {
    .num {
      color: #EE7940;
      font-size: 0.533rem;
    }
  }
  .pay-list-left {
    .title {
      font-size: 0.4rem;
      display: flex;
      align-items: center;
      .type-icon {
        width: 0.4rem;
        height: 0.4rem;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
      }
    }
    .time {
      color: #9a9a9a;
      font-size: 0.346rem;
    }
  }
  .pay-list-right {
    display: flex;
    flex-direction: column;
    .num {
      color: #29292a;
      font-size: 0.533rem;
    }
    .statue {
      color: #9a9a9a;
      font-size: 0.346rem;
    }
  }
}
</style>
