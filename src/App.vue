<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/circle-game">Circle Game</router-link>
  </div>
  <router-view class="page-content" />
  <div class="footer">
    <h5>Created by Jon Kerr, using Vue.js</h5>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.page-content {
  min-height: 100%;
  /* equal to footer height */
  margin-bottom: -42px; 
}
.page-content:after {
  content: "";
  display: block;
}
.site-footer, .page-content:after {
  /* .push must be the same height as footer */
  height: 42px; 
}

</style>
