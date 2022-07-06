<template>
  <main>
    <Header title="Photos" />

    <div class="photos-row">
      <img v-for="photo in photos" :key="photo" :src="photo" alt="Photo" />
    </div>
  </main>
</template>

<script>
export default {
  name: "Photos",
  data() {
    return {
      photos: [],
    };
  },
  methods: {
    getPhotos() {
      const photos = require.context("~/assets/resources/photos", true, /\.jpg$/);
      photos.keys().forEach((key) => {
        this.photos.push(photos(key));
      });
    },
  },
  mounted() {
    this.getPhotos();
  },
};
</script>

<style scoped>
main {
  width: 800px;
}

.photos-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}
</style>