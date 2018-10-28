<template>
  <div id="app">
    <img id="logo" alt="Dieta logo" src="./assets/salad.svg">
    <div id="nav">
      <router-link to="/">Início</router-link> |
      <router-link to="/sobre">Sobre</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
body {
  margin: 0px;
}

#app {
  font-family: 'OpenSans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #454545;
}
#nav {
  padding: 20px;
  border: 2px solid #42b983;
  border-left: 0;
  border-right: 0;
}

#nav a {
  font-weight: bold;
  color: #16181a;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

img#logo {
  width: 20%;
  height: 20%;
  display: inline-block;
  padding: 10px;
}

p.textoCentro {
  text-align: center;
  padding-left: 20%;
  padding-right: 20%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .35s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>
