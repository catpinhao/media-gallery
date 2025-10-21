<template>
  <tr v-if="type == 'Book'">
    <th>Title</th>
    <th>Author</th>
    <th>Format</th>
  </tr>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  type: String,
  required: true,
});
</script>