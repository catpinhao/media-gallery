<template>
  <h2>
    <span v-if="mediaType == 'Books'">
      <font-awesome-icon icon="fa-solid fa-book" />
    </span>
    <span v-if="mediaType == 'Games'">
      <font-awesome-icon icon="fa-solid fa-gamepad" />
    </span>
    <span v-if="mediaType == 'Movies'">
      <font-awesome-icon icon="fa-solid fa-film" />
    </span>
    <span v-if="mediaType == 'Music'">
      <font-awesome-icon icon="fa-solid fa-music" />
    </span>
    <span v-if="mediaType == 'Podcasts'">
      <font-awesome-icon icon="fa-solid fa-podcast" />
    </span>
    <span v-if="mediaType == 'Television'">
      <font-awesome-icon icon="fa-solid fa-tv" />
    </span>
    {{ mediaType }}
  </h2>
  <table>
    <thead>
      <TableHead :mediaType="mediaType" />
    </thead>
    <tbody>
      <TableEntry />
    </tbody>
  </table>
</template>

<script setup>
import TableEntry from './TableEntry.vue';
import TableHead from './TableHead.vue';

import { defineProps } from 'vue';

const props = defineProps({
  mediaType: {
    type: String,
    required: true,
  },
});
</script>