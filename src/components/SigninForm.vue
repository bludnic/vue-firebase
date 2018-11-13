<template>
  <v-container>
    <v-layout row wrap>

      <v-flex xs12>
        <v-text-field
          v-model="email"
          :label="$t('E-mail')"
          prepend-icon="mdi-email"
          type="email"
          name="email"
          v-validate="'required|email|max:50'"
          :error-messages="errors.collect('email')"
        />
      </v-flex>

      <v-flex xs12>
        <v-text-field
          v-model="password"
          :label="$t('Password')"
          prepend-icon="mdi-lock"
          type="password"
          name="password"
          v-validate="'required|max:20'"
          :error-messages="errors.collect('password')"
        />
      </v-flex>

      <v-flex xs12 class="mt-4">
        <v-btn
          :dark="!isButtonDisabled"
          :disabled="isButtonDisabled"
          color="teal"
          @click="submit"
        >
          {{ $t('Sign In') }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      email: '',
      password: '',

      isButtonDisabled: false
    }
  },
  methods: {
    async submit () {
      const validation = await this.$validator.validateAll()

      if (validation) {
        this.isButtonDisabled = true

        const response = await this.signInWithEmail()

        if (response) {
          this.$emit('onSignin', response)
        }

        this.isButtonDisabled = false
      }
    },
    signInWithEmail () {
      return firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          return true
        })
        .catch((err) => {
          this.$store.commit('snackbar/show', {
            message: err.message
          })

          console.error('err', err)
        })
    }
  }
}
</script>
