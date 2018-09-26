// creat: zhaodianlong
// date: 2018-06-20
<template>
  <el-dialog title="委托加工合同" :visible.sync="data.show" custom-class="contractmodal" top="4vh" :lock-scroll="false">
    <el-scrollbar>
      <div class="box">
        <p class="mb15">定制人（甲方）：{{contractData.orderCompanyName}}</p>
        <p class="mb15">承揽人（乙方）：瀚越太古科技服务有限公司</p>
        <p>根据《中华人民共和国合同法》和有关规定，经双方协商一致，订立本合同。</p>
        <p>一、商品名称、规格型号、计量单位、数量、单价、金额及交货时间：</p>
        <table class="order-table" border="1">
          <tbody>
            <tr>
              <td>品名</td>
              <td>加工工序</td>
              <td>型号</td>
              <td>单位</td>
              <td>数量</td>
              <td>单价(元)</td>
              <td>金额(元)</td>
              <td>交期</td>
            </tr>
            <tr>
              <td>{{contractData.contractBaseProductName}}</td>
              <td>{{contractData.contractBaseWorkmanship}}</td>
              <td>{{contractData.contractBaseModel}}</td>
              <td>{{contractData.contractBaseUnit}}</td>
              <td>{{contractData.totalAmount}}</td>
              <td>{{contractData.contractBasePrice | numFormate}}</td>
              <td>{{contractData.contractBaseAmount | numFormate}}</td>
              <td>
                <span v-if="contractData.contractBaseExpectTime">{{contractData.contractBaseExpectTime | dateFormate}}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <p>1.甲方按工艺要求提供：注塑模具、刀模、楦头各一套，乙方负责提供环保PP料，针扎棉，1.5EVA、注塑、下料、整修、印子、贴合、压机、砂轮及产品打包。具体生产数量以生产指令单为准，以上为含税价格；</p>
        <p>2.要求乙方领完材料后，每天按约定的产能进行生产；</p>
        <p>3.甲方外发乙方的材料，乙方绝不可以转发第三方，如发现将由甲方给予处罚。</p>
        <p>二、甲方提供的材料及时间</p>
        <table class="order-table" border="1" style="table-layout:fixed;">
          <thead>
            <tr>
              <th>工具用料</th>
              <th>面部用料</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1.指令单及客户要求一份;2.工艺制造书及用量耗用表各一份;3.色卡各一套;
              </td>
              <td>
                1.注塑模具，刀模，楦头各一套，钢芯
              </td>
            </tr>
          </tbody>
        </table>
        <p>（以上进度如果因甲方材料或确认延误的需双方另行确定交货时间）</p>
        <p>三、环保要求：甲乙双方所有的原、辅料必须达到甲方公司要求的环保要求，任何一方的材料达不到要求的，应承担赔偿责任。</p>
        <p>四、乙方对甲方提供的材料的检验标准、时间及提出异议的期限的要求：乙方应自收到甲方提供的原、辅材料和配料之时对数量进行核对，乙方如有数量异议，应在收到货物一日以内以书面形式向甲方提出，否则视为验收合格。乙方不得使用其他的产品替代甲方提供的材料，乙方隐瞒原材料的缺陷或使用不符合合同规定的原材料而影响产品质量时，乙方应赔偿甲方损失，包括但不限于甲方物料损失、重做的费用、因违约给第三方的赔偿及甲方实现权利的一切费用等，并向甲方支付加工费总额的百分之三十作为违约金。</p>
        <p>五、甲方向乙方按工艺用量提供材料之后，其他拼补料由乙方需按照实际进行储备。</p>
        <p>六、加工物的质量与技术要求：按产品工艺单要求及甲方品管部签订的要求封样。</p>
        <p>七、乙方对加工物质量和原、辅材料负责的期限及条件要求：非甲方材料问题外的产品品质质量保证期为十二个月。</p>
        <p>八、运输责任：乙方到甲方领料，完成生产后送货到甲方指定仓库，运输费用乙方承担。</p>
        <p>九、加工物的检验标准，方法，地点，期限及检验方法：由甲方或者授权代表在乙方包装装箱前验收并出具验收证明，乙方可凭借检验意见及本合同第十条的规定向甲方结算货款，该证明是仅为初步验收结果，在质保期内，甲方发现乙方加工的产品有质量问题的，乙方对质量问题产品应承担赔偿责任。</p>
        <p>十、加工费的结算方式及期限：加工完成的次月后，乙方凭入库单及合同协议办理结算，次次月后结账付款。</p>
        <p>十一、违反合同的责任</p>
        <p>双方签订合同且乙方已接收甲方的材料并开始加工生产的，甲方不可以中途撤单，否则应向乙方支付违约金，违约金为加工费的百分之三十；</p>
        <p>延期交货违约责任：乙方没有在本合同规定的时间履行交货义务的，每超期一天甲方扣加工费的百分之二作为罚金，作为乙方对甲方的延时补偿。延期一天，乙方仍不能交货的，甲方有权解除合同。乙方应赔偿甲方因延期造成的损失，包括但不限于甲方因违约给第三方的赔偿及甲方实现权利的一切费用，并向甲方支付加工费总额的百分之三十作为违约金。</p>
        <p>甲方逾期提供材料使乙方无法按期交货的，责任由甲方承担，交货期顺延（拼补材料除外）。</p>
        <p>乙方由于保管不善，致使甲方提供的原材料、设备、包装物及其他物品毁损、灭失的，应当赔偿甲方因此造成的损失，因导致延期交货的，乙方应当承担延期交货的违约责任。</p>
        <p>合同双方应本着诚实守信的原则履行合同，如有违反应承担违约责任，本合同规定的各项违约责任可叠加适用。</p>
        <p>十二、纠纷解决方式：友好协商解决，协商不成的，则在甲方所在地的人民法院提起诉讼</p>
        <p>十三、特别约定事宜</p>
        <p>1.乙方对产品的制作工艺质量和自供的原、辅材料负责，质保期限为十二个月，时间从甲方或其制定单位在产品入库单的收货日算起。如因甲方提供的原、辅材料的质量问题，乙方概不承担责任；</p>
        <p>2.乙方对甲方提供的款式、图纸、指令单等技术资料进行保密，不得将甲方相关材料外泄，或用于自行加工、销售，如有乙方违反承诺的，必须向甲方支付此款总订单出厂价两倍的赔偿金，如该赔偿金无法覆盖甲方损失的，乙方应赔偿甲方的损失，包括但不仅限于甲方因违约给第三方的赔偿及甲方实现权利的一切费用等；</p>
        <p>3.品质保证金为壹万元整，在品质保证期后次月结算，扣除质保期内出现的质量问题的鞋款后余额进行结算；</p>
        <p>4.乙方与甲方的工作人员不得存在商业贿赂，如存在商业贿赂的，乙方需向甲方赔偿加工费的百分之三十的违约金，甲方保留追究相关人员刑事责任的权利。</p>
        <p>十四、本合同经双方委托代理人签字并盖章生效，本合同一式两份，双方各执一份，每份都具有同等法律效力。</p>
        <p class="company-box">
          <span>甲方：{{contractData.orderCompanyName}}</span>
          <span>乙方：瀚越太古科技服务有限公司</span>
        </p>
      </div>
    </el-scrollbar>
    <span slot="footer" class="dialog-footer">
      <div class="btn-group" v-if="contractData.contractBaseStatus==='1500'">
        <el-button size="medium" @click="data.show = false" style="color: #6D78E7; border-color: #6D78E7;">取消</el-button>
        <el-button type="primary" size="medium" @click="makeSure(contractData.contractBaseId)">确定</el-button>
      </div>
    </span>
  </el-dialog>
</template>
<script>
import { contract, confirm } from '@/api/api'
import { times } from '@/common/js/day'
export default {
  name: 'ContractModal',
  props: {
    data: {
      required: true,
      default: {
        show: false,
        orderid: ''
      }
    }
  },
  data() {
    return {
      contractData: ''
    }
  },
  methods: {
    getContract(params) {
      // 获取合同信息
      contract(params).then(res => {
        if (res.code === 200) {
          this.contractData = res.data
        }
      })
    },
    makeSure(id) {
      // 确定
      let _this = this
      let params = {
        contractBaseId: id
      }
      confirm(params).then(res => {
        if (res.code === 200) {
          _this.data.show = false
          _this.$parent.contractRefresh()
        }
      })
    }
  },
  filters: {
    dateFormate(ms) {
      return times(ms, 1)
      // let date = new Date(ms)
      // let year = date.getFullYear()
      // let month = date.getMonth() + 1
      // let day = date.getDate()
      // month = month < 10 ? '0' + month : month
      // day = day < 10 ? '0' + day : day
      // return `${year}年${month}月${day}日`
    },
    numFormate(value) {
      // 保留四位小数
      let number = Number(value).toFixed(4)
      // 拆分成数组
      let array = number.toString().split('.')
      // 整数部分
      let intPart = array[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
      return intPart + '.' + array[1]
    }
  }
}
</script>
<style lang="scss">
.contractmodal {
  min-width: 1000px !important;
  .mb15 {
    margin-bottom: 15px;
  }
  .el-scrollbar {
    height: 700px;
    .box {
      margin: 0 110px;
      p {
        line-height: 24px;
      }
      .company-box {
        overflow: hidden;
        margin-top: 20px;
        font-size: 14px;
        span:nth-child(1) {
          width: 50%;
          float: left;
        }
        span:nth-child(2) {
          width: 50%;
          float: right;
          text-align: right;
        }
      }
    }
  }
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .el-dialog__header {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #43566c;
  }
  .el-dialog__headerbtn .el-dialog__close {
    color: $neutralcolor6;
    font-weight: bold;
  }
  .el-dialog__body {
    font-size: 12px;
    line-height: 18px;
    padding: 20px 0px;
  }
  .el-dialog__footer {
    width: 100% !important;
    position: absolute;
    padding-top: 20px;
  }
  .order-table {
    width: 100%;
    margin: 10px 0;
    tr {
      th,
      td {
        padding: 8px 12px;
      }
    }
  }
  .btn-group {
    width: 100%;
    text-align: center;
    margin-top: 20px;
    .el-button + .el-button {
      margin-left: 200px;
    }
  }
}
</style>