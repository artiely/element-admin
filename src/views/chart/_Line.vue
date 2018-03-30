<template>
    <div :id="id"></div>
</template>
<script>
import G2 from '@antv/g2'
import {
  DataSet
} from '@antv/data-set'
export default {
  name: 'chart-line',
  props: {
    id: String
  },
  data() {
    return {
      chart2: null,
      data: [{
        month: 'Jan',
        Tokyo: 7.0,
        London: 3.9
      },
      {
        month: 'Feb',
        Tokyo: 6.9,
        London: 4.2
      },
      {
        month: 'Mar',
        Tokyo: 9.5,
        London: 5.7
      },
      {
        month: 'Apr',
        Tokyo: 14.5,
        London: 8.5
      },
      {
        month: 'May',
        Tokyo: 18.4,
        London: 11.9
      },
      {
        month: 'Jun',
        Tokyo: 21.5,
        London: 15.2
      },
      {
        month: 'Jul',
        Tokyo: 25.2,
        London: 17.0
      },
      {
        month: 'Aug',
        Tokyo: 26.5,
        London: 16.6
      },
      {
        month: 'Sep',
        Tokyo: 23.3,
        London: 14.2
      },
      {
        month: 'Oct',
        Tokyo: 18.3,
        London: 10.3
      },
      {
        month: 'Nov',
        Tokyo: 13.9,
        London: 6.6
      },
      {
        month: 'Dec',
        Tokyo: 9.6,
        London: 4.8
      }
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
          this.chart2.forceFit()
        }, 400)
      }
    }
  },
  methods: {
    _chart2() {
      const ds = new DataSet()
      const dv = ds.createView().source(this.data)
      dv.transform({
        type: 'fold',
        fields: ['Tokyo', 'London'], // 展开字段集
        key: 'city', // key字段
        value: 'temperature' // value字段
      })
      this.chart2 = new G2.Chart({
        container: this.id,
        forceFit: true,
        padding: [0, 0, 0, 0], // 上，右，下，左
        height: 100
      })
      this.chart2.source(dv, {
        month: {
          range: [0, 1]
        }
      })
      this.chart2.tooltip({
        crosshairs: {
          type: 'line'
        }
      })
      this.chart2.axis('temperature', {
        label: {
          formatter: val => {
            return val + '°C'
          }
        }
      })
      this.chart2.line().position('month*temperature').color('city')
      this.chart2.point().position('month*temperature').color('city').size(4).shape('circle').style({
        stroke: '#fff',
        lineWidth: 1
      })
      this.chart2.render()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._chart2()
    })
  }
}
</script>
