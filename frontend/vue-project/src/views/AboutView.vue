<template>
  <div class="about">
    <form @submit.prevent="loginUser">
      <input type="email" name="email" id="email" placeholder="email" v-model="loginInfo.email">
      <input type="password" name="password" id="password" placeholder="Password" v-model="loginInfo.password">
      <input type="submit" value="Submit">
    </form>
    <div>
      {{ result }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'about',
  data(){
    return {
      loginInfo: {
        email: '',
        password: ''
      },
      result: []
    }
  },
  methods: {
    async loginUser() {
      axios({
        method: 'post',
        url: 'http://localhost:3001/user/login',
        data: {
          email: this.loginInfo.email,
          password: this.loginInfo.password
        }
      })
        .then((response) => {
          this.result = response.data
          console.log(response.data)
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('username', response.data.username)
        })
    }
  }
}
</script>

<style>

</style>
