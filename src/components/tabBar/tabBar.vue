<template>
    <div class="tabbar" >
      <div class="inner">
        <!-- <h1 class="iconfont icon-LOGOslogan"></h1> -->
        <h1><router-link :to="'/index'"><img src="@/assets/img/www/indexLoge.svg"></router-link></h1>
        <ul :class="isactive">
            <li @click="select('index')" class="index"><router-link :to="'/index'">首页</router-link></li>
            <li @click="select('zd')" class="zd"><router-link :to="'/index/insole'">中底</router-link></li>
            <li @click="select('dd')" class="dd"><router-link :to="'/index/outsole'">大底</router-link></li>
            <li @click="select('xg')" class="xg"><router-link :to="'/index/shoeHeel'">鞋跟</router-link></li>
            <!-- <li @click="select('ycl')" class="ycl"><router-link :to="'/index/materials'">原材料</router-link></li> -->
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isactive: this.tabVal
    }
  },
  props: ['tabVal'],
  watch: {
    tabVal(val) {
      this.isactive = val
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
  position: relative;
  width: 1190px;
  margin: 0 auto;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  .inner {
    height: 50px;
    overflow: hidden;
    // clear: both;
  }
  h1 {
    float: left;
    margin-top: 12px;
    height: 25px;
    width: 230px;
    a {
      display: block;
      height: 25px;
      width: 230px;
      float: left;
    }
    img {
      display: block;
      width: 230px;
      height: 100%;
    }
  }
  ul {
    float: left;
    vertical-align: middle;
    margin-left: 100px;
    li {
      vertical-align: middle;
      display: inline-block;
      *display: inline;
      *zoom: 1;
      margin: 0 25px;
      transition: all 0.3s ease;
      a {
        display: block;
        color: $neutralcolor3;
        line-height: 28px;
        // font-family: "PingFangSC";
        &:after {
          content: "";
          display: block;
          width: 32px;
          height: 4px;
          background-color: #fff;
          transition: all 0.3s ease;
        }
      }
    }
    li:hover {
      a {
        color: #e03535;
        &:after {
          content: "";
          background-color: #fff;
        }
      }
    }
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
  .index .index,
  .dd .dd,
  .xg .xg,
  .zd .zd,
  .ycl .ycl {
    a {
      color: #e03535;
      &:after {
        content: "";
        background-color: #e03535;
      }
    }
  }
}
</style>
