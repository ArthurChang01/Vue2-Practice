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
    margin-left: 20px;
    margin-right: 20px;
    color: #2c3e50;
  }
  
  body {
    padding-top: 50px;
    padding-bottom: 20px;
  }
  /* Set padding to keep content from hitting the edges */
  
  .body-content {
    padding-left: 15px;
    padding-right: 15px;
  }
  /* Override the default bootstrap behavior where horizontal description lists 
   will truncate terms that are too long to fit in the left column 
*/
  
  .dl-horizontal dt {
    white-space: normal;
  }
  /* Set width on the form input elements since they're 100% wide by default */
  
  input,
  select,
  textarea {
    max-width: 280px;
  }
  
  .form-control.error {
    border-color: #d43f3a;
  }
</style>