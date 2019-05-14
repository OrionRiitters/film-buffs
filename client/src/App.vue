<template>
  <div id="app">
  <page-header />
<log-in />
</div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import LogIn from './components/LogIn.vue'

export default {
  name: 'app',
  components: {
      PageHeader,
      LogIn
  }
}
</script>

<style>
# app {
    padding: 0px;
}

</style>
