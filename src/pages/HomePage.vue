<template>
  <div>
    <v-container grid-list-md>
      <h1 class="display-1 text-xs-center mt-4 mb-4">Who will win this battle?</h1>

      <v-layout row wrap justify-center>
        <v-flex xs12 md2 v-for="framework in frameworks" :key="framework.name">
          <v-card>
            <v-img
              :src="framework.img"
              aspect-ratio="1"
            />
            <v-card-title primary-title>
              <div>
                <h2 class="title">{{ framework.name }}</h2>
                <div class="body stars mt-2">
                  {{ isFinite(framework.stars) ? framework.stars : '???' }} {{ $t('stars') }}
                </div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import firestore from '~/plugins/firestore'
export default {
  data () {
    return {
      frameworks: []
    }
  },
  firestore () {
    return {
      frameworks: firestore.collection('frameworks')
    }
  }
}
</script>
