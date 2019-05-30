<template>
  <div class="container">
    <div class="header">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <div class="home" >
      <mt-loadmore :top-method="loadTop" :auto-fill='false' :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul>
          <my-banner></my-banner>
          <!-- <my-nav></my-nav> -->
          <my-product :prodata = 'prodata'></my-product>
        </ul>
      </mt-loadmore>
      <BcakTop :scrollmyself='true'/>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import Banner from '@/components/Banner'
// import Nav from '@/components/Nav'
import BcakTop from '@/components/home/BackTop'
import Product from '@/components/Product'
export default {
  components: {
    'my-banner': Banner,
    // 'my-nav': Nav,
    BcakTop,
    'my-product': Product
  },
  data () {
    return {
      prodata: [],
      allLoaded: false,
      pageCode: 1,
      value: null,
      round: null
    }
  },
  methods: {
    loadTop () {
      axios.get('http://www.daxunxun.com/douban').then(res => {
        this.$refs.loadmore.onTopLoaded()
        this.allLoaded = false
        this.pageCode = 1
        this.prodata = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    loadBottom () {
      axios.get(`http://www.daxunxun.com/douban?start=${this.pageCode * 20}&count=20`).then(res => {
        if (res.data.length === 0) {
          this.allLoaded = true
        } else {
          this.prodata = [...this.prodata, ...res.data]
          this.pageCode++
        }
        this.$refs.loadmore.onBottomLoaded()
      }).catch(err => {
        console.log(err)
      })
    },
    scrollTop () {
      console.log(this.target)
    },
    onSearch () {
    }
  },
  mounted () {
    this.$el.children[1].addEventListener('scroll', this.scrollTop)
    axios.get(`http://www.daxunxun.com/douban`).then(res => {
      this.prodata = res.data
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
