<template>
  <div class="home">
    <div id="errors"></div>

    <div id="navigation">
      <button v-on:click="pastEvents">View Past Events</button>
      <button v-on:click="upcomingEvent">View Upcoming Event</button>
      <button>View your profile</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      errors: {},
    }
  },
  props: {
    token: {
      type: String,
    },
  },
  methods: {
    /* If user token is not present, route to log in page.
     */
    checkToken() {
      if (this.token.length == 0) {
        this.$router.push({ name: 'LogIn' })
      }
    },
    upcomingEvent() {
      this.$api_service
        .getUpcoming()
        .then(event => {
          console.log(event)
          this.$emit('upcomingEvent', event)
        })
        .catch(err => {
          console.log(err)
        })
    },
    pastEvents() {
      this.$router.push({ name: 'PastEvents' })
    },
  },
  beforeMount() {
    this.checkToken()
  },
}
</script>

<style scoped></style>
