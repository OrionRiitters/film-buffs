<template>
<div class="page-header">
  <div class="inline">
    <button class box>Home</button>
    <h1>Film Buffs</h1>
    <button>Sign Out</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
    props: {

    }
}
</script>


<style scoped>
  .inline {
  display: inline-block;
  }
  .page-header { background-color: #33dede;
  margin: 0px; padding: 0px;


  }

</style>
