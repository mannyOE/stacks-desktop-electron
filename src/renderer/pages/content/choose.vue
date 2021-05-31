<template>
  <div class="e-nuxt-container d-flex align-center justify-center">
    <v-card outlined color="transparent" width="400" tile>
      <h3 class="white--text">Choose which account you wish to explore</h3>
      <div class="d-flex align-center justify-start">
        <v-card
          @click="$router.push('/content/player/home')"
          outlined
          color="transparent"
          width="200"
          height="100"
          class="d-flex px-3 align-center white--text border"
          tile
        >
          <v-icon class="white--text mr-2">mdi-assistant</v-icon>
          Browse Content</v-card
        >
        <v-card
          v-if="userInfo.provider && userInfo.provider.approved"
          outlined
          color="transparent"
          width="180"
          @click="$router.push('/content/provider/dashboard')"
          height="50"
          class="d-flex px-3 align-center white--text"
          tile
        >
          <v-icon class="white--text mr-2">mdi-arch</v-icon>
          Content Provider Portal</v-card
        >
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters("creds", ["accessCreds", "userInfo"])
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
