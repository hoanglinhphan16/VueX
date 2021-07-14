<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" @click="backHome">
        <img src="../../assets/logo.png" alt="" class="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link tag="li" class="nav-item" :to="{ name: 'home' }"
            ><a class="nav-link">Home</a></router-link
          >
          <router-link tag="li" class="nav-item" to="/register"
            ><a class="nav-link">Register</a></router-link
          >
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    backHome() {
      this.$router.push("/");
    },
    backLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.logo {
  width: 40px;
}
</style>
