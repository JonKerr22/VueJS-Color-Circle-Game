<template lang="html">

  <section class="gameboard">
    <input type="checkbox" id="hardmode" name="hardmode" @change="toggleHardMode()">
    <label for="hardmode"> Hard mode?</label><br>
    <button v-if="!this.gameStarted" @click="startGame()">Start!</button> 
    <h2>Wins: {{winCount}} </h2>
    <div v-for="n in 3" :key="n" :id="rowStr(n)" >
      <Circle v-for="i in 3" :key="i" :fillColor="circleColor(n, i)" @click="onCircleClick(n, i)"/>
    </div>
    <div class="countdown-timer">
      <h2>{{timerStr}} seconds left</h2>
      <h1 v-if="this.gameLostState">{{ gameOverMessage }}</h1>
      <button v-if="this.gameLostState" @click="resetGame()">Reset</button> 
    </div>
  </section>

</template>

<script lang="ts">

  import { Options, Vue } from "vue-class-component";
  import Circle from "./Circle.vue";

  @Options({
    name: "CirlceColorGameboard",
    components: { Circle }
  })
  export default class Gameboard extends Vue {
    public winCount = 0.0;
    private initialTime = 5.0;
    private timerTimeout!: number;
    private gameLostState = false;

    public circleColors: string[] = this.newCircleColors();
    public offsetIdx: number = this.newOffsetIdx();
    public timerCount = this.initialTime;

    public hardMode = false;
    public gameStarted = false;

    public get color1(): string {
      return this.circleColors[0];
    }
    public get color2(): string {
      return this.circleColors[1];
    }
    public get gameRunning(): boolean {
      return this.gameStarted && !this.gameLostState;
    }
    private get color2Offset(): number {
      return this.hardMode ? 70 : 80;
    }
    private get timerScale(): number {
      return this.hardMode ? 6: 7;
    }
    public get gameOverMessage(): string {
      return this.hardMode ? "Game over, good try!" : "Game over!";
    }
    public get timerStr(): string {
      if (this.timerCount > 0 && this.gameRunning) {
        this.timerTimeout = setTimeout(() => {
          this.timerCount = this.timerCount - 0.01;
        }, 10);
      }
      if(this.timerCount <= 0) {
        this.gameLostState = true;
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
      this.timerCount =  Math.max(this.initialTime - (Math.floor(this.winCount/this.timerScale) * 0.5), 0.75);
      this.gameLostState = false;
    }
    private startGame(): void {
      this.gameStarted = true;
      this.resetGame();
    }
    private resetGame(): void {
      this.winCount = 0;
      this.resetTimer();
      this.offsetIdx = this.newOffsetIdx();
      this.circleColors = this.newCircleColors();
      this.gameLostState = false;
    }

    public onCircleClick(row: number, col: number): void {
      if(this.gameRunning) {
        if (this.isOffsetIdx(row, col)) {
          this.winCount++;
          this.resetTimer();
          this.offsetIdx = this.newOffsetIdx();
          this.circleColors = this.newCircleColors();
        }
        else {
          this.gameLostState = true;
        }
      }
    }
    public toggleHardMode(): void {
      this.hardMode = !this.hardMode;
      this.gameStarted = false;
    }
  }

</script>

<style scoped lang="scss">
  .gameboard {

  }
</style>
