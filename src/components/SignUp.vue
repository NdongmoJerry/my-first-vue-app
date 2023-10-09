<template>
    <img class="logo" src="../assets/resto.jpeg" />
    <h1>Sign Up</h1>
    <div class="register">
      <input type="text" v-model="name" placeholder="Enter Name" />
      <input type="email" v-model="email" placeholder="Enter Email" />
      <input type="Password" v-model="password" placeholder="Enter Password" />
      <button @click="signUp">Sign Up</button>
      <p>
        <router-link to="/login">Login</router-link>
      </p>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "SignUp",
    datd() {
      return {
        name: "",
        email: "",
        password: "",
      };
    },
    methods: {
      async signUp() {
        let result = await axios.post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        console.log(result);
        if (result.status == 201) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "home" });
        }
      },
    },
    // validating sign-up data when there is something in the user sign-up
    mounted() {
      let user = localStorage.getItem("user-info");
      if (user) {
        this.$router.push({ name: "home" });
      }
    },
  };
  </script>
  
  <style scoped></style>
  