<template>
  <div class="ufooter">
    <p>Copyright 2018 © 浙江瀚越太古科技服务有限公司 All Rights Reserved. 浙ICP备18009350号 客服：0571-89871111</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      test: 0
    }
  }
}
</script>
<style lang="scss" scoped>
.ufooter{
  position: fixed;
  height: 33px;
  line-height: 33px;
  background: #eeeff4;
  width: 100%;
  bottom: 0;
  left: 150px;
  // padding: 10px 35px;
  p{
    height:16px;
    font-size:11px;
    font-family:PingFangSC-Regular;
    color:rgba(153,153,153,1);
    text-align: center;
  }
}
</style>