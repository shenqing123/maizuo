<template>
    <section>
      <header>
        <div @click="son='realcard'">卖座卡</div>
        <div @click="son='ecard'">电子卖座卡</div>
      </header>
      <component :is="son"></component>
    </section>
</template>

<script>
  import realcard from '../components/realcard'
  import ecard from '../components/ecard'
    export default {
        name: "card",
      components:{realcard,ecard},
        data() {
            return {
              son:'realcard'
            }
        },
      mounted(){
        this.$store.commit('change','查询/绑定/激活卖座卡');
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
