<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark elevation="0">
              <v-toolbar-title>Admin</v-toolbar-title>
            </v-toolbar>

            <v-card-text>
              <v-form>
                <v-text-field v-model="login" label="User" prepend-icon="mdi-face" />
                <v-text-field v-model="password" label="Password" prepend-icon="mdi-lock" type="password" />
                <v-alert transition="scale-transition" type="error" :value="!!alert">{{ alert}}</v-alert>
              </v-form>
            </v-card-text>

            <v-card-actions class="justify-end pa-4">
              <v-spacer />
              <v-btn text color="primary" @click="acessar">Login</v-btn>
              <v-btn text to="/">Exit</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data () {
    return {
      login: '',
      password: '',
      alert: ''
    }
  },
  methods: {
    acessar () {
      if (this.login === 'kay' && this.password === '123') {
        this.$ls.set('user', {
          login: this.login,
          name: 'Kay',
          email: 'Kay@email.com'
        })
        this.$router.push('/panel')
      } else {
        this.alert = 'User or password are invalid'
      }
    }
  }
}
</script>
