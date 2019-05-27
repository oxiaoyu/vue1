<template>
    <ul>
        <li @click='cont1()'>首页</li>
        <li @click='cont2()'>分类</li>
        <li @click='cont3()'>购物车</li>
        <li @click='cont4()'>个人中心</li>
    </ul>
</template>

<script>
export default {
  methods: {
    cont1 () {
      console.log(1)
    },
    cont2 () {
      console.log(2)
    },
    cont3 () {
      console.log(3)
    },
    cont4 () {
      console.log(4)
    }
  }
}
</script>
