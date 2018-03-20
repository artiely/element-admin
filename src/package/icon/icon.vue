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
.iconfont::before {
  text-shadow: rgba(200, 200, 200, 0.3) 1px 0px 1px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
