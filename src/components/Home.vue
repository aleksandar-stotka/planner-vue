<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div class="container" v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProgect
          :project="project"
          @delete="deleteProjects"
          @complete="handleComplete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProgect from "./SingleProgect.vue";
import FilterNav from "./FilterNav.vue";
export default {
  name: "App",
  components: { SingleProgect, FilterNav },
  data() {
    return {
      projects: [],
      current: "all",
    };
  },

  mounted() {
    fetch("http://localhost:3001/projects/")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err));
  },
  methods: {
    deleteProjects(id) {
      this.projects = this.projects.filter((item) => {
        return item.id !== id;
      });
    },
    handleComplete(id) {
      let p = this.projects.find((project) => {
        return project.id === id;
      });
      p.complete = !p.complete;
    },
  },
  computed: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.container {
  padding: 2em;
}
</style>
