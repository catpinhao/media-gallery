<template>
  <Header />

  <div class="nav-container">
    <Navigation @navClick="handleNavClick" />
  </div>

  <div class="table-container">
    <TableContainer :mediaType="mediaType" :media="media" @deleteEntry="handleDeleteEntry" />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import TableContainer from './components/TableContainer.vue';

import { ref } from 'vue';
const mediaType = ref('Books');

const handleNavClick = (dataType) => {
  mediaType.value = dataType;
};

const handleDeleteEntry = (title) => {
  const idxToRemove = media.value.findIndex((entry => entry.title === title));
  media.value.splice(idxToRemove, 1);
};

const media = ref([
  {
    mediaType: 'Books',
    title: 'Dune',
    author: 'Frank Herbert',
    platform: 'Physical'
  },
  {
    mediaType: 'Books',
    title: 'Dune Messiah',
    author: 'Frank Herbert',
    platform: 'Physical'
  },
  {
    mediaType: 'Books',
    title: 'Foundation',
    author: 'Isaac Asimov',
    platform: 'Kindle'
  },
  {
    mediaType: 'Books',
    title: 'Pride & Prejudice',
    author: 'Jane Austen',
    platform: 'Apple Books'
  },
  {
    mediaType: 'Games',
    title: 'Clair Obscur: Expedition 33',
    platform: 'Playstation 5',
    format: 'Digital'
  },
  {
    mediaType: 'Games',
    title: 'Mario Kart World',
    platform: 'Nintendo Switch 2',
    format: 'Physical'
  },
  {
    mediaType: 'Movies',
    title: 'Se7en',
    year: '1995',
    platform: 'Netflix'
  },
  {
    mediaType: 'Television',
    title: 'The Sopranos',
    year: '1999',
    platform: 'Netflix'
  }
]);
</script>