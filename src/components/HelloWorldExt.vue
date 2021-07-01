
<template>
  <div class="d-flex flex-column align-center hello">
    <!-- v-bind:title röviden :title -->
    <!-- v-on:click röviden @click -->
    <h1 :title="message" @click="showHide()">{{ msg }} {{ currentDateTime }} Click me to hide!</h1>
    <h1 v-once :title="message">{{ msg }} {{ currentDateTime }} (v-once direktíva) </h1>
    <h2 v-if="show">Elrejtés v-if direktívával</h2>
    <h2 v-show="show">Elrejtés v-show direktívával</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorldExt extends Vue {
  // TypeScript 2.7 includes a strict class checking where all the properties should be initialized in the constructor.
  // A workaround is to add the ! as a postfix to the variable name:
  @Prop() private msg!: string;
  private message = "Ez a title attributum";
  private show = true;
  private currentDateTime: string = new Date().toLocaleTimeString();

  created(): void {
    setInterval(() => (this.currentDateTime = new Date().toLocaleTimeString()), 1000);
  }

  private showHide(): void {
    this.show = !this.show;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  background-color: lemonchiffon;
}
h1 {
  color: red;
}
</style>
