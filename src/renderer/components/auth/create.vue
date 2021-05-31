<template>
  <div>
    <h2 class="mb-5 white--text">Create your Staxave account</h2>
    <v-form @submit.prevent="submitLogin" ref="form" v-model="valid">
      <v-text-field
        v-model="login.full_name"
        :rules="nameRules"
        label="Full name"
        required
        dark
        outlined
      ></v-text-field>
      <v-text-field
        v-model="login.mobile"
        :rules="mobileRules"
        label="Mobile Phone"
        required
        dark
        outlined
      ></v-text-field>
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
    </v-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { isMobilePhone, isEmail } from "validator";
export default {
  data() {
    return {
      valid: true,
      loading: false,
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v =>
          (v && v.length >= 6) || "Password must not be less than 6 characters"
      ],
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length >= 6) || "Name must not be less than 6 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => isEmail(v) || "E-mail must be valid"
      ],
      mobile: "",
      mobileRules: [
        v => !!v || "mobile phone number is required",
        v => isMobilePhone(v) || "Phone number must be valid"
      ]
    };
  },
  computed: {
    ...mapGetters("auth", ["login"])
  },
  mounted() {},
  methods: {
    ...mapActions("auth", ["createAccount"]),
    submitLogin: async function() {
      try {
        this.loading = true;
        await this.$refs.form.validate();
        let res = await this.createAccount();
        this.$router.push("/verify");
        this.$toast.info(res.message, { timeout: false });
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
