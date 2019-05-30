<template>
  <div class="register">
    <van-nav-bar
      title="注册"
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
        placeholder="请输入用户名"
        :error-message="userReg"
        @click-right-icon="$toast('question')"
      />
      <van-field
        v-model="sms"
        center
        required
        clearable
        label="短信验证码"
        :error-message="smsReg"
        placeholder="请输入短信验证码"
      >
        <van-button slot="button" v-if='flag'   @click='sendCode' size="small" type="primary">发送验证码</van-button>
        <van-button slot="button" v-else disabled size="small" type="warning">{{ num }}s后再发送</van-button>
      </van-field>
      <van-field
        v-model="password"
        type="password"
        label="密码"
         right-icon="question-o"
        placeholder="请输入密码"
        :error-message="passReg"
        required
      />
    </van-cell-group>
    <van-button size='large'  @click='register' type="danger">注册</van-button>
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
      password: '',
      sms: '',
      code: '',
      num: 60,
      flag: true
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
    },
    smsReg () {
      console.log(this.sms, this.code)
      if (this.sms === '') {
        return '请输入手机验证码'
      } else if (this.code === this.sms) {
        return ''
      } else {
        return '验证码错误'
      }
    }
  },
  methods: {
    close () {
      this.$router.go(-1)
    },
    register () {
      if (this.userReg === '' && this.passReg === '' && this.smsReg === '') {
        axios.post('http://www.daxunxun.com/users/register', {
          username: this.username,
          password: this.password
        }).then(res => {
          console.log(res)
          if (res.data === 0) {
            Toast('注册失败，请后再次尝试')
          } else if (res.data === 1) {
            localStorage.setItem('isLogin', 'ok')
            this.$router.push('/home')
          } else {
            Toast('用户名已被注册')
          }
        }).catch(err => {
          console.log(err)
        })
      } else {
        Toast('信息有误，请按规范重新提交')
      }
    },
    sendCode () {
      this.flag = false
      this.timer = setInterval(() => {
        this.num--
        if (this.num === 0) {
          this.flag = true
          this.num = 60
          clearInterval(this.timer)
        }
      }, 1000)
      axios.get(`http://www.daxunxun.com/users/sendCode?tel=${this.username}`)
        .then(res => {
          console.log(res)
          this.code = res.data.code
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
