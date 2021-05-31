<template>
  <div class="px-0 e-nuxt-container">
    <v-row justify="center" style="height: 100%">
      <v-col cols="2" class="pl-4">
        <v-navigation-drawer color="transparent" permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title white--text">
                Stax
              </v-list-item-title>
              <v-list-item-subtitle class=" white--text">
                subtext
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              exact
              :to="item.route"
            >
              <v-list-item-icon>
                <v-icon class=" white--text">{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content class=" white--text">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col cols="10">
        <nuxt-child class="overflow-container" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          route: "/content/provider/dashboard"
        },
        { title: "Teams", icon: "mdi-image", route: "/content/provider/teams" },
        {
          title: "Resources",
          icon: "mdi-help-box",
          route: "/content/provider/resources"
        }
      ],
      right: null
    };
  }
};
</script>

<style scoped>
.e-nuxt-container {
  height: 100%;
  background: #03293d;
}
.overflow-container {
  max-height: 90vh;
  overflow-y: scroll;
}
</style>
