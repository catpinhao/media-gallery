<template>
  <tr v-for="entry in entries" :key="entry.id">
    <td>{{ entry.title }}</td>

    <td v-if="entry.author">{{ entry.author }}</td>
    <td v-else-if="entry.year">{{ entry.year }}</td>
    <td v-else>{{ entry.platform }}</td>

    <td v-if="entry.author">{{ entry.platform }}</td>
    <td v-else-if="entry.year">{{ entry.platform }}</td>
    <td v-else>{{ entry.format }}</td>
  </tr>
</template>


<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  mediaType: {
    type: String,
    required: true,
  },
  media: {
    type: Array,
    required: true,
  }
});

const entries = computed(() => {
  return props.media.filter((entry) => entry.mediaType === props.mediaType);
});
</script>