<template>
  <div class="cont1">
    <my-banner></my-banner>
    <my-nav></my-nav>
    <my-product></my-product>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Nav from '@/components/Nav'
import Product from '@/components/Product'
export default {
  components: {
    'my-banner': Banner,
    'my-nav': Nav,
    'my-product': Product
  }
}
</script>
