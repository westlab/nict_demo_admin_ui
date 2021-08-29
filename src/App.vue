<template>
  <div id="app">
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
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  opacity: 0;
  animation-name: fadein;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
