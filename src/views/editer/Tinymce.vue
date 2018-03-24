<template>
  <tinymce id="d1" v-model="data" :other_options="options"></tinymce>
</template>
<script>
export default {
  data() {
    return {
      data: '欢迎使用 tinymce',
      options: {
        language_url: require('./langs/zh_CN')
      }
    }
  }
}
</script>
<style>
.mce-title{
  visibility: hidden;
}
</style>
