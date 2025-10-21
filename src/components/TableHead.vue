<template>
  <tr v-if="mediaType == 'Books'">
    <th>Title</th>
    <th>Author</th>
    <th>Format</th>
  </tr>
  <tr v-if="mediaType == 'Games'">
    <th>Title</th>
    <th>Platform</th>
    <th>Format</th>
  </tr>
  <tr v-if="mediaType == 'Movies'">
    <th>Title</th>
    <th>Year</th>
    <th>Format</th>
  </tr>
  <tr v-if="mediaType == 'Television'">
    <th>Title</th>
    <th>Year</th>
    <th>Format</th>
  </tr>
  <tr v-if="mediaType == 'Podcasts'">
    <th>Title</th>
    <th>Author</th>
    <th>Platform</th>
  </tr>
  <tr v-if="mediaType == 'Music'">
    <th>Title</th>
    <th>Author</th>
    <th>Format</th>
  </tr>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  mediaType: {
    type: String,
    required: true,
  }
});
</script>
