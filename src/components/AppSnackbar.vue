<template>
  <v-snackbar
    v-model="show"
    bottom
    :timeout="timeout"
  >
    {{ message }}
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    show: {
      get () {
        return this.$store.state.snackbar.snackbar.show
      },
      set (value) {
        this.$store.commit('snackbar/changeState', value)
      }
    },
    message () {
      return this.$store.state.snackbar.snackbar.message
    }
  },
  data () {
    return {
      timeout: 2000
    }
  }
}
</script>
