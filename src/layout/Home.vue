<template>
  <el-container>
    <el-aside :style="{width:isCollapse?'64px':'200px'}" class="horizontal-collapse-transition">
      <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
          <div slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </div>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <v-icon name="icon-xuanxiang" class="menu" @click.native="handlerIsCollapse"></v-icon>
      </el-header>
      <el-main>
        <router-view/>
        <el-footer>Copyright © 2018 Artiely</el-footer>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    isCollapse() {
      return this.$store.state.sys.isCollapse
    }
  },
  methods: {
    handlerIsCollapse() {
      this.$store.commit('IS_COLLAPSE')
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted() { }
}
</script>
<style>
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
}
.el-container {
  height: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
