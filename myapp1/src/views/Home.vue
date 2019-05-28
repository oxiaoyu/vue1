<template>
  <div class="container">
    <div class="header">首页</div>
    <div class="home">
    <my-banner></my-banner>
    <my-nav></my-nav>
    <my-product :prodata = 'prodata'></my-product>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import Banner from '@/components/Banner'
import Nav from '@/components/Nav'
import Product from '@/components/Product'
export default {
  components: {
    'my-banner': Banner,
    'my-nav': Nav,
    'my-product': Product
  },
  data () {
    return {
      prodata: []
    }
  },
  mounted () {
    axios.get('http://www.daxunxun.com/douban?start=50&count=100').then(res => {
      this.prodata = res.data
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
