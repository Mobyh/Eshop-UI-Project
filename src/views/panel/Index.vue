<template>
  <v-content>
    <v-app-bar dark color="secondary">
      <v-toolbar-title>
        <small>UI Ecommerce</small>
        <v-icon small>mdi-arrow-right</v-icon>
        Control panel
      </v-toolbar-title>

      <v-spacer />

      <v-toolbar-items>
        <v-btn icon @click="exit">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <p>
            <b>{{ user.name }}</b>, welcome!
          </p>
          <p>
            <a :href="`mailto:${user.email}`">{{ user.email }}</a>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$ls.get('user')
    }
  },
  methods: {
    exit () {
      this.$ls.remove('user')
      this.$router.push('/')
    }
  }
}
</script>
