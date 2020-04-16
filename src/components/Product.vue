<template>
  <v-card height="100%" width="100%"> 
    <v-img :src="require('../assets/Products_Images/'+products.name+'.jpg')" height="200px"></v-img>

    <v-card-title>{{products.name}}</v-card-title>

    <v-card-subtitle>Price: ${{products.price}}</v-card-subtitle>

    <v-card-actions>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>{{products.description}}</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data: () => ({
      show: false,
    }),
  props:['products']
};
</script>