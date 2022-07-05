<template>
  <main>
    <Header title="Blog" />

    <div class="article" v-for="article in articles" :key="article.title">
      <h1>{{ article.title }}</h1>
      <p>{{ article.createdAt | date }}</p>
    </div>
  </main>
</template>

<script>
export default {
  name: "Blog",
  async asyncData({ $content }) {
    const articles = await $content("articles")
      .sortBy("createdAt", "asc")
      .fetch();

    return { articles };
  },
  filters: {
    date(value) {
      return new Date(value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      });
    },
  },
};
</script>

<style scoped>
main {
  width: 800px;
}

.article {
  margin-block: 30px;
}

.article h1 {
  font-size: 1.5em;
  font-weight: 500;
}

.article p {
  font-size: 0.9em;
  color: #666;
}
</style>