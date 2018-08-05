<template>
  <div id="app">
    <NavBar v-bind:user="user"></NavBar>
    <main class="container mx-auto">
      <router-view/>
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'App',
  components: {
    NavBar
  },
  data () {
    return {
      user: this.$root.$data.user
    }
  }
}
</script>
