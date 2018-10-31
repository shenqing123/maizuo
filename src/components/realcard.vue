<template>
    <section>
      <form >
        <div>
          <span>卡号：</span>
          <input type="text" name="cardid"  placeholder="请输入卡号">

        </div>

        <div>
          <span>密码：</span>
          <input type="password" name="pwd"  placeholder="请输入密码">
          <p >密码至少6位</p>
        </div>

      </form>
      <div class="btn"><button>查询</button></div>


    </section>
</template>

<script>
    export default {
        name: "realcard",
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
