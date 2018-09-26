// create: zhaodianlong
// date: 2018-06-21
<template>
  <div class="noorder">{{data.content}}
  </div>
</template>
<script>
export default {
  props: {
    data: {
      required: true,
      default: {
        content: '暂无数据'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .noorder{
    margin: 5px 0;
    text-align: center;
    font-size: 16px;
    color:$neutralcolor6;
  }
</style>