<template>
  <v-container row wrap>
    <v-layout justify-center>
      <v-flex xs12 md4>
        <signin-card/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SigninCard from '~/components/SigninCard'

export default {
  components: {
    SigninCard
  }
}
</script>
