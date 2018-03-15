<template>
  <div id='slot-child'>
    <!-- Slot with no name and no default data -->
    <!--<slot></slot>-->

    <!-- Slot with default data -->
    <slot>
      <p>This will only be displayed if there is no content
        to be distributed.</p>
    </slot>

    <!-- Named Solts -->
    <slot name='header'></slot>
    <slot name='body'></slot>

    <small>This text will always come.</small>
  </div>
</template>

<script>
export default {
  name: 'SlotChild',
};
</script>

<style scoped>
#slot-child {
  background-color: black;
  color: aliceblue;
  width: 950px;
  height: 100%;
  text-align: left;
  padding: 50px;
}
small {
  color: yellow;
}
</style>


