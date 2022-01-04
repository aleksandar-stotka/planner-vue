<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">HOME</router-link></li>

        <li><router-link to="/add">addProject</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
li {
  list-style: none;
  border-bottom: 2px solid green;
  padding: 2px;
}
a {
  text-decoration: none;
  padding: 2px;
  text-transform: uppercase;
}
nav {
  width: 100%;
  height: 40px;
}
ul {
  display: flex;
  justify-content: center;
  margin: 1px;
}
</style>
