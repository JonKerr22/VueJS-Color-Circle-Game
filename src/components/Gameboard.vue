<template lang="html">

  <section class="gameboard">
    <h2>Wins: {{winCount}} </h2>
    <div v-for="n in 3" :key="n" :id="rowStr(n)" >
      <Circle v-for="i in 3" :key="i" :fillColor="circleColor(n, i)" @click="onCircleClick(n, i)"/>
    </div>
    <CountdownTimer :initialTime="6" />
  </section>

</template>

<script lang="ts">

  import { Options, Vue } from "vue-class-component";
  import Circle from "./Circle.vue";
  import CountdownTimer from "./CountdownTimer.vue";

  @Options({
    name: "Gameboard",
    components: { Circle, CountdownTimer }
  })
  export default class Gameboard extends Vue {
    public circleColors: string[] = this.newCircleColors();
    public offsetIdx: number = this.newOffsetIdx();

    public hardMode = false; //TODO - add button to toggle this
    public winCount = 0;

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
      return this.isOffsetIdx(row, col) ? this.color2 : this.color1;
    }

    private newCircleColors(): string[] {
      let color1Num = Math.floor(Math.random() * 16777216);
      let color2Num = color1Num > this.color2Offset ? color1Num - this.color2Offset : color1Num + this.color2Offset;
      let color1Str = color1Num.toString(16);
      let color2Str = color2Num.toString(16);
      let color1Code = '#000000'.slice(0, -color1Str.length) + color1Str;
      let color2Code = '#000000'.slice(0, -color2Str.length) + color2Str;
      return [color1Code, color2Code];
    }
    private newOffsetIdx(): number { return Math.floor(Math.random() * 9) + 1; /*1 thru 9*/ }
    private isOffsetIdx(row: number, col: number): boolean {
      return 3*(row-1) + col === this.offsetIdx;
    }

    public onCircleClick(row: number, col: number): void {
      if (this.isOffsetIdx(row, col)) {
        this.winCount++;
        console.log(`Correct!, was ${this.offsetIdx}, you clicked ${3*(row-1) + col}`);
      }
      else {
        this.winCount = 0;
        console.log(`wrong, was ${this.offsetIdx}, you clicked ${3*(row-1) + col}`);
      }

      this.offsetIdx = this.newOffsetIdx();
      this.circleColors = this.newCircleColors();
    }
  }

</script>

<style scoped lang="scss">
  .gameboard {

  }
</style>
