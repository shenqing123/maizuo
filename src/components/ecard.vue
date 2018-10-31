<template>
    <section>
      <form >
        <div><span>卡号：</span><input type="text" name="" placeholder="请输入电子卖座卡卡号"></div>
      </form>
      <div class="btn"><button>查询</button></div>

    </section>
</template>

<script>
    export default {
        name: "ecard",
        data() {
            return {}
        }
    }
</script>

<style scoped>
  form div{
    height:10px;
    width: 300px;
    margin: 60px auto;
    border:1px solid lightgrey;
    border-top: none;
  }
  input{
    width: 200px;
    outline: none;
    margin: 0 auto;
    position: relative;
    top: -20px;
    left: 20px;
    font-size: 15px;
  }
  span{
    position: relative;
    top: -20px;
    left: 10px;
  }
  button{
    width: 150px;
    height: 40px;
    margin: 0px auto;
    border-radius: 20px;
    background: orange;
    color: white;
    text-align: center;

  }
  .btn{
    text-align: center;
  }

</style>
