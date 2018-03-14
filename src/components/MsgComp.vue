<template>
  <div id='msgComp'>
      <input type='text' name='msg' id='msg' v-model='message'/>
      <p>Reversed Message: {{ reversedMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'MsgComp',
  data: function () {
      return {
          message: '',
      };
  },
  computed: {
      reversedMessage: function () {
          return this.message.split('').reverse().join('');
      },
  },
};
</script>

<style scoped>
#msgComp {
    text-align: left;
}
</style>


