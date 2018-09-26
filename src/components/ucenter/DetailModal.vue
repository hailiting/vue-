// creat: zhaodianlong
// date: 2018-06-21
<template>
  <el-dialog :visible.sync="data.show" custom-class="detailmodal" top="20vh">
    <div class="left">
      <el-carousel indicator-position="none" :interval="5000" arrow="always" @change="currentIndex">
        <el-carousel-item v-for="(item, index) in data.detail.insoleImages" :key="index">
          <img v-lazy="item.path+'?imageMogr2/thumbnail/314x314'" alt="" width="314" height="314">
        </el-carousel-item>
      </el-carousel>
      <div class="page">{{imgIndex}}/{{data.detail.insoleImages.length}}</div>
    </div>
    <div class="right">
      <h1>中底</h1>
      <p>{{data.detail.technology}}</p>
      <p>
        适应于{{data.detail.seasonStyle}}{{data.detail.type}}
        <span v-if="data.detail.insoleClass.length">
          ，可以用做
          <span v-for="(item, index) in data.detail.insoleClass" :key="index">
            {{item}}
            <span v-if="data.detail.insoleClass.length != index+1">、</span>
          </span>等中底
        </span>
      </p>
      <div class="price">
        价格<span>{{data.price}}元/双</span>
      </div>
      <table class="technology" border="1">
        <tbody>
          <tr>
            <td style="width: 25%;">跟高</td>
            <td style="width: 25%;">前掌</td>
            <td style="width: 25%;">上插</td>
            <td style="width: 25%;">下插</td>
          </tr>
          <tr>
            <td>
              <span v-if="data.detail.hellHeight">
                {{data.detail.hellHeight}}cm<br>
                (<span v-if="data.detail.hellHeight<=3">低跟</span>
                <span v-if="data.detail.hellHeight>3 && data.detail.hellHeight<=5">中跟</span>
                <span v-if="data.detail.hellHeight>5">高跟</span>)
              </span>
            </td>
            <td>
              <span v-if="data.detail.hallSoleThickness">{{data.detail.hallSoleThickness}}mm<br></span>
              <span v-if="data.detail.hallSoleMaterials">{{data.detail.hallSoleMaterials}}</span>
            </td>
            <td>
              <span v-if="data.detail.topFork">{{data.detail.topFork}}mm</span>
            </td>
            <td>
              <span v-if="data.detail.bottomFork">{{data.detail.bottomFork}}mm</span>
            </td>
          </tr>
          <tr>
            <td>中底板</td>
            <td>中底网布</td>
            <td>飞机网布</td>
            <td>飞机</td>
          </tr>
          <tr>
            <td>
              <span v-if="data.detail.midsoleBoard">{{data.detail.midsoleBoard}}mm</span>
            </td>
            <td>
              <span v-if="data.detail.midsoleCloth">{{data.detail.midsoleCloth}}p</span>
            </td>
            <td>
              <span v-if="data.detail.planeCloth">{{data.detail.planeCloth}}p</span>
            </td>
            <td>
              <span v-if="data.detail.plane">{{data.detail.plane}}mm</span>
            </td>
          </tr>
          <tr>
            <td colspan="2">毛重</td>
            <td colspan="2">钢芯(厚度*宽度)</td>
          </tr>
          <tr>
            <td colspan="2">
              <span v-if="data.detail.weight">{{data.detail.weight}}g</span>
            </td>
            <td colspan="2">
              <span v-if="data.detail.steelCore">{{data.detail.steelCore}}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    data: {
      required: true,
      default: {
        show: false,
        detail: {
          insoleImages: [],
          insoleClass: []
        }
      }
    }
  },
  data() {
    return {
      imgIndex: 0
    }
  },
  methods: {
    currentIndex(index) {
      this.imgIndex = index + 1
    }
  }
}
</script>
<style lang="scss">
  .detailmodal{
    width: 900px !important;
    .el-dialog__header{
      .el-dialog__headerbtn{
        top: 20px;
        right: 20px;
        font-size: 20px;
      }
      .el-dialog__headerbtn .el-dialog__close{
        color: $neutralcolor6;
        font-weight: bold;
      }
    }
    .el-dialog__body{
      padding: 0;
      overflow: hidden;
      margin-top: -30px;
    }
    .left{
      width: 450px;
      padding: 50px 20px 20px;
      float: left;
      box-sizing: border-box;
      .el-carousel__container{
        height: 314px;
        .el-carousel__item{
          text-align:center;
          line-height:314px;
          font-size: 36px;
          font-weight: bold;
        }
      }
      .page{
        padding: 54px 0 0;
        color: $neutralcolor9;
        text-align: center;
      }
      .el-carousel__arrow{
        color: $neutralcolor9;
        font-size: 25px;
        background-color: rgba(31, 45, 61, 0);
        &:hover{
          background-color: rgba(31, 45, 61, 0);
        }
      }
      .el-icon-arrow-left, .el-icon-arrow-right{
        font-weight: bold;
      }
    }
    .right{
      width: 450px;
      float: right;
      padding: 0 15px;
      box-sizing: border-box;
      font-size: 14px;
      h1{
        height: 50px;
        line-height: 50px;
        font-size: 36px;
        font-weight: bold;
        color: #000000;
      }
      p{
        line-height: 28px;
        font-weight: bold;
        color: #334285;
      }
      .price{
        width: 340px;
        height: 58px;
        line-height: 58px;
        padding: 0 70px 0 10px;
        margin: 5px 0;
        background: #EAEBFC;
        color: $neutralcolor9;
        font-size: 20px;
        span{
          float: right;
          color: #EE3D53;
        }
      }
      .technology{
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
        tbody{
          tr:nth-child(odd){
            height: 34px;
            line-height: 34px;
            color: #334285;
          }
          tr:nth-child(even){
            height: 60px;
            line-height: 30px;
            color: $neutralcolor9;
            font-size: 13px;
          }
          tr:last-child{
            height: 40px;
            line-height: 40px;
          }
        }
      }
    }
  }
</style>