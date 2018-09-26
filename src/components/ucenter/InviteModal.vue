// creat: zhaodianlong
// date: 2018-06-21
<template>
  <el-dialog title="提醒" :visible.sync="show" custom-class="inviteModal">{{content}}
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" @click.stop="closeEvent">取 消</el-button>
      <el-button type="primary" size="mini" @click.stop="checkEvent">确 定</el-button>
    </span>
  </el-dialog>
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
    // 触发关闭事件，初始化时需要进行对应事件的处理
    closeEvent: function () {
      this.$emit('closeEvent')
    },
    // 点击确定按钮的回调事件
    checkEvent: function () {
      this.$emit('checkEvent')
    }
  }
}
</script>
<style lang="scss">
.inviteModal {
  width: 300px;
  .el-dialog__header {
    height: 40px;
    padding: 0 20px;
    line-height: 40px;
    border-bottom: 1px solid #dfe4eb;
    font-size: 16px;
    font-weight: bold;
  }
  .el-dialog__body {
    padding: 25px 20px;
    line-height: 22px;
    font-size: 16px;
    color: #313945;
    border-bottom: 1px solid #dfe4eb;
  }
  .el-dialog__footer {
    padding: 10px 20px;
    text-align: center;
    .el-button:first-child {
      margin-right: 40px;
    }
  }
}
.inviteModal.el-dialog{
  width: 300px;
}
</style>