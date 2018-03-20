<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <el-card>
          <chart-bar id="c1"></chart-bar>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <el-card>
          <chart-line id="c2"></chart-line>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <el-card>
          <chart-donut id="c3"></chart-donut>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="22" :lg="24" :xl="24">
        <el-card>
          <chart-calendar id="c4"></chart-calendar>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import ChartLine from './chart/Line'
import ChartBar from './chart/Bar'
import ChartDonut from './chart/Donut'
import ChartCalendar from './chart/Calendar'
export default {
  components: {
    ChartLine,
    ChartBar,
    ChartDonut,
    ChartCalendar
  }
}
</script>
<style>
.el-row{
  margin-bottom: 20px;
}
</style>
