<template>
  <div class="payDialog" v-show="showMask">
    <div class="dialog-container">
      <div class="dialog-title">微信支付</div>
      <div class="content">
        <slot></slot>
      </div>
      <div class="btns">
        <div class="text">
          请使用
          <span>微信</span> 扫一扫
        </div>
        <div class="texts">
          二维码完成支付
        </div>
      </div>
      <div class="close-btn" @click="closeMask">
        <i class="iconfont icon-guanbi"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {},
    // 类型包括 defalut 默认， danger 危险， confirm 确认，
    type: {
      type: String,
      default: 'default'
    },
    title: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    cancleText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showMask: false
    }
  },
  watch: {
    value(newVal, oldVal) {
      this.showMask = newVal
    },
    showMask(val) {
      this.$emit('input', val)
    }
  },
  mounted() {
    this.showMask = this.value
  },
  methods: {
    closeMask() {
      this.showMask = false
      // 模态框消失通知父组件关闭定时任务
      this.$emit('closeModel')
    },
    closeBtn() {
      this.$emit('cancel')
      this.closeMask()
    },
    confirmBtn() {
      this.$emit('confirm')
      this.closeMask()
    },
    cancle() {
      this.closeMask()
    }
  }
}
</script>
<style lang=scss>
.dialog {
  .content {
    > div {
      font-size: 0;
      .icon-chenggong {
        color: #13ba43;
      }
      .icon-cuowu {
        color: #ee3d53;
      }
      span {
        font-size: 16px;
        color: rgba(49, 57, 69, 1);
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.payDialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(46, 35, 78, 0.5035000000000001);
  z-index: 999;
  .dialog-container {
    width: 350px;
    height: 400px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 4px 0px rgba(203, 209, 218, 1);
    border-radius: 2px;
    border: 1px solid rgba(203, 209, 218, 1);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: relative;
    .dialog-title {
      width: 350px;
      height: 28px;
      text-align: center;
      font-size: 20px;
      font-family: PingFangSC-Medium;
      color: rgba(49, 57, 69, 1);
      line-height: 28px;
      margin-top: 15px;
    }
    .content {
      margin: 0 auto;
      margin-top: 35px;
      overflow: hidden;
      width: 243px;
      height: 244px;
    }
    .btns {
      text-align: center;
      margin-top: 15px;
      overflow: hidden;
      .text {
        font-size: 14px;
        font-family: PingFangSC-Regular;
        color: rgba(67, 72, 82, 1);
        span {
          color: #ee3d53;
        }
      }
      .texts {
        font-size: 14px;
        font-family: PingFangSC-Regular;
        color: rgba(67, 72, 82, 1);
        margin-top: 5px;
      }
    }
    .close-btn {
      position: absolute;
      top: 16px;
      right: 16px;
      line-height: 30px;
      text-align: center;
      font-size: 18px;
      cursor: pointer;
      width: 14px;
      height: 14px;
      color: rgba(74, 74, 74, 1);
      &:hover {
        font-weight: 600;
      }
    }
  }
}
</style>