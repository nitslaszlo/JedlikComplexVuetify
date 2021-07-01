<template>
  <div id="demo">
    <HelloWorldExt msg="Hello World!" />
    <HelloWorldPlus />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorldExt from "@/components/HelloWorldExt.vue";
import HelloWorldPlus from "@/components/HelloWorldPlus.vue";

@Component({
  components: {
    HelloWorldExt,
    HelloWorldPlus
  }
})
export default class Demo extends Vue {}
</script>

<style scoped lang="scss">
#demo {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
