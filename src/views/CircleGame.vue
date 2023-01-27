<template lang="html">

  <section class="circle-game">
    <h1>{{header}}</h1>
    <Gameboard />
  </section>

</template>

<script lang="ts">

  import {Options, Vue} from "vue-class-component";
  import Gameboard from "@/components/Gameboard.vue";
  @Options({
    components: { 
      Gameboard
    }
  })
  export default class CircleGame extends Vue {
    public get header(): string {
      return "header text!";
    }

  }

</script>

<style scoped lang="scss">
  .circle-game {

  }
</style>
