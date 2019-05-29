<template>
  <div class="box">
    <div class="container">
      <van-nav-bar
        :title="title"
        left-arrow
        @click-left="close"
      />
      <div class="content">
       <div class="pic">
          <img :src='src' alt="">
       </div>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-mini-btn
        icon="chat-o"
        text="客服"
        @click="service"
      />
      <van-goods-action-mini-btn
        icon="cart-o"
        text="购物车"
        @click="goCart"
      />
      <van-goods-action-big-btn
        text="加入购物车"
        @click="addCart"
      />
      <van-goods-action-big-btn
        primary
        text="立即购买"
        @click="Buy"
      />
    </van-goods-action>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      title: '',
      year: '',
      src: ''
    }
  },
  mounted () {
    const { id } = this.$route.params
    axios.get(`http://www.daxunxun.com/detail?id=${id}`)
      .then(res => {
        this.title = res.data[0].title
        this.year = res.data[0].year
        this.src = res.data[0].images.small
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    service () {
      console.log('客服')
    },
    goCart () {
      console.log('购物车')
    },
    addCart () {
      console.log('加入购物车')
    },
    Buy () {
      console.log('立即购买')
    },
    close () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.box{
  .content{
    .pic{
      @include rect(100%,3rem);
      @include overflow(hidden);
      position: relative;
      img{
        @include rect(100%,auto);
        position: absolute;
        top:-.8rem
      }
    }
  }
}
</style>
