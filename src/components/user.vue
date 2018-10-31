<template>
    <section>
      <form >
        <div>
          <input type="tel" name="phone" placeholder="请输入手机号" required >

        </div>
        <div><input type="text" name="va" placeholder="请输入验证码" ></div>
      </form>
      <div class="btn"><button>登陆</button></div>

    </section>
</template>

<script>
    export default {
        name: "user",
        data() {
            return {}
        },
      mounted(){
        this.$store.commit('change','登录');
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
