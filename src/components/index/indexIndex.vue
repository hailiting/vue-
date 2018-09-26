<template>
  <div class="index">
    <div class="sp" v-if="putAwayDatas">
      <h3><span class="spicon"></span>新品推荐</h3>
      <div class="tabchange" v-if="newSpData.pages > 1">
        <span class="el-icon-arrow-left" @click="pageminus" :class="notableft ? 'notab':''"></span>
        <span class="el-icon-arrow-right" @click="pageadd" :class="notabright ? 'notab':''"></span>
      </div>
      <ul :style="{'width': ulLength+'px','transform': 'translateX(-'+translateX+'px)'}">
        <li v-for="item in putAwayDatas" :key="item.id">
          <router-link  target="_blank" :to="{path:'/detail', query:{putAwayId:item.putAwayId}}" @click="changePutAwayId(item.putAwayId)">
            <span><img  v-if="item.insoleImages.length>0" v-lazy="item.insoleImages[0].path"></span>
            <p class="price"><i>￥</i>{{item.price | toFixedTwo}}</p>
            <p class="detail">{{item.insoleName}}</p>
            <!-- <p class="detail">适应于{{item.seasonStyle}}{{item.type}}，可以用做<i v-for="insoleitem in item.insoleClass" :key="insoleitem.id">{{insoleitem}}</i>等中底</p> -->
          </router-link>
        </li>
      </ul>
      <div class="line" v-if="newSpData.pages > 1">
        <i :style="{'width': lineLength+'%'}"></i>
      </div>
    </div>
    <v-adlong :adIndex="0"></v-adlong>
    <div class="insole">
      <h3>中底 <router-link :to="'/index/insole'">查看更多</router-link></h3>
      <div class="fl">
        <v-adstylelist :adIndex="0"></v-adstylelist>
      </div>
      <div class="fr">
        <ul v-if="putawayInsoleData">
          <li v-for="item in putawayInsoleData" :key="item.id">
            <router-link  target="_blank" :to="{path:'/detail', query:{putAwayId:item.putAwayId}}" @click="changePutAwayId(item.putAwayId)">
              <span><img v-if="item.insoleImages.length>0" v-lazy="item.insoleImages[0].path"></span>
              <p class="price"><i>￥</i>{{item.price | toFixedTwo}}</p>
              <p class="detail">{{item.insoleName}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import vAdlong from '@/components/ad/adlong'
import vAdstylelist from '@/components/ad/adstylelist'
import { putawayNew, putawayType } from '@/api/api'
import { mapMutations } from 'vuex'
export default {
  components: {
    vAdlong,
    vAdstylelist
  },
  data() {
    return {
      // ui
      lineLength: 25,
      ulLength: 1190,
      indexLength: 1,
      translateX: 0,
      linePages: 0,
      newSpData: {
        pageNum: 1,
        pageSize: 5,
        pages: 5
      },
      putAwayDatas: [],
      putawayInsoleData: [],
      notableft: true,
      notabright: false
    }
  },
  filters: {
    toFixedTwo(Num) {
      if (Num) {
        if (!isNaN(Num)) {
          Num = parseFloat(Num).toFixed(2)
        }
      }
      return Num
    }
  },
  created() {
    this.newSpDataGet(this.newSpData.pageNum, this.newSpData.pageSize)
    this.ulLength = 1190 * this.newSpData.pages + 3000
    this.putawayInsoleDataGet(1, 8)
  },
  methods: {
    newSpDataGet(num, size) {
      let params = `pageNum=${num}&&pageSize=${size}`
      putawayNew(params).then(res => {
        if (res.code === 200) {
          // 把数据插入数组
          if (res.data.putAwayVoList.length > 0) {
            for (let i = 0; i < res.data.putAwayVoList.length; i++) {
              this.putAwayDatas.push(res.data.putAwayVoList[i])
            }
          }
          // 取5整数
          if (res.data.total % 5 === 0) {
            this.newSpData = res.data
          } else {
            this.newSpData = res.data
            this.newSpData.pages = res.data.pages - 1
          }
          // line
          this.lineLength = this.indexLength * (100 / this.newSpData.pages)
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    putawayInsoleDataGet(num, size) {
      let params = `pageNum=${num}&&pageSize=${size}`
      putawayType(params).then(res => {
        if (res.code === 200) {
          this.putawayInsoleData = res.data.putAwayVoList
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    pageadd() {
      if (this.indexLength < this.newSpData.pages) {
        this.indexLength++
        this.translateX = 1190 * (this.indexLength - 1)
        this.newSpData.pageNum = this.newSpData.pageNum + 1
        this.lineLength = this.indexLength * (100 / this.newSpData.pages)
        if (
          this.newSpData.pageNum <= this.newSpData.pages &&
          this.putAwayDatas.length < this.newSpData.total
        ) {
          this.newSpDataGet(this.newSpData.pageNum, this.newSpData.pageSize)
        }
        if (this.indexLength === this.newSpData.pages) {
          this.notabright = true
        }
        this.notableft = false
      }
    },
    pageminus() {
      if (this.indexLength > 1) {
        this.indexLength--
        this.lineLength = this.indexLength * (100 / this.newSpData.pages)
        this.translateX = 1190 * (this.indexLength - 1)
        this.notabright = false
        if (this.indexLength === 1) {
          this.notableft = true
        }
      }
    },
    ...mapMutations({
      changePutAwayId: 'changeDetail'
    })
  }
}
</script>
<style lang="scss" scoped>
.index {
  padding-bottom: 200px;
  .mr15 {
    margin-right: 20px;
  }
  h3 {
    line-height: 26px;
    font-size: 20px;
    // font-family: "PingFangSC-Semibold";
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    letter-spacing: 5px;
    height: 26px;
    margin-top: 30px;
    margin-bottom: 20px;
    .spicon {
      vertical-align: top;
    }
  }
  .sp,
  & .insole {
    width: 1190px;
    margin: 0 auto;
  }
  .sp {
    // margin-top: 16px;
    position: relative;
    overflow: hidden;
    .line {
      width: 1190px;
      height: 1px;
      background-color: #dbdbdb;
      i {
        display: block;
        height: 2px;
        margin-bottom: -1px;
        background-color: #fe5532;
      }
    }
    .tabchange {
      position: absolute;
      top: 30px;
      right: 0;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      span {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        width: 23px;
        height: 23px;
        line-height: 23px;
        text-align: center;
        color: $neutralcolor6;
        border: 1px solid $neutralcolord7;
        margin: 0 4px;
        cursor: pointer;
        &.notab {
          color: #c5c5c5;
          &:hover {
            color: #c5c5c5;
            border-color: $neutralcolord7;
          }
        }
        &:hover {
          color: $mainkeycolor;
          border-color: $mainkeycolor;
        }
      }
    }
    ul {
      overflow: hidden;
      transition: all 0.3s ease;
      li {
        float: left;
        width: 220px;
        height: 318px;
        border: 1px solid $neutralcolord7;
        margin-left: 20px;
        margin-bottom: 12px;
        overflow: hidden;
        transition: all 0.3s ease;
        &:nth-child(5n + 1) {
          margin-left: 0;
        }
        &:hover {
          border: 1px solid #e03535;
        }
        img,
        & span {
          display: block;
          width: 100%;
          height: 220px;
          transition: all 0.3s ease;
        }
        span {
          &:hover {
            img {
              transform: scale(1.05);
            }
          }
        }
        p {
          padding: 0 14px;
        }
        .price {
          margin-top: 8px;
          line-height: 30px;
          font-size: 16px;
          // font-family: PingFangSC-Medium;
          font-weight: 500;
          color: #e30535;
        }
        .detail {
          font-size: 12px;
          // font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 17px;
          width: 192px;
          word-break: break-all;
          display: -webkit-box;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }
  }
  .insole {
    overflow: hidden;
    margin-bottom: 50px;
    h3 {
      margin-top: 40px;
      &:before {
        content: "";
        display: inline-block;
        *display: inline;
        *zoom: 1;
        width: 3px;
        height: 20px;
        background-color: #ef4040;
        margin-right: 13px;
        vertical-align: top;
        margin-top: 4px;
      }
      a {
        float: right;
        color: $neutralcolor9;
        font-size: 12px;
        letter-spacing: 0;
        font-weight: normal;
        &:hover {
          color: $mainkeycolor;
        }
      }
    }
    .fl {
      width: 260px;
      height: 650px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    ul {
      overflow: hidden;
      width: 930px;
      li {
        float: left;
        width: 220px;
        height: 317px;
        border: 1px solid $neutralcolord7;
        margin-left: 10px;
        margin-bottom: 10px;
        transition: all 0.3s ease;
        &:hover {
          border: 1px solid #e03535;
        }
        img,
        & span {
          display: block;
          width: 100%;
          height: 220px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        span {
          &:hover {
            img {
              transform: scale(1.05);
            }
          }
        }
        p {
          padding: 0 14px;
        }
        .price {
          margin-top: 8px;
          line-height: 30px;
          font-size: 16px;
          // font-family: PingFangSC-Medium;
          font-weight: 500;
          color: #e30535;
        }
        .detail {
          font-size: 12px;
          // font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 17px;
          height: 34px;
          width: 192px;
          word-break: break-all;
          display: -webkit-box;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
