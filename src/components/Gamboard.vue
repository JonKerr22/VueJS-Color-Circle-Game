<template lang="html">

  <section class="gameboard">
    <h1>gameboard Component</h1>
    <Circle />
  </section>

</template>

<script lang="ts">

  import { Options, Vue } from "vue-class-component";
  import Circle from "./Circle.vue";

  @Options({
    name: "Gameboard",
    components: {Circle}
  })
  export default class Gameboard extends Vue {
    // public readonly circles: Circle[];

  }

</script>

<style scoped lang="scss">
  .gameboard {

  }
</style>
