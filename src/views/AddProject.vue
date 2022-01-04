<template>
  <form @submit.prevent="submitHandler">
    <label for="title">title</label>
    <input type="text" v-model="title" required />
    <label for="details">Details</label>
    <textarea v-model="details" required> </textarea>
    <button>add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      details: "",
    };
  },
  methods: {
    submitHandler() {
      let project = {
        title: this.title,
        details: this.details,
        complete: false,
      };
      fetch("http://localhost:3001/projects", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(project),
      });
    },
  },
};
</script>

<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  font-size: 14px;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #bbb;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #bbb;
  padding: 10px;
  width: 100%;
}
</style>
