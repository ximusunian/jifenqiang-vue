<!--
 * @Description: 
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-09-25 19:35:03
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-09-26 13:14:30
-->
<template>
  <div id="certificationBackPage">
    <van-overlay :show="show">
      <div class="container">
        <div class="box">
          <p class="txt">认证文件下载完成后，点击去安装</p>
          <img src="@/assets/images/description_file.png" />
          <div class="btn_box">
            <span class="again_download" @click="reDownload">重新下载</span>
            <span class="to_install" @click="install">去安装</span>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { Overlay } from "vant";
export default {
  name: "certificationBackPage",
  data() {
    return {
      show: true
    };
  },
  components: {
    [Overlay.name]: Overlay
  },
  watch: {},
  created() {
    this.install()
  },
  mounted() {},
  methods: {
    reDownload() {
      location.reload();
    },
    install() {
      let flag = this.$route.query.flag
      let url = `https://jifenqiang.htyvip.com/${decodeURIComponent(flag)}.mobileconfig`
      const a = document.createElement("a");
      a.setAttribute("download", "");
      a.setAttribute("href", url);
      a.click();
    }
  }
};
</script>

<style scoped lang="scss">
#certificationBackPage {
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .box {
      width: 70%;
      text-align: center;
      padding: 0 0.7rem 0.7rem;
      background-color: #ffffff;
      border-radius: 0.2rem;
    }
    .txt {
      color: $color33;
      font-size: 0.426rem;
      margin-top: 1.186rem;
    }
    img {
      width: 100%;
      height: 2.05rem;
      margin-top: 0.5733rem;
    }
    .btn_box {
      display: flex;
      justify-content: space-between;
      margin-top: 0.56rem;
      span {
        width: 3rem;
        height: 1.067rem;
        font-size: 0.48rem;
        text-align: center;
        line-height: 1.067rem;
        border-radius: 0.133rem;
        border: 1px solid #ff6427;
      }
      .again_download {
        color: #ff6427;
      }
      .to_install {
        color: #fff;
        background-color: #ff6427;
      }
    }
  }
}
</style>
