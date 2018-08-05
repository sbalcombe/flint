<template>
  <div class="home">
    Welcome to your dashboard, {{ user.displayName }}!
  </div>
</template>

<script>

export default {
  name: 'dashboard',
  data () {
    return {
      user: this.$root.$data.user
    }
  }
}
</script>
