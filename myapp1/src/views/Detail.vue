<template>
  <div class="box">
    <div class="container">
      <header class="header">{{ title }}</header>
      <div class="content">
        <img :src='src' alt="">
      </div>
    </div>
    <footer class="footer">详情页底部</footer>
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
  }
}
</script>
