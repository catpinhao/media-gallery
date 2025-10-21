<template>
  Table

  <table>
    <TableHead :type="type" />
    <TableEntry />
  </table>
</template>

<script setup>
import TableEntry from './TableEntry.vue';
import TableHead from './TableHead.vue';

const type = 'Book';
</script>