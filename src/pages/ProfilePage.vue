<template>
  <v-container>
    <v-layout row wrap justify-center v-if="isFulfilled">
      <v-flex xs12 md6>
        <profile-card v-if="isFulfilled"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProfileCard from '~/components/ProfileCard'

export default {
  computed: {
    isFulfilled () {
      return this.$store.state.isFulfilled
    }
  },
  components: {
    ProfileCard
  }
}
</script>
