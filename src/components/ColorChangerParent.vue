<template>
  <div id='ColorChangerParent'>
    <div class='container' :style='styleObj'>
      <color-changer
        :colors='colors'
        @changeColor='color => {changeStyleValue(color)}'/>
    </div>
  </div>
</template>

<script>
import ColorChanger from './ColorChanger';

export default {
  name: 'ColorChangerParent',
  data: function () {
    return {
      colors: [
        {value: 'yellow', text: 'Yellow'},
        {value: 'green', text: 'Green'},
        {value: 'cyan', text: 'Cyan'},
      ],
      styleObj: {
        backgroundColor: 'transparent',
      },
    };
  },
  components: {
    'color-changer': ColorChanger,
  },
  methods: {
    changeStyleValue: function (color) {
      this.$set(this.styleObj, 'backgroundColor', color);
    },
  },
};
</script>

<style scoped>
#ColorChangerParent {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  border: 1px solid black;
  padding: 10%;
}
</style>
