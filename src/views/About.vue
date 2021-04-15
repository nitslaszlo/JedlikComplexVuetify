<template>
  <div class="about">
    <h1 class="text-center">This is an about page</h1>
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
