<template>
  <div id='slot-parent'>
    <h1>Usage of Slot</h1>
    <slot-child>
      <h2>Slot with no name and no default data</h2>
      <p>These Type of slots take the data provided from the
        parent component. Incase no slot data is received
        from the parent, the slot region remains blank.</p>
    </slot-child>

    <slot-child/>

    <slot-child>
      <h2 slot='header'>Named Slot</h2>
      <p slot='body'>
        These Type of slots can have unique names.
        The parent component provides data to the
        slot with a specific name, so that it will
        be displayed under that slot only.

        If no data is provided to a named slot,
        then either it holds the default data or
        remains blank.
      </p>
    </slot-child>
  </div>
</template>

<script>
import SlotChild from './SlotChild';

export default {
  name: 'SlotParent',
  components: {
    'slot-child': SlotChild,
  }
};
</script>


