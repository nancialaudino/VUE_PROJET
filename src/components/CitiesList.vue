<template>
  <div>
    <h1>Météo - Liste des villes</h1>

    <div class="cities-list">
      <City
        v-for="city in cities"
        :key="city.id"
        :name="city.name"
        :weather="city.weather"
        :temperature="city.temperature"
        :updatedAt="city.updatedAt"
      />
    </div>
  </div>
</template>

<script>
import City from '../components/City.vue'

export default {
  name: "CitiesList",
  components: {
    City
  },
  data() {
    return {
      cities: [
        {
          id: 1,
          name: 'Annecy',
          weather: 'Ensoleillé',
          temperature: 22.0,
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Chambèry',
          weather: 'Peu nuageux',
          temperature: 19.5,
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Courchevel',
          weather: 'Peu nuageux',
          temperature: 1.5,
          updatedAt: new Date()
        }
      ]
    }
  }
}
</script>

<style scoped>
.cities-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
