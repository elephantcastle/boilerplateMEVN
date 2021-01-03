<template>
  <form>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      outlined
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :counter="10"
      label="Name"
      required
      outlined
      type="password"
    ></v-text-field>
    <v-btn class="mr-4" @click="onSubmit"> submit </v-btn>
    <v-btn class="mr-4" @click="register"> register </v-btn>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      login: {},
      errors: [],
      emailErrors: ''
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if(!this.emailErrors){
        const payload = { username: this.email, password: this.password };
        axios
          .post(`http://localhost:4000/api/auth/login/`, payload)
          .then((response) => {
            localStorage.setItem("jwtToken", response.data.token);
            this.$router.push({
              name: "past",
            });
          })
          .catch((e) => {
            console.log(e);
            this.errors.push(e);
          });
      }
    },
    register() {
      this.$router.push({
        name: "register",
      });
    }
  },
  watch: {
    email(val){
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.emailErrors = re.test(String(val).toLowerCase()) ?  undefined : 'Invalid email'
    }
  }
};
</script>
