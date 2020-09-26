<!--
 * @Description: 收益明细列表项
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-24 17:51:07
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-09-25 09:25:56
-->
<template>
  <div id="accountListItem">
    <van-cell center v-if="type == 1">
      <template #title>
        <div class="all-list-left">
          <p class="title">完成豆果美食-菜谱食谱视频菜谱大全</p>
          <p class="time">2019-11-13 20:57:25</p>
        </div>
      </template>
      <template #right-icon>
        <div class="all-list-right">
          <span class="num">+0.80</span>
        </div>
      </template>
    </van-cell>
    <van-cell center v-if="type == 2">
      <template #title>
        <div class="pay-list-left">
          <p class="title">
            <span>提现</span>
            <img src="@/assets/images/pay-wechat-icon.png" class="type-icon" />
            <span>微信</span>
          </p>
          <p class="time">2019-11-13 20:57:25</p>
        </div>
      </template>
      <template #right-icon>
        <div class="pay-list-right">
          <span class="num">-10.00</span>
          <span class="statue">成功</span>
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
import { Cell } from "vant";
export default {
  name: "accountListItem",
  props: {
    type: {
      type: String,
      default: "1"
    }
  },
  data() {
    return {};
  },
  components: {
    [Cell.name]: Cell
  },
  watch: {},
  mounted() {},
  methods: {}
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
