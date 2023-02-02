<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/circle-game">Circle Game</router-link>
  </div>
  <router-view />
  <div id="footer">
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

#footer {
  position: absolute;
  bottom: 0;
  bottom: 10px;
  width: 99%;
}
</style>
