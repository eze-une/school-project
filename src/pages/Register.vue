<template>
  <div class="card">
    <div class="card-title">
      <h2>Register</h2>
    </div>
    <div class="card-body">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="username"
        >
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          v-model="email"
        >
      </div>
      <div class="form-group">
        <label for="password">Password</label><input
          type="password"
          v-model="password"
        >
      </div>
      <div class="form-group">
        <label for="cpassword">Confirm Password</label><input
          type="password"
          v-model="cpassword"
        >
      </div>
      <div class="form-group">
        <button @click.prevent="register">
          Register
        </button>
      </div>
      <p>
        Already have an account? <router-link :to="{name: 'login'}">
          Login
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password:"",
      cpassword: ""
    }
  },
  methods: {
    register(){
      console.log("Registered");
    }
  },
}
</script>