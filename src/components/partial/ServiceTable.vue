<template>
  <div>
    <h4 class="text-left">{{ serviceName }}</h4>
    <div class="row py-4 border-top">
      <div class="col-md-5">
        <AnonymizationAfterTable />
      </div>
      <template v-if="isShow">
        <div class="col-md-2 text-danger fa-5x" :class="{ anonymized: true }">
          <font-awesome-icon icon="angle-double-right" />
        </div>
        <div class="col-md-5" :class="{ anonymized: true }">
          <AnonymizationBeforeTable />
        </div>
      </template>
      <div v-else class="col-md-7">
        <button
          class="btn btn-warning mt-5"
          type="button"
          @click="showTableHandler()"
        >
          Click to Show <br />
          Raw Data
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AnonymizationBeforeTable from "./AnonymizationBeforeTable.vue";
import AnonymizationAfterTable from "./AnonymizationAfterTable.vue";

export default {
  name: "ServiceTable",
  components: {
    AnonymizationBeforeTable,
    AnonymizationAfterTable,
  },
  props: {
    serviceName: String,
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
.anonymized {
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
