<template>
  <div id='event-comp'>
    <button v-on:click='doSomething'>Click Me</button>
    <button @click='doNextThing'>Click Next</button>
  </div>
</template>

<script>
export default {
  name: 'EventComp',
  methods: {
    doSomething() {
      alert('button clicked');
    },
    doNextThing() {
      alert('This is the next thing');
    }
  },
};
</script>

<style scoped>
button {
  width: 100px;
  height: 100px;
  margin: 30px;
}
</style>


