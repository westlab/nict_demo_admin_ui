<template>
  <div class="container">
    <div class="pt-4">
      <div class="d-flex flex-row pb-3">
        <h2 class="text-left">Anonymization</h2>
        <button class="btn btn-primary btn-sm ml-auto">Update Info</button>
      </div>
      <div class="pt-3 height-fixed">
        <!-- TODO: 匿名化サービスから受け取るjsonデータによりループ化 -->
        <ServiceTable :serviceName="'HEMS Service A'" />
        <ServiceTable :serviceName="'Health Service B'" />
        <ServiceTable :serviceName="'EV Service C'" />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceTable from "./partial/ServiceTable.vue";

export default {
  name: "Anonymization",
  components: {
    ServiceTable,
  },
  data: () => {
    return {
      isShow: false,
    };
  },
  methods: {
    showTableHandler: function () {
      this.isShow = true;
      return;
    },
  },
};
</script>

<style scoped>
.scroll {
  overflow-y: auto;
}

.height-fixed {
  max-height: 80%;
}
</style>
