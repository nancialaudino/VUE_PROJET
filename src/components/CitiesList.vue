<template>
  <div>
    <h1>Météo - Liste des villes</h1>

    <City
      name="Paris"
      weather="Ensoleillé"
      :temperature="25.3"
      :updatedAt="new Date()"
    />
    <City
          name="Annecy"
          weather="Peu nuageux"
          :temperature="16.8"
          :updatedAt="new Date()"
    />

    <City
          name="Courchevel"
          weather="Peu nuageux"
          :temperature="1.2"
          :updatedAt="new Date()"
    />
  </div>
</template>

<script>
import City from '../components/City.vue'

export default {
  name: "CitiesList",
  components: {
    City
  }
}
</script>

<style scoped>

</style>
