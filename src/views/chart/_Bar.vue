<template>
  <div id="_bar"></div>
</template>
<script>
import G2 from '@antv/g2'
import {
  DataSet
} from '@antv/data-set'
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
        { country: '中国', population: 131744 },
        { country: '印度', population: 104970 },
        { country: '美国', population: 29034 },
        { country: '印尼', population: 23489 },
        { country: '巴西', population: 18203 }
      ]
      const ds = new DataSet()
      const dv = ds.createView().source(data)
      dv.source(data)
        .transform({
          type: 'sort',
          callback(a, b) { // 排序依据，和原生js的排序callback一致
            return a.population - b.population
          }
        })
      this.chart = new G2.Chart({
        container: '_bar',
        forceFit: true,
        height: 100,
        padding: [0, 0, 0, 0]
      })
      this.chart.source(dv)
      this.chart.axis('country', {
        label: {
          offset: 12
        }
      })
      this.chart.coord().transpose()
      this.chart.interval().position('country*population')
      this.chart.render()
    }
  },
  mounted() {
    this._chart()
  }
}
</script>
