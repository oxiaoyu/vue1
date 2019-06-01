<template>
    <ul class="product">
       <li v-for="item of prodata" :key="item.id">
         <img :src="item.images.small" :alt="item.alt">
         <p class="title">{{ item.title }}</p>
         <div><em>评分</em>
           <div class="star">
             <p class="star1"><span class="iconfont icon-pingfen"></span><span class="iconfont icon-pingfen"></span><span class="iconfont icon-pingfen"></span><span class="iconfont icon-pingfen"></span><span class="iconfont icon-pingfen"></span></p>
           <p class="star2" :style="{'width':star(item.rating.average)}"><span class="iconfont icon-pingfen"></span><span class="iconfont icon-pingfen"></span><span class="iconfont icon-pingfen"></span><span class="iconfont icon-pingfen"></span><span class="iconfont icon-pingfen"></span></p>
           </div>
           <p>{{ item.rating.average }}</p>
           </div>
       </li>
    </ul>
</template>

<script>
export default {
  props: ['prodata'],
  methods: {
    star (w) {
      if (w > 9.0 && w < 9.5) {
        return '80%'
      } else if (w >= 9.5) {
        return '90%'
      }
    }
  }
}
</script>

<style lang = 'scss'>
@import '@/lib/reset.scss';
.product{
      @include overflow();
      li{
        float:left;
        @include margin(.05rem 1%);
        @include rect(48%,auto);
        img{
          @include rect(100%,1rem);
        };
        div{
          @include flexbox();
          @include align-items();
          div{
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
        }
      }
    }
</style>
