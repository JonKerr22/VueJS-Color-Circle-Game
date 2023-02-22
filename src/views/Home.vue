<template>
  <div class="home">
    <MainContent />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MainContent from "@/components/MainContent.vue"; // @ is an alias to /src

@Options({
  components: {
    MainContent,
  },
})
export default class Home extends Vue {}
</script>
