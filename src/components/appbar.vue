<template>
<v-app-bar dark color="primary" @dblclick="navigate">
      <v-toolbar-title>{{title}}</v-toolbar-title>

      <v-spacer />

      <v-toolbar-items>
        <v-btn icon to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn icon to="/cart">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <v-btn icon to="/panel/login">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
  methods: {
    navigate() {
      this.$router.push("/about");
    }
  },
  props:['title']
}
</script>
