<template>
  <div :id="id"></div>
</template>
<script>
import G2 from '@antv/g2'
import {
  DataView
} from '@antv/data-set'
export default {
  name: 'donut',
  props: {
    id: String
  },
  data() {
    return {
      chart: null,
      data: [
        { item: '事例一', count: 40 },
        { item: '事例二', count: 21 },
        { item: '事例三', count: 17 },
        { item: '事例四', count: 13 },
        { item: '事例五', count: 9 }
      ]
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
      const dv = new DataView()
      dv.source(this.data).transform({
        type: 'percent',
        field: 'count',
        dimension: 'item',
        as: 'percent'
      })
      this.chart = new G2.Chart({
        container: this.id,
        forceFit: true,
        height: 350,
        animate: false
      })
      this.chart.source(dv, {
        percent: {
          formatter: val => {
            val = (val * 100) + '%'
            return val
          }
        }
      })
      this.chart.coord('theta', {
        radius: 0.75,
        innerRadius: 0.6
      })
      this.chart.tooltip({
        showTitle: false,
        itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      })
      // 辅助文本
      this.chart.guide().html({
        position: ['50%', '50%'],
        html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">主机<br><span style="color:#8c8c8c;font-size:20px">200</span>台</div>',
        alignX: 'middle',
        alignY: 'middle'
      })
      const interval = this.chart.intervalStack()
        .position('percent')
        .color('item')
        .label('percent', {
          formatter: (val, item) => {
            return item.point.item + ': ' + val
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
      interval.setSelected(dv.rows[0])
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._chart()
    })
  }
}
</script>
