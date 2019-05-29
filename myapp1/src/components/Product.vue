<template>
    <ul class="product">
       <!-- <router-link tag="li" :to="/detail/${id}" v-for="item of prodata" :key="item.id"> -->
       <!-- <router-link tag="li" :to="{ name: 'detail' , params: {id: item.id} }" v-for="item of prodata" :key="item.id"> -->
         <li @click='goDetail(item.id)' v-for="item of prodata" :key="item.id">
         <img :src="item.images.small" :alt="item.alt">
         <p class="title">{{ item.title }}</p>
         <div>
           <Rating :rating='item.rating.average'/>
           <p>{{ item.rating.average }}</p>
           </div>
       <!-- </router-link> -->
       </li>
    </ul>
</template>

<script>
// import axios from 'axios'
import Rating from './Rating'
export default {
  props: ['prodata'],
  // data () {
  //   return {
  //     data: ''
  //   }
  // },
  components: {
    Rating
  },
  methods: {
    goDetail (id) {
      // this.$router.push(`/detail/${id}`)
      this.$router.push({ name: 'detail', params: { id } })
      this.$router.push({ path: `/detail/${id}` })
    }
  }
  // mounted () {
  //   axios.get('http://www.daxunxun.com/douban?start=50&count=50').then(res => {
  //     this.data = res.data
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
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
