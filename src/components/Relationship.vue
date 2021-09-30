<template>
  <div id="anonymization" class="container animate__animated animate__fadeIn">
    <div class="pt-4">
      <div class="d-flex flex-row pb-3">
        <h2 class="text-left">Relationship</h2>
      </div>
      <div class="pt-3 height-fixed">
        <ServiceTable
          :relationshipName="'Data Provider A / Data User B'"
          :providerName="'Data Provider A'"
          :userName="'Data User B'"
        />
        <ServiceTable
          :relationshipName="'Data Provider C / Data User D'"
          :providerName="'Data Provider C'"
          :userName="'Data User D'"
        />
        <ServiceTable
          :relationshipName="'Data Provider E / Data User F'"
          :providerName="'Data Provider E'"
          :userName="'Data User F'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceTable from "./partial/ServiceTable.vue";
import axios from "axios";

export default {
  name: "Anonymization",
  components: {
    ServiceTable,
  },
  data: () => {
    return {
      isShow: false,
      items: [
        {
          relationship: "HEMS Service A / User 1",
          isAllowed: true,
        },
        {
          relationship: "Health Service B / User 2",
          isAllowed: false,
        },
        {
          relationship: "EV Service C / User 3",
          isAllowed: true,
        },
      ],
    };
  },
  methods: {
    showTableHandler: function () {
      this.isShow = true;
      return;
    },
    getRelationship: function () {
      let token = sessionStorage.getItem("accessToken");
      axios
        .get("http://10.24.129.208/admin/fetch-relationship", {
          timeout: 5000,
          headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": token,
          },
        })
        .then((res) => {
          console.log(res);
        });
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
