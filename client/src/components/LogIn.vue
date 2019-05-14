<template>
  <div class="login">
    <div id="errors">
      <div id="unique-constraint" v-if="errors.uniqueConstraintError">
        <h2>Username already taken!</h2>
      </div>
      <div id="null-fields" v-if="errors.nullFieldsError">
        <h2>
          Please be sure to fill in all fields before logging in or signing up!
        </h2>
      </div>
      <div id="invalid-login" v-if="errors.invalidLogInError">
        <h2>Incorrect username or password</h2>
      </div>
    </div>

    <!-- DIV containing log in form -->
    <div id="login">
      <label for="logInUsername">Log In</label>
      <input v-model="logInUsername" id="logInUsername" type="text" />
      <label for="logInPassword">Password</label>
      <input v-model="logInPassword" id="logInPassword" type="password" />
      <button v-on:click="logIn">Log In</button>
    </div>

    <div id="sign-up">
      <!-- DIV containing sign up form -->
      <label for="signUpUsername">Log In</label>
      <input v-model="signUpUsername" id="signUpUsername" type="text" />
      <label for="signUpPassword">Password</label>
      <input v-model="signUpPassword" id="signUpPassword" type="password" />
      <label for="email">Email Address</label>
      <input v-model="email" id="email" type="text" />
      <button v-on:click="signUp">Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data() {
    return {
      logInUsername: '',
      logInPassword: '',
      signUpUsername: '',
      signUpPassword: '',
      email: '',
      token: '',
      errors: {
        uniqueConstraintError: false,
        nullFieldsError: false,
        invalidLogInError: false,
      },
    }
  },
  props: {
    msg: String,
  },
  methods: {
    clearErrors() {
      for (let error in this.errors) {
        this.errors[error] = false
      }
    },
    showError(error) {
      this.clearErrors()
      this.errors[error] = true
    },
    logIn(event) {
      if (this.logInUsername.length > 0 && this.logInPassword.length > 0) {
        this.clearErrors()
        this.$api_service
          .sendAuth(this.logInUsername, this.logInPassword)
          .then(res => {
            if (res.hash) {
              this.token = res.hash
            } else {
              this.showError('invalidLogInError')
            }
          })
      } else {
        this.showError('nullFieldsError')
      }
    },
    signUp(event) {
      if (
        this.signUpUsername.length > 0 &&
        this.signUpPassword.length > 0 &&
        this.email.length > 0
      ) {
        this.$api_service
          .createUser(this.signUpUsername, this.signUpPassword, this.email)
          .then(res => {
            if (res.error == 'UniqueConstraintError') {
              this.showError('uniqueConstraintError')
            } else if (res.statusCode == 200) {
              this.token = res.hash
              this.clearErrors()
            }
          })
      } else {
        this.showError('nullFieldsError')
      }
    },
  },
}
</script>

<style scoped></style>
