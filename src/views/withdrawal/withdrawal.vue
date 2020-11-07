<!--
 * @Description: 
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-09-25 09:44:47
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-07 14:35:59
-->
<template>
  <div id="withdrawal">
    <navBar title="支付宝提现"></navBar>

    <div class="container">
      <div class="withdrawal-box">
        <p class="label">姓名</p>
        <van-field v-if="isSucceed" v-model="param.realName" placeholder="请输入姓名" readonly/>
        <van-field v-else v-model="param.realName" placeholder="请输入姓名"/>
        <p class="label" style="margin-top: 0.5rem">支付宝账号</p>
        <van-field v-if="isSucceed" v-model="param.alipayChar" placeholder="请输入支付宝账号" readonly/>
        <van-field v-else v-model="param.alipayChar" placeholder="请输入支付宝账号"/>
        <p class="title">提现金额</p>
        <div class="withdrawal-num-list">
          <span v-for="(item, index) in numberList"
           :key="index" :class="['withdrawal-num-list-item ', item.active? 'item-active' : '']"
           @click="changeNum(index)"
           >
           ￥{{item.value}}
          </span>
        </div>
        <div class="withdrawal-info">
          <span>实际支出 ￥<span class="number">{{param.amount}}</span></span>
          <span>我的余额 ￥<span class="number">{{amount}}</span></span>
        </div>
        <div class="withdrawal-btn" @click="toWithdrawal">提现</div>
        <div class="withdrawal-tips">
          <p>1. 每天只能提现一笔</p>
          <p>2. 提现需要1个工作日审核后到账</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/NavBar";
import { Field } from "vant";
export default {
  name: "withdrawal",
  data() {
    return {
      numberList:[
        {
          value: 10,
          active: true
        },
        {
          value: 30,
          active: false
        },
        {
          value: 50,
          active: false
        },
        {
          value: 100,
          active: false
        },
        {
          value: 500,
          active: false
        },
        {
          value: 1000,
          active: false
        },
        {
          value: 2000,
          active: false
        },
      ],
      param: {
        amount: 0,
        payType: 0,
        realName: "",
        alipayChar: "",
        remark: "",
      },
      password: "",
      amount: 0,
      isSucceed: false,
    };
  },
  components: {
    navBar,
    [Field.name]: Field,
  },
  created() {
    this.amount = JSON.parse(localStorage.getItem("userInfo")).amount
    this.param.amount = this.numberList[0].value
    this.getAliPayInfo()
  },
  mounted() {},
  methods: {
    getAliPayInfo() {
      this.$api.getAliPayInfo().then(res => {
        if(res.success) {
          let result = res.result
          if(result.isSucceed) {
            this.isSucceed = true
            this.param.realName = result.alipayName
            this.param.alipayChar = result.alipayChar
          }
        }
      })
    },
    changeNum(index) {
      this.numberList.map((item, idx) => {
        if(idx === index) {
          item.active = true
          this.param.amount = item.value
        } else {
          item.active = false
        }
      })
    },
    toWithdrawal() {
      if(this.param.realName == "" || this.param.realName == null) {
        this.$toast("请填写真实姓名!")
      } else if(this.param.alipayChar == "" || this.param.alipayChar == null) {
        this.$toast("请填写支付宝账号")
      } else if(this.param.amount > this.amount) {
        this.$toast("提现金额不能大于余额！")
      } else {
        this.$api.requestPay(this.param).then(res => {
        if(res.success) {
          this.$toast("提现申请已发出,请等待客服处理")
          setTimeout(() => {
            this.$router.replace("/withdrawalSuccess")
          }, 1200)
        } else {
          this.$toast(res.error.message)
        }
      })
      }
    },
  }
};
</script>

<style scoped lang="scss">
#withdrawal {
  min-height: 100vh;
  background: #f5f5f5;
  .container {
    padding: 0.3rem 0.3rem 0 0.3rem;
    .withdrawal-box {
      padding: 0.3rem 0.5rem;
      background: #fff;
      border-radius: 0.25rem;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0.03rem;
      p.label {
        font-size: 0.5rem;
        color: $color33;
        margin-bottom: 0.1rem;
      }
      .van-cell {
        padding: 0.26667rem 0.42667rem 0.26667rem 0;
        font-size: 0.44rem;
        color: $color99;
      }
      .van-cell::after {
        left: 0;
        right: 0;
      }
      p.title {
        font-size: 0.5rem;
        color: $color33;
        margin-top: 0.4rem;
      }
      .withdrawal-num-list {
        display: flex;
        flex-wrap: wrap;
        padding-top: 0.1rem;
        // justify-content: space-between;
        &-item {
          width: 2.4rem;
          height: 1.33rem;
          font-size: 0.48rem;
          font-family: number;
          color: #3e3e3e;
          border: 1.4px solid #c2c2c2;
          border-radius: 0.2rem;
          text-align: center;
          line-height: 1.33rem;
          margin-top: 0.3rem;
          margin-right: 0.46rem;
        }
        &-item:nth-child(3n + 0) {
          margin-right: 0;
        }
        .item-active {
          color: $themeColor;
          border: 1.4px solid $themeColor;
        }
      }
      .withdrawal-info {
        display: flex;
        justify-content: space-between;
        margin-top: 0.5rem;
        font-size: 0.43rem;
        .number {
          font-weight: number;
        }
      }
      .withdrawal-btn {
        width: 100%;
        height: 1.3rem;
        text-align: center;
        font-size: 0.45rem;
        color: #FFF;
        line-height: 1.3rem;
        border-radius: 1.3rem;
        background: #03C100;
        margin-top: 0.7rem;
      }
      .withdrawal-tips {
        margin-top: 0.4rem;
        p {
          color: #777777;
          font-size: 0.38rem;
        }
        p:not(:first-child) {
          margin-top: 0.22rem;
        }
      }
    }
  }
  .passwordTitle {
    font-size: 0.5rem;
    text-align: center;
    margin: 0.5rem 0;
  }
}
</style>
