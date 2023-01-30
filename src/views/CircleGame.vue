<template lang="html">

  <section class="circle-game">
    <h1>{{header}}</h1>
    <CirlceColorGameboard />
  </section>

</template>

<script lang="ts">

  import {Options, Vue} from "vue-class-component";
  import CirlceColorGameboard from "../components/ColorCirleGameboard.vue";
  @Options({
    components: { 
      CirlceColorGameboard
    }
  })
  export default class CircleGame extends Vue {
    public get header(): string {
      return "Click the cirle thats the wrong color before the timer runs out!";
    }

  }

</script>

<style scoped lang="scss">
  .circle-game {

  }
</style>
