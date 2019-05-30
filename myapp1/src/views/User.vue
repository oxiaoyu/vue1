<template>
 <div class="container">
    <van-nav-bar
      title="个人中心"
    />
    <div class="content">
      <router-view></router-view>
    </div>
 </div>
</template>

<script>

export default {
  data () {
    return {
      tel: ''
    }
  },
  methods: {
  },
  mounted () {
    this.tel = this.$route.query.tel
    if (sessionStorage.getItem('isLogin') === 'ok') {
      this.$router.push({ path: '/user/content', query: { tel: this.tel } })
    } else {
      this.$router.push('/user/nologin')
    }
  }
}
</script>

style:<style lang="scss">
@import '@/lib/reset.scss';
.content{
  .ico{
  @include rect(100%,1.5rem);
  @include overflow(hidden);
  @include flexbox();
  @include justify-content();
  @include align-items();
  img{
    @include rect(1rem,1rem);
    @include border-radius(50%);
    }
  }
  .btn{
    margin-top: .2rem;
  }
}
</style>
