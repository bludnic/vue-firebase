<template>
  <div>
    <v-btn dark color="teal" to="/signin">
      {{ $t('Sign in') }}
    </v-btn>
    <v-btn flat to="/register">
      {{ $t('Register') }}
    </v-btn>
  </div>
</template>

<script>
export default {
}
</script>
