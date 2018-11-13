<template>
  <v-card>
    <v-card-text>
      <v-list>
        <v-list-tile
          v-for="item in items"
          :key="item.key"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ user[item.key] }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.state.user.user
    }
  },
  data () {
    return {
      items: [
        {
          name: 'Full Name',
          key: 'displayName',
          icon: 'mdi-account'
        },
        {
          name: 'E-mail',
          key: 'email',
          icon: 'mdi-email'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
