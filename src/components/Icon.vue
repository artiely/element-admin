<template>
  <el-row>
    <el-col>
      <el-card>
        <div class="markdown">
          <h1>IconFont 图标 <span style="font-size: 16px">点击图标复制代码到粘贴板</span></h1>
          <div>
            <el-switch v-model="isLabel" active-text="复制标签" inactive-text="复制类名">
            </el-switch>
          </div>
          <div class="icon_lists">
            <div>
              <h3>多色图标</h3>
            </div>
            <el-row>
              <el-col>
                <span class="icon-box" @click="clip(item,symbol)" v-for="(item) in symbol" :key="item.name">
                      <v-icon :name="item.name" symbol></v-icon>
                    </span>
              </el-col>
            </el-row>
            <div>
              <h3>字体图标</h3>
            </div>
            <el-row>
              <el-col>
                <span class="icon-box" @click="clip(item,null)" v-for="(item) in iconfont" :key="item.name">
                      <v-icon :name="item.name"></v-icon>
                    </span>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import Clipboard from 'clipboard'
import iconfont from '@/assets/iconfont/icon.js'
import symbol from '@/assets/iconfont/symbol-icon.js'
export default {
  name: 'iconfont',
  components: {},
  data() {
    return {
      iconfont: iconfont,
      symbol: symbol,
      isLabel: true
    }
  },
  watch: {},
  computed: {},
  methods: {
    clip(type, symbol) {
      let icon
      if (this.isLabel) {
        if (symbol) {
          icon = `<v-icon name="${type.name}" symbol></v-icon>`
        } else {
          icon = `<v-icon name="${type.name}" ></v-icon>`
        }
      } else {
        icon = type.name
      }
      console.log(icon)
      const clipboard = new Clipboard('.icon', {
        text() {
          return icon
        }
      })
      clipboard.on('success', (e) => {
        e.clearSelection()
        clipboard.destroy()
        this.$message({
          message: '代码已经复制到剪贴板',
          type: 'success'
        })
      })
    }
  },
  created() { },
  mounted() { }
}
</script>
<style>
.icon_lists li {
  font-size: 24px;
  cursor: pointer;
}
.icon_lists .iconfont {
  font-size: 24px !important;
}
.icon-box {
  display: inline-block;
  padding: 10px;
}
</style>
