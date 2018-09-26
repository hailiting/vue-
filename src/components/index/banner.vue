<template>
  <div class="indexbanner">
      <el-carousel :interval="3000">
        <el-carousel-item v-for="item in items" :key="item.id">
          <a :href="item.bannerUrl" target="_block">
            <img v-lazy="item.bannerPath">
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>
<script>
import { bannerGet } from '@/api/api'
export default {
  data() {
    return {
      items: ''
    }
  },
  created() {
    bannerGet().then(res => {
      if (res.code === 200) {
        this.items = res.data
      } else {
        this.$message.error(res.msg)
      }
    })
  }
}
</script>

<style lang="scss">
.indexbanner {
  .el-carousel__button {
    display: none;
  }
  .el-carousel__indicators {
    bottom: 14px;
    left: 50%;
    transform: translateX(-50%);
    margin-left: 400px;
    float: right;
    width: 400px;
    text-align: right;
    li {
      display: inline-block;*display:inline;*zoom:1;
    }
  }
  .el-carousel__indicator {
    width: 12px;
    height: 12px;
    background-color: #fff;
    border-radius: 20px;
    padding: 0;
    margin: 0 5px;
    transition: all 0.3s ease;
    &.is-active,
    &:hover {
      width: 20px;
    }
  }
  .el-carousel__arrow--left,
  & .el-carousel__arrow--right {
    left: 50%;
    transform: translateX(-50%);
  }
  .el-carousel__arrow--left {
    margin-left: -580px;
  }
  .el-carousel__arrow--right {
    margin-left: 580px;
  }
  .el-carousel__arrow {
    width: 50px;
    height: 50px;
    font-size: 30px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.1);
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
<style lang="scss" scoped>
.indexbanner {
  height: 500px;
  img {
    position: absolute;
    top: 0;
    left: 50%;
    width: 1920px;
    height: 500px;
    transform: translateX(-50%);
  }
}
</style>
