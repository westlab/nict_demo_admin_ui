<template>
  <div class="container">
    <div class="pt-4">
      <div class="d-flex flex-row">
        <h2 class="text-left">Network Info</h2>
        <button class="btn btn-primary btn-sm ml-auto">Update Info</button>
      </div>
      <div class="row pt-4">
        <div class="col-md-7 border-right">
          <h5 class="text-left">Entries of each Switches</h5>
          <!-- TODO: mininetから受け取るjsonデータによりループ化 -->
          <div class="scroll height-fixed pt-2">
            <NetworkTable :tableName="'Switch A'" />
            <NetworkTable :tableName="'Switch B'" />
            <NetworkTable :tableName="'Switch C'" />
            <NetworkTable :tableName="'Switch D'" />
          </div>
        </div>
        <div class="col-md-5">
          <h5 class="text-left pb-2">Graph</h5>
          <NetworkGraph :graphName="'Traffic Graph'" />
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
  height: 500px;
}
</style>
