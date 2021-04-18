<template>
  <div id="app">
    <v-app>
      <v-app-bar app color="primary" dark absolute class="hidden-xs-only">
        <div class="d-flex align-center">
          <v-img src="@/assets/Jedlik.png" transition="scale-transition" width="30" />
        </div>

        <v-spacer></v-spacer>

        <v-btn color="transparent" elevation="0" to="/">Home</v-btn>

        <v-spacer></v-spacer>

        <v-btn color="transparent" elevation="0" to="/demo">Demo</v-btn>

        <v-spacer></v-spacer>

        <v-btn color="transparent" elevation="0" to="/about">About</v-btn>

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
        <v-btn color="transparent" elevation="0" to="/">Home</v-btn>

        <v-spacer></v-spacer>

        <v-btn color="transparent" elevation="0" to="/demo">Demo</v-btn>

        <v-spacer></v-spacer>

        <v-btn color="transparent" elevation="0" to="/about">About</v-btn>

        <v-spacer></v-spacer>

        <v-btn href="https://github.com/nitslaszlo/JedlikComplexVuetify" target="_blank" text>
          <span class="mr-2">GitHub</span>
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-navigation-drawer>

      <v-main>
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer absolute fixed padless>
        <v-card flat tile width="100%" class="primary lighten-1 text-center">
          <v-card-text class="white--text">© {{ new Date().getFullYear() }} — <strong>Jedlik</strong> </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  private drawer = false;
}
</script>
