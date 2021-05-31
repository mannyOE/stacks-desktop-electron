<template>
  <div>
    <h2 class="mb-5 white--text">Login to continue</h2>
    <v-alert
      v-if="snackbar"
      colored-border
      dismissible
      type="error"
      elevation="3"
    >
      {{ message }}
    </v-alert>
    <v-form @submit.prevent="submitLogin" ref="form" v-model="valid">
      <v-text-field
        v-model="login.email"
        :rules="emailRules"
        label="E-mail"
        required
        dark
        outlined
      ></v-text-field>

      <v-text-field
        v-model="login.password"
        label="Password"
        :rules="passwordRules"
        type="password"
        dark
        required
        outlined
      ></v-text-field>

      <v-btn
        :loading="loading"
        color="purple lighten-1 white--text"
        type="submit"
        class="mr-4"
      >
        Submit
      </v-btn>
      <p class="mb-0 teal--text lighten-3 mt-3">
        No account yet? Create it
        <nuxt-link to="/create">here</nuxt-link>
      </p>
      <p class="mb-0 teal--text lighten-3 mt-3">
        Can't remember your password? Reset it
        <nuxt-link to="/forgot">here</nuxt-link>
      </p>
    </v-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      valid: true,
      loading: false,
      snackbar: false,

      message: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 6) || "Password must be less than 6 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  computed: {
    ...mapGetters("auth", ["login"])
  },
  mounted() {},
  methods: {
    ...mapActions("auth", ["loginFn"]),
    submitLogin: async function() {
      try {
        this.loading = true;
        await this.$refs.form.validate();
        let res = await this.loginFn();
        this.$router.push("/content/choose");
        this.loading = false;
      } catch (error) {
        this.$toast.error(error.message, { timeout: false });
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
div,
p {
  background: #03293d;
}
</style>
