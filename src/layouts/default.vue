<template>
  <v-app>
    <app-toolbar/>

    <v-content>
      <slot></slot>

      <app-snackbar/>
    </v-content>
  </v-app>
</template>

<script>
import AppToolbar from '~/components/AppToolbar'
import AppSnackbar from '~/components/AppSnackbar'

export default {
  components: {
    AppToolbar,
    AppSnackbar
  }
}
</script>
