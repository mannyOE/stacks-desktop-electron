<template>
  <v-app>
    <appHeader
      :user="userInfo"
      :loggedIn="this.accessCreds && this.accessCreds.token"
    />
    <nuxt />
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import appHeader from "@/components/shared/app-header";
export default {
  components: { appHeader },
  computed: {
    ...mapGetters("creds", ["accessCreds", "userInfo"])
  },
  methods: {
    ...mapMutations("creds", ["logUserOut"])
  },
  mounted: async function() {
    console.log(this.userInfo);
    if (this.accessCreds && this.accessCreds.token) {
      let now = new Date().getTime();
      if (this.accessCreds.expires < now) {
        await this.logUserOut();
        this.$router.push("/");
      } else {
        let cur = this.$route.path;
        if (!cur.includes("content")) {
          this.$router.push("/content/choose");
        }
      }
    } else {
      this.$router.push("/");
    }
  }
};
</script>

<style>
body,
.v-application {
  margin: 0 !important;
  background: #03293d !important;
}
</style>
