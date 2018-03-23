<template>
  <div class="v-bg">
    <el-dialog title="登录"  :visible="centerDialogVisible" width="30%" center :show-close="false">
      <el-form v-loading="loading" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
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
        username: '',
        password: ''
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
          this.$store.commit('FILTER_ROLE', role)
          // let res = await this.$api.GET_MENU()
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
          // this.$store.commit('SET_MENU', routs)
          this.$router.push('index')
          this.loading = false
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
