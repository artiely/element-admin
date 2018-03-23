<template>
  <el-container>
    <el-aside :style="{width:isCollapse?'64px':'200px'}" class="horizontal-collapse-transition">
      <el-menu @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" default-active="/index" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu v-for="(sub,i) in menu" :key="i" :index="i+'@'">
          <div slot="title">
            <i class="el-icon iconfont" :class="sub.meta.icon"></i>
            <!-- <v-icon name="icon-qrcode_fill" class="el-icon-v"></v-icon> -->
            <span slot="title">{{sub.meta.name}}</span>
          </div>
          <el-menu-item v-if="menu" :index="item.path" v-for="item in sub.children" :key="item.path">{{item.meta.name}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <v-icon name="icon-xuanxiang" class="menu" @click.native="handlerIsCollapse"></v-icon>
        <v-icon name="icon-tuichu1" class="logout" @click.native="logout"></v-icon>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>Copyright © 2018 Artiely</el-footer>
    </el-container>
  </el-container>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return {}
  },
  computed: {
    isCollapse() {
      return this.$store.state.sys.isCollapse
    },
    menu() {
      return this.$store.state.sys.menu
    }
  },
  methods: {
    handlerIsCollapse() {
      this.$store.commit('IS_COLLAPSE')
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect(path) {
      this.$router.push(path)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    logout() {
      Cookies.remove('userid')
      // this.$store.commit('SET_MENU', null)
      window.location.reload()
      // this.$router.replace('/login')
    }
  },
  mounted() { }
}
</script>
<style>
.logout{
  height: 60px;
  width: 60px;
  float: right;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
}
.logout i{
  font-size: 24px;
}
.el-submenu__title i{
  font-size: 24px;
  margin-right: 4px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  max-width: 200px;
  min-width: 200px;
  flex: 0 0 200px;
}
.el-menu.el-menu-vertical-demo {
  border-right: none;
  min-height: 100vh;
}
.menu {
  height: 60px;
  width: 60px;
  text-align: center;
  cursor: pointer;
  float: left;
}
.menu .iconfont {
  font-size: 24px;
  display: inline-block;
  line-height: 60px;
  height: 60px;
}
.el-menu--collapse {
  max-width: 64px;
  min-width: 64px;
  flex: 0 0 64px;
}
.el-header{
  background-color: #fff;
  color: #333;
}
.el-footer{
  line-height: 60px;
  text-align: center;
  color: #666;
  font-size: 16px;
}
.el-aside {
  box-shadow: 3px 0px 6px 0px rgba(0, 0, 0, 0.3);
  background-color: rgb(84, 92, 100);
  color: #333;
  text-align: left;
  position: relative;
  z-index: 99;
}
.el-main {
  background-color: #eee;
  color: #333;
  text-align: left;
  /* min-height: 100vh; */
}
.el-container {
  height: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
