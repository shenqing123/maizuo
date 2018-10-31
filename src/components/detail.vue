<template>
    <section>
      <img :src="detail.cover.origin" alt="">
      <div id="title">
        <div class="block"></div>
        <div class="intro">影片简介</div>
      </div>
      <div class="clear"></div>
      <div id="info">
        <p>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:<span>{{detail.director}}</span></p>
        <div>
          <p class="main">主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:</p>
          <p class="actors">
            <span class="oneactor" v-for="(data,index) in aList">{{data.name}}</span>
          </p>
        </div>
        <div class="clear"></div>
        <p>地区语言:<span>{{detail.nation}} </span><span v-if="detail.language">({{detail.language}})</span></p>
        <p>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:<span>{{detail.category}}</span></p>
        <p>上映日期:<span>{{detail.premiereAt}}</span></p>
        <p>{{detail.synopsis}}</p>
      </div>
      <button>立即购票</button>

    </section>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "detail",
        data() {
            return {
              detail:{},
              aList:[]
            }
        },
        mounted(){
          axios.get(`/v4/api/film/${this.$route.params.id}`).then(reg=>{
            this.detail = reg.data.data.film;
            this.aList = this.detail.actors;
          })
        }
    }
</script>

<style scoped>
  button{
    width: 200px;
    height: 40px;
    line-height: 40px;
    color: white;
    background: orange;
    border-radius: 20px;
    margin: 20px auto;
    position: absolute;
    bottom: 20px;
    left: 25%;
  }

  img{
    width: 100%;
  }
  .block{

    width: 20px;
    height: 30px;
    background: #ffd49c;
    float: left;
  }
  #title{
    margin: 20px 0;
    line-height: 30px;
  }
  .intro{
    float: left;
    margin-left: 10px;
  }
  #info{
    margin: 20px;
    font-size: 12px;
  }
  p{
    margin:10px 0;
  }
  .main{
    float: left;
  }
  .actors{
    display: inline-block;

    float: left;
    width: 280px;
    height: 15px;
    overflow: hidden;
    white-space:nowrap;
  }
  .oneactor{
    float: left;
    padding:  0 5px;
    border-right: 1px solid black;
  }
  span{
    margin-left: 10px;
  }

</style>
