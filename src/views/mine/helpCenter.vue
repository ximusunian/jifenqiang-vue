<!--
 * @Description: 帮助中心
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-25 09:28:09
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-09-26 15:12:09
-->
<template>
   <div id="helpCenter">
     <navBar title="帮助中心"></navBar>

     <van-collapse v-model="activeNames">
      <van-collapse-item title="关于任务审核" name="1">
        1、为什么审核失败审核失败的原因一般是用户没有按照任务步骤完成任务，导致审核失败，具体原因可以联系客服。
        2、审核时间任务分为自动审核，就是提交任务系统后系统立刻审核，马上可以得到审核结果，另外一种需要平台人员人工参与审核，这个任务一般奖金较。
      </van-collapse-item>
      <van-collapse-item title="收益及提现" name="2">
        1、签到收益签到也是有收益的，每周一至周五连续5天签到即可抢夺红包，获取现金收益。
        2、任务收益在任务审核成功后自动到账的，任务完成的越多，收益越多。
        3、粉丝收益自己收的徒弟越多，收益越多。
        4、提现不到账提款1-2个工作日到账，如果遇到没有到。
      </van-collapse-item>
      <van-collapse-item title="任务更新" name="3">
        1、任务数量每天完成下载任务，下载任务随时都会变化，所有任务都是限时限量的。
        2、任务投放时间一般下午任务最多，更新大量 任务，大家可以经常看看。
      </van-collapse-item>
    </van-collapse>
   </div>
</template>

<script>
import navBar from "@/components/NavBar";
import { Collapse, CollapseItem } from 'vant';
export default {
  name: "helpCenter",
  data() {
    return {
      activeNames: ['0'],
    }
  },
  components: {
    navBar,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  },
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss">
#helpCenter {
  .van-hairline--top-bottom::after {
    border-width: 0.02667rem 0;
    border-top: 0;
  }
}
</style>
