<template>
  <span>
    <svg v-if="symbol" class="icon" aria-hidden="true">
      <use :xlink:href="'#'+name"></use>
  </svg>
  <i v-else class="icon iconfont" :class="name"></i>
  </span>
</template>
<script>
export default {
  name: 'v-icon',
  props: {
    name: {
      type: String,
      default: ''
    },
    symbol: {
      type: Boolean
    }
  }
}
</script>
<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
