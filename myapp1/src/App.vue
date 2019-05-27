<template>
  <div id="app">
    <header class="header">
      <my-header></my-header>
    </header>
    <div class="content">
      <keep-alive>
        <component :is='type'></component>
      </keep-alive>
    </div>
    <footer class="footer">
      <my-footer></my-footer>
    </footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Cont1 from '@/components/Cont1'
import Cont2 from '@/components/Cont2'
export default {
  data () {
    return {
      type: 'my-cont1'
    }
  },
  components: {
    'my-footer': Footer,
    'my-cont1': Cont1,
    'my-cont2': Cont2,
    'my-header': Header
  }
}
</script>

<style lang='scss'>
@import '@/lib/reset.scss';
html,body,#app{
  @include rect(100%,100%);  //width:100% height:100%
}
#app{
  @include flexbox();
  @include flex-direction(column);
  .header{
    @include rect(100%,.44rem);
    @include background-color(#f66);
    @include flexbox();
    @include justify-content(space-between);
    a{
      @include rect(.5rem,100%);
      @include text-align();
      @include line-height(.44rem);
      @include color(#fff);
    }
  }
  .content{
    @include flex();
    @include rect(100%,auto);
    @include overflow();
    .cont1{
      @include rect(auto,100%);
      .banner{
      @include rect(100%,1.8rem);
      img{
        @include rect(100%,100%);
      }
    };
    .cont2{
      @extend .cont1
    }
    .nav{
      @include rect(100%,.44rem);
      @include flexbox();
      @include border(.01rem,#000,solid);
      li{
        @include flex();
        @include flexbox();
        @include rect(auto,100%);
        @include justify-content();
        @include align-items();
      }
    }
    .product{
      @include padding(.1rem);
      @include flexbox();
      @include flex-wrap(wrap);
      @include justify-content(space-between);
      li{
        @include rect(1.45rem,auto);
        img{
          @include rect(1.45rem,1rem);
        }
      }
    }
    }
  }
  .footer{
    @include rect(100%,.5rem);
    @include background-color(#ccc);
    ul{
      @include rect(100%,100%);
      @include flexbox();
      li{
        @include flex();
        @include rect(auto,100%);
        @include flexbox();
        @include flex-direction(column);
        @include justify-content();
        @include align-items();
      }
    }
  }
}
</style>
