<template>
    <div class="container mx-auto">
      <div class="max-w-sm mx-auto">
        <div class="px-6 py-4 mt-12">
          <h1 class="mb-4 mt-12 text-2xl leading-tight">Reset Password.</h1>
          <ResetForm></ResetForm>
          <p class="mt-4"><router-link to="/login" class="no-underline">Return to login.</router-link></p>
        </div>
      </div>
    </div>
</template>

<script>
import ResetForm from '@/components/auth/ResetForm'
export default {
  name: 'register',
  components: {
    ResetForm
  },
  data () {
    return {
      user: this.$root.$data.user
    }
  }
}
</script>
