<template>
  <div id="network" class="container animate__animated animate__fadeIn">
    <div class="pt-4">
      <div class="d-flex flex-row">
        <h2 class="text-left">Network Info</h2>
      </div>
      <div class="row pt-4">
        <NetworkGraph :graphName="'Simulation Environment'" />
      </div>
      <h5 class="text-left">Entries of each Switches</h5>
      <!-- TODO: mininetのredisから受け取るjsonデータによりループ化 -->
      <div class="row">
        <div class="scroll height-fixed pt-2 col-md-6">
          <NetworkTable :tableName="'s5'" />
          <NetworkTable :tableName="'s6'" />
        </div>
        <div class="scroll height-fixed pt-2 col-md-6">
          <NetworkTable :tableName="'s7'" />
          <NetworkTable :tableName="'s1'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NetworkTable from "./partial/NetworkTable.vue";
import NetworkGraph from "./partial/NetworkGraph.vue";

export default {
  name: "Network",
  components: {
    NetworkTable,
    NetworkGraph,
  },
  props: {
    tableName: String,
  },
};
</script>

<style scoped>
.scroll {
  overflow-y: auto;
}

.height-fixed {
  height: 70%;
}
</style>
