<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <div className="container body-content">
      <router-view></router-view>
      <hr />
      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>