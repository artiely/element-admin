<template>
<el-card>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="name" label="姓名" >
    </el-table-column>
    <el-table-column prop="address" label="地址">
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
          remark: 'A progressive, incrementally-adoptable JavaScript framework for building UI on the web. '
        },
        {
          name: 'vue-router',
          address: 'https://github.com/vuejs/vue-router',
          remark: 'The official router for Vue.js.'
        },
        {
          name: 'vuex',
          address: 'https://github.com/vuejs/vuex',
          remark: ' Centralized State Management for Vue.js.'
        },
        {
          name: 'vue-lazyload',
          address: 'https://github.com/hilongjw/vue-lazyload',
          remark: 'A Vue.js plugin for lazyload your Image or Component in your application.'
        },
        {
          name: 'clipboard.js',
          address: 'https://github.com/zenorocha/clipboard.js',
          remark: 'Modern copy to clipboard. No Flash. Just 3kb gzipped'
        }, {
          name: 'moment',
          address: 'https://github.com/moment/moment',
          remark: 'Parse, validate, manipulate, and display dates in javascript.'
        }, {
          name: 'g2',
          address: 'https://github.com/antvis/g2',
          remark: 'G2 (The Grammar of Graphics) '
        }, {
          name: 'element',
          address: 'https://github.com/ElemeFE/element',
          remark: 'A Vue.js 2.0 UI Toolkit for Web '
        }, {
          name: 'axios',
          address: 'https://github.com/axios/axios',
          remark: 'Promise based HTTP client for the browser and node.js '
        }, {
          name: 'echarts',
          address: 'https://github.com/ecomfe/echarts',
          remark: 'A powerful, interactive charting and visualization library for browser '
        }, {
          name: 'vue-progressbar',
          address: 'https://github.com/hilongjw/vue-progressbar',
          remark: 'A lightweight progress bar for vue'
        },
        {
          name: 'nprogress',
          address: 'https://github.com/rstacruz/nprogress',
          remark: 'For slim progress bars like on YouTube, Medium'
        },
        {
          name: 'js-cookie',
          address: 'https://github.com/js-cookie/js-cookie',
          remark: 'A simple, lightweight JavaScript API for handling browser cookies'
        },
        {
          name: 'vue-count-to',
          address: 'https://www.npmjs.com/package/vue-count-to',
          remark: 'vue-countTo is a dependency-free, lightweight vue component that can be overwrited easingFn by yourself. You can set startVal and endVal ,it will automatic judge count up or count down. It is support vue-ssr. It is learn from countUp.js;'
        },
        {
          name: 'vue-quill-editor',
          address: 'https://github.com/surmon-china/vue-quill-editor',
          remark: '@quilljs editor component for @vuejs'
        },
        {
          name: 'mavonEditor',
          address: 'https://github.com/hinesboy/mavonEditor',
          remark: 'mavonEditor - A markdown editor based on Vue that supports a variety of personalized features'
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
