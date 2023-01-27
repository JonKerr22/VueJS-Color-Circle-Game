<template lang="html">

  <section class="gameboard">
    <div id="row1">
      <Circle :fillColor="color1" />
      <Circle :fillColor="color1" />
      <Circle :fillColor="color1" />
    </div>
    <div id="row2">
      <Circle :fillColor="color1" />
      <Circle :fillColor="color2" />
      <Circle :fillColor="color1" />
    </div>
    <div :id="rowThreeId">
      <Circle :fillColor="color1" />
      <Circle :fillColor="color1" />
      <Circle :fillColor="color1" />
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
    public circleColors: string[] = this.generateRandomRBG();
    public hardMode = false; //TODO - add button to toggle this

    public get rowThreeId(): string {
      return "row3";
    }
    public get color1(): string {
      return this.circleColors[0];
    }
    public get color2(): string {
      return this.circleColors[1];
    }
    private get color2Offset(): number {
      return this.hardMode ? 70 : 80;
    }

    private generateRandomRBG(): string[] {
      let color1Num = Math.floor(Math.random() * 16777216);
      let color2Num = color1Num > this.color2Offset ? color1Num - this.color2Offset : color1Num + this.color2Offset;
      let color1Str = color1Num.toString(16);
      let color2Str = color2Num.toString(16);
      let color1Code = '#000000'.slice(0, -color1Str.length) + color1Str;
      let color2Code = '#000000'.slice(0, -color2Str.length) + color2Str;
      return [color1Code, color2Code];
    }
  }

</script>

<style scoped lang="scss">
  .gameboard {

  }
</style>
