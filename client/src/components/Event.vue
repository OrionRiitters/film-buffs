<template>
<div class="event">

  <h1>{{ currentEvent.movieTitle }}</h1>
  <h2>Where: {{ currentEvent.theater }}</h2>
  <h2>When: {{ Date(currentEvent.date) }}</h2>
  <h2>Coffee: {{ currentEvent.coffeeShop }} </h2>
    <div id="errors">
    </div>

  </div>
</template>

<script>
export default {
    name: 'Event',
  data() {
    return {
      errors: {
      },
    }
},
props: {
currentEvent: {
type: Object
}
}

}
</script>

<style scoped></style>
