<template>
  <div id="_pie"></div>
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
      const { DataView } = DataSet
      const data = [
        { item: '事例一', count: 40 },
        { item: '事例二', count: 21 },
        { item: '事例三', count: 17 },
        { item: '事例四', count: 13 },
        { item: '事例五', count: 9 }
      ]
      const dv = new DataView()
      dv.source(data).transform({
        type: 'percent',
        field: 'count',
        dimension: 'item',
        as: 'percent'
      })
      this.chart = new G2.Chart({
        container: '_pie',
        forceFit: true,
        height: 100,
        padding: [0, 0, 0, 0]
      })
      this.chart.source(dv, {
        percent: {
          formatter: val => {
            val = (val * 100) + '%'
            return val
          }
        }
      })
      this.chart.coord('theta')
      this.chart.tooltip({
        showTitle: false,
        itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      })
      this.chart.intervalStack()
        .position('percent')
        .color('item')
        .label('percent', {
          offset: -15,
          autoRotate: true,
          textStyle: {
            rotate: 0,
            textAlign: 'center',
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)'
          }
        })
        .tooltip('item*percent', (item, percent) => {
          percent = percent * 100 + '%'
          return {
            name: item,
            value: percent
          }
        })
        .style({
          lineWidth: 1,
          stroke: '#fff'
        })
      this.chart.render()
    }
  },
  mounted() {
    this._chart()
  }
}
</script>
