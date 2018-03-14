<template>
  <div id='for-loop'>
    <h2>Looping</h2>
    <hr/>
    <ol>
      <li v-for='item in items' v-bind:key='item.id'>
        {{ item.name }}
      </li>
    </ol>
    <br/>
    <h2>Looping with condition</h2>
    <hr/>
    <ol>
      <li v-for='item in items' v-bind:key='item.id' v-if='item.type === "drink"'>
        {{ item.name }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'ForLoop',
  data: function () {
    return {
        items: [
          {id: 1, name: 'coffee', type: 'drink'},
          {id: 2, name: 'noodles', type: 'food'},
          {id: 3, name: 'tea', type: 'drink'},
        ],
    };
  },
};
</script>

<style scoped>
h2 {
    text-align: left;
}
ol {
  width: 10%;
}
</style>


