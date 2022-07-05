<template>
  <header>
    <h1>{{ title }}</h1>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <NuxtLink to="/photos">Photos</NuxtLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: { title: { type: String, default: "Title" } },
};
</script>

<style scoped>
header {
  margin: 100px 0;
}

header h1 {
  font-size: 2em;
  font-weight: 500;
}

nav {
  margin-top: 10px;
}

nav a {
  font-size: 1em;
  color: #666;
  margin-right: 10px;
  transition: color 0.2s ease-in-out;
}

nav a.nuxt-link-exact-active,
nav a:hover {
  color: #000;
}
</style>