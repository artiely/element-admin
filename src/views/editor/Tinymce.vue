<template>
<div>
  <tinymce id="terms" v-model="h" :content='content' :options='options' @change="changed"></tinymce>
    <p v-html="h"></p>
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
        language_url: lang === 'zh' ? require('../../../static/langs/zh_CN') : require('../../../static/langs/en_CA'),
        content: '<h1>Default content</h1>',
        options: {}
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
