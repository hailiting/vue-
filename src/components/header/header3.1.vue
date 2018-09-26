<template>
  <header>
    <div class="inner">
      <div class="fl">
        <h1>
          <router-link :to="'/'">欢迎来到太古迎客！</router-link>
        </h1>
        <i class="line"></i>
        <span class="weixin">微信
          <div class="weixinshow">
            <img src="@/assets/img/www/erweima.jpg">
          </div>
        </span>
      </div>
      <div class="fr">
        <router-link :to="'/'" v-if="isHaveTekn && !indexPage">首页</router-link>
        <i class="line" v-if="isHaveTekn && !indexPage"></i>
        <p class="login" v-if="!isHaveTekn" @click="clicktologin('login')">登录</p>
        <div class="usercenter" v-else-if="isHaveTekn">
          <p class="username">
            <i><img v-if="user.companyLogoUrl !== ''" :src="user.companyLogoUrl"></i>{{ user.companyName }}</p>
          <div class="laydown">
            <ul>
              <li>
                <router-link :to="'/ucenter/companyDatum'" v-if="isHaveTekn">公司资料</router-link>
              </li>
              <li>
                <router-link :to="'/ucenter/changePassword'" v-if="isHaveTekn">修改密码</router-link>
              </li>
              <li>
                <router-link :to="'/ucenter/employeeList'" v-if="isHaveTekn">员工列表</router-link>
              </li>
              <li @click="logoutFn" class="cursor">退出</li>
            </ul>
          </div>
        </div>
        <i class="line"></i>
        <p class="login" v-if="!isHaveTekn" @click="clicktologin('signup')">注册</p>
        <router-link :to="'/ucenter/purchase'" v-else-if="isHaveTekn">我的工作台</router-link>
        <i class="line"></i>
        <div class="sample" @click="goToCar">
          <router-link :to="'/car'" class="samplecar">拿样单
            <span>
              <i v-if="SampleListData">{{SampleListData.length}}</i>
              <i v-else>0</i>
            </span>
          </router-link>
          <div class="dropdown boxshow" @click="goToCar">
            <p class="kongp" v-on:click.stop>
              <span v-if="SampleListData === '' || SampleListData.length === 0">
                拿样单为空，快去拿样吧！
              </span>
            </p>
            <ul ref="mUl" v-if="SampleListData.length && SampleListData.length !==0">
              <li v-for="(item,index) in SampleListData" :key="item.id">
                <span><img :src="item.insoleImage"></span>
                <p>{{item.insoleName}}</p>
                <span class="price">{{item.price | toFixedTwo}}元/双</span>
                <button class="delete" @click.stop="delectSample(item.putAwayId,index)">删除</button>
              </li>
            </ul>
            <div class="dowm">
              <p>共
                <i class="red" v-if="SampleListData">{{SampleListData.length}}</i>
                <i class="red" v-if="!SampleListData">0</i> 件商品
              </p>
              <el-button type="primary" class="btn">查看拿样单</el-button>
            </div>
          </div>
          <div class="linescroll" v-if="scroll.linescroll">
            <div class="innerscroll" :style="{'height':scroll.height+'px','transform': 'translateY('+ scroll.trT +'px)'}"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { logout, deleCar } from '@/api/api'
export default {
  props: ['SampleListData'],
  data() {
    return {
      isHaveTekn: false,
      indexPage: false,
      user: {
        companyName: '',
        companyLogoUrl: ''
      },
      scroll: {
        linescroll: false,
        height: 0,
        trT: 0
      }
    }
  },
  watch: {
    $route(to, from) {
      if (to.path === '/index' || to.path === '/helpCenter') {
        this.indexPage = true
      } else {
        this.indexPage = false
      }
    },
    isHaveTekn(newval, oldval) {
      this.SampleListData = ''
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
    this.isLogin()
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollShow, true)
  },
  mounted() {
    window.addEventListener('scroll', this.scrollShow, true)
    // this.scrollShow()
  },
  methods: {
    isLogin() {
      // 判断是否有token 返回值为 true登录了 or false未登录
      let url = this.$route.path
      if (localStorage.getItem('Authorization')) {
        if (localStorage.getItem('donothing') && url !== '/resubmit') {
          this.isHaveTekn = false
          localStorage.removeItem('Authorization')
        } else {
          if (url === '/resubmit') {
            this.isHaveTekn = false
          } else {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            this.isHaveTekn = true
            this.user.companyName = userInfo.companyName
            this.user.companyLogoUrl = userInfo.companyLogoUrl
          }
        }
      } else {
        this.isHaveTekn = false
      }
      if (url === '/index' || url === '/helpCenter') {
        this.indexPage = true
      }
      // 加载滚动条
    },
    // 滚动条出现逻辑
    scrollShow() {
      this.$nextTick(function () {
        if (this.SampleListData.length > 5) {
          this.scroll.linescroll = true
          this.scroll.height = this.scrollLine()
          let scrollTop = this.$refs.mUl.scrollTop
          if (scrollTop === 0) {
            this.scroll.trT = 0
          } else {
            let ulLength = this.SampleListData.length * 50
            if (ulLength === 0) {
              return 0
            }
            this.scroll.trT = 280 * (scrollTop / ulLength)
          }
        } else {
          this.scroll.linescroll = false
        }
      })
    },
    // 获取滚动条比例
    scrollLine() {
      let ulLength = this.SampleListData.length * 50
      if (ulLength === 0) {
        return 0
      }
      let innerscrollHeight = 284 * (284 / ulLength)
      return innerscrollHeight
    },
    clicktologin(text) {
      localStorage.removeItem('donothing')
      localStorage.removeItem('userInfo')
      localStorage.removeItem('Authorization')
      localStorage.removeItem('companyInvite')
      if (text === 'login') {
        this.$router.push({ path: '/login' })
      } else if (text === 'signup') {
        this.$router.push({ path: '/signup' })
      }
    },
    goToCar() {
      if (this.isHaveTekn) {
        this.$emit('refresh', true)
      }
      // if (this.SampleListData === '' || this.SampleListData.length === 0) {
      // } else {
      this.$router.push({ path: '/car' })
      // }
    },
    logoutFn() {
      // 退出
      // localStorage.removeItem('userInfo')
      // localStorage.removeItem('Authorization')
      logout().then(res => {
        if (res.code === 200) {
          sessionStorage.clear()
          localStorage.clear()
          this.$router.go(0)
          this.indexPage = false
          this.isHaveTekn = false
        }
      })
    },
    // 输出购物车
    delectSample(id, index) {
      if (this.isHaveTekn) {
        this.$emit('delectSample', id)
        let params = {
          cartType: 'sample',
          putAwayId: id
        }
        deleCar(params).then(res => {
          if (res.code === 200) {
            this.SampleListData.splice(index, 1)
          } else {
            this.$message.error(res.msg)
          }
        })
      } else {
        this.SampleListData.splice(index, 1)
        let localStorageDatass = {
          sample: this.SampleListData,
          purchase: []
        }
        let storage = JSON.stringify(localStorageDatass)
        localStorage.setItem('insoledatas', storage)
        this.$emit('delectSample', id)
      }
    }
  }
}
</script>
<style lang="scss">
@import '../../assets/css/index.scss';
header {
  .el-button {
    padding: 10px 20px;
    box-shadow: none;
  }
}
</style>
<style lang="scss" scoped>
header {
  background-color: #f0f0f0;
  line-height: 30px;
  height: 30px;
  border-bottom: 1px solid #ececec;
  position: relative;
  z-index: 999;
  text-align: left;
  .boxshow {
    border-radius: 4px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
  }
  .login {
    float: left;
    padding: 0 15px;
    cursor: pointer;
  }
  .inner {
    font-size: 12px;
    // font-family: "PingFangSC-Regular";
    color: $neutralcolor6;
    position: relative;
    a {
      display: block;
      float: left;
      color: $neutralcolor6;
      line-height: 30px;
    }
    h1 {
      float: left;
      padding-right: 15px;
      line-height: 30px;
      a {
        display: block;
      }
    }
    .fl {
      position: relative;
      .weixin {
        width: 20px;
        height: 28px;
        display: inline-block;
        *display: inline;
        *zoom: 1;
        vertical-align: middle;
        background: url(../../assets/img/www/weixinicon.png) no-repeat 16px 6px/20px;
        font-size: 0;
        position: relative;
        padding: 0 15px;
        margin-left: 0px;
        cursor: pointer;
        &:hover {
          background: #fff url(../../assets/img/www/weixiniconclick.png)
            no-repeat 16px 6px/20px;
          .weixinshow {
            height: 88px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
          }
        }
        .weixinshow {
          height: 0;
          overflow: hidden;
          position: absolute;
          top: 28px;
          right: -38px;
          box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.18);
          transition: all 0.2s ease;
          z-index: 999;
          img {
            display: block;
            width: 88px;
            height: 88px;
          }
        }
      }
    }
    i.line {
      display: block;
      float: left;
      margin-top: 4px;
      width: 1px;
      height: 22px;
      vertical-align: middle;
      background-color: #d8d8d8;
    }
    .fr {
      .usercenter {
        float: left;
        vertical-align: middle;
        margin-left: 0;
        margin-right: 0;
        position: relative;
        width: 110px;
        transition: all 0.3s ease;
        padding: 0 15px;
        p.username {
          width: 120px;
          line-height: 30px;
          height: 30px;
          // margin-top: -4px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          // display: -webkit-box;
          // -webkit-box-orient: vertical;
          // -webkit-line-clamp: 1;
        }
        i {
          float: left;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1px solid $neutralcolord7;
          margin-right: 7px;
          vertical-align: middle;
          margin-top: 6px;
          background: #fff url(../../assets/img/www/userbg.png) no-repeat 0 0;
          background-size: 18px 18px;
          overflow: hidden;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .laydown {
          position: absolute;
          top: 29px;
          left: 0;
          width: 110px;
          padding-left: 30px;
          z-index: 999;
          background-color: #fff;
          box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.18);
          height: 0;
          transition: all 0.3s ease;
          overflow: hidden;
          li {
            height: 30px;
          }
          li:last-child {
            padding-left: 15px;
          }
        }
        &:hover {
          background-color: #fff;
          .laydown {
            height: 124px;
          }
        }
      }
      .sample {
        float: left;
        position: relative;
        z-index: 999;
        &:hover .dropdown {
          height: auto;
          width: 378px;
          opacity: 1;
        }
        &:hover .linescroll {
          display: block;
        }
        &:hover .samplecar {
          color: #777;
          background-color: #fff;
        }
      }
      .linescroll {
        width: 4px;
        height: 300px;
        position: absolute;
        top: 30px;
        right: 0;
        z-index: 9;
        display: none;
        .innerscroll {
          height: 30px;
          background-color: #d0d0d0;
          border-radius: 2px;
          transition: all 0.3s ease;
          &:hover {
            background-color: #979aa1;
          }
        }
      }
      .dropdown {
        height: 0;
        opacity: 0;
        overflow: hidden;
        width: 0;
        position: absolute;
        background-color: #fff;
        top: 30px;
        right: 0;
        border: 1px solid $neutralcolord7;
        box-shadow: 0x 4px 7px 0px rgba(0, 0, 0, 0.18);
        // transition: all 0.3s ease;
        .kongp {
          line-height: 70px;
          text-align: center;
          color: $neutralcolor3;
        }
        ul {
          padding: 15px 15px 0;
          max-height: 284px;
          overflow-y: auto;
          cursor: pointer;
          &::-webkit-scrollbar {
            display: none;
          }
          li {
            border-bottom: 1px solid #f0f0f0;
            padding: 10px 0;
            &:last-child {
              border-bottom: 0;
            }
            span {
              float: left;
              img {
                width: 33px;
                height: 33px;
                background-color: #fff;
                border: 1px solid $neutralcolord7;
              }
            }
            .price {
              font-family: "PingFangSC-Regular";
              font-weight: 400;
              color: rgba(224, 53, 53, 1);
              line-height: 17px;
              width: 31%;
              text-align: center;
              margin-top: 8px;
            }
            .delete {
              background: transparent;
              line-height: 17px;
              vertical-align: middle;
              border: none;
              color: #c0c0c0;
              padding: 0;
              cursor: pointer;
            }
            p {
              float: left;
              width: 144px;
              font-size: 12px;
              line-height: 17px;
              height: 36px;
              overflow: hidden;
              margin-left: 10px;
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
        .dowm {
          background-color: $neutralcolorf7;
          padding: 9px 15px;
          height: 32px;
          overflow: hidden;
          p {
            float: left;
            line-height: 46px;
            .red {
              color: #e24141;
              font-size: 14px;
              padding: 1px;
            }
          }
          .btn {
            float: right;
          }
        }
      }
      // i.line {
      //   margin: 0;
      // }
      a {
        padding: 0 15px;
        &.samplecar {
          margin-left: 0;
          height: 30px;
          overflow: hidden;
        }
      }
      .samplecar {
        ::before {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-width: 5px 8px;
          border-right-color: #e03535;
          top: 4px;
          right: 13px;
        }
        span {
          display: inline-block;
          *display: inline;
          *zoom: 1;
          width: 16px;
          height: 20px;
          background-color: #e03535;
          vertical-align: middle;
          border-radius: 2px;
          margin-left: 12px;
          position: relative;
          color: #fff;
          line-height: 20px;
          text-align: center;
        }
      }
      a {
        &:hover {
          color: $mainkeycolor;
        }
      }
    }
  }
}
</style>
