<template>
  <div class="card text-center mb-3">
    <div class="py-2 mx-auto">
      <h4>{{ graphName }}</h4>
    </div>
    <div class="card-body m-2">
      <img v-on:click="show" src="@/assets/mininet_sample.jpeg" />
    </div>
    <modal id="overlay" name="trafficGraph" :width="800" :height="450">
      <div aria-expanded="true">
        <div class="modal-header d-flex">
          <h2>Traffic Graph</h2>
          <button class="btn btn-secondary" v-on:click="hide">close</button>
        </div>
        <div class="modal-body">
          <img style="width: 600px" src="@/assets/mininet_sample.jpeg" />
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
  },
  data: () => {
    return {
      // itemsはオブジェクト配列を代入予定
      items: [
        {
          id: 1,
          fiveTuple: "5:192.268.2.4:192.168.2.5:443:23475",
          packetControl: "Forward",
        },
        {
          id: 2,
          fiveTuple: "5:192.268.2.3:192.168.2.9:443:54567",
          packetControl: "Drop",
        },
      ],
    };
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

<style></style>
