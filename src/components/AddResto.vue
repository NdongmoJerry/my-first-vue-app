<template>
  <div>
    <HeaderView/>
    <h1>Hello user, Welcome to Restaurant Page</h1>
    <form @submit.prevent="addRestaurant" class="add-resto">
      <input
        type="text"
        name="name"
        v-model="restaurant.name"
        placeholder="Enter Name"
      />
      <input
        type="text"
        name="address"
        v-model="restaurant.address"
        placeholder="Enter Address"
      />
      <input
        type="text"
        name="contact"
        v-model="restaurant.contact"
        placeholder="Enter Contact"
      />
      <button>Add new Restaurant</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderView from '../components/HeaderView.vue';
export default {
  name: "AddResto",
  components:{
    HeaderView,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async addRestaurant() {
      console.log(this.restaurant);
      const result = await axios.post('http://localhost:3000/restaurant',{
        name:this.restaurant.name,
        address:this.restaurant.address,
        contact:this.restaurant.contact,
      });
      if(result.status==201){
        this.$router.push({name:'home'});
      }
      console.log('result',result)       
    },
  },
};
</script>

<style scoped></style>
