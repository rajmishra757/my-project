<template>
  <div id="app">
    <div class='header'>
      <ul>
        <li><router-link to='/show-message'>Show Message</router-link></li>
        <li><router-link to='/username'>Usernmae</router-link></li>
        <li><router-link to='/reverse-msg'>Reverse Message</router-link></li>
        <li><router-link to='/change-color'>Change Color</router-link></li>
        <li><router-link to='/condition'>Condition</router-link></li>
        <li><router-link to='/looping'>Looping</router-link></li>
        <li><router-link to='/event'>Event</router-link></li>
        <li><router-link to='/time'>Time</router-link></li>
        <li><router-link to='/slot'>Slot</router-link></li>
      </ul>
    </div>
    <div class='body'>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
.header {
  width: 20%;
  height: 100%;
  float: left;
}
.body {
  width: 80%;
  height: 100%;
  float: right;
}
li {
  text-align: left;
  margin-bottom: 10px;
}
</style>
