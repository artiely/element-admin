<template>
  <div class="index">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>基本曲线图</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              <v-icon name="icon-feedback"></v-icon>
            </el-button>
          </div>
          <base-line id="_line"></base-line>
          <div class="v-footer">
            <span class="v-tip">日均销售量</span>
            <count-to :start-val="0" :end-val="2017982318" :duration="4000" :decimals="0" separator=","  prefix="¥ "  suffix=" rmb" :autoplay="true"/>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>基本直方图</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              <v-icon name="icon-feedback"></v-icon>
            </el-button>
          </div>
          <base-bar id="_bar"></base-bar>
          <div class="v-footer">
            <span class="v-tip">日均销售量</span>
            <count-to :start-val="0" :end-val="2017982318" :duration="4000" :decimals="0" separator=","  prefix="¥ "  suffix=" rmb" :autoplay="true"/>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>基本饼图</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              <v-icon name="icon-feedback"></v-icon>
            </el-button>
          </div>
          <base-pie></base-pie>
          <div class="v-footer">
            <span class="v-tip">日均销售量</span>
            <count-to :start-val="0" :end-val="2017982318" :duration="4000" :decimals="0" separator=","  prefix="¥ "  suffix=" rmb" :autoplay="true"/>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>基本面积图</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              <v-icon name="icon-feedback"></v-icon>
            </el-button>
          </div>
          <base-area></base-area>
          <div class="v-footer">
            <span class="v-tip">日均销售量</span>
            <count-to :start-val="0" :end-val="2017982318" :duration="4000" :decimals="0" separator=","  prefix="¥ "  suffix=" rmb" :autoplay="true"/>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>职业占比图</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              <v-icon name="icon-feedback"></v-icon>
            </el-button>
          </div>
          <chart-bar id="c1"></chart-bar>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>天气</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              <v-icon name="icon-feedback"></v-icon>
            </el-button>
          </div>
          <chart-line id="c2"></chart-line>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>主机事例</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              <v-icon name="icon-feedback"></v-icon>
            </el-button>
          </div>
          <chart-donut id="c3"></chart-donut>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>统计</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              <v-icon name="icon-feedback"></v-icon>
            </el-button>
          </div>
          <chart-bubble id="c4"></chart-bubble>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card>
          <div slot="header" class="clearfix">
            <span>股票走势</span>
            <div class="block" style="float: right;margin-top:-8px;" >
              <span class="demonstration">日期区间</span>
              <el-date-picker v-model="value7" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2">
              </el-date-picker>
            </div>
          </div>
          <chart-sticks></chart-sticks>
        </el-card>
      </el-col>
    </el-row>
    <!-- <el-row>
      <el-col :xs="24" :sm="24" :md="22" :lg="24" :xl="24">
        <el-card>
          <chart-calendar id="c5"></chart-calendar>
        </el-card>
      </el-col>
    </el-row> -->
  </div>
</template>
<script>
import BaseLine from './chart/_Line'
import BaseBar from './chart/_Bar'
import BasePie from './chart/_Pie'
import BaseArea from './chart/_Area'
import ChartLine from './chart/Line'
import ChartBar from './chart/Bar'
import ChartDonut from './chart/Donut'
import ChartCalendar from './chart/Calendar'
import ChartSticks from './chart/Sticks'
import ChartBubble from './chart/Bubble'

import countTo from 'vue-count-to'
export default {
  components: {
    ChartLine,
    ChartBar,
    ChartDonut,
    ChartSticks,
    ChartBubble,
    ChartCalendar,
    BaseLine,
    BasePie,
    BaseArea,
    BaseBar,
    countTo
  },
  data() {
    return {
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value7: ''
    }
  }
}
</script>
<style scoped lang="stylus">
.index {
  .el-card{
    box-shadow: none;
    border: none;
    border-radius: 0;
  }

  .el-col {
    margin-bottom: 20px;
  }

  .v-footer {
    font-size: 14px;
    padding-top: 10px;
  }

  .v-tip {
    color: #909399;
  }

  .v-b {
    color: #606266;
  }
}
</style>
