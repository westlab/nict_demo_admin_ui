<template>
  <div class="card text-center mb-3">
    <div class="py-2 mx-auto">
      <h4>{{ tableName }}</h4>
    </div>
    <div class="card-body">
      <table class="table table-sm">
        <tr class="border-3">
          <th>ID</th>
          <th>5 tuple</th>
          <th>control</th>
        </tr>
        <tbody>
          <tr v-for="(item, key) in items" :key="key">
            <td>{{ item.id }}</td>
            <td>{{ item.fiveTuple }}</td>
            <td>{{ item.packetControl }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "NetworkTable",
  props: {
    tableName: String,
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
};
</script>
