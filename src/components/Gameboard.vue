<template lang="html">

  <section class="gameboard">
    <div id="row1">
      <Circle />
      <Circle />
      <Circle />
    </div>
    <div id="row2">
      <Circle />
      <Circle />
      <Circle />
    </div>
    <div :id="rowThreeId">
      <Circle />
      <Circle />
      <Circle />
    </div>
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
    public get rowThreeId(): string {
      return "row3";
    }
  }

</script>

<style scoped lang="scss">
  .gameboard {

  }
</style>
