<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field
          v-model="name"
          :label="$t('Full Name')"
          :hint="$t('Max 20 characters')"
          counter
          prepend-icon="mdi-account"
          type="text"
          name="name"
          v-validate="'required|max:20'"
          :error-messages="errors.collect('name')"
        />
        <v-text-field
          v-model="email"
          :label="$t('E-mail')"
          prepend-icon="mdi-email"
          type="email"
          name="email"
          v-validate="'required|email|max:50'"
          :error-messages="errors.collect('email')"
        />
        <v-text-field
          v-model="password"
          :label="$t('Password')"
          :hint="$t('At least 8 characters')"
          counter
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
          {{ $t('Register') }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase'
import 'firebase/auth'

export default {
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      name: '',
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

        const response = await this.registerWithEmailAndPassword()

        if (response) {
          this.$emit('onRegister', response)
        }

        this.isButtonDisabled = false
      }
    },
    registerWithEmailAndPassword () {
      return firebase.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          const user = firebase.auth().currentUser

          return user.updateProfile({
            displayName: this.name
          }).then(() => {
            return true
          })
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
