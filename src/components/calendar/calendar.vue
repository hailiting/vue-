<template>
  <div class="fl calendar-box">
    <p class="title">{{months}}</p>
    <ul class="clear calendar-top">
      <li v-for="(list,index) in weeks" :key="index">{{list}}</li>
    </ul>
    <ul class="clear calendar-center">
      <li v-for="(list,index) in day" :key="index" @click="sel(ind,list)" :class="list===active?'active':''">
        <span :class="[not[index].status===''?'not':'',dat===list?'date':'']">{{list}}</span>
        <i v-if="not[index].status&&not[index].status!=='2004'"></i>
      </li>
    </ul>
  </div>
</template>

<script>
// import { dayjs } from '@/common/js/day'
export default {
  // day:天 month:月  dat:当前 ind:区分那个月 not:区分没有顶单
  props: ['day', 'months', 'dat', 'ind', 'not'],
  data() {
    return {
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      active: ''
    }
  },
  methods: {
    sel(ind, list) {
      this.active = list
      if (list !== '') {
        let d = this.month.replace('年', '-').replace('月', '-')
        this.$emit('sel', this.ind, `${d}${list}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar-box {
  .title {
    height: 22px;
    line-height: 22px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }
  .calendar-top {
    width: 308px;
    border-bottom: 1px solid $neutralcolord7;
    li {
      float: left;
      width: 12px;
      height: 17px;
      line-height: 17px;
      padding: 10px 16px;
    }
  }
  .calendar-center {
    width: 308px;
    li {
      position: relative;
      float: left;
      width: 15px;
      height: 17px;
      line-height: 17px;
      text-align: center;
      padding: 10px 14px;
      cursor: pointer;
      span {
        display: block;
      }
      i {
        position: absolute;
        left: 18px;
        bottom: 3px;
        width: 6px;
        height: 6px;
        background-color: #d24844;
        border-radius: 50%;
      }
      &:hover {
        color: #d24844;
      }
      .not {
        color: $neutralcolord7;
      }
      .date {
        color: #d24844;
      }
    }
  }
}
</style>