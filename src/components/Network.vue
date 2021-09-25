<template>
  <div id="network" class="container animate__animated animate__fadeIn">
    <div class="pt-4">
      <div class="d-flex flex-row">
        <h2 class="text-left">Network Info</h2>
        <!-- <button class="btn btn-primary btn-sm ml-auto">Update Info</button> -->
      </div>
      <div class="row pt-4">
        <div class="col-md-7">
          <!-- <h5 class="text-left pb-2">Graph</h5> -->
          <NetworkGraph
            :graphName="'Simulation Environment'"
            :imageName="'mininet_environment.png'"
          />
          <NetworkGraph
            :graphName="'Flow Management Structure'"
            :imageName="'network_structure.png'"
          />
        </div>
        <div class="col-md-5">
          <h5 class="text-left">Entries of each Switches</h5>
          <div class="scroll height-fixed pt-2">
            <NetworkTable :tableName="'s1'" />
            <NetworkTable :tableName="'s5'" />
            <NetworkTable :tableName="'s6'" />
            <NetworkTable :tableName="'s7'" />
          </div>
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
