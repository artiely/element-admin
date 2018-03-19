<template>
  <el-row :gutter="10">
    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
      <el-card class="box-card">
        <div id="c1" style="width:100%"></div>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
      <el-card>
        <div id="c2">
        </div>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
      <div class="grid-content bg-purple"></div>
    </el-col>
  </el-row>
</template>
<script>
import G2 from '@antv/g2'
import { DataSet } from '@antv/data-set'
export default {
  name: '',
  data() {
    return {
      chart1: null,
      chart2: null,
      data2: [{
        genre: 'Sports',
        sold: 275
      },
      {
        genre: 'Strategy',
        sold: 115
      },
      {
        genre: 'Action',
        sold: 120
      },
      {
        genre: 'Shooter',
        sold: 350
      },
      {
        genre: 'Other',
        sold: 150
      }
      ] // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
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
          this.chart1.forceFit()
          this.chart2.forceFit()
        }, 400)
      }
    }
  },
  methods: {
    _chart1() {
      this.chart1 = new G2.Chart({
        container: 'c1', // 指定图表容器 ID
        forceFit: true,
        padding: [20, 20, 95, 40], // 上，右，下，左
        height: 300 // 指定图表高度
      })
      // Step 2: 载入数据源
      this.chart1.source(this.data2)
      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      this.chart1.interval().position('genre*sold').color('genre')
      // Step 4: 渲染图表
      this.chart1.render()
    },
    _chart2() {
      const data = [
        { month: 'Jan', Tokyo: 7.0, London: 3.9 },
        { month: 'Feb', Tokyo: 6.9, London: 4.2 },
        { month: 'Mar', Tokyo: 9.5, London: 5.7 },
        { month: 'Apr', Tokyo: 14.5, London: 8.5 },
        { month: 'May', Tokyo: 18.4, London: 11.9 },
        { month: 'Jun', Tokyo: 21.5, London: 15.2 },
        { month: 'Jul', Tokyo: 25.2, London: 17.0 },
        { month: 'Aug', Tokyo: 26.5, London: 16.6 },
        { month: 'Sep', Tokyo: 23.3, London: 14.2 },
        { month: 'Oct', Tokyo: 18.3, London: 10.3 },
        { month: 'Nov', Tokyo: 13.9, London: 6.6 },
        { month: 'Dec', Tokyo: 9.6, London: 4.8 }
      ]
      const ds = new DataSet()
      const dv = ds.createView().source(data)
      dv.transform({
        type: 'fold',
        fields: ['Tokyo', 'London'], // 展开字段集
        key: 'city', // key字段
        value: 'temperature' // value字段
      })
      this.chart2 = new G2.Chart({
        container: 'c2',
        forceFit: true,
        padding: [20, 20, 95, 40], // 上，右，下，左
        height: 300
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
      this._chart1()
      this._chart2()
    })
  }
}
</script>
