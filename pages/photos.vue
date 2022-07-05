<template>
  <main>
    <Header title="Photos" />
  </main>
</template>

<script>
export default {
  name: "Photos",
};
</script>

<style scoped>
main {
  width: 800px;
}

@media (max-width: 800px) {
  main {
    width: 100%;
    padding: 0 20px;
  }
}
</style>