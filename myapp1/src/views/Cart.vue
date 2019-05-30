<template>
  <div class="container">
    <van-nav-bar
      title="购物车"
      left-arrow
      @click-left="close"
    />
    <van-submit-bar
      :price="0"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
      <span slot="tip">
        你的收货地址不支持同城送, <span>修改地址</span>
      </span>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: false
    }
  },
  methods: {
    onSubmit () {

    },
    close () {
      this.$router.go(-1)
    }
  }
}
</script>
