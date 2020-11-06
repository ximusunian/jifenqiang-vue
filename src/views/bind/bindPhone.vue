<!--
 * @Description: 绑定手机
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-26 13:48:21
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-06 09:15:07
-->
<template>
  <div id="bindPhone">
    <navBar title="绑定手机"></navBar>

    <img src="@/assets/images/login_bg.png" />

    <div class="container">
      <div class="form">
        <van-field
          v-model="phone"
          label=""
          left-icon="phone-o"
          placeholder="请输入手机号"
          maxlength="11"
          :formatter="trim"
        />
        <van-field
          v-model="sms"
          center
          clearable
          left-icon="comment-o"
          label=""
          placeholder="请输入验证码"
        >
          <template #button>
            <div class="field-right">
              <span class="line"></span>
              <van-button size="small" type="primary" :disabled="getSmsState()" @click="sendSms">{{code_btn_txt}}</van-button>
            </div>
          </template>
        </van-field>
        <div class="btn">
          <van-button type="primary" :disabled="getCommitState()" @click="commit">确认绑定</van-button>
        </div>
      </div>
    </div>

    <img src="@/assets/images/lemon_bg.png" class="bottom-bg" />
  </div>
</template>

<script>
import navBar from "@/components/NavBar";
import { Field, Button } from "vant";
import checkers from "@/utils/Checkers";
export default {
  name: "bindPhone",
  data() {
    return {
      phone: "",
      sms: "",
      countdown: 60,  // 倒计时
      code_btn_txt: '获取验证码',
    };
  },
  components: {
    navBar,
    [Field.name]: Field,
    [Button.name]: Button
  },
  watch: {},
  mounted() {},
  methods: {
    trim(value) {
      return value.replace(/\s+/g,"")
    },
    getSmsState() {
      if(this.phone === '') {
        return true
      } else {
        if (this.code_btn_txt === '获取验证码') {
          return false
        } else {
          return true
        }
      }
    },
    sendSms() {
      if(!checkers.isPhone(this.phone)) {
        this.$toast('请输入正确的手机号')
      } else {
        this.$api.sendCaptchaCode({mobile: this.phone}).then(res => {
          console.log(res);
          if(res.data.success) {
            this.$toast("发送成功")
            this.setCodeTime()
          } else {
            this.$toast(res.error.message)
          }
        })
      }
    },
    getCommitState() {
      if(this.phone === "" || this.sms === "") {
        return true
      } else {
        return false
      }
    },
    commit() {
      let data = {
        mobile: this.phone,
        captcha: this.sms
      }
      this.$api.bindMobile(data).then(res => {
        if(res.success) {
          this.$toast("绑定成功");
          localStorage.setItem("hasBindPhone", "true")
          setTimeout(() => {
            this.$router.replace("/bindWeChat")
          }, 1200);
        } else {
          this.$toast(res.error)
        }
      })
    },
    // 验证码倒计时
    setCodeTime() {
      if (this.countdown === 1) {
        this.countdown = 60
        this.code_btn_txt = '获取验证码'
      } else {
        this.countdown -= 1
        this.code_btn_txt = (this.countdown).toString() + '秒后重发'
        this.timer = setTimeout(function () {
          this.setCodeTime()
        }.bind(this), 1000)
      }
    },
  }
};
</script>

<style scoped lang="scss">
#bindPhone {
  min-height: 100vh;
  position: relative;
  img {
    width: 100%;
  }
  .bottom-bg {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .container {
    position: relative;
    padding: 0 0.4rem;
    margin-top: -2.5rem;
    .form {
      padding: 0.7rem 0 1.3rem;
      border-radius: 0.133rem;
      background: #fff;
      box-shadow: 0 0 0.2rem #efefef;
      .van-cell {
        font-size: 0.4rem;
        padding-top: 0.45rem;
        padding-bottom: 0.3rem;
      }
      
      .field-right {
        display: flex;
        align-items: center;
        .line {
          width: 1px;
          height: 0.5rem;
          background: #D6D6D6;
        }
      }
      .btn {
        padding: 0 0.42667rem;
        margin-top: 1.013rem;
      }
      .van-button--small {
        background: none;
        color: #ff6427;
        border: none;
        font-size: 0.4rem;
      }
      .van-button--normal {
        width: 100%;
        height: 1.066rem;
        background-color: #ff6427;
        border-radius: 0.133rem;
        border: 0.02667rem solid #ff6427;
        font-size: 0.373rem;
      }
    }
  }
}
</style>
