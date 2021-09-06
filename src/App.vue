<template>
  <div id="app" class="animate__animated animate__fadeIn">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Header,
  },
  methods: {
    ...mapActions(["fetchAccessToken"]),
  },
  created() {
    this.fetchAccessToken();
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
}
</style>
