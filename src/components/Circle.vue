<template lang="html">

  <section class="circle">
    <h2>circle Component</h2>
  </section>

</template>

<script lang="ts">

  import { Options, Vue } from "vue-class-component";

  @Options({
    name: "Circle"
  })
  export default class Circle extends Vue {
    public readonly color: string = "#000000";
    public readonly index: number = 0;

  }

</script>

<style scoped lang="scss">
  .circle {

  }
</style>
