<template>
  <v-content>
    <appbar :title="title"></appbar>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Electronics</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container fluid>
            <v-row>
              <v-col md="2" v-for="product in electronics" :key="product">
                <product v-bind:products="product"></product>
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Furniture</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container fluid>
            <v-row>
              <v-col md="2" v-for="product in furniture" :key="product">
                <product v-bind:products="product"></product>
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-content>
</template>

<script>
import Product from "../components/Product.vue";
import Appbar from "../components/appbar.vue";
var electronicsJson = require("../assets/electronics.json");
var furnitureJson = require("../assets/furniture.json");

export default {
  methods: {
    navegar() {
      this.$router.push("/about");
    }
  },
  components: {
    Product,
    Appbar
  },
  data: () => ({
    electronics: electronicsJson,
    furniture: furnitureJson,
    title: "Ecommerce UI"
  })
};
</script>
