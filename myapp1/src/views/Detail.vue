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
    <van-sku
      v-model="showBase"
      :sku="sku"
      :goods="goods"
      :goods-id="skuData.goodsId"
      :hide-stock="sku.hide_stock"
      :quota="config.quota"
      :quota-used="config.quotaUsed"
      :reset-stepper-on-hide="config.resetStepperOnHide"
      :reset-selected-sku-on-hide="config.resetSelectedSkuOnHide"
      :close-on-click-overlay="config.closeOnClickOverlay"
      :disable-stepper-input="config.disableStepperInput"
      :message-config="config.messageConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      title: '',
      year: '',
      src: '',
      showBase: false,
      config: {
        quota: 2,
        quotaUsed: 0,
        resetStepperOnHide: false,
        resetSelectedSkuOnHide: false,
        closeOnClickOverlay: true,
        disableStepperInput: false,
        messageConfig: {}
      },
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: '类型', // skuKeyName：规格类目名称
            v: [
              {
                id: '1214', // skuValueId：规格值 id
                name: '普通', // skuValueName：规格值名称
                imgUrl: 'https://img.yzcdn.cn/2.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: '1215',
                name: 'vip',
                imgUrl: 'https://img.yzcdn.cn/2.jpg'
              }
            ],
            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 12000, // 价格（单位分）
            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2261, // skuId，下单时后端需要
            price: 10000, // 价格（单位分）
            s1: '1214', // 规格类目 k_s 为 s1 的对应规格值 id
            stock_num: 30 // 当前 sku 组合对应的库存
          }
        ],
        price: '100.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: '留言', // 留言名称
            type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: '1' // 是否必填 '1' 表示必填
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 商品标题
        title: '测试商品',
        // 默认商品 sku 缩略图
        picture: 'https://img.yzcdn.cn/2.jpg'
      },
      skuData: {
        // 商品 id
        goodsId: '946755',
        // 留言信息
        messages: {
          message_0: '12',
          message_1: ''
        },
        // 另一种格式的留言，key 不同
        cartMessages: {
          '留言1': 'xxxx'
        },
        // 选择的商品数量
        selectedNum: 1,
        // 选择的 sku 组合
        selectedSkuComb: {
          id: 2257,
          price: 100,
          s1: '1215',
          s2: '1216',
          s3: '1214',
          stock_num: 111
        }
      }
    }
  },
  mounted () {
    const { id } = this.$route.params
    axios.get(`http://www.daxunxun.com/detail?id=${id}`)
      .then(res => {
        this.goods.title = this.title = res.data[0].title
        this.year = res.data[0].year
        this.goods.picture = this.src = res.data[0].images.small
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
      this.showBase = true
    },
    close () {
      this.$router.go(-1)
    },
    onBuyClicked (skuData) {
      console.log(skuData)
    },
    onAddCartClicked (skuData) {
      console.log(skuData)
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
