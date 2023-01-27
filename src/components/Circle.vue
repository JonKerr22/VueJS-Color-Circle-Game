<template lang="html">

     <svg height="100" width="100">
      <circle cx="50" cy="50" r="40" :fill="fillColor" />
    </svg> 
  

</template>

<script lang="ts">

  import { Options, Vue } from "vue-class-component";

  @Options({
    name: "Circle",
    props: { fillColor: String }
  })
  export default class Circle extends Vue {

    
  }

</script>

<style scoped lang="scss">
  .circle {
  }
</style>
