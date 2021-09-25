<template>
  <div class="card text-center mb-3">
    <div class="py-2 mx-auto">
      <h4>{{ graphName }}</h4>
    </div>
    <div class="card-body m-2">
      <img @click="show" :src="require('@/assets/' + imageName)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NetworkGraph",
  props: {
    graphName: String,
    imageName: String,
  },
};
</script>


<style scoped>
img {
  object-fit: cover;
  width: 100%;
}
</style>
