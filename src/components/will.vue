<template>
    <section>
      <ul>
        <li v-for="(movie,index) in mList" @click="toDetail(movie)">
          <div class="one">
            <img class="poster" :src="movie.poster.origin" alt="">
            <div class="info">
              <p class="title">
                {{movie.name}}

              </p>
              <p class="intro">{{movie.intro}}</p>
              <p class="detail">
                {{movie.premiereAt上映}}



              </p>
            </div>
            <span>></span>
          </div>

        </li>
      </ul>

    </section>
</template>

<script>
  import axios from 'axios'
  import router from '../router/index'
    export default {
        name: "will",
        data() {
            return {
              mList:[]
            }
        },
      methods:{
        toDetail : function (data) {
          router.push(`/detail/${data.id}`)
        }
      },
      mounted(){
          axios.get('/v4/api/film/coming-soon?page=1&count=7').then(reg=>{
            console.log(reg.data.data.films);
            this.mList = reg.data.data.films
          })
      }
    }
</script>

<style scoped>
  ul{
    margin:0 10px;
  }
  .poster{
    width: 60px;
    float: left;
  }
  .info{
    float: left;
    margin-left: 10px;
  }
  .title{
    line-height: 32px;
    font-size: 16px;
  }
  .intro,.detail{
    line-height: 24px;
    font-size: 12px;
    color: darkgray;
  }

  span{
    float:right;
    font-size: 16px;
    color: orange;
  }
  .one{
    height: 126px;
    padding: 20px 20px 20px 0px;
    border-bottom: 1px dashed darkgray;
  }

</style>
