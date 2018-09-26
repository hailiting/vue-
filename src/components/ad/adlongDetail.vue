<template>
  <ul>
    <li class="adlong inner" v-for="(item,index) in items" :key="item.id" v-if="index === adIndex && item.enble">
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
    adSpaceGet('4').then(res => {
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
.adlong {
  margin-top: 30px;
}
</style>
