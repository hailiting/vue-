<template>
  <div class="crumbs">
    <div class="inner">
      <router-link :to="'/index'" class="left">首页</router-link>
      <i class="el-icon-arrow-right left" ></i>
      <router-link :to="'/index/insole'" class="left">中底</router-link>
      <span v-if="crumbslink" :title="crumbslink">
        <i class="el-icon-arrow-right left"></i>
        <em>{{crumbslink}}</em>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['crumbslink']
}
</script>
<style lang="scss" scoped>
.crumbs {
  overflow: hidden;
  height: 58px;
  border-top: 1px solid $neutralcolord7;
  font-size: 12px;
  color: $neutralcolor3;
  // font-family: "PingFangSC-Regular";
  line-height: 58px;
  width: 100%;
  .left {
    float: left;
  }
  .el-icon-arrow-right {
    margin-top: 25px;
  }
  span {
    em {
      width: 132px;
      height: 58px;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
