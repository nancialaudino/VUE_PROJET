<template>
  <div>
    <h1>Météo - Liste des villes</h1>

    <p v-if="loading">Requête en cours...</p>
    <p v-if="error" style="color: red">{{ error }}</p>

    <div class="cities-list" v-if="!loading && !error">
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
      cities: [],
      loading: false,
      error: null
    }
  },
  created() {
    this.fetchCities()
  },
  methods: {
    async fetchCities() {
      const API_KEY = '7fd83f909e33caf50c9411b0c2b06790';
      const url = `https://api.openweathermap.org/data/2.5/find?lat=45.758&lon=4.765&cnt=20&cluster=yes&lang=fr&units=metric&APPID=${API_KEY}`;

      this.loading = true
      this.error = null

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Erreur HTTP: ${response.status}`);

        const data = await response.json();

        this.cities = data.list.map(city => ({
          id: city.id,
          name: city.name,
          weather: city.weather[0].description,
          temperature: city.main.temp,
          updatedAt: new Date(city.dt * 1000)
        }));

      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
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
