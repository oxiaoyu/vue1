<template>
  <div>
    <input @click='login()' type="button" value="登陆"> /
    <input type="button" value="注册">
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      localStorage.setItem('isLogin', 'ok')
      this.$router.push('/user/login')
    }
  }
}
</script>
