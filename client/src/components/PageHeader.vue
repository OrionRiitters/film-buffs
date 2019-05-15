<template>
  <div class="page-header">
    <div class="inline">
      <button v-on:click="goHome">Home</button>
      <h1>Film Buffs</h1>
      <button v-on:click="signOut">Sign Out</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PageHeader',
    props: {
        token: {
            type: String
        }
    },
    methods: {
        goHome() {
            this.$router.push({name: 'Home'})
        },
        signOut() {
            this.$emit('signOut')
        }
    }
}
</script>

<style scoped>
.inline {
  display: inline-block;
}
.page-header {
  background-color: #33dede;
  margin: 0px;
  padding: 0px;
}
</style>
