<template>
  <tr v-if="mediaType == 'Books'">
    <th></th>
    <th>Title</th>
    <th>Author</th>
    <th>Platform</th>
  </tr>
  <tr v-if="mediaType == 'Games'">
    <th></th>
    <th>Title</th>
    <th>Platform</th>
    <th>Format</th>
  </tr>
  <tr v-if="mediaType == 'Movies'">
    <th></th>
    <th>Title</th>
    <th>Year</th>
    <th>Platform</th>
  </tr>
  <tr v-if="mediaType == 'Podcasts'">
    <th></th>
    <th>Title</th>
    <th>Author</th>
    <th>Platform</th>
  </tr>
  <tr v-if="mediaType == 'Television'">
    <th></th>
    <th>Title</th>
    <th>Year</th>
    <th>Platform</th>
  </tr>
</template>

<script setup>
const props = defineProps({
  mediaType: {
    type: String,
    required: true,
  }
});
</script>
