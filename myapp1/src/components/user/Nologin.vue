<template>
   <div >
     <div class="ico">
       <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559216568071&di=1b216df70ffc2273444dee54521e1fb4&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20130407%2FImg371886166.jpg" alt="">
     </div>
    <van-button class="btn" size='large' @click='login' type="primary">登陆</van-button>
    <van-button class="btn" size='large' @click='register' type="danger">注册</van-button>
   </div>
</template>

<script>
export default {
  methods: {
    login () {
      this.$router.push('/login')
    },
    register () {
      this.$router.push('/register')
    }
  }
}
</script>
