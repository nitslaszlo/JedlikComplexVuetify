<template>
  <div class="d-flex flex-column align-center">
    <h1>This is an about page</h1>
    <v-img class="mb-15" src="@/assets/Jedlik.png" max-width="300"></v-img>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
