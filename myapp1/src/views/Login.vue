<template>
  <div class="login">
    <van-nav-bar
      title="登陆"
      left-arrow
      @click-left="close"
    />
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        :error-message="userReg"
        placeholder="请输入用户名"
        @click-right-icon="$toast('请输入11位手机号')"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        right-icon="question-o"
        placeholder="请输入密码"
        :error-message="passReg"
        required
         @click-right-icon="$toast('请输入6～20位数字和字符组成的密码')"
      />
    </van-cell-group>
    <van-button size='large' @click='login' type="primary">登陆</van-button>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    userReg () {
      if (this.username === '') {
        return '请输入11位手机号'
      } else if (!(/^1[345678]\d{9}$/.test(this.username))) {
        return '手机号格式错误'
      } else {
        return ''
      }
    },
    passReg () {
      if (this.password === '') {
        return '请输入6～20位数字或字符密码'
      } else if (!(/^(\w){6,20}$/.test(this.password))) {
        return '密码格式错误'
      } else {
        return ''
      }
    }
  },
  methods: {
    close () {
      this.$router.go(-1)
    },
    login () {
      if (this.userReg === '' && this.passReg === '') {
        axios.post('http://www.daxunxun.com/users/login', {
          username: this.username,
          password: this.password
        }).then(res => {
          if (res.data === 0) {
            Toast('登陆失败，请稍后在尝试')
          } else if (res.data === 1) {
            this.tel = JSON.parse(res.config.data)
            console.log(this.tel)
            sessionStorage.setItem('isLogin', 'ok')
            this.$router.push({ path: '/user', query: { tel: this.tel.username, pass: this.tel.password } })
          } else if (res.data === 2) {
            Toast('该手机号尚未注册')
          } else {
            Toast('手机号或密码错误，请查询后再输入')
          }
        }).catch(err => {
          console.log(err)
        })
      } else {
        Toast('手机号或密码格式错误')
      }
    }
  }
}
</script>
