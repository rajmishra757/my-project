<template>
  <div>
    <select v-model='containerColor'>
      <option value='' selected disabled>Select a color</option>
      <option v-for='(color, key) in colors'
        :value='color.value'
        :key='key'>{{ color.text }}</option>
    </select>
    <button @click='$emit("changeColor", containerColor)'>Change Color</button>
  </div>
</template>

<script>
export default {
  name: 'ColorChanger',
  data: function () {
    return {
        containerColor: ''
    };
  },
  props: {
      colors: {
          type: Array,
          default: function () {
              return [
                {value: 'red', text: 'Red'},
                {value: 'green', text: 'Green'},
                {value: 'blue', text: 'Blue'},
            ];
          },
      },
  },
};
</script>

<style scoped>
div {
  border: 1px solid black;
  padding: 10%;
  background-color: white;
}
</style>


