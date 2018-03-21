<template>
  <div :id="id"></div>
</template>
<script>
import G2 from '@antv/g2'
export default {
  name: 'bar',
  props: {
    id: String
  },
  data() {
    return {
      chart1: null,
      data: [{
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
      }] // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
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
        }, 400)
      }
    }
  },
  methods: {
    _chart1() {
      this.chart1 = new G2.Chart({
        container: this.id, // 指定图表容器 ID
        forceFit: true,
        padding: [20, 20, 95, 40], // 上，右，下，左
        height: 350 // 指定图表高度
      })
      // Step 2: 载入数据源
      this.chart1.source(this.data)
      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      this.chart1.interval().position('genre*sold').color('genre')
      // Step 4: 渲染图表
      this.chart1.render()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._chart1()
    })
  }
}
</script>
