<template>
  <div id="app">
    <v-app>
      <v-app-bar app color="primary" dark class="hidden-xs-only">
        <div class="d-flex align-center">
          <v-img src="@/assets/Jedlik.png" transition="scale-transition" width="30" class="mr-4" />
        </div>

        <v-btn v-for="item in menuItems" :key="item.path" color="transparent" elevation="0" :to="item.path">{{ item.name }}</v-btn>

        <v-spacer></v-spacer>

        <v-btn href="https://github.com/nitslaszlo/JedlikComplexVuetify" target="_blank" text>
          <span class="mr-2">GitHub</span>
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-app-bar>

      <v-app-bar app color="primary" dark absolute class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute top temporary>
        <v-list dense nav>
          <v-list-item v-for="item in menuItems" :key="item.path" link :to="item.path">
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
            <!-- <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon> -->
          </v-list-item>
          <v-list-item href="https://github.com/nitslaszlo/JedlikComplexVuetify" link>
          <v-list-item-content>
              <v-list-item-title>GITHUB</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon>mdi-github</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer fixed padless>
        <v-card flat tile width="100%" class="primary lighten-1 text-center">
          <v-card-text class="white--text">© {{ new Date().getFullYear() }} — <strong>Jedlik</strong> </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

type TMenuItems = {
  name: string;
  path: string;
};

@Component
export default class App extends Vue {
  private drawer = false;
  private menuItems: TMenuItems[];
  private collapseOnScroll = true;

  constructor() {
    super();
    this.menuItems = [
      {
        name: "HOME",
        path: "/"
      },
      {
        name: "DEMO",
        path: "/demo"
      },
      {
        name: "DEMO2",
        path: "/demo2"
      },
      {
        name: "VUEX",
        path: "/vuex"
      },
      {
        name: "ABOUT",
        path: "/about"
      },
      {
        name: "ABOUT2",
        path: "/about2"
      }
    ];
  }
}
</script>

<style>
.v-navigation-drawer.v-btn {
  display: block;
}
</style>
