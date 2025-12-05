<template>
  <div>
    <h1 :class="{ red: isRed }">{{ title }}</h1>

    <!-- Button para ir para CitiesList -->
    <button class="btn btn-primary mb-3" @click="goToCities">Go to the cities list</button>

    <div class="mb-3">
      <label class="form-label">Update in real time:</label>
      <input v-model="title" class="form-control" placeholder="New title"/>
    </div>

    <div class="mb-3">
      <label class="form-label">Update on click:</label>
      <input v-model="pendingTitle" name="pendingTitle" class="form-control" placeholder="Write something"/>
      <button class="btn btn-secondary mt-2" @click="updateTitle">Update H1</button>
    </div>

    <div class="form-check mb-3">
      <input type="checkbox" v-model="isRed" class="form-check-input" id="isRed">
      <label for="isRed" class="form-check-label">Change H1/H2 to red</label>
    </div>

    <h2 :class="{ red: isRed }">This is H2</h2>

    <div class="form-check my-3">
      <input type="checkbox" v-model="showImage" class="form-check-input" id="showImage">
      <label for="showImage" class="form-check-label">Show image</label>
    </div>

    <img v-if="showImage" :src="bgImage" alt="Image" class="show-image"/>
  </div>
</template>

<script>
import bgImage from '../assets/bg-masthead.jpg'

export default {
  data() {
    return {
      title: "Initial title via Vue",
      pendingTitle: "",
      isRed: false,
      showImage: true,
      bgImage
    }
  },
  methods: {
    updateTitle() {
      this.title = this.pendingTitle || this.title
      this.pendingTitle = ""
    },
    goToCities() {
      this.$router.push('/cities')
    }
  }
}
</script>

<style scoped>
.red { color: red; }
.show-image { width: 300px; height: auto; border: 1px solid black; }
.btn btn-primary {color: black;}
</style>
