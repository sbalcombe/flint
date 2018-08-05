<template>
  <nav v-if="user" class="flex items-center justify-between flex-wrap shadow p-4 relative">
    <div class="flex items-center flex-no-shrink text-blue-darkest mr-6">
      <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <span class="font-semibold text-xl tracking-tight">Flint</span>
    </div>
    <div>
      <button v-if="user" v-on:click="logout" class="inline-block text-sm px-4 py-2 leading-none border rounded text-teal border-teal hover:border-transparent hover:text-white hover:bg-teal mt-4 lg:mt-0">Logout</button>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'navbar',
  props: ['user'],
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
