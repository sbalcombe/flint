<template>
  <form @submit.prevent="createUser">
    <div v-if="fbErrors.length" class="bg-red-lightest border-l-4 border-red text-red-dark p-4 mb-4" role="alert">
      <p class="font-bold mb-2">Be warned, these changes need to be made:</p>
      <ul>
        <li v-for="error in fbErrors" :key="error.index">{{ error }}</li>
      </ul>
    </div>
    <input v-model="name" v-validate="'required|alpha_spaces'" :class="{'input': true, 'border-red rounded-br-none rounded-bl-none': errors.has('name') }" class="appearance-none border rounded w-full py-4 px-3 text-grey-darker" type="text" name="name" placeholder="Full name">
    <div v-if="errors.has('name')" class="bg-red text-white text-xs w-full p-2 rounded-br rounded-bl">
        {{ errors.first('name') }}
    </div>

    <input v-model="email" v-validate="'required|email'" :class="{'input': true, 'border-red rounded-br-none rounded-bl-none': errors.has('email') }" class="appearance-none border rounded w-full py-4 px-3 text-grey-darker mt-4" type="email" name="email" placeholder="Email address">
    <div v-if="errors.has('email')" class="bg-red text-white text-xs w-full p-2 rounded-br rounded-bl">
        {{ errors.first('email') }}
    </div>

    <input v-model="password" v-validate="'required|min:6'" :class="{'input': true, 'border-red rounded-br-none rounded-bl-none': errors.has('password') }" class="appearance-none border rounded w-full py-4 px-3 text-grey-darker mt-4" type="password" name="password" placeholder="Create a password">
    <div v-if="errors.has('password')" class="bg-red text-white text-xs w-full p-2 rounded-br rounded-bl">
        {{ errors.first('password') }}
    </div>

    <button class="bg-blue-darkest hover:bg-blue-darker text-white font-bold py-4 px-4 mb-4 mt-4 rounded w-full">Create Your Account</button>
    <small class="text-grey">By clicking 'Create Your Account' I agree to Flint's <router-link to="/" class="no-underline">Terms</router-link>.</small>
    <p class="mt-4">Already have an account? <router-link to="/login" class="no-underline">Login here</router-link></p>
  </form>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Register',
  data () {
    return {
      fbErrors: [],
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    createUser: function () {
      this.$validator.validateAll().then(res => {
        if (res) {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then((user) => {
              // Handle Errors here.
              firebase.auth().currentUser.updateProfile({
                displayName: this.name
              })
            })
            .then((user) => {
              this.$router.replace('dashboard')
            })
            .catch(err => {
              this.fbErrors = []
              this.fbErrors.push(err.message)
            })
        }
      })
    }
  }
}
</script>
