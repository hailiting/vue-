// create: zhaodianlong
// date: 2018-06-15
<template>
  <div class="ucenter-header">
    <div class="header">
      <router-link to="/index">
        <div class="header-logo">
          <img src="../../assets/img/ucenter/logo-mini.png" alt="" width="15" height="15"> 太古迎客首页
        </div>
      </router-link>
      <div class="header-content">
        <a href="javascript:;" class="CartWarper" @click="toPage('/car')">
          <el-popover placement="bottom-end" trigger="hover" popper-class="ucenter-shopCar" :visible-arrow="false">
            <table v-if="CartWarper.sample.length">
              <tbody class="cont">
                <tr v-for="(purchase,index) in CartWarper.sample" v-if="index<5" :key="index">
                  <td><img v-lazy="purchase.insoleImage+'?imageMogr2/thumbnail/30x30'" width="30" height="30"></td>
                  <td>{{purchase.technology}}</td>
                  <td>{{purchase.price | numFormate2}}元/双</td>
                </tr>
              </tbody>
            </table>
            <p class="CartWarper-txt" v-else>拿样单中还没有商品，赶紧拿样吧</p>
            <div class="txt-div">
              <span v-if="CartWarper.sample.length>0">新增{{CartWarper.sample.length>5?5:CartWarper.sample.length}}件商品</span>
              <router-link to="/car" class="btn">查看拿样单</router-link>
            </div>
            <a slot="reference" style="color:#fff;">拿样单
              <triangle-left :count="CartWarper.sample.length"></triangle-left>
            </a>
          </el-popover>
        </a>
        <!-- <a href="javascript:;" class="CartWarper" @click="toPage('/shopCar')">
          <el-popover placement="bottom-end" trigger="hover" popper-class="ucenter-shopCar" :visible-arrow="false">
            <table v-if="CartWarper.purchase.length">
              <tbody class="cont">
                <tr v-for="(purchase,index) in CartWarper.purchase" v-if="index<5" :key="index">
                  <td><img v-lazy="purchase.insoleImage+'?imageMogr2/thumbnail/30x30'" width="30" height="30"></td>
                  <td>{{purchase.technology}}</td>
                  <td>{{purchase.price | numFormate4}}元/双</td>
                </tr>
              </tbody>
            </table>
            <p class="CartWarper-txt" v-else>采购单中还没有商品，赶紧采购吧</p>
            <div class="txt-div">
              <span v-if="CartWarper.purchase.length>0">新增{{CartWarper.purchase.length>5?5:CartWarper.purchase.length}}件商品</span>
              <router-link to="/shopCar" class="btn">查看采购单</router-link>
            </div>
            <a slot="reference" style="color:#fff;">采购单
              <triangle-left :count="CartWarper.purchase.length"></triangle-left>
            </a>
          </el-popover>
        </a> -->
        <router-link to="">
          <a href="javascript:;" style="color: #ffffff;">我的工作台</a>
        </router-link>
        <span>{{now|getTime}}好！欢迎光临</span>
        <!-- <span>
          <i class="iconfont icon-yonghuzhongxin_f" style="color:#fff;"></i>
        </span> -->
        <!-- <span class="text user">
          <i class="iconfont icon-yonghuzhongxin_f" style="color:#fff;"></i>
          <em class="out cursor" @click="logoutclick">退出</em>
        </span> -->
        <a href="javascript:;">
          <el-popover placement="top" trigger="hover" :visible-arrow="false" popper-class="logoutBtn">
            <a href="javascript:;" @click="logoutFn()">退出</a>
            <a href="javascript:;" slot="reference">
              <i class="iconfont icon-yonghuzhongxin_f" style="color:#fff;"></i>
            </a>
          </el-popover>
        </a>
      </div>
    </div>
    <div class="bottom-header">
      <div class="login-company">
        <img :src="companyLogo" alt="" v-if="companyLogo" width="25" height="25">
        <i class="company-logo iconfont icon-logo-" v-if="!companyLogo"></i>
        <div class="company-name">{{companyName}}</div>
      </div>
      <el-dropdown style="margin-top: 16px; margin-left: 20px;" @command="handleCommand">
        <el-button round size="mini">
          {{dropdown}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="item in role" :key="item.putAwayId" :command="item.putAwayId">{{item.name}}</el-dropdown-item>
          <!-- <el-dropdown-item command="供应中心">供应中心</el-dropdown-item> -->
        </el-dropdown-menu>
      </el-dropdown>
      <div class="message">
        <i class="iconfont icon-xiaoxi-copy cursor xiaoxi"></i>
        <div class="pic">
          <img src="../../assets/WechatIMG1@2x.png" alt="">
          <p>关注微信公众号</p>
          <p class="pp">获取消息提醒</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TriangleLeft from '@/components/ucenter/TriangleLeft'
import { logout, carGet } from '@/api/api'
import bus from '@/common/js/bus'
export default {
  data() {
    return {
      now: new Date(),
      activeIndex: '1',
      companyLogo: '',
      companyName: '',
      role: [],
      CartWarper: {
        purchase: [],
        sample: []
      },
      dropdown: '采购中心'
    }
  },
  filters: {
    getTime(t) {
      let hour = t.getHours()
      if (hour > 12) {
        return '下午'
      } else {
        return '上午'
      }
    },
    numFormate4(value) {
      // 保留四位小数
      let number = Number(value).toFixed(4)
      // 拆分成数组
      let array = number.toString().split('.')
      // 整数部分
      let intPart = array[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
      return intPart + '.' + array[1]
    },
    numFormate2(value) {
      // 保留2位小数
      let number = Number(value).toFixed(2)
      // 拆分成数组
      let array = number.toString().split('.')
      // 整数部分
      let intPart = array[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
      return intPart + '.' + array[1]
    }
  },
  components: {
    TriangleLeft
  },
  computed: {
    // companyName() {
    //   return JSON.parse(localStorage.getItem('userInfo')).companyName
    // }
    // companyLogo() {
    //   return JSON.parse(localStorage.getItem('userInfo')).companyLogoUrl
    // }
  },
  created() {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.companyName = userInfo.companyName
    bus.$on('changeImg', e => {
      if (e) {
        userInfo.companyLogoUrl = e
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
        this.companyLogo = e
      }
    })
    this.companyLogo = userInfo.companyLogoUrl
    let role = JSON.parse(localStorage.getItem('userInfo')).roleList
    let change = sessionStorage.getItem('role') || '采购中心'
    this.dropdown = change
    role.forEach(item => {
      this.role.push({
        putAwayId: item.obid,
        name: item.roleName
      })
    })
    this.CarGet()
  },
  methods: {
    logoutFn() {
      // 退出
      logout().then(res => {
        if (res.code === 200) {
          localStorage.removeItem('userInfo')
          localStorage.clear()
          this.$router.push('/index')
          sessionStorage.clear()
        }
      })
    },
    handleCommand(command) {
      let str = ''
      this.role.forEach(item => {
        if (item.putAwayId === command) {
          str = item.name
        }
      })
      if (this.dropdown === str) return false
      sessionStorage.setItem('role', str)
      this.dropdown = str
      if (str === '供应中心') {
        this.$router.push('/ucenter/midsoleManagement')
      } else {
        this.$router.push('/ucenter/purchase')
      }
      bus.$emit('dropdown', command)
    },
    CarGet() {
      carGet().then(res => {
        if (res.code === 200) {
          this.CartWarper.purchase = res.data.purchase
          this.CartWarper.sample = res.data.sample
        }
      })
    },
    toPage(url) {
      this.$router.push({ path: url })
    }
  }
}
</script>
<style lang="scss">
.logoutBtn {
  top: 18px !important;
}
.el-popover.logoutBtn {
  min-width: 40px;
  font-size: 12px;
  background: #302d3a;
  border: none;
  border-radius: 0px;
  text-align: center;
  padding: 0;
  a {
    color: #fff;
    padding: 12px 15px;
    display: inline-block;
    *display: inline;
    *zoom: 1;
    &:hover {
      color: $auxiliarymaincolor;
    }
  }
}
// 购物车
.ucenter-shopCar {
  padding: 0 !important;
  top: 18px !important;
  border-top: none !important;
  background: #302d3a !important;
  color: #fff !important;
  width: 277px !important;
  border-radius: 0 !important;
  table {
    width: 100%;
    .cont {
      font-size: 12px;
      font-family: PingFangSC-Light;
      color: rgba(255, 255, 255, 1);
      line-height: 12px;
      tr {
        height: 44px;
        line-height: 44px;
        border-bottom: 1px solid #464759;
        td {
          width: 62px;
          text-align: center;
          img {
            display: inline-block;
            *display: inline;
            *zoom: 1;
            vertical-align: middle;
            background-color: #fff;
          }
        }
      }
      &:last-child div {
        border-bottom: none;
      }
    }
  }
  .CartWarper-txt {
    padding: 20px 0;
    text-align: center;
  }
  .txt-div {
    width: 100%;
    overflow: hidden;
    background: #48415c;
    height: 26px;
    line-height: 26px;
    padding: 0 10px;
    box-sizing: border-box;
    .btn {
      float: right;
      width: 86px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      margin-top: 2px;
      background-color: $auxiliarymaincolor;
      color: #fff;
      border: 1px solid $auxiliarymaincolor;
      border-radius: 4px;
      font-size: 12px;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }
    span {
      display: inline-block;
      *display: inline;
      *zoom: 1;
      font-size: 12px;
    }
  }
}
.ucenter-header {
  min-width: 1280px;
  .header {
    height: 30px;
    line-height: 28px;
    color: #ffffff;
    font-size: 11px;
    background: #3e3e3e;
    .header-logo {
      display: inline-block;
      *display: inline;
      *zoom: 1;
      margin-left: 80px;
      width: 200px;
      color: #ffffff;
      cursor: pointer;
      img {
        vertical-align: middle;
        margin-right: 3px;
        background-color: transparent;
      }
    }
    .header-content {
      display: inline-block;
      *display: inline;
      *zoom: 1;
      width: 50%;
      float: right;
      text-align: right;
      padding-right: 76px;
      & > a {
        padding: 7px 10px;
        color: #fff;
        font-size: 11px;
        position: relative;
        margin-left: -3px;
        &:after {
          width: 2px;
          content: "";
          height: 16px;
          background: #525252;
          position: absolute;
          right: 0;
          top: 5px;
        }
      }
      & > a:hover {
        background: #302d3a;
      }
      & > a:nth-child(5) {
        padding: 7px 0;
        span {
          display: inline-block;
          *display: inline;
          *zoom: 1;
          padding: 0;
          a {
            padding: 7px 20px;
          }
        }
      }
      span {
        display: inline-block;
        *display: inline;
        *zoom: 1;
      }
    }
  }
  .el-menu {
    height: 60px;
  }
  .bottom-header {
    min-width: 1280px;
    position: absolute;
    width: 100%;
    background: #fff;
    // overflow: hidden;
    height: 60px;
    box-shadow: 0px 1px 4px 0px rgba(102, 102, 102, 0.5);
    .message {
      position: absolute;
      right: 83px;
      top: 19px;
      color: $auxiliarymaincolor;
      text-align: center;
      .xiaoxi {
        font-size: 20px;
        color: #3e3e3e;
      }
      .pic {
        display: none;
        width: 92px;
        height: 116px;
        // margin-top: 5px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 1px 4px 0px rgba(61, 105, 156, 0.45);
        border-radius: 5px;
        position: absolute;
        left: -35px;
        z-index: 999;
        img {
          width: 60px;
          height: 60px;
          margin-top: 5px;
        }
        p {
          margin-top: 5px;
          font-size: 12px;
          font-family: PingFangSC-Regular;
          color: rgba(74, 74, 74, 1);
        }
        .pp {
          padding-bottom: 5px;
        }
      }
    }
    .message:hover {
      .pic {
        display: block;
      }
    }
  }
  .login-company {
    width: 148px;
    height: 60px;
    line-height: 60px;
    float: left;
    border-right: 2px solid #ebebeb;
    img {
      border-radius: 100%;
      margin-left: 10px;
      vertical-align: middle;
    }
    .company-logo {
      font-size: 25px;
      vertical-align: middle;
      margin-left: 10px;
      color: #e4e4e4;
      margin-right: 4px;
    }
    .company-name {
      display: inline-block;
      *display: inline;
      *zoom: 1;
      width: 88px;
      font-size: 11px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
      color: #000000;
      font-weight: bold;
    }
  }
  .el-menu--horizontal {
    box-shadow: 0px 1px 4px 0px rgba(102, 102, 102, 0.5);
  }
  .el-dropdown-menu__item {
    padding: 0 10px;
  }
}
</style>
