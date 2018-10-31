<template>
    <section>
      <div class="box">

          <div  v-for="data in cList">
            <div class="district" @click="data.show=!data.show">{{data.district}}</div>

            <ul class="in" v-show="data.show">
              <li v-for="c in data.cinema" @click="toCinfo(c)">
                <div>
                  <p>{{c.name}}</p>
                  <p class="adress">{{c.address}}</p>
                  <p class="dep">距离未知</p>
                </div>
                <p>></p>
              </li>
            </ul>
          </div>

      </div>

    </section>
</template>

<script>
  import axios from 'axios'
  import router from '../router/index'
    export default {
        name: "cinema",
        data() {
            return {
              list:[],
              blockList:[],
              cList:[],
              curr:{},

            }
        },
      methods:{
          getBlock:function () {
            this.list.forEach(item=> {
              this.blockList.push(item.district.name)
            });
            this.blockList=Array.from(new Set(this.blockList));
            console.log(this.blockList);

          },
          getCinema:function () {
            this.blockList.forEach(item=>{
              this.curr={district:item,cinema:[],show:false};
              this.list.forEach(item2=>{
                if(item2.district.name==item){
                  this.curr.cinema.push(item2)
                }
              });
              this.cList.push(this.curr)
            });
            console.log(this.cList)
          },
        toCinfo:function (data) {
          router.push(`cinema/${data.id}`)
        }
      },
        mounted(){

          axios.get('/v4/api/cinema').then(reg=>{
            this.list=reg.data.data.cinemas;
            console.log(this.list)
            this.getBlock();
            this.getCinema();
          });

          this.$store.commit('change','全部影院');
        }

    }
</script>

<style scoped>
  .box{
    height: 620px;
    background: #E1E1E1;
  }
  .district{
    height: 40px;
    line-height: 40px;
    padding-left: 16px;
    border-bottom: 2px solid #E1E1E1;
    background: #C6C6C6;
  }
  .in>li{
    height: 100px;
    padding: 20px 16px;
    border-bottom: 1px solid lightgrey;
    background: white;
    overflow: hidden;
    /*clear: both;*/
  }
  .in>li>div{
    float: left;
  }
  .in>li>p{
    float: right;
  }
  .adress,.dep{
    color: lightgrey;
    font-size: 12px;
    margin: 10px 0;
  }

</style>
