<template>
  <ul class="adstylelist">
    <li v-for="(item,index) in items" :key="item.id" v-if="index === adIndex">
      <a v-if="item.spaceUrl" :href="item.spaceUrl" target="_block">
        <img :src="item.spacePath">
      </a>
      <img v-else :src="item.spacePath">
    </li>
  </ul>
</template>
<script>
import { adSpaceGet } from '@/api/api'
export default {
  props: ['adIndex'],
  data() {
    return {
      items: ''
    }
  },
  created() {
    adSpaceGet('3').then(res => {
      if (res.code === 200) {
        this.items = res.data
      } else {
        this.$message.error(res.msg)
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.adstylelist li {
  width: 260px;
  height: 650px;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
