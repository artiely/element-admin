<template>
  <div :id="id"></div>
</template>
<script>
import G2 from '@antv/g2'
import data from './github-commit.json'
export default {
  name: 'Calendar',
  data() {
    return {
      chart: null,
      data: data
    }
  },
  props: {
    id: String
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
      const Shape = G2.Shape
      const Util = G2.Util
      Shape.registerShape('polygon', 'boundary-polygon', {
        draw(cfg, container) {
          if (!Util.isEmpty(cfg.points)) {
            const attrs = {
              stroke: '#fff',
              lineWidth: 1,
              fill: cfg.color,
              fillOpacity: cfg.opacity
            }
            const points = cfg.points
            const path = [
              ['M', points[0].x, points[0].y],
              ['L', points[1].x, points[1].y],
              ['L', points[2].x, points[2].y],
              ['L', points[3].x, points[3].y],
              ['Z']
            ]
            attrs.path = this.parsePath(path)
            const polygon = container.addShape('path', {
              attrs
            })

            if (cfg.origin._origin.lastWeek) {
              const linePath = [
                ['M', points[2].x, points[2].y],
                ['L', points[3].x, points[3].y]
              ]
              // 最后一周的多边形添加右侧边框
              container.addShape('path', {
                zIndex: 1,
                attrs: {
                  path: this.parsePath(linePath),
                  lineWidth: 1,
                  stroke: '#404040'
                }
              })
              if (cfg.origin._origin.lastDay) {
                container.addShape('path', {
                  zIndex: 1,
                  attrs: {
                    path: this.parsePath([
                      ['M', points[1].x, points[1].y],
                      ['L', points[2].x, points[2].y]
                    ]),
                    lineWidth: 1,
                    stroke: '#404040'
                  }
                })
              }
            }
            container.sort()
            return polygon
          }
        }
      })
      this.chart = new G2.Chart({
        container: this.id,
        forceFit: true,
        height: 350
      })
      this.chart.source(this.data, {
        day: {
          type: 'cat',
          values: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        },
        week: {
          type: 'cat'
        },
        commits: {
          sync: true
        }
      })
      this.chart.axis('week', {
        position: 'top',
        tickLine: null,
        line: null,
        label: {
          offset: 12,
          textStyle: {
            fontSize: 12,
            fill: '#666',
            textBaseline: 'top'
          },
          formatter: val => {
            if (val === '2') {
              return 'MAY'
            } else if (val === '6') {
              return 'JUN'
            } else if (val === '10') {
              return 'JUL'
            } else if (val === '15') {
              return 'AUG'
            } else if (val === '19') {
              return 'SEP'
            } else if (val === '24') {
              return 'OCT'
            }
            return ''
          }
        }
      })
      this.chart.axis('day', {
        grid: null
      })
      this.chart.legend(false)
      this.chart.tooltip({
        title: 'date'
      })
      this.chart.coord().reflect('y')
      this.chart.polygon().position('week*day*date')
        .color('commits', '#BAE7FF-#1890FF-#0050B3')
        .shape('boundary-polygon')
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
