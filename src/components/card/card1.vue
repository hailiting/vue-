<template>
  <div class="cards">
    <div class="card" @click="select">
      <div class="firstLine clear">
        <div>{{item.contacts}}</div>
        <p>{{item.phone}}</p>
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
        <div @click="dele">删除</div>
        <p @click="eidt">编辑</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['item'],
  // item: {
  //     type: Object,
  //     default: {}
  //   }
  methods: {
    // 派发删除事件
    dele() {
      this.$emit('dele')
    },
    // 派发编辑事件
    eidt() {
      this.$emit('eidt')
    },
    select() {
      this.$emit('select')
    }
  }
}
</script>

<style lang="scss" scoped>
.cards {
  border: 1px solid #eeeff4;
  .card {
    height: 126px;
    padding: 10px 20px 0;
    background-color: #eeeff4;
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
    }
    .secLine {
      // width: 210px;
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
      p {
        float: right;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #6d78e7;
        cursor: pointer;
      }
      div {
        float: right;
        margin-left: 16px;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #ee3d53;
        cursor: pointer;
      }
    }
  }
}
</style>