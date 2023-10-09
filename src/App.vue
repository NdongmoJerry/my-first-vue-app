<template>
  <div>
   <router-view></router-view>
  </div>
</template>

<script>
export default{
  

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.logo{
  width:100px;
}
.register input, .login input, .add-resto input{
  width:300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;

}
.register button, .login button, .add-resto button{
  width:320px;
  height: 40px;
  border: 1px solid skyblue;
  background-color: skyblue;
  color: #fff;
  cursor: pointer;
}

</style>
