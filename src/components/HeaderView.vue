<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="add">Add Restaurant</router-link>
        <!-- <router-link to="update">Update Restaurant</router-link> -->
        <a @click="logout" href="#">Logout</a>

    </div>
</template>

<script>
    export default {
        name: 'headerView',
methods:{
    logout(){
        localStorage.clear();
        this.$router.push({name: 'login'})
    }
}
    }
</script>

<style scoped>
.nav{
    background-color: #000;
    overflow: hidden;  

}
.nav a{
    float: left;
   color: #f2f2f2;
   padding: 14px 16px;
   text-decoration: none;
   font-size: 17px;
   margin-right: 5px;
}
.nav a:hover{
  background-color: #ddd;
  color: #333;
}

</style>