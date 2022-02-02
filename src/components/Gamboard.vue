<template lang="html">

  <section class="gamboard">
    <h1>gamboard Component</h1>
  </section>

</template>

<script lang="ts">

  import {Component, Vue} from "vue-property-decorator";
  import { Circle } from "./Circle.vue";

  @Component({
    components: [Circle]
  })
  export default class Gamboard extends Vue {
    public readonly circles: Circle[];

  }

</script>

<style scoped lang="scss">
  .gamboard {

  }
</style>
