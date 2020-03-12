<template>
  <div id="app">
    <div class="cen">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  import MainPage from "./views/MainPage";
  export default {
    name:'app',
    components: {
      'main-page': MainPage
    }
  }
</script>
<style>
/* @import url('https://fonts.googleapis.com/css?family=Dancing+Script:700&display=swap');
 */
@import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');
 body{
  background-image: url("./assets/img/giftly.png");
}

h1 {
  font-family: 'Lobster', cursive;
}


/* .cen {
  display: flex;
  justify-content: center;
} */


</style>
