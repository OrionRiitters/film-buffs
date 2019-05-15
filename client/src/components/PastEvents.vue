<template>
  <div class="PastEvents">
    <div class="event-list" v-for="event in events">
      <div class="event">
        <h5>{{ event.movieTitle }}</h5>
        <h5>{{ event.date }}</h5>
        <button v-on:click="goToEvent(event)">Event Page</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PastEvents',
  data() {
    return {
      errors: {},
      events: [],
    }
  },
  props: {
    token: {
      type: String,
    },
  },
  methods: {
    getEvents() {
      this.$api_service.getEvents().then(events => {
        this.events = events
        console.log(events)
      })
    },
    goToEvent(event) {
      this.$emit('upcomingEvent', event)
    },
  },
  beforeMount() {
    this.getEvents()
  },
}
</script>

<style scoped>
.event {
  border-style: solid;
  border-width: 1px;
  padding: 2px;
  margin: 2px;
}
</style>
