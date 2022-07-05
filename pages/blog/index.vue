<template>
  <main>
    <Header title="Blog" />

    <div class="post" v-for="article in articles" :key="article.slug">
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

.post {
  margin-bottom: 30px;
}

.post a {
  font-size: 18px;
  color: #000;
  transition: color 0.2s ease-in-out;
}

.post a:hover {
  color: #00a0d2;
}

.post p {
  font-size: 16px;
  color: #666;
}
</style>