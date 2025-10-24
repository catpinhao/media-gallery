<template>
  <Header />

  <div class="nav-container">
    <Navigation @navClick="handleNavClick" />
  </div>

  <div class="table-container">
    <TableContainer :mediaType="mediaType" :media="media" @addEntry="handleAddEntry" @deleteEntry="handleDeleteEntry" />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import TableContainer from './components/TableContainer.vue';
import { ref, onMounted } from 'vue';

const mediaType = ref('Books'); // default
const media = ref([]);

onMounted(() => {
  const savedMedia = JSON.parse(localStorage.getItem('media-gallery'));

  if (savedMedia) {
    media.value = savedMedia;
  }
});

const handleNavClick = (dataType) => {
  mediaType.value = dataType;
};

const handleAddEntry = (mediaData) => {
  media.value.push(mediaData);

  saveToLocalStorage();
};

const handleDeleteEntry = (title) => {
  const idxToRemove = media.value.findIndex((entry => entry.title === title));
  media.value.splice(idxToRemove, 1);

  saveToLocalStorage();
};

const saveToLocalStorage = () => {
  localStorage.setItem('media-gallery', JSON.stringify(media.value));
};
</script>
