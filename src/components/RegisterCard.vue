<template>
  <v-card>
    <v-toolbar flat>
      <h1 class="headline">{{ $t('Sign up') }}</h1>
    </v-toolbar>

    <register-form
      @onRegister="onRegister"
    />
  </v-card>
</template>

<script>
import RegisterForm from './RegisterForm'

export default {
  methods: {
    onRegister (data) {
      console.log('onRegister')
      this.$router.replace('/profile')
    }
  },
  components: {
    RegisterForm
  }
}
</script>
