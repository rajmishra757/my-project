<template>
  <div id='userName'>
      <table>
          <tr>
              <td>
                  <label>First name:</label>
                  <input type='text' name='firstName' v-model='firstName'/>
              </td>
              <td>
                  <label>Last name:</label>
                  <input type='text' name='lastName' v-model='lastName'/>
              </td>
          </tr>
          <tr>
              <td colspan='2'>
                  <p>Full name: {{ fullName }}</p>
              </td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
  name: 'UserName',
  data: function () {
      return {
          firstName: '',
          lastName: '',
      };
  },
  computed: {
      fullName: function () {
          return `${this.firstName} ${this.lastName}`;
      },
  },
};
</script>

<style scoped>
#userName {
    text-align: left;
}
</style>


