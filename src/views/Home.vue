<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <HelloWorld2 msg="Welcome to Vuetify"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import HelloWorld2 from "@/components/HelloWorld2.vue";

@Component({
  components: {
    HelloWorld,
    HelloWorld2
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home {
    background-color: azure;
}
</style>
