<template>
  <div class="event">
    <h1>{{ currentEvent.movieTitle }}</h1>
    <h2>Where: {{ currentEvent.theater }}</h2>
    <h2>When: {{ currentEvent.date }}</h2>
    <h2>Coffee: {{ currentEvent.coffeeShop }}</h2>
    <div id="errors"></div>
    <Forum v-bind:token="token" v-bind:currentEventID="currentEvent.id" />
  </div>
</template>

<script>
import Forum from './Forum.vue'
export default {
  name: 'Event',
  data() {
    return {
      errors: {},
    }
  },
  props: {
    currentEvent: {
      type: Object,
    },
      token: {
          type: String
      }
  },
  components: {
    Forum,
  },
}
</script>

<style scoped></style>
