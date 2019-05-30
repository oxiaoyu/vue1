<template>
  <div>
    <div class="ico">
       <img src="http://qcloud.dpfile.com/pc/wLEIQ7j9A4DRdGxF2HHLbOtWG4f5DlhJeCapyIL4fnCN3JfGN-IioWlr9osF8hImTYGVDmosZWTLal1WbWRW3A.jpg" alt="">
     </div>
     <p class="username"><span href="">欢迎{{ tel }}用户登陆</span></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tel: ''
    }
  },
  mounted () {
    this.tel = this.$route.query.tel
    // console.log(this.tel)
  }
}
</script>
