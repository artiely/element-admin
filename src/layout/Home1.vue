<template>
  <el-container id="main">
    <el-header class="v-header">
       <v-icon name="icon-xuanxiang" class="menu" @click.native="handlerIsCollapse"></v-icon>
          <div class="logout">
            <el-tooltip class="item" effect="dark" :content="screenfull? '还原': '全屏'" placement="top-end">
              <v-icon name="icon-send" @click.native="toggleScreen"></v-icon>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="布局" placement="top-end">
              <v-icon name="icon-workbench" @click.native="handleLayout" ></v-icon>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="退出" placement="top-end">
              <v-icon name="icon-tuichu1"  @click.native="logout"></v-icon>
             </el-tooltip>
          </div>
    </el-header>
    <el-container class="demo-container">
      <el-aside :style="{width:isCollapse?'84px':'220px'}" class="horizontal-collapse-transition">
         <el-menu @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :default-active="active" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :router="true">
        <el-submenu v-for="(sub,i) in menu" :key="i" v-show="!sub.meta.hidden" :index="i+'@'">
          <div slot="title">
            <i class="el-icon iconfont" :class="sub.meta.icon"></i>
            <span slot="title">{{sub.meta.title}}</span>
          </div>
          <el-menu-item v-if="menu" :index="item.path" v-for="item in sub.children" v-show="!item.meta.hidden" :key="item.path">{{item.meta.title}}</el-menu-item>
        </el-submenu>
      </el-menu>
      </el-aside>
      <el-main>
        <keep-alive>
          <router-view/>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      screenfull: false,
      layout: Cookies.get('layout') ? Cookies.get('layout') : '固定布局'
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.sys.isCollapse
    },
    menu() {
      return this.$store.state.sys.menu
    },
    active() {
      return this.$route.path
    }
  },
  methods: {
    toggleScreen() {
      if (!this.screenfull) {
        var docElm = document.documentElement
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen()
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen()
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen()
        } else if (docElm.msRequestFullscreen) {
          docElm.msRequestFullscreen()
        } else {
          this.$message({
            type: 'warning',
            message: '除了让你升级浏览器对方没什么好说的！'
          })
        }
        this.screenfull = true
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        } else {
          this.$message({
            type: 'warning',
            message: '请升级浏览器，不然我是不会理你的！'
          })
        }
        this.screenfull = false
      }
    },
    handlerIsCollapse() {
      this.$store.commit('IS_COLLAPSE')
    },
    handleLayout() {
      let _l = this.layout === '固定布局' ? '基础布局' : '固定布局'
      this.$store.commit('LAYOUT', _l)
      window.location.reload()
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect(path) {
      this.$router.push(path)
    },
    logout() {
      Cookies.remove('userid')
      window.location.reload()
    }
  },
  mounted() {
    if (this.$store.state.sys.role === 'guest') {
      this.$notify.info({
        title: '消息',
        message: '游客没有权限查看所有菜单',
        offset: 60,
        duration: 0
      })
    }
  }
}
</script>
<style scoped lang="stylus">
.v-head-select{
  margin-top: 15px;
  float: left;
}
.v-head-select .el-input__inner {
  border: none;
  width: 120px;
}
.logout {
  height: 60px;
  float: right;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
}
.el-submenu__title i {
  font-size: 20px;
  margin-right: 4px;
}
#main {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
  max-width: 200px;
  min-width: 200px;
  flex: 0 0 200px;
}
.v-header {
  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.1);
}
.el-menu.el-menu-vertical-demo {
  border-right: none;
  min-height: 100vh;
}

.demo-container {
  padding-top: 60px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.el-menu--collapse {
  max-width: 64px;
  min-width: 64px;
  flex: 0 0 64px;
}
.el-header,
.el-footer {
  background-color: #fff;
  color: #333;
  text-align: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
.el-aside {
  background-color: rgb(84, 92, 100);
  color: #333;
  text-align: left;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e9e9e9;
  overflow-y: scroll;
  overflow-x: hidden;
  /* flex: 0 0 220px; */
  position: relative;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: left;
  overflow-y: scroll;
  margin-left: -20px;
  margin-right: -20px;
  z-index: 99;
}
.el-container {
  height: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
