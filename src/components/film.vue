<template>
    <section>
      <header>
        <div @click="go('now')">正在热映</div>
        <div @click="go('will')">即将上映</div>
      </header>
      <component :is="nowflim"></component>

    </section>
</template>

<script>
  import now from '../components/now'
  import will from '../components/will'
    export default {
        name: "film",
        components:{now,will},
        data() {
            return {
              nowflim:'now'
            }
        },
      methods:{
          go:function (dec) {
            this.nowflim=dec;
          }
      },
      mounted(){
        this.$store.commit('change','卖座电影');
      }

    }
</script>

<style scoped>
  header{


    width: 100%;
    height: 50px;
    line-height: 50px;

    border-bottom: 1px solid orange;
  }
  div{
    cursor: pointer;

    width: 50%;
    text-align: center;
    float:left;
  }
  .active{
    color: orange;
    border-bottom: 3px solid orange;
  }
</style>
