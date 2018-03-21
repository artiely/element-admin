<template>
  <div id="_area"></div>
</template>
<script>
import G2 from '@antv/g2'
export default {
  data() {
    return {
      chart: null
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.sys.isCollapse
    }
  },
  watch: {
    'isCollapse': {
      handler() {
        setTimeout(() => {
          this.chart.forceFit()
        }, 400)
      }
    }
  },
  methods: {
    _chart() {
      const data = [
        { year: '1991', value: 15468 },
        { year: '1992', value: 16100 },
        { year: '1993', value: 15900 },
        { year: '1994', value: 17409 },
        { year: '1995', value: 17000 },
        { year: '1996', value: 31056 },
        { year: '1997', value: 31982 },
        { year: '1998', value: 32040 },
        { year: '1999', value: 33233 }
      ]
      this.chart = new G2.Chart({
        container: '_area',
        forceFit: true,
        height: 100,
        padding: [0, 0, 0, 0]
      })
      this.chart.source(data)
      this.chart.scale({
        value: {
          min: 10000
        },
        year: {
          range: [0, 1]
        }
      })
      this.chart.axis('value', {
        label: {
          formatter: val => {
            return (val / 10000).toFixed(1) + 'k'
          }
        }
      })
      this.chart.tooltip({
        crosshairs: {
          type: 'line'
        }
      })
      this.chart.area().position('year*value')
      this.chart.line().position('year*value').size(2)
      this.chart.render()
    }
  },
  mounted() {
    this._chart()
  }
}
</script>
