<template>
  <div class="loading-box" v-if="bSwitch">
    <i class="el-icon-loading"></i>
  </div>
</template>
<script>
export default {
  props: ['bSwitch', 'minHeight']
}
</script>
<style lang="scss" scoped>
.loading-box{
  height: calc(100vh - 280px);
  position: relative;
}
.el-icon-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 30px;
  margin-left: -15px;
  margin-top: -15px;
}
</style>
