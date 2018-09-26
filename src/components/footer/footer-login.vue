<template>
  <div class="footerlogin">
    <router-link :to="'/helpCenter/aboutUs'">了解公司</router-link>
    <router-link :to="'/helpCenter/serviceSupport'">服务保障</router-link>
    <router-link :to="'/helpCenter/indemnification'">入驻规则</router-link>
    <p>
      <i>浙ICP备18009350</i>
      <i>经营性网站备案信息</i>
      <i>互联网信用认证平台</i>
      <a href="http://115.159.84.225/#/privacyPlicy" target="_blank" style="color:#666">隐私政策</a>
      <i>认证联盟品牌官网</i>
      <i>可信网站身份验证</i>
      <i>网上交易保障中心</i>
      <i>诚信经营放心消费</i>
    </p>
  </div>
</template>
<script>
export default {
  methods: {
    toPrivice() {
      this.$router.push('/privacyPlicy')
    }
  }
}
</script>

<style lang="scss" scoped>
.footerlogin {
  // background-color: #f0f2f5;
  text-align: center;
  font-size: 12px;
  color: $neutralcolor6;
  line-height: 18px;
  padding: 30px 0;
  position: absolute;
  width: 100%;
  min-width: 1190px;
  bottom: 0;
  left: 0;
  z-index: 99;
  a {
    color: $neutralcolor3;
    padding: 0 5px;
    transition: all .3s ease;
    &:hover {
      color: $mainkeycolor;
    }
  }
  p {
    margin-top: 10px;
    i {
      padding: 0 5px;
    }
  }
}
</style>
