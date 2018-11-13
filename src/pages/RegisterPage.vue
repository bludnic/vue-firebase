<template>
  <v-container row wrap>
    <v-layout justify-center>
      <v-flex xs12 md4>
        <register-card/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RegisterCard from '~/components/RegisterCard'

export default {
  components: {
    RegisterCard
  }
}
</script>
