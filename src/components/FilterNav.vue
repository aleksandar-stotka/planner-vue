<template>
  <nav class="filter-nav">
    <button
      @click="updateFilters('all')"
      :class="{ active: current === 'all' }"
    >
      View All
    </button>
    <button
      :class="{ active: current === 'completed' }"
      @click="updateFilters('completed')"
    >
      Completed
    </button>
    <button
      :class="{ active: current === 'ongoing' }"
      @click="updateFilters('ongoing')"
    >
      Ongoing
    </button>
  </nav>
</template>

<script>
export default {
  props: ["current"], //diferent classes base on this value
  methods: {
    updateFilters(by) {
      this.$emit("filterChange", by);
    },
  },
};
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-left: 10px;
  letter-spacing: 1px;
  cursor: pointer;
}

.filter-nav button.active {
  background: black;
}
</style>
