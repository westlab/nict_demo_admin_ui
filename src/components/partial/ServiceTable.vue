<template>
  <div>
    <h4 class="text-left">{{ relationshipName }}</h4>
    <div class="row py-4 border-top">
      <div class="container card">
        <table class="table table-borderless">
          <tr>
            <th class="text-info">Allowed switches</th>
            <th class="text-secondary">Denied switches</th>
            <th class="text-danger">Packet Discarded switches</th>
          </tr>
          <tbody>
            <tr>
              <td>switch 1</td>
              <td>switch 2</td>
              <td>switch 4</td>
            </tr>
            <tr>
              <td>switch 3</td>
              <td>switch 4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceTable",
  props: {
    relationshipName: String,
    providerName: String,
    userName: String,
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
