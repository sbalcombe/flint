<template>
  <div class="container  flex justify-center items-center">
    <div class="mx-auto max-w-sm">
      <div class="px-6 py-4 mt-12">
        <h1 class="mb-4 mt-12 text-2xl leading-tight">We're ready to get your product launched. Today.</h1>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from '@/components/auth/RegisterForm'
export default {
  name: 'register',
  components: {
    RegisterForm
  }
}
</script>
