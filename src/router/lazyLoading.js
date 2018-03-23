export default (name) => () =>
  import(`@/${name}.vue`)
