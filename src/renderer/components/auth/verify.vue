<template>
  <div>
    <h2 class="mb-5 white--text">
      Enter the code sent to you to complete
    </h2>
    <v-form @submit.prevent="submitLogin" ref="form" v-model="valid">
      <v-text-field
        v-model="login.otp"
        :rules="codeRules"
        label="Code"
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

      <v-btn
        :loading="loading"
        color="success lighten-1 white--text"
        type="button"
        class="mr-4"
      >
        Resend Code
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
      codeRules: [
        v => !!v || "Code is required",
        v => v.length === 6 || "Code must be valid"
      ]
    };
  },
  computed: {
    ...mapGetters("auth", ["login"])
  },
  methods: {
    ...mapActions("auth", ["createAccount"]),
    submitLogin: async function() {
      try {
        this.loading = true;
        await this.$refs.form.validate();
        let res = await this.createAccount("verify");
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
