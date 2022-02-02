<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <MainContent msg="Welcome to Your Vue.js + TypeScript App" />
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
