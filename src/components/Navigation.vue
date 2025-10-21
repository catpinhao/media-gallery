<template>
  <span class="nav-item" data-type="Books" @click="onClick">Books</span>
  <span class="nav-item" data-type="Games" @click="onClick">Games</span>
  <span class="nav-item" data-type="Movies" @click="onClick">Movies</span>
  <span class="nav-item" data-type="Music" @click="onClick">Music</span>
  <span class="nav-item" data-type="Podcasts" @click="onClick">Podcasts</span>
  <span class="nav-item" data-type="Television" @click="onClick">Television</span>
</template>

<script setup>
const emit = defineEmits(['navClick']);

const onClick = (event) => {
  let type = event.currentTarget.dataset.type;

  emit('navClick', type);
};
</script>