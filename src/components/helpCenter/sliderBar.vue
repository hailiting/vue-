<template>
  <div class="sidebar">
    <div class="inner">
      <el-menu ref="sidemenu" class="sidebar-el-menu" :default-active="$route.path" :default-openeds="arr" :collapse="collapse" background-color="#f0f0f0" text-color="#666666" active-text-color="#E03535" router>
        <template v-for="item in items">
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapse: false,
      item: [],
      role: [],
      show: true,
      arr: ['helpcenter', 'support', 'us', 'focus'],
      items: [
        {
          // icon: 'iconfont icon-wodedingdan',
          index: 'helpcenter',
          title: '帮助中心',
          subs: [
            {
              index: '/helpCenter/accountManagement',
              title: '账户管理'
            },
            {
              index: '/helpCenter/shoppingGuide',
              title: '购物指南'
            },
            {
              index: '/helpCenter/orderOperation',
              title: '订单操作'
            }
          ]
        },
        {
          // icon: 'iconfont icon-dizhiguanli',
          index: 'support',
          title: '服务支持',
          subs: [
            {
              index: '/helpCenter/serviceSupport',
              title: '服务保障'
            },
            {
              index: '/helpCenter/indemnification',
              title: '入驻规则'
            }
          ]
        },
        {
          // icon: 'iconfont icon-ziliaoguanli',
          index: 'us',
          title: '关于我们',
          subs: [
            {
              index: '/helpCenter/aboutUs',
              title: '了解公司'
            },
            {
              index: '/helpCenter/contact',
              title: '联系我们'
            }
          ]
        },
        {
          // icon: 'iconfont icon-ziliaoguanli',
          index: 'focus',
          title: '关注我们',
          subs: [
            {
              index: '/helpCenter/focusUs',
              title: '官方微信'
            }
          ]
        }
      ]
    }
  }
  // ,
  // created() { },
  // mounted() {
  //   window.addEventListener('scroll', this.getHeight, true)
  // },
  // destroyed() {
  //   window.removeEventListener('scroll', this.getHeight, true)
  // },
  // methods: {
  //   getHeight() {
  //     // 监听浏览器高度
  //     let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  //     console.log(scrollTop)
  //   }
  // }
}
</script>
<style lang="scss">
.sidebar {
  width: 100%;
  position: fixed;
  top: 60px;
  left: 0;
  .inner {
    position: relative;
    .sidebar-el-menu {
      width: 210px;
      > li {
        > div {
          height: 50px;
          line-height: 50px;
          background-color: #f00;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.sidebar {
  //   display: block;
  //   position: absolute;
  //   left: 0;
  //   top: 90px;
  //   bottom: 0;
  overflow: hidden;
  i.iconfont {
    margin-right: 8px;
  }
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 210px;
}
.sidebar > ul {
  height: 100%;
}
.el-submenu {
  text-align: center;
}
.el-submenu .el-menu-item {
  min-width: 210px;
  background-color: #ffffff !important;
  padding-left: 49px !important;
  border-bottom: 1px solid rgba(236, 236, 236, 1);
}
.el-submenu .el-menu-item.is-active {
  // background-color: #ee3d53 !important;
}
.el-menu-item,
.el-submenu__title {
  width: 210px;
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
    color: #e03535 !important;
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