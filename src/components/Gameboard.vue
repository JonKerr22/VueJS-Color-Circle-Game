<template lang="html">

  <section class="gameboard">
    <h2>Wins: {{winCount}} </h2>
    <div v-for="n in 3" :key="n" :id="rowStr(n)" >
      <Circle v-for="i in 3" :key="i" :fillColor="circleColor(n, i)" @click="onCircleClick(n, i)"/>
    </div>
    <div class="countdown-timer">
      <h1>{{timerStr}} seconds left</h1>
    </div>
    <!--TODO - have a reset button optinally display when lose condition - timer is 0 or a wrong click -->
  </section>

</template>

<script lang="ts">

  import { Options, Vue } from "vue-class-component";
  import Circle from "./Circle.vue";

  @Options({
    name: "Gameboard",
    components: { Circle }
  })
  export default class Gameboard extends Vue {
    private initialTime = 5.0;
    private timerTimeout;

    public circleColors: string[] = this.newCircleColors();
    public offsetIdx: number = this.newOffsetIdx();
    public timerCount = this.initialTime;

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
    public get timerStr(): string {
      if (this.timerCount > 0) {
        this.timerTimeout = setTimeout(() => {
          this.timerCount = this.timerCount - 0.01;
        }, 10);
      }
      if(this.timerCount <= 0) {
        //TODO - trigger lose process
        return "0";
      } else {
        return `${this.timerCount.toFixed(2)}`;
      }
      
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
    private resetTimer(): void {
      clearTimeout(this.timerTimeout);
      this.timerCount = this.initialTime;
    }

    public onCircleClick(row: number, col: number): void {
      if (this.isOffsetIdx(row, col)) {
        this.winCount++;
        console.log(`Correct!, was ${this.offsetIdx}, you clicked ${3*(row-1) + col}`);
      }
      else {
        //TODO - trigger lose condition
        this.winCount = 0;
        console.log(`wrong, was ${this.offsetIdx}, you clicked ${3*(row-1) + col}`);
      }
      this.resetTimer();
      this.offsetIdx = this.newOffsetIdx();
      this.circleColors = this.newCircleColors();
    }
  }

</script>

<style scoped lang="scss">
  .gameboard {

  }
</style>
