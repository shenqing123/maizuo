<template>
    <section>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="data in bList">
          <img :src="data.imageUrl" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <div id="content">
        <ul>
          <li v-for="(data,index) in mList" @click="toDetail(data)">
            <div class="card">
              <img class="poster" :src="data.cover.origin" alt="">
              <div class="info">
                <div class="left">
                  <div class="name">{{data.name}}</div>
                  <div class="detail">{{data.cinemaCount}}家影院上映{{data.watchCount}}人购票</div>
                </div>
                <div class="score">{{data.grade}}</div>
              </div>

            </div>
          </li>
        </ul>
        <router-link tag="div" class="more" to="/film">更多热映电影</router-link>
        <hr>
        <ul>
          <li v-for="(data,index) in sList" @click="toDetail(data)">
            <div class="card">
              <img class="poster" :src="data.cover.origin" alt="">
              <div class="infos">
                <div class="left">
                  <div class="name">{{data.name}}</div>
                </div>
                <div class="date">{{data.premiereAt}}上映</div>
              </div>

            </div>
          </li>
        </ul>
        <router-link tag="div" class="more" to="/film">更多即将上映电影</router-link>
      </div>
    </section>
</template>

<script>
  import axios from 'axios';
  import router from '../router/index'
  import { Swipe, SwipeItem } from 'mint-ui';
  import Vue from 'vue'
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
    export default {
        name: "home",
        data() {
            return {
              mList:[],
              sList:[],
              bList:[]
            }
        },
      methods:{
        toDetail : function (data) {
          router.push(`/detail/${data.id}`)
        }
      },
        mounted(){
          axios.get( '/v4/api/film/coming-soon?__t=1537501642623&page=1&count=3' ).then(reg=>{
            // console.log(reg.data.data.films)
            this.sList = reg.data.data.films; }
            );
          axios.get( '/v4/api/film/now-playing?__t=1539583495841&page=1&count=5' ).then(reg=>{
            // console.log(reg.data.data.films)
            this.mList = reg.data.data.films; }
          );
            axios.get('/v4/api/billboard/home').then(reg=>{

               this.bList = reg.data.data.billboards;
              console.log(this.bList)
            });
          this.$store.commit('change','卖座电影');
        }
    }
</script>

<style scoped>
  .mint-swipe{
    width:100%;
    height: 200px;
  }
  .mint-swipe img{
    width: 100%;
  }
  #content{
    background: #eee;
  }
  li{
    width: 100%;
    padding: 5%;

  }
  .card{
    width: 100%;
    background: white;
    box-shadow: 1px 1px 2px lightgrey;
  }
  .poster{
    width: 100%;
  }
  .info{
    height: 50px;
    padding: 5px 20px;
  }
  .infos{
    height: 40px;
    padding: 5px 20px;
  }
  .left{


    float: left;

  }

  .detail{
    font-size: 10px;
    color: darkgray;
  }
  .date{
    font-size: 15px;
    color: orange;
    float: right;
  }
  .score{

    font-size: 25px;
    color: orange;
    float: right;

  }
  .swiper-slide img{
    width: 100%;
  }
  .more{
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 0 auto;
    border: 1px solid darkgray;
    border-radius: 25px;
  }
</style>
