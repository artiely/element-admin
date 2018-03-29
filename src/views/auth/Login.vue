<template>
  <div class="v-bg">
    <el-dialog title="登录"  :visible="centerDialogVisible" width="30%" center :show-close="false" :modal="false">
      <el-form label-width="0px" label-position="left" v-loading="loading" :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm">
        <el-form-item  prop="username">
          <el-input type="text" v-model="ruleForm.username" auto-complete="off">
            <v-icon slot="prefix" name="icon-people" ></v-icon>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" auto-complete="off">
            <v-icon slot="prefix"  name="icon-unlock" ></v-icon>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button type="text" @click="resetForm('ruleForm')">重置</el-button>
          <el-button type="text" style="float:right" @click="register('ruleForm')">注册</el-button>
        </el-form-item>
        <el-alert
        title="用户名: guest 密码:123 / 用户名:admin 密码:123"
        :closable="false"
        type="success">
      </el-alert>
      </el-form>
    </el-dialog>
    <div id="particles-js"></div>
  </div>
</template>
<script>
export default {
  data() {
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写用户名'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      centerDialogVisible: true,
      ruleForm: {
        username: 'admin',
        password: '123'
      },
      rules: {
        username: [{
          validator: validateUsername,
          trigger: 'blur'
        }],
        password: [{
          validator: validatePassword,
          trigger: 'blur'
        }]
      }
    }
  },
  computed: {
    menu() {
      return this.$store.state.sys.menu
    }
  },
  methods: {
    submitForm(formName) {
      this.loading = true
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          let login = await this.$api.LOGIN(this.ruleForm)
          if (login.code !== 0) {
            this.loading = false
            this.$message({
              type: 'error',
              message: `登录失败:${login.error}`
            })
            return
          }
          let role = login.role
          // 避免用户在地址栏输入登录地址改变角色
          if (this.$store.state.sys.role && this.$store.state.sys.role !== role) {
            window.location.reload()
          }
          this.$store.commit('FILTER_ROLE', role)
          // 登录成功 动态添加路由
          this.$router.addRoutes(this.menu)
          this.$router.replace('/index')
        } else {
          this.loading = false
          this.$message({
            type: 'error',
            message: `表单验证失败`
          })
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    register() {
      alert('开发中。。。')
    },
    beforeRouteLeave(to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      console.log('关闭loading')
      this.loading = false
    },
    _animateBg() {
      /* global particlesJS */
      particlesJS('particles-js', { 'particles': { 'number': { 'value': 400, 'density': { 'enable': true, 'value_area': 800 } }, 'color': { 'value': '#fff' }, 'shape': { 'type': 'circle', 'stroke': { 'width': 0, 'color': '#000000' }, 'polygon': { 'nb_sides': 5 }, 'image': { 'src': 'img/github.svg', 'width': 100, 'height': 100 } }, 'opacity': { 'value': 0.5, 'random': true, 'anim': { 'enable': false, 'speed': 1, 'opacity_min': 0.1, 'sync': false } }, 'size': { 'value': 10, 'random': true, 'anim': { 'enable': false, 'speed': 40, 'size_min': 0.1, 'sync': false } }, 'line_linked': { 'enable': false, 'distance': 500, 'color': '#ffffff', 'opacity': 0.4, 'width': 2 }, 'move': { 'enable': true, 'speed': 6, 'direction': 'bottom', 'random': false, 'straight': false, 'out_mode': 'out', 'bounce': false, 'attract': { 'enable': false, 'rotateX': 600, 'rotateY': 1200 } } }, 'interactivity': { 'detect_on': 'canvas', 'events': { 'onhover': { 'enable': true, 'mode': 'repulse' }, 'onclick': { 'enable': true, 'mode': 'repulse' }, 'resize': true }, 'modes': { 'grab': { 'distance': 400, 'line_linked': { 'opacity': 0.5 } }, 'bubble': { 'distance': 400, 'size': 4, 'duration': 0.3, 'opacity': 1, 'speed': 3 }, 'repulse': { 'distance': 200, 'duration': 0.4 }, 'push': { 'particles_nb': 4 }, 'remove': { 'particles_nb': 2 } } }, 'retina_detect': true })
    }
  },
  mounted() {
    this._animateBg()
  }
}
</script>
<style>
.v-bg {
  height: 100%;
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url('../../assets/fullstack.jpg');
}
canvas {
  display: block;
  vertical-align: bottom;
} /* ---- particles.js container ---- */
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: none;
  background-image: url('');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
} /* ---- stats.js ---- */
.count-particles {
  background: #000022;
  position: absolute;
  top: 48px;
  left: 0;
  width: 80px;
  color: #13e8e9;
  font-size: 0.8em;
  text-align: left;
  text-indent: 4px;
  line-height: 14px;
  padding-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
}
.js-count-particles {
  font-size: 1.1em;
}
#stats,
.count-particles {
  -webkit-user-select: none;
  margin-top: 5px;
  margin-left: 5px;
}
#stats {
  border-radius: 3px 3px 0 0;
  overflow: hidden;
}
.count-particles {
  border-radius: 0 0 3px 3px;
}
</style>
