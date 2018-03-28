<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <!-- set progressbar -->
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
  },
  created() {
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Monospace Number, Chinese Quote, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  min-height: 100vh;
  position: relative;
}
</style>
