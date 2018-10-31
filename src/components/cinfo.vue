<template>
    <section>
      <img src="../assets/img/cinema.png" alt="">
      <ul>
        <li>
          <i class="iconfont icon-chair"></i>
          <div class="info"></div>
          <button>立即订座</button>
        </li>
        <li>
          <img src="" alt="">
          <div class="info"></div>
        </li>
        <li>
          <img src="" alt="">
          <div class="info"></div>
        </li>
      </ul>
      <div id="more">

      </div>
    </section>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "cinfo",
        data() {
            return {
              cinfos:{}
            }
        },
        computed:{
          cid:function () {
            return this.$route.params.id;
          }
        },
      mounted(){
          axios.get(`/v4/api/cinema/${this.$route.params.id}`).then(reg=>{
            console.log(reg.data.data.cinema)
            this.cinfos=reg.data.data.cinema
            this.$store.commit('change',this.cinfos.name)
          })


      }
    }
</script>

<style scoped>

</style>
