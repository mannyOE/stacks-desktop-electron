<template>
  <div>
    <h2 class="mb-5 white--text">Enter the email address on your account</h2>
    <v-form @submit.prevent="submitLogin" ref="form" v-model="valid">
      <v-text-field
        v-model="forgot.email"
        :rules="emailRules"
        label="E-mail"
        required
        dark
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
export default {
  data() {
    return {
      valid: true,
      loading: false,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  computed: {
    ...mapGetters("auth", ["forgot"])
  },
  methods: {
    ...mapActions("auth", ["forgotPasswordFn"]),
    submitLogin: async function() {
      try {
        this.loading = true;
        await this.$refs.form.validate();
        let res = await this.forgotPasswordFn();
        this.$toast.info(res.message, { timeout: false });
        this.$router.push("/reset");
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
