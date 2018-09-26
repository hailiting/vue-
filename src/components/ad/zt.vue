<template>
  <div class="zt inner">
    <ul>
      <li v-for="item in items" :key="item.id">
        <a v-if="item.spaceUrl" :href="item.spaceUrl" target="_block">
          <img :src="item.spacePath">
        </a>
        <img v-else :src="item.spacePath">
      </li>
    </ul>
  </div>
</template>
<script>
import { adSpaceGet } from '@/api/api'
export default {
  data() {
    return {
      items: ''
    }
  },
  created() {
    adSpaceGet('1').then(res => {
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
.zt {
  margin: 30px auto 0;
  ul {
    height: 170px;
    li {
      float: left;
      width: 275px;
      height: 170px;
      margin-left: 30px;
      position: relative;
      overflow: hidden;
      &:first-child {
        margin-left: 0;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all 0.3s ease;
        &:hover {
          transform: scale(1.02);
          // border: 1px solid $neutralcolord7;
          // box-shadow: 0 0 7px #c7c7c7;
        }
      }
    }
  }
}
</style>
