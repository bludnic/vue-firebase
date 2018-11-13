<template>
  <v-toolbar app dense clipped-left>
    <v-toolbar-title class="headline text-uppercase logo" @click="$router.push('/')">
      <span>{{ $t('siteTitle') }}</span>
      <span class="font-weight-light">{{ $t('siteSubtitle') }}</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <toolbar-menu v-if="isFulfilled" />
  </v-toolbar>
</template>

<script>
import ToolbarMenu from './ToolbarMenu'
export default {
  computed: {
    isFulfilled () {
      return this.$store.state.isFulfilled
    }
  },
  components: {
    ToolbarMenu
  }
}
</script>

<style lang="stylus">
  .logo
    cursor: pointer
</style>
