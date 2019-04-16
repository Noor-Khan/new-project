<template>
  <v-container>
    <v-layout>
      <v-flex md6 offset-md3>
        <form>
          <v-text-field
            label="E-mail"
            v-model="user.email"
            required
          ></v-text-field>
          <v-text-field
            type="password"
            v-model="user.password"
            label="Password"
            required
          ></v-text-field>
          <v-btn depressed large color="primary" class="ml-0" @click="updateUser()">Sign in</v-btn>
        </form>
        <p>Email: {{ user.email }}</p>
        <p>Password: {{ user.password }}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  components: {
  },
  data: () => ({
  }),
  computed: {
    user() {
      return this.$store.getters.getUser
    }
  },
  methods:  {
    async updateUser() {
      this.$store.dispatch('updateUser', this.user)
      try {
        let response = await this.axios.post('http://159.65.7.75:9000/v1/auth', this.user).then(res =>{
          console.log(response)
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
