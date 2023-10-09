<template>
    <h1>Login</h1>
    <div class="login">
      <input type="email" v-model="email" placeholder="Enter Email" />
      <input type="Password" v-model="password" placeholder="Enter Password" />
      <button @click="login">Login</button>
      <p>
        <router-link to="/sign-up">Sign Up</router-link>
      </p>
    </div>
  </template>
  
  <script>
  import axios from "axios"; 
  export default {
    name: "LoginView",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      async login() {
        let result = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        );
  
        if (result.status == 200 && result.data.length > 0) {
          localStorage.setItem("user-info", JSON.stringify(result.data[0]));
          this.$router.push({ name: "home" });
        }
  
        console.log(result);
      },
    },
    // validating sign-up data when there is something in the user sign-up
    mounted() {
      let user = localStorage.getItem("user-info");
      if (user) {
        this.$router.push({ name: "sign-up" });
      }
    },
  };
  </script>
  
  <style scoped></style>
  