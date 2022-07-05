<template>
  <main>
    <Header title="Blog" />

    <div class="article" v-for="article in articles" :key="article.slug">
      <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">{{ article.title }}</NuxtLink>
      <p>{{ article.createdAt | date }}</p>
    </div>
  </main>
</template>

<script>
export default {
  name: "Blog",
  async asyncData({ $content }) {
    const articles = await $content("articles").sortBy("createdAt").fetch();
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

.article a {
  font-size: 18px;
  color: #000;
  transition: color 0.2s ease-in-out;
}

.article a:hover {
  color: #00a0d2;
}

.article p {
  font-size: 16px;
  color: #666;
}

@media (max-width: 800px) {
  main {
    width: 100%;
    padding: 0 20px;
  }
}
</style>