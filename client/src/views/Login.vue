<template>
  <div class="container mx-auto">
    <div class="max-w-sm mx-auto">
      <div class="px-6 py-4 mt-12">
        <h1 class="mb-4 mt-12 text-2xl leading-tight">Welcome, you can log in securely below.</h1>
        <LoginForm></LoginForm>
        <p class="mt-4">Don't have an account yet? <router-link to="/start" class="no-underline">Create one here.</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm'
export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>
