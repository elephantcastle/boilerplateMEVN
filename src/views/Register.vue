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
      :error-messages="pwdErrors"
      :counter="10"
      label="Name"
      required
      outlined
      type="password"
    ></v-text-field>
    <v-btn class="mr-4" @click="onSubmit"> Register </v-btn>
    <v-btn class="mr-4" @click="$router.go(-1)"> Cancel </v-btn>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      email: null,
      password: null,
      errors: [],
      emailErrors: "",
      pwdErrors: "",
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (!this.emailErrors && !this.pwdErrors) {
        const payload = { username: this.email, password: this.password };
        axios
          .post(`http://localhost:4000/api/auth/register/`, payload)
          .then((response) => {
            alert("Registered successfully", response);
            this.$router.push({
              name: "login",
            });
          })
          .catch((e) => {
            console.log(e);
            this.errors.push(e);
          });
      }
    },
  },
  watch: {
    email(val) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.emailErrors = re.test(String(val).toLowerCase())
        ? undefined
        : "Invalid email";
    },
    password(val) {
      /*eslint-disable */
      const strongRegex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{10,})"
      );
      /*eslint-enable */
      this.pwdErrors = !strongRegex.test(val)
        ? "password should be at least 10 digit long, contain a alphabetical uppercase, lowercase, numerical and special charachter"
        : "";
    },
  },
};
</script>

