<template>
  <div class="card">
    <div class="card-title">
      <h2>Login</h2>
    </div>
    <div class="card-body">
      <form method="post">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            v-model="email"
            placeholder="email@example.com"
          >
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            v-model="password"
          >
        </div>
        <div class="form-group">
          <button @click.prevent="login">
            Login
          </button>
        </div>
      </form>
      <p>
        Don't have an account? <router-link :to="{name: 'register'}">
          Register
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login(){
      console.log(this.email + "\n" + this.password)
    }
  }
}
</script>

<style lang="scss" >

</style>