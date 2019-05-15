<template>
  <div id="app">
    <page-header v-bind:token="token" v-on:signOut="signOut" />
     <RouterView v-on:getToken="getToken" v-on:upcomingEvent="routeToEvent" v-bind:currentEvent="currentEvent" v-bind:token="token" />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'

export default {
  name: 'app',
  components: {
    PageHeader
  },
    data() {
        return {
            token: '',
            currentEvent: {}
        }
    },
    methods: {
        getToken(token) {
            this.token = token
        },
        signOut() {
            this.token = ''
            this.$router.push({name: 'LogIn'})
        },
        routeToEvent(event) {
            this.currentEvent = event
            this.$router.push({name: 'Event'})
        }
    }
}
</script>

<style>
# app {
  padding: 0px;
}
</style>
