<template>
  <div id='time'>
    <h2 v-bind:title='date'>{{ message }}</h2>
    <h2 :title='date'>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Time',
  data: function () {
    return {
        date: new Date(),
    };
  },
  computed: {
      message: function () {
          return `Page load time: ${this.date}`
      }
  }
};
</script>

<style scoped>
h2 {
    text-align: center;
    background-color: black;
    color: white;
}
</style>


