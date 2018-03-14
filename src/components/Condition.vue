<template>
  <div id='condition'>
    <p v-if='condition'>Conditional Paragraph.</p>
    <p v-else-if='num >= 10'>Else If Paragraph</p>
    <p v-else>Conditional is false.</p>

    <p v-show='condition'>Paragraph Transition.</p>
  </div>
</template>

<script>
export default {
  name: 'Condition',
  data: function () {
    return {
        condition: true,
        num: 1,
    };
  },
};
</script>


