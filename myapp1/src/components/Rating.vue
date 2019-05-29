<template>
  <div class="star">
    <p class="star1"><span class="iconfont icon-pingfen"></span><span class="iconfont icon-pingfen"></span><span class="iconfont icon-pingfen"></span><span class="iconfont icon-pingfen"></span><span class="iconfont icon-pingfen"></span></p>
  <p class="star2" :style="{'width': star() }"><span class="iconfont icon-pingfen"></span><span class="iconfont icon-pingfen"></span><span class="iconfont icon-pingfen"></span><span class="iconfont icon-pingfen"></span><span class="iconfont icon-pingfen"></span></p>
  </div>
</template>

<script>
export default {
  props: ['rating'],
  data () {
    return {
      rat: 0
    }
  },
  methods: {
    star () {
      if (this.rating > 9.5) {
        return '95%'
      } else if (this.rating > 9) {
        return '85%'
      } else if (this.rating > 8.5) {
        return '75%'
      } else if (this.rating > 8) {
        return '65%'
      }
    }
  }
}
</script>

<style lang = 'scss'>
@import '@/lib/reset.scss';
.star{
      margin:0 .1rem;
      @include rect(.8rem,auto);
      position:relative;
      p{
          @include text-color(#ccc);
          position:absolute;
        &.star2{
          @include text-color(#fe0);
          @include rect(0,auto);
          @include overflow()
        }
      }
    }
</style>
