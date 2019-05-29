<template>
  <div id="app">
      <div class="content">
         <router-view></router-view>
      </div>
      <router-view name = 'footer'></router-view>
  </div>
</template>

<script>
// import Footer from '@/components/Footer'
// import Header from '@/components/Header'
export default {
  components: {
    // Footer
    // Header
  }
}
</script>

<style lang='scss'>
@import '@/lib/reset.scss';
html,body,#app,.box{
  @include rect(100%,100%);  //width:100% height:100%
}
#app,.box{
  @include flexbox();
  @include flex-direction(column);
  .header{
    @include rect(100%,.44rem);
    @include background-color(#f66);
    @include text-align();
    @include line-height(.44rem);
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
    .container{
       @include rect(100%,100%);
      @include flexbox();
      @include flex-direction(column);
      position:relative;
      .home{
        @include flex();
        @include rect(auto,100%);
        overflow-y:auto;
        .banner{
        @include rect(100%,1.8rem);
        img{
          @include rect(100%,100%);
        }
      };
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
        span{
          @include font-size(.12rem);
        };
        .iconfont{
          @include font-size(.24rem);
          @include line-height(.28rem);
        };
        &.router-link-active{
          @include text-color(#f66);
        }
      }
    }
  }
}
</style>
