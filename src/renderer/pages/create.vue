<template>
  <div class="e-nuxt-container d-flex align-center justify-center">
    <v-card class="mb-6" width="400" flat tile>
      <Login />
    </v-card>
  </div>
</template>

<script>
import Login from "@/components/auth/create";
export default {
  components: {
    Login
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.e-nuxt-container {
  height: 100%;
  background: #03293d;
}
</style>
