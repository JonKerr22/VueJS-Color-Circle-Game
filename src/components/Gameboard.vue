<template lang="html">

  <section class="gameboard">
    <div v-for="n in 3" :key="n" :id="rowStr(n)" >
      <Circle v-for="i in 3" :key="i" :fillColor="circleColor(n, i)" />
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
    public circleColors: string[] = this.generateRandomColorCodes();
    public offsetIdx: number = Math.floor(Math.random() * 9); //0 thru 8

    public hardMode = false; //TODO - add button to toggle this


    public get color1(): string {
      return this.circleColors[0];
    }
    public get color2(): string {
      return this.circleColors[1];
    }
    private get color2Offset(): number {
      return this.hardMode ? 70 : 80;
    }

    public rowStr(n: number): string {
      return `row${n}`;
    }
    public circleColor(row: number, col: number): string {
      return 3*(row-1) + col === this.offsetIdx ? this.color2 : this.color1;
    }

    private generateRandomColorCodes(): string[] {
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
