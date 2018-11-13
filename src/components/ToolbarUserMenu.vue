<template>
  <div>
    <v-menu offset-y>
      <v-btn
        slot="activator"
        flat
      >
        {{ $t('Howdy,') }} {{ user.displayName }}
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>

      <v-list>
        <v-list-tile
          v-for="page in pages"
          :key="page.name"
          :to="page.link"
        >
          <v-list-tile-title>{{ $t(page.name) }}</v-list-tile-title>
        </v-list-tile>

        <v-divider/>

        <v-list-tile @click="signOut">
          <v-list-tile-title>{{ $t('Sign out') }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  computed: {
    user () {
      return this.$store.state.user.user
    }
  },
  data () {
    return {
      pages: [
        {
          name: 'Your Profile',
          link: '/profile'
        },
        {
          name: 'Settings',
          link: '/settings/profile'
        }
      ]
    }
  },
  methods: {
    signOut () {
      firebase.auth().signOut()
        .then(() => {
          this.$router.replace('/signin')

          this.$store.commit('snackbar/show', {
            message: this.$t('Signed out successfully')
          })
        })
        .catch(err => {
          this.$store.commit('snackbar/show', {
            message: err.message
          })
        })
    }
  }
}
</script>
