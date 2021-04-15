<template>
  <v-app>
    <!-- <v-navigation-drawer app> -->
    <!-- -->
    <!-- </v-navigation-drawer> -->

    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />
      </div>
      <v-btn color="transparent" elevation="0" to="/">Home</v-btn>

      <v-spacer></v-spacer>

      <v-btn color="transparent" elevation="0" to="/about">About</v-btn>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/nitslaszlo/JedlikComplexVuetify" target="_blank" text>
        <span class="mr-2">GitHub</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- <v-footer app>

    </v-footer> -->
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>
