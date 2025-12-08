<template>
  <div class="city-card">
    <h2>{{ name }}</h2>
    <p>Météo : {{ weather }}</p>
    <p>Température : {{ temperature }} °C</p>
    <p>Dernière mise à jour : {{ updatedAt.toLocaleString() }}</p>
  </div>
</template>

<script>
export default {
  name: "City",
  props: {
    name: { type: String, default: "Ma ville" },
    weather: { type: String, default: "Peu nuageux" },
    temperature: { type: Number, default: 20.55 },
    updatedAt: { type: Date, default: () => new Date() }
  }
}
</script>


<style scoped>
.city-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  max-width: 400px;
}
</style>