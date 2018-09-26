// create: zhaodianlong
// date: 2018-06-15
<template>
  <div class="sidebar">
    <el-menu ref="sidemenu" class="sidebar-el-menu" :default-active="uri" :collapse="collapse" background-color="#3A3A3A" text-color="#ffffff" active-text-color="#FFFFFF" router>
      <template v-for="item in item">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
              {{ subItem.title }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
    <div class="contact-box">
      {{uri}}
      联系电话<br>0571-89871111
    </div>
  </div>
</template>
<script>
import { getRoute } from '@/api/api'
import bus from '@/common/js/bus'
export default {
  data() {
    return {
      collapse: false,
      item: [],
      role: [],
      show: true
      // items: [
      //   {
      //     icon: 'iconfont icon-wodedingdan',
      //     index: 'ucenter',
      //     title: '我的订单',
      //     subs: [
      //       {
      //         index: '/ucenter/purchase',
      //         title: '采购订单'
      //       },
      //       {
      //         index: '/ucenter/sampleOrder',
      //         title: '拿样订单'
      //       }
      //     ]
      //   },
      //   {
      //     icon: 'iconfont icon-dizhiguanli',
      //     index: 'address',
      //     title: '地址管理',
      //     subs: [
      //       {
      //         index: '/ucenter/receivingAddress',
      //         title: '收货地址'
      //       },
      //       {
      //         index: '/ucenter/storeAddress',
      //         title: '仓库列表'
      //       }
      //     ]
      //   },
      //   {
      //     icon: 'iconfont icon-ziliaoguanli',
      //     index: 'datum',
      //     title: '资料管理',
      //     subs: [
      //       {
      //         index: '/ucenter/companyDatum',
      //         title: '公司资料'
      //       },
      //       {
      //         index: '/ucenter/changePassword',
      //         title: '修改密码'
      //       },
      //       {
      //         index: '/ucenter/employeeList',
      //         title: '员工列表'
      //       },
      //       {
      //         index: '/ucenter/personalData',
      //         title: '个人资料'
      //       }
      //     ]
      //   }
      // ]
      // items: [
      //   {
      //     icon: 'iconfont icon-project',
      //     index: 'ucenter',
      //     title: '产品管理',
      //     subs: [
      //       {
      //         index: '/ucenter/midsoleManagement',
      //         title: '中底管理'
      //       },
      //       {
      //         index: '/ucenter/addMidsole',
      //         title: '添加中底'
      //       }
      //     ]
      //   },
      //   {
      //     icon: 'iconfont icon-dingdan',
      //     index: 'order',
      //     title: '订单管理',
      //     subs: [
      //       // {
      //       //   index: '/ucenter/midsoleOrder',
      //       //   title: '中底订单'
      //       // },
      //       // {
      //       //   index: '/ucenter/testOrder',
      //       //   title: '试做订单'
      //       // },
      //       // {
      //       //   index: '/ucenter/deliverySchedule',
      //       //   title: '交货计划'
      //       // },
      //       {
      //         index: '/ucenter/deliveryMessage',
      //         title: '交货通知'
      //       }
      //     ]
      //   },
      //   {
      //     icon: 'iconfont icon-dizhiguanli',
      //     index: 'address',
      //     title: '地址管理',
      //     subs: [
      //       {
      //         index: '/ucenter/receivingAddress',
      //         title: '收货地址'
      //       },
      //       {
      //         index: '/ucenter/storeAddress',
      //         title: '仓库列表'
      //       }
      //     ]
      //   },
      //   {
      //     icon: 'iconfont icon-ziliaoguanli',
      //     index: 'datum',
      //     title: '资料管理',
      //     subs: [
      //       {
      //         index: '/ucenter/companyDatum',
      //         title: '公司资料'
      //       },
      //       {
      //         index: '/ucenter/changePassword',
      //         title: '修改密码'
      //       },
      //       {
      //         index: '/ucenter/employeeList',
      //         title: '员工列表'
      //       },
      //       {
      //         index: '/ucenter/personalData',
      //         title: '个人资料'
      //       }
      //     ]
      //   }
      // ]
    }
  },
  computed: {
    uri() {
      if (this.$route.path === '/ucenter/deliveryPlan') {
        // 交货计划
        return '/ucenter/purchase'
      } if (this.$route.path === '/ucenter/deliveryNotice') {
        // 交货通知
        return '/ucenter/purchase'
      } else if (this.$route.path === '/ucenter/tryDo') {
        // 试做
        return '/ucenter/purchase'
      } else if (this.$route.path === '/ucenter/logistics') {
        // 物流信息
        return '/ucenter/purchase'
      } else if (this.$route.path === '/ucenter/sampleOrderDetail') {
        // 样品订单
        return '/ucenter/sampleOrder'
      } else if (this.$route.path === '/ucenter/editCompany') {
        // 公司资料
        return '/ucenter/companyDatum'
      } else if (this.$route.path === '/ucenter/adduser') {
        // 用户列表
        return '/ucenter/employeeList'
      } else if (this.$route.path === '/ucenter/operateAddress') {
        // 收货地址
        return '/ucenter/receivingAddress'
      } else if (this.$route.path === '/ucenter/operateStoreAddress') {
        // 添加库区
        return '/ucenter/storeAddress'
      } else {
        return this.$route.path
      }
    }
  },
  created() {
    let change = sessionStorage.getItem('role') || '采购中心'
    let role = JSON.parse(localStorage.getItem('userInfo')).roleList
    let str = ''
    role.forEach(item => {
      if (item.roleName === change) {
        str = item.obid
      }
    })
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on('collapse', msg => {
      this.collapse = msg
    })
    bus.$on('dropdown', msg => {
      this.getToutes(msg)
    })
    this.getToutes(str)
  },
  destroyed() {
  },
  methods: {
    getToutes(id) {
      getRoute(id).then(res => {
        this.item = res.data
      })
    }
  }
}
</script>
<style lang="scss">
.sidebar {
  .sidebar-el-menu {
    > li {
      > div {
        height: 50px;
        line-height: 50px;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 90px;
  bottom: 0;
  overflow: hidden;
  i.iconfont {
    margin-right: 8px;
  }
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 150px;
}
.sidebar > ul {
  height: 100%;
}
.el-submenu .el-menu-item {
  min-width: 150px;
  background-color: #4c4c4c !important;
  padding-left: 49px !important;
}
.el-submenu .el-menu-item.is-active {
  background-color: #ee3d53 !important;
}
.el-menu-item,
.el-submenu__title {
  width: 150px;
  height: 50px;
  line-height: 50px;
}
.el-submenu__title i {
  color: #ffffff !important;
}
.el-submenu {
  .el-submenu__title:hover {
    i,
    span {
      color: #ee3d53 !important;
    }
  }
  .el-submenu__title:active {
    background-color: #ee3d53 !important;
    i,
    span {
      color: #ffffff !important;
    }
  }
  .el-menu-item:hover {
    color: #ee3d53 !important;
  }
  .is-active:hover {
    color: #ffffff !important;
  }
}
.contact-box {
  font-size: 12px;
  color: #fff;
  position: absolute;
  bottom: 10px;
  text-align: center;
  line-height: 17px;
  width: 100px;
  left: 50%;
  margin-left: -50px;
}
</style>