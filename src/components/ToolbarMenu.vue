<template>
  <div>
    <toolbar-user-menu v-if="user"/>
    <toolbar-guest-menu v-else/>
  </div>
</template>

<script>
import ToolbarUserMenu from './ToolbarUserMenu'
import ToolbarGuestMenu from './ToolbarGuestMenu'

export default {
  computed: {
    user () {
      return this.$store.state.user.user
    }
  },
  components: {
    ToolbarUserMenu,
    ToolbarGuestMenu
  }
}
</script>
