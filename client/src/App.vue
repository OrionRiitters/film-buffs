<template>
  <div id="app">
    <page-header v-on:signOut="signOut" />
     <RouterView v-on:getToken="getToken"  v-bind:token="token" />
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
            token: ''
        }
    },
    methods: {
        getToken(token) {
            this.token = token
        },
        signOut() {
            this.token = ''
            this.$router.push({name: 'LogIn'})
        }
    }
}
</script>

<style>
# app {
  padding: 0px;
}
</style>
