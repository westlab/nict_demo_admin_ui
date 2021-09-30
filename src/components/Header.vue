<template>
  <nav class="navbar navbar-expand-lg bg-info rounded-bottom">
    <div class="container-fluid">
      <h4 class="nav-brand mr-3">
        <font-awesome-icon icon="users-cog" /> Smart Community OS Admin
      </h4>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link lead" to="/">Home</router-link>
          <router-link class="nav-link lead" to="/relationship"
            >Relationship</router-link
          >
          <router-link class="nav-link lead" to="/flow">Flow</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: maroon;
}
</style>
