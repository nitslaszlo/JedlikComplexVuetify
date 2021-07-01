<template>
  <div class="about">
    <div id="app">
      <v-app id="inspire">
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex d-flex xs12 sm6 md4>
              <v-card color="purple" dark>
                <v-card-title primary class="title">Lorem</v-card-title>
                <v-card-text>{{ lorem }}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm6 md3>
              <v-layout row wrap>
                <v-flex d-flex>
                  <v-card color="indigo" dark>
                    <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex d-flex>
                  <v-layout row wrap>
                    <v-flex v-for="n in 2" :key="n" d-flex xs12>
                      <v-card color="red lighten-2" dark>
                        <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex d-flex xs12 sm6 md2 child-flex>
              <v-card color="green lighten-2" dark>
                <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm6 md3>
              <v-card color="blue lighten-2" dark>
                <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-app>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  // tslint:disable-next-line:max-line-length
  private lorem = "Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.";
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
