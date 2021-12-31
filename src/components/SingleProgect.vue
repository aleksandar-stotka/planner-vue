<template>
  <div>
    <div class="project" :class="{ complete: project.complete }">
      <div class="actions">
        <h3 @click="showDetails">{{ project.title }}</h3>
        <div class="icons">
          <span @click="editProgect" class="material-icons">
            edit
          </span>

          <span @click="deleteProjects" class="material-icons">
            delete
          </span>
          <span @click="toggleComplete" class="material-icons tick">
            done
          </span>
        </div>
      </div>
      <div v-if="details" class="details">
        <p>{{ project.details }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      details: false,
      uri: "http://localhost:3001/projects/" + this.project.id,
    };
  },
  methods: {
    showDetails() {
      this.details = !this.details;
    },
    deleteProjects() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.project.id))
        .catch((err) => console.log(err));
    },
    toggleComplete() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ complete: !this.project.complete }),
      }).then(() => {
        this.$emit("complete", this.project.id);
      }); //patch koga sakame da opfatime samo del od objectot
    },
  },
};
</script>

<style>
.project {
  margin: 20px auto;
  background: white;
  width: 50rem;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 2px black;
  border-left: 4px solid red;
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.project.complete {
  border-left: 4px solid rgb(7, 109, 7);
}
.project.complete .tick {
  color: rgb(10, 235, 40);
  width: 5rem;
}
</style>
