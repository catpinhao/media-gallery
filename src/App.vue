<template>
  <Header />

  <div class="nav-container">
    <Navigation @navClick="handleNavClick" />
  </div>

  <div class="table-container">
    <Table :mediaType="mediaType" />
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
</script>