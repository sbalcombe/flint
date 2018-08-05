<template>
  <form @submit.prevent="auth">
    <div v-if="fbErrors.length" class="bg-red-lightest border-l-4 border-red text-red-dark p-4 mb-4" role="alert">
      <p class="font-bold mb-2">Be warned, these changes need to be made:</p>
      <ul>
        <li v-for="error in fbErrors" :key="error.index">{{ error }}</li>
      </ul>
    </div>
    <input v-model="email" v-validate="'required|email'" :class="{'input': true, 'border-red rounded-br-none rounded-bl-none': errors.has('email') }" class="appearance-none border rounded w-full py-4 px-3 text-grey-darker mt-4" type="email" name="email" placeholder="Email address">
    <div v-if="errors.has('email')" class="bg-red text-white text-xs w-full p-2 rounded-br rounded-bl">
        {{ errors.first('email') }}
    </div>
    <input v-model="password" v-validate="'required|min:6'" :class="{'input': true, 'border-red rounded-br-none rounded-bl-none': errors.has('password') }" class="appearance-none border rounded w-full py-4 px-3 text-grey-darker mt-4" type="password" name="password" placeholder="Create a password">
    <div v-if="errors.has('password')" class="bg-red text-white text-xs w-full p-2 rounded-br rounded-bl">
        {{ errors.first('password') }}
    </div>
    <div class="flex mt-4">
      <button @click="auth" class="bg-blue-darkest hover:bg-blue-darker text-white font-bold py-4 px-4 rounded w-1/2 mr-6">Log In</button>
      <p class="mt-4 mb-4"><router-link to="/reset" class="no-underline text-blue-darker">Forgot your password?</router-link></p>
    </div>
  </form>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'LoginForm',
  data () {
    return {
      fbErrors: [],
      email: '',
      password: ''
    }
  },
  methods: {
    auth: function () {
      this.$validator.validateAll().then(res => {
        if (res) {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
            (user) => {
              this.$router.replace('dashboard')
            },
            (err) => {
              this.fbErrors = []
              this.fbErrors.push(err.message)
            }
          )
        }
      })
    }
  }
}
</script>
