<template>
    <div>
      <HeaderView />
      <h1>Hello {{ name }}, Welcome to Home Page!</h1>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in restaurant" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
            <!-- update resto -->
            <td>
              <router-link class="btn btn-warning" :to="'/update/' + item.id"
                >Update</router-link
              >
              <button class="btn btn-danger" @click="deleteRestaurant(item.id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import HeaderView from "../components/HeaderView.vue";
  export default {
    name: "HomeView",
    data() {
      return {
        name: "",
        restaurant: [],
      };
    },
    components: {
      HeaderView,
    },
    methods: {
      async deleteRestaurant(id) {
        let result = await axios.delete("http://localhost:3000/restaurant/" + id);
        console.log(result.status);
        if (result.status == 200) {
          this.loadData();
        }
      },
      async loadData() {
        let user = localStorage.getItem("user-info");
        //function to dis play the user name
        this.name = JSON.parse(user).name;
        if (!user) {
          this.$router.push({ name: "sign-up" });
        }
  
        let result = await axios.get("http://localhost:3000/restaurant");
        console.log(result);
        this.restaurant = result.data;
      },
    },
    // validating sign-up data when there is nothing in the user sign-up
    async mounted() {
      this.loadData();
    },
  };
  </script>
  <style scoped>
  td {
    width: 160px;
    height: 40px;
  }
  .btn {
    margin-right: 10px;
    cursor: pointer;
  }
  </style>
  