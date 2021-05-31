<template>
  <div class="toolbar">
    <v-toolbar color="transparent" dense flat>
      <v-btn v-if="canGoBack" @click="$router.go(-1)" icon class="white--text">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn
        v-else
        @click="$router.push('/content/choose')"
        icon
        class="white--text"
      >
        <v-icon>mdi-apps-box</v-icon>
      </v-btn>

      <v-toolbar-title class="white--text">Staxave</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        v-if="loggedIn"
        bottom
        offset-y
        origin="center center"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn text dark v-bind="attrs" v-on="on">
            <v-icon class="mr-2">mdi-account</v-icon>
            {{ user.full_name }}
          </v-btn>
        </template>

        <v-list dense style="background: #03293d; min-width: 200px;">
          <v-list-item
            class="mt-0"
            v-for="(item, index) in items"
            :key="index"
            :to="item.to"
          >
            <v-list-item-content class=" white--text">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: ["loggedIn", "user"],
  data() {
    return {};
  },
  methods: {},
  computed: {
    canGoBack() {
      return this.$route.path.length !== 1;
    },
    items() {
      let list = [
        {
          title: "Account",
          to: "/content/account"
        },
        {
          title: "Preferences",
          to: "/content/preferences"
        }
      ];
      if (this.user && this.user.provider) {
        if (this.user.provider.approved) {
          list.push({
            title: "Visit Provider Account",
            to: "/content/provider/dashboard"
          });
        } else {
          list.push({
            title: "Provider Account Pending Approval",
            to: ""
          });
        }
      } else {
        list.push({
          title: "Apply for Provider Account",
          to: "/content/providers-apply"
        });
      }
      list.push({
        title: "Logout",
        to: "/content/logout"
      });
      return list;
    }
  }
};
</script>

<style></style>
