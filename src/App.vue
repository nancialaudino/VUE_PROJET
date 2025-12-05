<template>

  <div>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
     <div class="container-fluid">
       <a class="navbar-brand" href="#">Navbar w/ text</a>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarText">
         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
           <li class="nav-item">
             <a class="nav-link active" aria-current="page" href="#">Home</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">Features</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">Pricing</a>
           </li>
         </ul>
         <span class="navbar-text">
           Navbar text with an inline element
         </span>
       </div>
     </div>
    </nav>
    <h1 :class="{ red: isRed }">{{ title }}</h1>

    <!-- Button to access the list of cities -->
    <button @click="onListClick">Go to the cities list.</button>

    <br><br>

    <label>
      Update in real time:
      <input v-model="title" />
    </label>

    <br><br>

    <label class="labels">
      <input v-model="pendingTitle" placeholder="write something" name="pendingTitle">
    </label>
    <button @click="updateTitleFromInput">Update H1</button>

    <br><br>

    <label class="labels">
      <input type="checkbox" v-model="isRed"> Change H1/H2 to red
    </label>

    <h2 :class="{ red: isRed }">This is H2</h2>

    <br><br>

    <label class="labels">
      <input type="checkbox" v-model="showImage"> Show image
    </label>

    <img v-if="showImage" :src="bgImage" alt="Image" class="show-image"/>

    <!-- Aqui exibimos a lista de cidades -->
    <CitiesList />
  </div>
</template>

<script>
import bgImage from './assets/bg-masthead.jpg'
import CitiesList from './views/CitiesList.vue'

export default {
  components: {
    CitiesList
  },
  data() {
    return {
      title: "Initial title via Vue",
      pendingTitle: "",
      isRed: false,
      showImage: true,
      bgImage: bgImage
    };
  },
  methods: {
    updateTitleFromInput() {
      this.title = this.pendingTitle || this.title;
      this.pendingTitle = "";
    },
    onListClick() {
      alert("User clicked the link to access the cities list!");
    }
  },
};
</script>

<style>
.red {
  color: red;
}

.show-image {
  width: 300px;
  height: auto;
}
</style>
