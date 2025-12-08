<template>
  <div class="city-card">
    <h2>{{ name }}</h2>
    <p>Météo : {{ weather }}</p>
    <p>Température : {{ temperature }} °C</p>
    <p>Dernière mise à jour : {{ relativeTime }}</p>
  </div>
</template>

<script>
import { format } from 'timeago.js'

export default {
  name: "City",
  props: {
    name: String,
    weather: String,
    temperature: Number,
    updatedAt: Date
  },
  computed: {
    relativeTime() {
      return format(this.updatedAt, 'fr')
    }
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
