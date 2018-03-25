<template>
<div>
  <select name="" id="" v-model="lang">
    <option value="zh">中文</option>
    <option value="en">English</option>
  </select>
  <div>{{$t('message.hello')}}</div>
</div>
</template>
<script>
export default {
  data() {
    return {
      lang: window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'zh'
    }
  },
  watch: {
    lang: function(val) {
      if (val === 'zh') {
        this.$i18n.locale = 'zh'
      } else if (val === 'en') {
        this.$i18n.locale = 'en'
      } else {
        this.$i18n.locale = 'zh'
      }
      this.$store.commit('SET_LANG', val)
    }
  }
}
</script>
