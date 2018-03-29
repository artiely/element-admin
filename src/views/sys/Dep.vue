<template>
<el-card>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="name" label="姓名" width="100px">
    </el-table-column>
    <el-table-column prop="address" label="地址">
    </el-table-column>
    <el-table-column prop="ps" label="说明" >
    </el-table-column>
    <el-table-column prop="remark" label="备注" >
    </el-table-column>
  </el-table>
</el-card>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      tableData: [
        {
          name: 'vue',
          address: 'https://github.com/vuejs/vue',
          ps: 'A progressive, incrementally-adoptable JavaScript framework for building UI on the web. ',
          remark: ''
        },
        {
          name: 'vue-router',
          address: 'https://github.com/vuejs/vue-router',
          ps: 'The official router for Vue.js.',
          remark: ''
        },
        {
          name: 'vuex',
          address: 'https://github.com/vuejs/vuex',
          ps: ' Centralized State Management for Vue.js.',
          remark: ''
        },
        {
          name: 'vue-lazyload',
          address: 'https://github.com/hilongjw/vue-lazyload',
          ps: 'A Vue.js plugin for lazyload your Image or Component in your application.',
          remark: ''
        },
        {
          name: 'clipboard.js',
          address: 'https://github.com/zenorocha/clipboard.js',
          ps: 'Modern copy to clipboard. No Flash. Just 3kb gzipped',
          remark: '实现iconfont复制'
        }, {
          name: 'moment',
          address: 'https://github.com/moment/moment',
          ps: 'Parse, validate, manipulate, and display dates in javascript.',
          remark: ''
        }, {
          name: 'g2',
          address: 'https://github.com/antvis/g2',
          ps: 'G2 (The Grammar of Graphics) ',
          remark: '实现首页图表'
        }, {
          name: 'element',
          address: 'https://github.com/ElemeFE/element',
          ps: 'A Vue.js 2.0 UI Toolkit for Web ',
          remark: ''
        }, {
          name: 'axios',
          address: 'https://github.com/axios/axios',
          ps: 'Promise based HTTP client for the browser and node.js ',
          remark: ''
        }, {
          name: 'echarts',
          address: 'https://github.com/ecomfe/echarts',
          ps: 'A powerful, interactive charting and visualization library for browser ',
          remark: ''
        }, {
          name: 'vue-progressbar',
          address: 'https://github.com/hilongjw/vue-progressbar',
          ps: 'A lightweight progress bar for vue',
          remark: ''
        },
        {
          name: 'nprogress',
          address: 'https://github.com/rstacruz/nprogress',
          ps: 'For slim progress bars like on YouTube, Medium',
          remark: '实现顶部进度条'
        },
        {
          name: 'js-cookie',
          address: 'https://github.com/js-cookie/js-cookie',
          ps: 'A simple, lightweight JavaScript API for handling browser cookies',
          remark: 'cookie操作'
        },
        {
          name: 'vue-count-to',
          address: 'https://www.npmjs.com/package/vue-count-to',
          ps: 'vue-countTo is a dependency-free, lightweight vue component that can be overwrited easingFn by yourself. You can set startVal and endVal ,it will automatic judge count up or count down. It is support vue-ssr. It is learn from countUp.js;',
          remark: '首页数字'
        },
        {
          name: 'vue-quill-editor',
          address: 'https://github.com/surmon-china/vue-quill-editor',
          ps: '@quilljs editor component for @vuejs',
          remark: '富文本编辑器'
        },
        {
          name: 'mavonEditor',
          address: 'https://github.com/hinesboy/mavonEditor',
          ps: 'mavonEditor - A markdown editor based on Vue that supports a variety of personalized features',
          remark: 'markdown编辑器'
        },
        {
          name: 'particles.js',
          address: 'https://github.com/VincentGarreau/particles.js',
          ps: 'A lightweight JavaScript library for creating particles',
          remark: '登录背景动画'
        }
      ]
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>
