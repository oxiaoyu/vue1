<template>
<transition name='slide-fade'>
    <!-- <div class='page-component-up' v-show='isShow' @click='getTop'> -->
      <van-button class='page-component-up' v-show='isShow' @click='getTop'>Top</van-button>
    <!-- <i class='tri'></i> -->
  <!-- </div> -->
</transition>
</template>

<script>
export default {
  name: 'BackTop', // 这个是export出去的组件名，我定义为BackTop
  props: {
    scrollmyself: {
      type: Boolean, // 这是选择滚动对象的props值，如果滚动的对象是当前组件的父元素，就设置scrollObj为true.如果没有设置就默认为window对象
      default: false
    }
  },
  data () {
    return {
      isShow: false,
      target: ''
    }
  },
  methods: {
    //  添加样式，鼠标hover上去，改变颜色
    addhoverClass (e) {
      if (e.type === 'mouseover') {
        this.$el.classList.add('hover')
      } else if (e.type === 'mouseout') {
        this.$el.classList.remove('hover')
      }
    },
    showIcon () {
      //  根据scrollTop的值来判断是否显示返回顶部的icon
      if (this.target.scrollTop > 100) {
        this.isShow = true
        this.$el.addEventListener('mouseover', this.addhoverClass)
        this.$el.addEventListener('mouseout', this.addhoverClass)
      } else if (this.target.scrollTop < 100) {
        this.isShow = false
      }
    },
    getTop () {
      // 点击icon之后自动返回顶部的函数
      console.log(this.$el)
      let timer = setInterval(() => {
        let top = this.target.scrollTop
        let speed = Math.ceil(top / 5)
        this.target.scrollTop = top - speed
        if (top === 0) {
          clearInterval(timer)
        }
      }, 20)
    }
  },
  mounted () {
    // 通过这个target来判断当前的滚动监听对象是谁
    if (this.scrollmyself) {
      this.target = this.$el.parentNode
    } else {
      this.target = document.body
    }
    this.target.addEventListener('scroll', this.showIcon)
  },
  //  组件销毁的时候，需要删除scroll的监听事件。
  beforeDestroy () {
    this.target.removeEventListener('scroll', this.showIcon)
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  .slide-fade-enter-active {
     transition: all .1s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.3, 0.8, 1.0);
    opacity: 0;
  }
  .slide-fade-enter, .slide-fade-leave-to
   /* .slide-fade-leave-active 在低于 2.1.8 版本中 */ {
  // transform: translateY(-20px);
    opacity: 0;
  }
  .page-component-up {
    background-color: #f66;
    position: fixed;
    right: .3rem;
    bottom: .8rem;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    cursor: pointer;
    transition: .3s;
    text-align: center;
    z-index: 999;
  }
  .tri {
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #dfe6ec;
    text-align: center;
  }
  .hover {
    background-color: #f66;
  }
</style>
