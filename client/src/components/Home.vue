<template>
  <div class="home">
    <div id="errors">
    </div>

    <div id="navigation">
      <button>View Past Events</button>
      <button>View Upcoming Event</button>
      <button>View your profile</button>
    </div>

  </div>
</template>

<script>
export default {
    name: 'Home',
  data() {
    return {
      errors: {
      },
    }
  },
    props: {
        token: ''
    },
    methods: {
        checkToken() {
            if (this.token.length == 0) {
                this.$router.push({name: 'LogIn'})
            }
        }
    },
    beforeMount() {
        this.checkToken()
    }
}
</script>

<style scoped></style>
