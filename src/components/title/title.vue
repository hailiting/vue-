<template>
  <div class="title">
    {{title}}
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  height: 24px;
  line-height: 22px;
  text-indent: 10px;
  font-size: 18px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  &:before {
    position: absolute;
    top: 2px;
    left: 0;
    content: "";
    width: 4px;
    height: 18px;
    background: $mianlogocolor;
  }
}
</style>