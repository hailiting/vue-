<template>
  <div class="cards">
    <div class="card" @click="sel">
      <div class="firstLine clear">
        <div>{{item.contacts}}</div>
        <p>{{item.phone}}</p>
        <span class="fr" :class="setting==='默认'?'set':''" @click.stop="set">{{setting}}</span>
      </div>
      <div class="secLine">
        {{item.province}}{{item.city}}{{item.county}}{{item.street}}{{item.detailAddress}}
        <!-- <span>{{item.province}}</span>
        <span>{{item.city}}</span>
        <span>{{item.county}}</span>
        <span class="wid">{{item.street}}</span> -->
      </div>
      <!-- <div class="thirLine">{{item.detailAddress}}</div> -->
      <div class="lastLine clear">
        <div @click.stop="dele">删除</div>
        <p @click.stop="eidt">修改</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['item', 'setting'],
  // item: {
  //     type: Object,
  //     default: {}
  //   }
  created() {
  },
  methods: {
    // 派发删除事件
    dele() {
      this.$emit('dele')
    },
    // 派发编辑事件
    eidt() {
      this.$emit('eidt')
    },
    // 派发设置默认地址
    set() {
      this.$emit('set')
    },
    sel() {
      this.$emit('sel')
    }
  }
}
</script>

<style lang="scss" scoped>
.cards {
  // background: #fff;
  // overflow: hidden;
  // margin-bottom: 20px;
  // .common {
  //   height: 138px;
  //   background: #eeeff4;
  //   border-radius: 2px;
  //   border: 1px solid #eeeff4;
  // }
  .card {
    height: 118px;
    padding: 16px 20px;
    cursor: pointer;
    .firstLine {
      height: 26px;
      div {
        float: left;
        height: 25px;
        line-height: 25px;
        font-size: 18px;
        font-family: PingFangSC-Semibold;
        font-weight: 600;
        color: $neutralcolor6;
      }
      p {
        float: left;
        margin-top: 6px;
        margin-left: 12px;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Semibold;
        font-weight: 600;
        color: $neutralcolor6;
      }
      .fr {
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        z-index: 1000;
        color: $neutralcolor6;
      }
      .set {
        width: 42px;
        height: 16px;
        text-align: center;
        line-height: 16px;
        color: $auxiliarymaincolor;
        border: 1px solid $auxiliarymaincolor;
        border-radius: 8px;
        cursor: default;
      }
    }
    .secLine {
      width: 255px;
      height: 60px;
      line-height: 20px;
      margin-top: 12px;
      font-size: 14px;
      font-weight: 400;
      font-family: PingFangSC-Regular;
      color: rgba(102, 102, 102, 1);
      word-wrap: break-word;
      word-break: normal;
      display: -webkit-box;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      -webkit-line-clamp: 3;
      overflow: hidden;
      span {
        font-size: 13px;
      }
    }
    .thirLine {
      height: 18px;
      font-size: 13px;
      font-family: PingFangSC-Regular;
      color: rgba(102, 102, 102, 1);
      text-align: left;
    }
    .lastLine {
      height: 20px;
      line-height: 20px;
      z-index: 1000;
      p {
        float: right;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: $neutralcolor6;
        cursor: pointer;
      }
      div {
        float: right;
        margin-left: 16px;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: $neutralcolor6;
        cursor: pointer;
      }
    }
  }
}
</style>