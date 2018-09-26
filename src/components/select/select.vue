<template>
  <div class="select">
    <div v-if="showWhich ==='sample' && sample" class="cont">
        <div v-for="(date,index) in sample" v-if="index<9" :key="date.insoleId">
          <img v-lazy="date.insolebody.insoleImg">
          <p>{{date.insolebody.technology}}</p>
          <p>{{date.insolebody.price}}元/双</p>
        </div>
        {{aa}}
    </div>
    <div v-else-if="showWhich ==='purchase' && purchase" class="cont">
      <div v-for="(date,index) in purchase" v-if="index<3" :key="date.insoleId">
        <img v-lazy="date.insoleImg">
        <p>{{date.technology}}</p>
        <p>{{date.price}}元/双</p>
      </div>
    </div>
    <div v-else>
      <p>购物车为空</p>
    </div>
    <div class="btn"></div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  props: ['tabdetail'],
  data() {
    return {
      showWhich: this.tabdetail,
      sample: [],
      arr: [],
      aa: [
        { a: 1, b: 1 }
      ],
      purchase: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let storage = window.localStorage
      storage.removeItem('insoledatas')
      if (storage.insoledatas) {
        this.sample = JSON.parse(storage.insoledatas).sample
      }
    },
    refalash(items) {
      Vue.set(this.aa, 0, { a: 2, b: 2 })
      this.sample = items
    }
  }
}
</script>
<style lang="scss" scoped>
.select {
  width: 277px;
  background: rgba(48, 45, 58, 1);
  .cont:last-child {
    border: 0;
  }
  .cont {
    // height: 42px;
    border-bottom: 1px solid #464759;
    margin: 0 15px 0 11px;
    font-size: 12px;
    font-family: PingFangSC-Light;
    color: rgba(255, 255, 255, 1);
    line-height: 12px;
    img {
      display: inline-block;*display:inline;*zoom:1;
      vertical-align: top;
      width: 30%;
      height: 30px;
    }
    p {
      display: inline-block;*display:inline;*zoom:1;
      vertical-align: top;
      width: 30%;
      text-align: center;
    }
    div {
      height: 30px;
      line-height: 30px;
      padding: 12px 0;
      // float: left;
      // margin: 16px 0 0 33px;
    }
  }
  .btn {
    height: 26px;
    background: rgba(72, 65, 92, 1);
  }
}
</style>