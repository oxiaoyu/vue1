<template>
    <ul class="product">
       <router-link tag="li" :to="{ name: 'detail' , params: {id: item.id} }" v-for="item of prodata" :key="item.id">
         <img :src="item.images.small" :alt="item.alt">
         <p class="title">{{ item.title }}</p>
         <div>
           <Rating :rating='item.rating.average'/>
           <p>{{ item.rating.average }}</p>
           </div>
       </router-link>
    </ul>
</template>

<script>
import Rating from './Rating'
export default {
  props: ['prodata'],
  components: {
    Rating
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
          @include rect(100%,1.5rem);
        };
        div{
          @include flexbox();
          @include align-items();
        }
      }
    }
</style>
