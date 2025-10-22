<template>
  <Header />

  <div class="nav-container">
    <Navigation @navClick="handleNavClick" />
  </div>

  <div class="table-container">
    <Table :mediaType="mediaType" :media="media" />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import Table from './components/Table.vue';

import { ref } from 'vue';
const mediaType = ref('Books');

const handleNavClick = (dataType) => {
  mediaType.value = dataType;
};

const media = [
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
]
</script>