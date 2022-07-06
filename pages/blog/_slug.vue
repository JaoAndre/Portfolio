<template>
  <main>
    <Header :title="article.title" />

    <Article>
      <NuxtContent :document="article" />
    </Article>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },
};
</script>

<style scoped>
main {
  width: 800px;
}
</style>