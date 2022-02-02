<template lang="html">

  <section class="circle">
    <h1>circle Component</h1>
  </section>

</template>

<script lang="ts">

  import {Component, Vue} from "vue-property-decorator";

  @Component({
    components: []
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
