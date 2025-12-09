<template>
  <div>
    <h1>Météo - Carte des villes</h1>

    <!-- Loading and error -->
    <p v-if="loading">Chargement des données...</p>
    <p v-if="error" style="color: red">{{ error }}</p>

    <!-- Leaflet Map -->
    <l-map
      v-if="!loading && !error"
      style="height: 600px; width: 100%;"
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      <!-- Cities marker -->
      <l-marker
        v-for="city in cities"
        :key="city.id"
        :lat-lng="[city.coord.lat, city.coord.lon]"
        :icon="getWeatherIcon(city.icon)"
      >
        <l-popup>
          <strong>{{ city.name }}</strong><br />
          {{ city.weather }}<br />
          Temp: {{ city.temperature }}°C
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


export default {
  name: "CitiesMap",
  components: { LMap, LTileLayer },
  data() {
    return {
      cities: [],
      loading: false,
      error: null,
      center: [45.758, 4.765],
      zoom: 8,
    };
  },
  created() {
    this.fetchCities();
  },
  methods: {
    async fetchCities() {
      const API_KEY = "7fd83f909e33caf50c9411b0c2b06790";
      const url = `https://api.openweathermap.org/data/2.5/find?lat=45.758&lon=4.765&cnt=20&cluster=yes&lang=fr&units=metric&APPID=${API_KEY}`;

      this.loading = true;
      this.error = null;

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
        const data = await res.json();

        this.cities = data.list.map(city => ({
          id: city.id,
          name: city.name,
          weather: city.weather[0].description,
          temperature: city.main.temp,
          coord: city.coord,
          icon: city.weather[0].icon, // código do ícone OWM
        }));
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },


    getWeatherIcon(iconCode) {
      if (!this.weatherIcons[iconCode]) {
        this.weatherIcons[iconCode] = L.icon({
          iconUrl: `https://openweathermap.org/img/wn/${iconCode}@2x.png`,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
      }
      return this.weatherIcons[iconCode];
    }

  },
};
</script>

<style scoped>
#map :deep(.leaflet-marker-icon) {
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
</style>
