<template lang="html">

  <section class="countdown-timer">
    <h1>{{timerStr}} seconds left</h1>
    <!--TODO - have a reset button to reset timer and be listenable from parent to trigger reset on their end -->
  </section>

</template>

<script lang="ts">

  import { Options, Vue } from "vue-class-component";

  @Options({
    name: "CountdownTimer",
    props: { initialTime: Number }
  })
  export default class CountdownTimer extends Vue {
    //TODO - need to have an event emit when the timer reaches 0
    //TODO - need reset button to be optionally displayed
    //TODO - need a way for parent send a signal into this to restart the timer count

    public timerCount = this.initialTime;

    public get timerStr(): string {
      if (this.timerCount > 0) {
        setTimeout(() => {
          this.timerCount--;
        }, 1000);
      }
      return `${this.timerCount}`;
    }
  }

</script>

<style scoped lang="scss">
  .countdown-timer {

  }
</style>
