<template>
  <tr v-for="entry in media" :key="entry.id">
    <td><button class="delete-btn" @click="deleteEntry" v-bind:name="entry.title"></button></td>
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
const props = defineProps({
  media: {
    type: Array,
    required: true,
  }
});

const emit = defineEmits(['deleteEntry']);

const deleteEntry = (event) => {
  emit('deleteEntry', event.currentTarget.name);
};
</script>