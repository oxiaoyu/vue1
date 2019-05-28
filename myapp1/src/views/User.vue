<template>
 <div class="container">
    <div class="header">个人中心</div>
   <div class="content">
     <router-view></router-view>
   </div>
 </div>
</template>

<script>

export default {
  mounted () {
    if (localStorage.getItem('isLogin') === 'ok') {
      this.$router.push('/user/login')
    }else{
      this.$router.push('/user/nologin')
    }
  }
}
</script>
