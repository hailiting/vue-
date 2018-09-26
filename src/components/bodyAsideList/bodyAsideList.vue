<template>
  <div class="asidelist" :style="{'opacity': opacitysize}">
    <ul>
      <li @click="GoToTop">
        <i class="el-icon-caret-top"></i>
        <p>回顶部</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      opacitysize: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.getHeight, true)
  },
  destroyed() {
    window.removeEventListener('scroll', this.getHeight, true)
  },
  methods: {
    getHeight() {
      // let cromHeight = document.body.clientHeight
      // 监听浏览器高度
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 800) {
        this.opacitysize = 1
      } else {
        this.opacitysize = 0
      }
    },
    GoToTop(fn) {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      let time = setInterval(function() {
        if (scrollTop > 0) {
          scrollTop -= 50
          document.body.scrollTop = scrollTop
          window.scrollTo(0, scrollTop)
        } else {
          clearInterval(time)
        }
      }, 1)
    },
    scroll(scrollTop) {}
  }
}
</script>

<style lang="scss" scoped>
.asidelist {
  width: 50px;
  position: fixed;
  bottom: 15%;
  left: 53%;
  -webkit-transform: translateX(50%);
  transform: translateX(-50px);
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  margin-left: 660px;
  z-index: 9999;
  transition: all 0.3s ease;
  ul {
    li {
      height: 60px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      cursor: pointer;
      i {
        line-height: 26px;
        font-size: 30px;
        padding-top: 2px;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
