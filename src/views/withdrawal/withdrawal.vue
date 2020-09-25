<!--
 * @Description: 
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-09-25 09:44:47
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-09-25 13:27:01
-->
<template>
  <div id="withdrawal">
    <navBar title="微信提现"></navBar>

    <div class="container">
      <div class="withdrawal-box">
        <p class="label">姓名</p>
        <van-field v-model="value" placeholder="请输入姓名" />
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
          <span>实际支出 ￥<span class="number">{{param.value}}</span></span>
          <span>我的余额 ￥<span class="number">1.20</span></span>
        </div>
        <div class="withdrawal-btn">提现</div>
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
      value: '',
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
        value: 0
      }
    };
  },
  components: {
    navBar,
    [Field.name]: Field
  },
  watch: {},
  created() {
    this.param.value = this.numberList[0].value
  },
  mounted() {},
  methods: {
    changeNum(index) {
      this.numberList.map((item, idx) => {
        if(idx === index) {
          item.active = true
          this.param.value = item.value
        } else {
          item.active = false
        }
      })
    }
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
}
</style>
