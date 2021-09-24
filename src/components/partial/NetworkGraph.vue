<template>
  <div class="card text-center mb-3">
    <div class="py-2 mx-auto">
      <h4>{{ graphName }}</h4>
    </div>
    <div class="card-body m-2">
      <img @click="show" :src="require('@/assets/' + imageName)" />
    </div>
    <modal id="overlay" name="trafficGraph" :height="600" :width="1200">
      <div aria-expanded="true">
        <div class="modal-header d-flex">
          <h2>{{ graphName }}</h2>
          <button class="btn btn-secondary" v-on:click="hide">close</button>
        </div>
        <div class="modal-body">
          <img style="width: 80%" :src="require('@/assets/' + imageName)" />
        </div>
      </div>
    </modal>
    <p>Click image to enlarge.</p>
  </div>
</template>

<script>
export default {
  name: "NetworkGraph",
  props: {
    graphName: String,
    imageName: String,
  },
  methods: {
    show: function () {
      this.$modal.show("trafficGraph");
    },
    hide: function () {
      this.$modal.hide("trafficGraph");
    },
  },
};
</script>


<style scoped>
img {
  object-fit: cover;
  width: 100%;
}
</style>
