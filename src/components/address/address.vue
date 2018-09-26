<template>
  <div class="city">
    <el-input v-model="proCity" readonly="readonly" class="input" placeholder="请输入省市区" @click.native="seleAddress"></el-input>
    <el-tabs type="border-card" class="cont" v-model="activeName" v-show="showTab">
      <el-tab-pane label="省份" name="first">
        <div class="provinceStyle" @click="seleCity(item.districtId, item.districtName)" v-for="(item, index) in province" :key="index">{{item.districtName}}</div>
      </el-tab-pane>
      <el-tab-pane label="城市" name="second">
        <div class="provinceStyle" @click="seleArea(item.districtId, item.districtName)" v-for="(item, index) in city" :key="index">{{item.districtName}}</div>
      </el-tab-pane>
      <el-tab-pane label="区县" name="thir">
        <div class="provinceStyle" @click="seleStree(item.districtId, item.districtName)" v-for="(item, index) in area" :key="index">{{item.districtName}}</div>
      </el-tab-pane>
      <el-tab-pane label="街道" name="fou">
        <div class="provinceStyle" @click="getval(item.districtId, item.districtName)" v-for="(item, index) in stree" :key="index">{{item.districtName}}</div>
      </el-tab-pane>
    </el-tabs>
    <span class="errMsg">{{errMsgText}}</span>
  </div>
</template>
<script>
import { cityPro } from '@/api/api'
export default {
  data() {
    return {
      proCity: '',
      activeName: 'first',
      showTab: false,
      errMsgText: '',
      province: [],
      city: [],
      area: [],
      stree: [],
      meditPro: '',
      meditCit: '',
      meditAre: '',
      meditStr: '',
      proCode: '',
      cityCode: '',
      areaCode: ''
    }
  },
  props: {
    isEidt: {
      type: Boolean,
      default: false
    },
    val: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  created() {
    if (this.isEidt) {
      this.eidt()
    } else {
      this.getPro()
    }
  },
  methods: {
    seleAddress() {
      this.showTab = !this.showTab
    },
    eidt() {
      if (this.isEidt) {
        this.common(0).then(res => {
          this.province = res
          let pro = ''
          res.forEach(item => {
            if (this.val[0] === item.districtId) {
              pro = item.districtName
            }
          })
          this.seleCity(this.val[0], pro).then(city => {
            let ct = ''
            this.city.forEach(ite => {
              if (this.val[1] === ite.districtId) {
                ct = ite.districtName
              }
            })
            this.seleArea(this.val[1], ct).then(area => {
              let ar = ''
              this.area.forEach(it => {
                if (this.val[2] === it.districtId) {
                  ar = it.districtName
                }
              })
              this.seleStree(this.val[2], ar).then(street => {
                // let str = ''
                // this.area.forEach(i => {
                //   if (this.val[3] === i.districtId) {
                //     str = i.districtName
                //   }
                // })
                let params = {
                  parentCode: this.val[3]
                }
                let last = ''
                this.common(this.val[2], params).then(response => {
                  response.forEach(k => {
                    if (this.val[3] === k.districtId) {
                      last = k.districtName
                    }
                  })
                  this.proCity = this.meditPro + ' / ' + this.meditCit + ' / ' + this.meditAre + ' / ' + last
                })
              })
            })
          })
        })
      }
    },
    getCity(id, params) {
      return cityPro(id, params)
    },
    common(id, params) {
      return new Promise((resolve) => {
        let arr = []
        cityPro(id, params).then(res => {
          if (res.code === 200) {
            if (res.data) {
              res.data.forEach(item => {
                arr.push({
                  districtName: item.districtName,
                  districtId: item.districtId
                })
              })
              resolve(arr)
            }
          }
        })
      })
    },
    getPro() {
      this.common(0).then(res => {
        this.province = res
      })
    },
    seleCity(id, name) {
      this.city = []
      this.area = []
      this.stree = []
      let params = {
        parentCode: id
      }
      this.proCode = id
      return new Promise(resolve => {
        this.common(id, params).then(res => {
          this.city = res
          // this.proCity = name
          this.meditPro = name
          this.activeName = 'second'
          resolve(res)
        })
      })
    },
    seleArea(id, name) {
      this.area = []
      this.stree = []
      let params = {
        parentCode: id
      }
      this.cityCode = id
      return new Promise(resolve => {
        this.common(id, params).then(res => {
          this.area = res
          this.meditCit = name
          // this.proCity = this.meditPro + ' / ' + name
          this.activeName = 'thir'
          resolve(res)
        })
      })
    },
    seleStree(id, name) {
      this.stree = []
      let params = {
        parentCode: id
      }
      this.areaCode = id
      return new Promise(resolve => {
        this.common(id, params).then(res => {
          this.stree = res
          this.meditAre = name
          // this.proCity = this.meditPro + ' / ' + this.meditCit + ' / ' + name
          this.activeName = 'fou'
          resolve(res)
        })
      })
    },
    getval(id, name) {
      this.$emit('address', [this.proCode, this.cityCode, this.areaCode, id])
      this.showTab = !this.showTab
      this.proCity = this.meditPro + ' / ' + this.meditCit + ' / ' + this.meditAre + ' / ' + name
    }
  }
}
</script>
<style lang="scss">
.city {
  .el-tabs__content {
    // overflow: hidden;
    position: relative;
    // min-height: 175px;
  }
}
</style>

<style lang="scss" scoped>
.city {
  position: relative;
  display: block;
  margin-top: 20px;
  margin-left: 34px;
  line-height: 36px;
  height: 36px;
  .input {
    float: left;
    width: 256px;
    // margin-left: 30px;
  }
  .cont {
    // display: none;
    z-index: 100;
    position: absolute;
    top: 36px;
    left: 0px;
    min-height: 50px;
    width: 290px;
  }
  .errMsg {
    position: absolute;
    top: 28px;
    left: 31px;
    font-size: 14px;
    color: #ee3d53;
  }
  .provinceStyle {
    float: left;
    font-family: Arial, sans-serif;
    color:$neutralcolor6;
    font-size: 16px;
    margin-right: 14px;
    cursor: pointer;
  }
}
// .city:hover {
//   .cont {
//     display: block;
//   }
// }
</style>