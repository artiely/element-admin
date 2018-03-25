<template>
<div>
  <tinymce id="d1" v-model="data" :other_options="options"></tinymce>
  <pre>{{data}}</pre>
</div>
</template>
<script>
let lang = window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'zh'
export default {
  data() {
    return {
      data: '欢迎使用 tinymce',
      lang: 0,
      options: {
        language_url: lang === 'zh' ? require('../../../static/langs/zh_CN') : require('../../../static/langs/en_CA')
      }
    }
  }
}
</script>
<style>
.mce-title {
  visibility: hidden;
}
</style>
