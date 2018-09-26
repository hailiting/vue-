<template>
  <div class="triangle-left">
    <i class="triangle" style=""></i>
    <div class="squre">{{count}}</div>
  </div>
</template>
<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style lang="scss" scoped>
.triangle-left{
  display: inline-block;*display:inline;*zoom:1;
  .triangle{
    width: 0;
    height: 0;
    font-size: 0px;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    border-right: 4px solid $auxiliarymaincolor;
    vertical-align: middle;
  }
  .squre{
    padding: 0 5px;
    background:$auxiliarymaincolor;
    color: #fff;
    display: inline-block;*display:inline;*zoom:1;
    line-height: 16px;
    border-radius: 1px;
  }
}
</style>