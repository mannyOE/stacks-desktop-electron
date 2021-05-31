<template>
  <div class="px-0 e-nuxt-container">
    <v-row justify="center" style="height: 100%">
      <v-col cols="2" class="pl-4">
        <v-navigation-drawer color="transparent" permanent>
          <v-divider></v-divider>

          <v-list dense nav rounded>
            <v-list-item
              class="px-5"
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
          <v-divider></v-divider>
          <v-list dense nav rounded>
            <v-subheader class="teal--text">Your Library</v-subheader>
            <v-list-item
              class="px-5"
              v-for="item in library"
              :key="item.title"
              link
              :to="item.route"
            >
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
          title: "Home",
          icon: "mdi-view-dashboard",
          route: "/content/player/home"
        },
        {
          title: "Browse",
          icon: "mdi-magnify",
          route: "/content/player/browse"
        },
        {
          title: "Discography",
          icon: "mdi-disc",
          route: "/content/player/discography"
        }
      ],
      library: [
        {
          title: "Made for you",
          route: "/content/player/for-you"
        },
        {
          title: "Recently Played",
          route: "/content/player/recent"
        },
        {
          title: "Favorites",
          route: "/content/player/favorites"
        },
        {
          title: "Playlists",
          route: "/content/player/playlists"
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
