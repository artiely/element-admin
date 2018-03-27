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
          // let routs = res.data
          // for (let i = 0; i < routs.length; i++) {
          //   routs[i].component = lazyLoading(routs[i].component)
          //   if (routs[i].children) {
          //     for (let j = 0; j < routs[i].children.length; j++) {
          //       routs[i].children[j].component = lazyLoading(routs[i].children[j].component)
          //     }
          //   }
          // }
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
    }
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
</style>
