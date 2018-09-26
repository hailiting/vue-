<template>
  <div class="footerindex" v-show="!forgotpahe" ref="footer">
    <div class="inner" v-if="indexPage">
      <div class="top">
        <dl>
          <dt>帮助中心</dt>
          <dd><router-link :to="'/helpCenter/accountManagement'">账户管理</router-link></dd>
          <dd><router-link :to="'/helpCenter/shoppingGuide'">购物指南</router-link></dd>
          <dd><router-link :to="'/helpCenter/orderOperation'">订单操作</router-link></dd>
        </dl>
        <dl>
          <dt>服务支持</dt>
          <dd><router-link :to="'/helpCenter/serviceSupport'">服务保障</router-link></dd>
          <dd><router-link :to="'/helpCenter/indemnification'">入驻规则</router-link></dd>
        </dl>
        <dl>
          <dt>关于我们</dt>
          <dd><router-link :to="'/helpCenter/aboutUs'">了解公司</router-link></dd>
          <dd><router-link :to="'/helpCenter/contact'">联系我们</router-link></dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd><img src="@/assets/img/www/erweima.jpg"></dd>
        </dl>
      </div>
      <div>
        <p>0571-89871111</p>
        <p class="btn">联系我们</p>
      </div>
    </div>
    <div class="bottom" :class="{'tcenter':indexPage}">
      <div class="inner">
        <img src="@/assets/img/www/indexLoge02.png" v-if="indexPage">
        <p>
          <i>浙ICP备18009350</i>
          <i>经营性网站备案信息</i>
          <i>互联网信用认证平台</i>
          <a href="http://115.159.84.225/#/privacyPlicy" target="_blank" style="color:#999">隐私政策</a>
          <i>认证联盟品牌官网</i>
          <i>可信网站身份验证</i>
          <i>网上交易保障中心</i>
          <i>诚信经营放心消费</i>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      indexPage: true,
      forgotpahe: false
    }
  },
  watch: {
    $route(to, from) {
      if (to.path === '/index' || to.path.indexOf('/helpCenter') === 0) {
        this.indexPage = true
        this.forgotpahe = false
      } else if (to.path === '/forgetpassword/company') {
        this.forgotpahe = true
      } else {
        this.indexPage = false
        this.forgotpahe = false
      }
    }
  },
  created() {
    if (
      this.$route.path === '/index' ||
      this.$route.path.indexOf('/helpCenter') === 0
    ) {
      this.indexPage = true
      this.forgotpahe = false
    } else if (this.$route.path === '/forgetpassword/company') {
      this.forgotpahe = true
    } else {
      this.forgotpahe = false
      this.indexPage = false
    }
  },
  methods: {
    getHeight() {
      this.$nextTick(function () {
        // 监听浏览器高度
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
        // let footerTop = this.$refs.footer.clientHeight
        let footerTop = scrollHeight - scrollTop
        if (footerTop < 900) {
          this.$emit('getFooterTop', true)
        } else {
          this.$emit('getFooterTop', false)
        }
      })
    },
    toPrivice() {
      this.$router.push('/privacyPlicy')
    }
  },
  mounted() {
    window.addEventListener('scroll', this.getHeight, true)
  },
  destroyed() {
    window.removeEventListener('scroll', this.getHeight, true)
  }
}
</script>
<style lang="scss" scoped>
.footerindex {
  background-color: $neutralcolor3;
  color: #fff;
  text-align: left;
  position: absolute;
  width: 100%;
  min-width: 1190px;
  bottom: 0;
  left: 0;
  z-index: 999;
  .inner {
    .top {
      height: 210px;
      overflow: hidden;
    }
    dt {
      padding-top: 30px;
      font-size: 16px;
      // font-family: 'PingFangSC-Medium';
      font-weight: 500;
      line-height: 60px;
    }
    a {
      color: #fff;
      font-size: 14px;
      line-height: 30px;
      &:hover {
        color: $mainkeycolor;
      }
    }
    p {
      text-align: center;
      font-size: 24px;
      // font-family: "PingFangSC-Medium";
      font-weight: normal;
      line-height: 30px;
      height: 30px;
      padding-bottom: 20px;
      &.btn {
        padding-bottom: 0;
        width: 120px;
        background-color: $mianlogocolor;
        font-size: 12px;
        margin: 0 auto;
      }
    }
    div {
      display: inline-block;
      *display: inline;
      *zoom: 1;
      vertical-align: middle;
      &:first-child {
        // width: 880px;
        padding-left: 75px;
      }
      dl {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        vertical-align: top;
        width: 214px;
        dd {
          img {
            width: 90px;
            height: 90px;
            margin-bottom: 40px;
          }
        }
      }
    }
  }
  .bottom {
    text-align: center;
    color: $neutralcolor9;
    border-top: 1px solid $neutralcolor6;
    .inner {
      padding-left: 75px;
      padding-top: 8px;
      padding-bottom: 8px;
      width: 1115px;
      img {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        width: 110px;
        height: 26px;
      }
    }
    &.tcenter {
      text-align: left;
    }
    img,
    & p {
      display: inline-block;
      *display: inline;
      *zoom: 1;
      vertical-align: middle;
      background-color: transparent;
    }
    img {
      height: 26px;
      margin-right: 38px;
    }
    p {
      font-size: 12px;
      line-height: 26px;
      padding: 0;
      i {
        padding: 0 5px;
      }
    }
    a {
      font-size: 12px;
    }
  }
}
</style>