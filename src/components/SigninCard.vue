<template>
  <v-card>
    <v-toolbar flat>
      <h1 class="headline">{{ $t('Sign in') }}</h1>
    </v-toolbar>

    <signin-form
      @onSignin="onSignin"
    />
  </v-card>
</template>

<script>
import SigninForm from './SigninForm'

export default {
  methods: {
    onSignin (data) {
      let redirectTo = this.$route.query.redirect || '/profile'

      this.$router.replace(redirectTo)
    }
  },
  components: {
    SigninForm
  }
}
</script>
