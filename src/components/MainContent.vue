<template>
  <div class="hello">
    <h1>Welcome!</h1>
    <h3>{{ line1 }}</h3>
    <h2>{{ line2 }}</h2>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    name: "MainContent"
})
export default class MainContent extends Vue {
  line1 = "This is a small gaming site that runs fully in browser and does not need to connect to any database.";
  line2 = "Switch between games and this screen using the navigation at the top.";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
