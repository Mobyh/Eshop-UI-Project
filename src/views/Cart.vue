<template>
  <v-content>
    <appbar :title="title"></appbar>
    <v-container fluid>
      <v-row>
        <v-col md="2" v-for="product in products" :key="product">
          <product v-bind:products="product"></product>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import Product from "../components/Product.vue";
import Appbar from "../components/appbar.vue"
var electronics = require("../assets/electronics.json");

export default {
  methods: {
    navegar() {
      this.$router.push("/about");
    }
  },
  components: {
    Product, Appbar
  },
  data: () => ({
    products: electronics,
    title: "Cart"
  })
};
</script>
