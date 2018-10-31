<template>
  <div id="app">
    <header>
      <div id="menu" @click="menuShow=!menuShow">=</div>
      <span>{{head}}</span>
      <router-link tag="p" to="/map">南京v</router-link>
    </header>
    <transition name="slide">
      <ul v-show="menuShow">
        <router-link tag="li" to="/home" @click.native="menuShow=false">首页</router-link>
        <router-link tag="li" to="/film" @click.native="menuShow=false">影片</router-link>
        <router-link tag="li" to="/cinema" @click.native="menuShow=false">影院</router-link>
        <router-link tag="li" to="/user" @click.native="menuShow=false">我的</router-link>
        <router-link tag="li" to="/shop" @click.native="menuShow=false">商城</router-link>
        <router-link tag="li" to="/card" @click.native="menuShow=false">卖座卡</router-link>
      </ul>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

      menuShow : false
    }

  },
  computed:{
    head:function () {
      return this.$store.state.title
    }
  }

}
</script>

<style>
  body,div,ul,li,p{
    padding: 0;
    margin: 0;
    list-style: none;
    outline: none;
  }
  div,header,footer,nav,section,ul,li{
    box-sizing:border-box;
  }
  a{
    text-decoration: none;
  }
  button{
    border: none;
    outline: none;
  }
  .clear{
    clear: both;
  }
  input{
    border: none;
  }

</style>
<style scoped>
section{
  position: absolute;
  top: 50px;
  width: 100%;
}
  header{
    height: 50px;
    line-height: 50px;
    width: 100%;
    background: black;
    color: white;
    position: fixed;
    z-index: 99;
  }
  header p{
    float: right;
    font-size: 14px;
    margin-right: 20px;
  }
  header span{
    font-size: 14px;
  }
  #menu{
    width: 50px;
    text-align: center;
    float: left;

  }
  ul{
    width: 250px;
    height: 900px;
    background: rgba(0,0,0,0.9);
    color: lightgrey;
    position: fixed;
    top:50px;
    left: 0;
    z-index: 99;
  }
  li{
    height:50px;
    line-height: 50px;
    border-top: 1px solid #333;
    padding-left: 20px;
  }

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-enter-active,.slide-leave-active {
    transition: all .3s ease;
  }
  .slide-enter, .slide-leave-active {
    /*transform:scale(0,1)*/
    width: 0;
  }


</style>
