<template>
  <form @submit.prevent="editHandler">
    <label for="title">title</label>
    <input type="text" v-model="title" required />
    <label for="details">Details</label>
    <textarea v-model="details" required> </textarea>
    <button>add</button>
  </form>
</template>

<script>
export default {
  props: ["id"],

  data() {
    return {
      title: "",
      details: "",
      uri: "http://localhost:3001/projects/" + this.id,
    };
  },

  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.details = data.details;
      });
  },
  methods: {
    editHandler() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title: this.title, details: this.details }),
      }).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style></style>
