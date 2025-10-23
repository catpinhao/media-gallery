<template>
  <AddEntry @addEntry="handleAddEntry"/>

  <h2>
    {{ mediaType }}

    <span class="icon" v-if="mediaType == 'Books'">
      <font-awesome-icon icon="fa-solid fa-book" />
    </span>
    <span class="icon" v-if="mediaType == 'Games'">
      <font-awesome-icon icon="fa-solid fa-gamepad" />
    </span>
    <span class="icon" v-if="mediaType == 'Movies'">
      <font-awesome-icon icon="fa-solid fa-video" />
    </span>
    <span class="icon" v-if="mediaType == 'Podcasts'">
      <font-awesome-icon icon="fa-solid fa-podcast" />
    </span>
    <span class="icon" v-if="mediaType == 'Television'">
      <font-awesome-icon icon="fa-solid fa-tv" />
    </span>
  </h2>

  <TableEmptyState v-if="!entries.length" />
  <table v-else>
    <thead>
      <TableHead :mediaType="mediaType" />
    </thead>
    <tbody>
      <TableEntry :media="entries" @deleteEntry="handleDeleteEntry" />
    </tbody>
  </table>
</template>

<script setup>
import AddEntry from './AddEntry.vue';
import TableEmptyState from './TableEmptyState.vue';
import TableEntry from './TableEntry.vue';
import TableHead from './TableHead.vue';
import { computed } from 'vue';

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

const emit = defineEmits(['addEntry', 'deleteEntry']);

const handleAddEntry = (mediaData) => {
  emit('addEntry', mediaData);
};

const handleDeleteEntry = (title) => {
  emit('deleteEntry', title);
};
</script>