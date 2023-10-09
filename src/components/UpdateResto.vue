<template>
    <div>
        <HeaderView />
        <h1>This is update restaurant page</h1>
        <form @submit.prevent="updateRestaurant" class="add-resto">
            <input type="text" name="name" v-model="restaurant.name" placeholder="Enter Name" />
            <input type="text" name="address" v-model="restaurant.address" placeholder="Enter Address" />
            <input type="text" name="contact" v-model="restaurant.contact" placeholder="Enter Contact" />
            <button>Update Restaurant</button>
        </form>
    </div>
    </template>
    
    <script>
    import axios from "axios";
    import HeaderView from "../components/HeaderView.vue";
    export default {
        name: "UpdatResto",
        components: {
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
            async updateRestaurant() {
                console.log(this.restaurant)
                const result = await axios.put(
                    "http://localhost:3000/restaurant/" + this.$route.params.id, {
                        name: this.restaurant.name,
                        address: this.restaurant.address,
                        contact: this.restaurant.contact,
                    }
                );
                if (result.status == 200) {
                    this.$router.push({
                        name: "home"
                    });
                }
            },
        },
        // validating sign-up data when there is nothing in the user sign-up
        async mounted() {
            let user = localStorage.getItem("user-info");
            if (!user) {
                this.$router.push({
                    name: "sign-up"
                });
            }
            const result = await axios.get(
                "http://localhost:3000/restaurant/" + this.$route.params.id
            );
            /*  console.log(this.$route.params.id) */
            console.log(result.data);
            this.restaurant = result.data;
        },
    };
    </script>
    
    <style scoped></style>
    