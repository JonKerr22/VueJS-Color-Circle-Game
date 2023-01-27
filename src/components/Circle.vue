<template lang="html">

     <svg height="100" width="100">
      <circle cx="50" cy="50" r="40" :fill="fillColor" />
    </svg> 
  

</template>

<script lang="ts">

  import { Options, Vue } from "vue-class-component";

  @Options({
    name: "Circle"
  })
  export default class Circle extends Vue {
    public get fillColor(): string {
      return this.generateRandomRBG();
    }

    private generateRandomRBG(): string {
      let color = Math.floor(Math.random() * 16777216).toString(16);
      let colorCode = '#000000'.slice(0, -color.length) + color;
      return colorCode;
    }
  }

</script>

<style scoped lang="scss">
  .circle {
  }
</style>
