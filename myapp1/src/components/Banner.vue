<template>
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) of bannerlist" :key="index">
          <img :src="item" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      bannerlist: []
    }
  },
  mounted () {
    let url = 'http://www.daxunxun.com'
    axios.get(url + '/banner')
      .then(res => {
        res.data.map(item => {
          this.bannerlist.push(url + item)
        })
      })
  }
}
</script>
