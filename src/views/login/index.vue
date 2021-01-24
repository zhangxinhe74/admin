<template>
  <div class="login-container">
    <el-form ref="login-form" :rules="rules" :model="user" class="login-form">
        <el-form-item prop="mobile">
            <el-input v-model="user.mobile" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop='code'>
            <el-input type="text" v-model="user.code" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-checkbox v-model="checked">我已同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit" class='login-btn' :loading="Loading" :disabled="!checked">登录</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from '../../utils/request'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      checked: false,
      rules: {
        mobile: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      Loading: false
    }
  },
  methods: {
    async onSubmit () {
      this.$refs['login-form'].validate((valid) => {
        if (!valid) {
          return
        }
        this.login()
        this.$router.push('/layout')
      })
    },
    async login () {
      this.Loading = true
      console.log('点击')
      const user = this.user
      const res = await request({
        methods: 'POST',
        url: '/mp/v1_0/authorizations',
        data: user
      })
      if (res) {
        console.log(res)
        // this.Loading = false
      } else {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        })
        this.Loading = false
      }
    }
  }
}
</script>

<style>
  .login-container{
      position:fixed;
      top:0;
      left:0;
      right:0;
      bottom:0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url('./1.jpg') no-repeat;
      background-size: 100%;
  }
  .login-form{
      background:#fff;
      padding:50px;
  }
  .login-btn{
      width:100%;
  }
</style>
