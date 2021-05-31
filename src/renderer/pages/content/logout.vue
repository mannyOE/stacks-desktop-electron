<template>
  <div></div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  mounted() {
    this.logout();
  },
  methods: {
    ...mapMutations("creds", ["logUserOut"]),
    logout() {
      this.logUserOut();
      this.$router.push("/");
    }
  }
};
</script>

<style scoped></style>
