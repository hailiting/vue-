// create: zhaodianlong
// date: 2018-06-21
<template>
  <div class="inviteNotice" v-if="show">
    <img class="invite-icon" src="../../assets/img/ucenter/message.png" alt="">{{content}}
    <el-button class="sureBtn" type="primary" size="mini" @click.stop="checkEvent">确定</el-button>
  </div>
</template>
<script>
export default {
  props: ['show'],
  data() {
    return {
      content: ''
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let cont = JSON.parse(localStorage.getItem('companyInvite')).content
      if (cont) {
        this.content = cont
      }
    },
    // 点击确定按钮的回调事件
    checkEvent: function () {
      this.$emit('checkEvent')
    }
  }
}
</script>
<style lang="scss" scoped>
.inviteNotice {
  min-width: 1100px;
  height: 40px;
  line-height: 40px;
  background: #fff;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.4),
    0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  border: 1px solid rgba(211, 220, 230, 1);
  margin-top: 10px;
  .invite-icon {
    vertical-align: middle;
    margin-right: 10px;
    margin-top: -1px;
  }
  .sureBtn {
    float: right;
    margin-right: 105px;
    margin-top: 6px;
  }
}
</style>