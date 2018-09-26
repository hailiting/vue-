<template>
  <div class="tabbar">
    <ul :class="isactive">
      <li class="koin"></li>
      <li @click="select('index')" class="index comwidth">首页</li>
      <li @click="select('dd')" class="dd comwidth">大底</li>
      <li @click="select('zd')" class="zd comwidth">中底</li>
      <li @click="select('xg')" class="xg comwidth">鞋跟</li>
      <li class="koin-last"></li>
      <li @click="select('ycl')" class="ycl comwidth wycl">原材料</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isactive: 'index'
    }
  },
  methods: {
    select(s) {
      this.isactive = s
      this.$emit('tab', s)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabbar {
  font-size: 18px;
  font-family: PingFangSC-Regular;
  color: $neutralcolor3;
  text-align: center;
  height: 56px;
  line-height: 56px;
  .comwidth {
    width: 73px;
    height: 56px;
  }
  .koin {
    width: 100px;
    height: 56px;
  }
  .koin-last {
    float: right;
    width: 90px;
    height: 56px;
  }
  .comwidth:nth-child(3) {
    margin-left: 16.1%;
  }
  .comwidth:nth-child(4) {
    margin-left: 16.1%;
  }
  .comwidth:nth-child(5) {
    margin-left: 16.1%;
  }
  .wycl {
    float: right;
  }
  .index .index,
  .dd .dd,
  .xg .xg,
  .zd .zd,
  .ycl .ycl {
    background: rgba(242, 69, 91, 1);
    color: #fff;
    box-shadow: 0px 2px 4px 0px rgba(255, 160, 160, 0.5);
  }
  li {
    float: left;
    cursor: pointer;
  }
}
</style>
