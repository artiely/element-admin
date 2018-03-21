<template>
  <div id="mountNode"></div>
</template>
<script>
import G2 from '@antv/g2'
import data from './candle-sticks.json'
import Slider from '@antv/g2-plugin-slider'
import $ from 'jquery'
import {
  DataSet
} from '@antv/data-set'
export default {
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
      $('<div id="slider"></div>').insertAfter('#mountNode')

      // 设置状态量，时间格式建议转换为时间戳，转换为时间戳时请注意区间
      const ds = new DataSet({
        state: {
          start: '2015-04-07',
          end: '2015-07-28'
        }
      })
      const dv = ds.createView()
      dv.source(this.data)
        .transform({
          type: 'filter',
          callback: obj => {
            const date = obj.time
            return date <= ds.state.end && date >= ds.state.start
          }
        })
        .transform({
          type: 'map',
          callback: obj => {
            obj.trend = (obj.start <= obj.end) ? '上涨' : '下跌'
            obj.range = [obj.start, obj.end, obj.max, obj.min]
            return obj
          }
        })
      this.chart = new G2.Chart({
        container: 'mountNode',
        forceFit: true,
        height: window.innerHeight - 50,
        animate: false,
        padding: [10, 40, 40, 40]
      })
      this.chart.source(dv, {
        'time': {
          type: 'timeCat',
          nice: false,
          range: [0, 1]
        },
        trend: {
          values: ['上涨', '下跌']
        },
        'volumn': { alias: '成交量' },
        'start': { alias: '开盘价' },
        'end': { alias: '收盘价' },
        'max': { alias: '最高价' },
        'min': { alias: '最低价' },
        'range': { alias: '股票价格' }
      })
      this.chart.legend({
        offset: 20
      })
      this.chart.tooltip({
        showTitle: false,
        itemTpl: `<li data-index={index}>
          <span style="background-color:{color};" class="g2-tooltip-marker"></span>
          {name}{value}</li>`
      })

      const kView = this.chart.view({
        end: {
          x: 1,
          y: 0.5
        }
      })
      kView.source(dv)
      kView.schema()
        .position('time*range')
        .color('trend', val => {
          if (val === '上涨') {
            return '#f04864'
          }

          if (val === '下跌') {
            return '#2fc25b'
          }
        })
        .shape('candle')
        .tooltip('time*start*end*max*min', (time, start, end, max, min) => {
          return {
            name: time,
            value: `<br><span style="padding-left: 16px">开盘价：${start}</span><br/>'
              <span style="padding-left: 16px">收盘价：${end}</span><br/>
              <span style="padding-left: 16px">最高价：${max}</span><br/>
              <span style="padding-left: 16px">最低价：${min}</span>`
          }
        })

      const barView = this.chart.view({
        start: {
          x: 0,
          y: 0.65
        }
      })
      barView.source(dv, {
        volumn: {
          tickCount: 2
        }
      })
      barView.axis('time', {
        tickLine: null,
        label: null
      })
      barView.axis('volumn', {
        label: {
          formatter: function(val) {
            return parseInt(val / 1000, 10) + 'k'
          }
        }
      })
      barView.interval()
        .position('time*volumn')
        .color('trend', val => {
          if (val === '上涨') {
            return '#f04864'
          }

          if (val === '下跌') {
            return '#2fc25b'
          }
        })
        .tooltip('time*volumn', (time, volumn) => {
          return {
            name: time,
            value: '<br/><span style="padding-left: 16px">成交量：' + volumn + '</span><br/>'
          }
        })

      this.chart.render()

      // 生成 slider
      const slider = new Slider({
        container: 'slider', // DOM id
        width: 'auto',
        height: 26,
        padding: [20, 40, 20, 40],
        start: ds.state.start, // 和状态量对应
        end: ds.state.end,
        data, // 源数据
        xAxis: 'time', // 背景图的横轴对应字段，同时为数据筛选的字段
        yAxis: 'volumn', // 背景图的纵轴对应字段，同时为数据筛选的字段
        scales: {
          time: {
            type: 'timeCat',
            nice: false
          }
        },
        onChange: ({ startText, endText }) => {
          ds.setState('start', startText)
          ds.setState('end', endText)
        }
      })
      slider.render()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._chart()
    })
  }
}
</script>
