<template>
  <div class="card text-center mb-3">
    <div class="py-2 mx-auto">
      <h4>Raw Data</h4>
    </div>
    <div class="card-body">
      <table class="table table-sm table-borderless">
        <tr>
          <th>Data</th>
          <th>Anonymization Level</th>
        </tr>
        <tbody>
          <tr v-for="(item, key) in items" :key="key">
            <td>{{ item.data }}</td>
            <td>{{ item.anonymizationLevel }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnonymizationBeforeTable",
  data: () => {
    return {
      // itemsはオブジェクト配列を代入予定
      items: [
        {
          data: "honyahonya",
          anonymizationLevel: 3,
        },
        {
          data: "hogehoge",
          anonymizationLevel: 2,
        },
      ],
    };
  },
};
</script>
