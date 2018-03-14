<template>
  <div id='show-message'>
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: 'ShowMessage',
  data: function () {
    return {
      message: 'This is a message.'
    };
  }
}
</script>

