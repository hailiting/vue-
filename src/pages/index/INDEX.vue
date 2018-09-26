<template>
  <div class="index" @click="refreshHeader">
    <v-head ref="header" :onclick="headeron" :SampleListData="SampleListData.on" v-on:delectSample="delectSampleget" @refresh="Carget"></v-head>
    <v-tab :tabVal="'index'"></v-tab>
    <v-banner></v-banner>
    <v-zt></v-zt>
    <v-index ref="indechildxview" :token="token" @clickSampleBtn="SampleList" class="mainval"></v-index>
    <v-foot> </v-foot>
  </div>
</template>
<script>
import '@/main'
import vHead from '@/components/header/header3.1'
import vFoot from '@/components/footer/footer-index'
import vIndex from '@/components/index/indexIndex'
import vTab from '@/components/tabBar/tabBar'
import vBanner from '@/components/index/banner'
import vZt from '@/components/ad/zt'

export default {
  data() {
    return {
      headeron: '',
      token: localStorage.getItem('Authorization'),
      SampleListData: {
        on: ''
      },
      bSwitch: false
    }
  },
  components: {
    vHead,
    vFoot,
    vIndex,
    vZt,
    vTab,
    vBanner
  },
  mounted() {
    // this.token = localStorage.getItem('Authorization')
    this.SampleList()
  },
  methods: {
    refreshHeader() {
      let token = localStorage.getItem('Authorization')
      if (token) {
        this.Carget()
      }
      this.$refs['header'].isLogin()
    },
    delectSampleget(val) {
      if (val) {
        if (this.$refs.indechildxview.isClickSampleTrue) {
          this.$refs.indechildxview.isClickSampleTrue(val)
        }
        if (this.$refs.indechildxview.getData) {
          this.$refs.indechildxview.getData(val)
        }
      }
    },
    // all表示全部删除
    SampleList(all) {
      if (all) {
        if (localStorage.getItem('Authorization') && !localStorage.getItem('donothing')) {
          this.Carget()
        }
        this.SampleListData.on = ''
      } else {
        if (this.token && !localStorage.getItem('donothing')) {
          let storage = window.localStorage
          if (storage.insoledatas) {
            this.pushData()
          } else {
            this.Carget()
          }
        } else {
          let storage = window.localStorage
          // 把数据都储存在localStorage里
          // 获取浏览器原来储存在localstorage里的数据
          if (storage.insoledatas) {
            let allArr = JSON.parse(storage.insoledatas)
            this.SampleListData.on = allArr.sample
          } else {
            this.SampleListData.on = ''
          }
        }
      }
    },
    // 有token，缓存里有locastorge数据时
    pushData() {
      let storage = window.localStorage
      let allArr = JSON.parse(storage.insoledatas)
      if (allArr.sample.length > 0) {
        for (let i = 0; i < allArr.sample.length; i++) {
          let params = {
            putAwayId: allArr.sample[i].putAwayId,
            cartType: 'sample'
          }
          cardAdd(params).then(res => {
            if (res.code === 200) {
              // this.$message({
              //   message: res.msg,
              //   type: 'success'
              // })
              localStorage.removeItem('insoledatas')
            } else {
              if (res.code === 400) {
                localStorage.removeItem('insoledatas')
              } else {
                // this.$message.error(res.msg)
              }
            }
            this.Carget()
          })
        }
      } else {
        localStorage.removeItem('insoledatas')
        // this.Carget()
      }
    },
    // 获取购物车数据
    Carget() {
      if (localStorage.getItem('Authorization')) {
        carGet().then(res => {
          if (res.code === 200) {
            this.SampleListData.on = res.data.sample
          } else {
            if (res.code === 400) {
              logout().then(res => {
                if (res.code === 200) {
                  sessionStorage.clear()
                  localStorage.clear()
                  this.$router.go(0)
                  this.indexPage = false
                  this.isHaveTekn = false
                }
              })
            } else {
              this.$message.error(res.msg)
            }
          }
        })
      }
    }
  }
}
</script>
<style scoped>
.index {
  background: #fff;
  min-width: 1190px;
  height: 100%;
  padding-bottom: 48px;
}
</style>
