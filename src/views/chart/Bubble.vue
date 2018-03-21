<template>
  <div :id="id"></div>
</template>
<script>
import data from './bubble.json'
import G2 from '@antv/g2'
export default {
  props: {
    id: String
  },
  data() {
    return {
      chart: null,
      data: data
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
      const { Global } = G2
      const colorMap = {
        'Asia': Global.colors[0],
        'Americas': Global.colors[1],
        'Europe': Global.colors[2],
        'Oceania': Global.colors[3]
      }
      this.chart = new G2.Chart({
        container: this.id,
        forceFit: true,
        height: 350
      })
      this.chart.source(this.data)
      // 为各个字段设置别名
      this.chart.scale({
        LifeExpectancy: {
          alias: '人均寿命（年）'
        },
        Population: {
          type: 'pow',
          alias: '人口总数'
        },
        GDP: {
          alias: '人均国内生产总值($)'
        },
        Country: {
          alias: '国家/地区'
        }
      })
      this.chart.axis('GDP', {
        label: {
          formatter: function(value) {
            return (value / 1000).toFixed(0) + 'k'
          } // 格式化坐标轴的显示
        }
      })
      this.chart.tooltip({
        showTitle: false // 不显示默认标题
      })
      this.chart.legend('Population', false) // 该图表默认会生成多个图例，设置不展示 Population 和 Country 两个维度的图例
      this.chart.point().position('GDP*LifeExpectancy')
        .size('Population', [4, 65])
        .color('continent', val => {
          return colorMap[val]
        })
        .shape('circle')
        .tooltip('Country*Population*GDP*LifeExpectancy')
        .style('continent', {
          lineWidth: 1,
          strokeOpacity: 1,
          fillOpacity: 0.3,
          opacity: 0.65,
          stroke: val => {
            return colorMap[val]
          }
        })
      this.chart.render()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._chart()
    })
  }
}
</script>
