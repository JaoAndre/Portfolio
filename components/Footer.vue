<template>
  <footer>
    <p>Copyright &copy; 2022. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "Header",
  props: { title: { type: String, default: "Title" } },
};
</script>

<style scoped>
footer {
  width: 800px;
  margin: 100px 0;
}

footer p {
  font-size: 16px;
  color: #666;
}
</style>