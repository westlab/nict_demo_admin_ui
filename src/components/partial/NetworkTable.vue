<template>
  <div class="card text-center mb-3">
    <div class="py-2 mx-auto">
      <h4>Switch {{ tableName }}</h4>
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
import axios from "axios";

export default {
  name: "NetworkTable",
  props: {
    tableName: String,
  },
  data: () => {
    return {
      items: []
    }
  },
  methods: {
    fetchData: function() {
      var self = this;
      const fetchRedisData = (switchName) => {
        console.log("fetch switch data: ", switchName);
        // 野原のサーバの5000番ポートでredis情報を返すapiサーバが起動している
        axios.get("http://10.24.128.152:5000/redis_data/" + switchName, {
          timeout: 5000,
          headers: { "Content-Type": "application/json" },
        })
        .then(async (res) => {
          self.items = res.data.redis_data;
        })
        .catch((err) => {
          console.log(err);
        });
      };
      const switchName = this.tableName;
      return (setInterval(
        function(){fetchRedisData(switchName)}
        ,2000
      ));
    }
  },
  created: function() {
    this.fetchData();
  },
};
</script>
