<template>
    <section>
      <mt-index-list>
        <mt-index-section v-for="data in newList" :index="data.letter">
          <mt-cell  v-for="city in data.city" :title="city"></mt-cell>
        </mt-index-section>
      </mt-index-list>

    </section>
</template>

<script>
  import { IndexList, IndexSection } from 'mint-ui';
  import Vue from 'vue'
  import axios from 'axios'

  Vue.component(IndexList.name, IndexList);
  Vue.component(IndexSection.name, IndexSection);

  export default {
        name: "mymap",
        data() {
            return {
              mapList:[],
              newList:[],
              curr:{},
              letters:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
            }
        },
      mounted(){
          axios.get('/v4/api/city').then(reg=>{

            this.mapList = reg.data.data.cities;
            console.log(this.mapList);

            this.letters.forEach(item=> {
                this.curr={letter:item, city:[]};
                this.mapList.forEach(item2=> {
                    if(item2.pinyin.substring(0,1)==item){
                      this.curr.city.push(item2.name)
                    }
                });
              this.newList.push(this.curr);
            });
            console.log(this.newList)
          }),
            this.$store.commit('change','选择城市')
      }
    }
</script>

<style scoped>

</style>
