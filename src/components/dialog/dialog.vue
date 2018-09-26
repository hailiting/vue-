<template>
  <div class="dialog" v-show="showMask">
    <div class="dialog-container">
      <div class="dialog-title">{{title}}</div>
      <div class="content">
        <slot></slot>
      </div>
      <div class="btns">
        <div class="text">
          <el-button size="small" @click="confirmBtn" type="primary">{{confirmText}}</el-button>
          <el-button class="common" v-if="cancleText" @click="cancle">取消</el-button>
        </div>
        <!-- <div  @click="confirmBtn">{{confirmText}}</div> -->
        <!-- <div class="text" @click="confirmBtn">{{confirmText}}</div> -->
      </div>
      <div class="close-btn" @click="closeMask">
        <i class="iconfont icon-close"></i>
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
    },
    SampleListData(newval, oldval) {
      this.scrollShow()
    }
  },
  mounted() {
    this.showMask = this.value
  },
  methods: {
    closeMask() {
      this.showMask = false
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
<style lang='scss'>
.dialog {
  button.el-button.el-button--primary.el-button--small {
    width: 68px;
    background: rgba(109, 120, 231, 1);
    box-shadow: 0px 2px 4px 0px rgba(109, 120, 231, 0.5);
    border-radius: 4px;
    // border: 1px solid rgba(71, 85, 219, 1);
  }
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
        display: inline-block;
        margin-top: 30px;
        width: 250px;
        // height: 40px;
        line-height: 20px;
        font-size: 16px;
        color: rgba(49, 57, 69, 1);
        word-wrap: break-word;
        word-break: normal;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(46, 35, 78, 0.5035000000000001);
  z-index: 9999;
  .dialog-container {
    width: 300px;
    height: 190px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 4px 0px rgba(203, 209, 218, 1);
    border-radius: 2px;
    border: 1px solid rgba(203, 209, 218, 1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: relative;
    .dialog-title {
      width: 300px;
      height: 37px;
      font-size: 16px;
      font-family: PingFangSC-Medium;
      color: #2e234e;
      padding: 7px 0 0 20px;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(223, 228, 235, 1);
    }
    .content {
      overflow: hidden;
      height: 98px;
      line-height: 98px;
      text-align: center;
      border-bottom: 1px solid rgba(223, 228, 235, 1);
      // i {
      //   margin-right: 10px;
      // }
    }
    .btns {
      box-sizing: border-box;
      .text {
        margin: 10px auto;
        text-align: center;
      }
    }
    .close-btn {
      position: absolute;
      top: 2px;
      right: 16px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 18px;
      cursor: pointer;
      &:hover {
        font-weight: 600;
      }
    }
  }
}
</style>