<template>
  <button class="add-btn" @click="open = true">+</button>

  <Teleport to="body">
    <div v-if="open" class="modal-backdrop" @click="onClose" />
    <div v-if="open" class="add-modal">
      <button class="close-btn" @click="onClose"></button>

      <h2>Add new entry</h2>
      <form id="form" @submit.prevent="onSubmit">
        <div class="form-control">
          <p>Media Type</p>

          <span class="radio-group">
            <input type="radio" id="books" name="media" value="Books" v-model="media" @click="emptyFields">
            <label for="books" class="label-radio">Book</label>
          </span>

          <span class="radio-group">
            <input type="radio" id="games" name="media" value="Games" v-model="media" @click="emptyFields">
            <label for="games" class="label-radio">Game</label>
          </span>

          <span class="radio-group">
            <input type="radio" id="movies" name="media" value="Movies" v-model="media" @click="emptyFields">
            <label for="movies" class="label-radio">Movie</label>
          </span>

          <span class="radio-group">
            <input type="radio" id="podcasts" name="media" value="Podcasts" v-model="media" @click="emptyFields">
            <label for="podcasts" class="label-radio">Podcast</label>
          </span>

          <span class="radio-group">
            <input type="radio" id="television" name="media" value="Television" v-model="media" @click="emptyFields">
            <label for="television" class="label-radio">Television</label>
          </span>

          <span class="error-message error-media" v-if="error && !media">Please choose a media type.</span>
        </div>

        <div class="form-control" v-if="media">
          <label for="title">Title</label>
          <input type="text" id="title" placeholder="Enter a title" v-model="title" />
          <span class="error-message error-title" v-if="error && !title">Please choose a title.</span>
        </div>

        <div class="form-control" v-if="media == 'Books' || media == 'Podcasts'">
          <label for="author">Author</label>
          <input type="text" id="author" placeholder="Enter the author" v-model="author" />
          <span class="error-message error-author" v-if="error && !author">Please choose an author.</span>
        </div>

        <div class="form-control" v-if="media == 'Movies' || media == 'Television'">
          <label for="year">Year</label>
          <input type="number" id="year" placeholder="Enter the release year" min="1888" max="2025" v-model="year" />
          <span class="error-message error-year" v-if="error && !year">Please choose a year between 1888 and now.</span>
        </div>

        <div class="form-control" v-if="media">
          <label for="platform">Platform</label>
          <input type="text" id="platform" placeholder="Enter a platform" v-model="platform" />
          <span class="error-message error-platform" v-if="error && !platform">Please choose a platform.</span>
        </div>

        <div class="form-control" v-if="media == 'Games'">
          <p>Format</p>

          <span class="radio-group">
            <input type="radio" id="digital" name="format" value="Digital" v-model="format">
            <label for="digital" class="label-radio">Digital</label>
          </span>

          <span class="radio-group">
            <input type="radio" id="physical" name="format" value="Physical" v-model="format">
            <label for="physical" class="label-radio">Physical</label>
          </span>

          <span class="error-message error-format" v-if="error && !format">Please choose a format.</span>
        </div>
        
        <button class="submit-btn">Add entry</button>
      </form>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['addEntry']);

const open = ref(false);
const error = ref(false);
const media = ref('');
const title = ref('');
const author = ref('');
const year = ref('');
const platform = ref('');
const format = ref('');

const onClose = () => {
  open.value = false;
  media.value = '';
  emptyFields();
}

const emptyFields = () => {
  error.value = '';
  title.value = '';
  author.value = '';
  year.value = '';
  platform.value = '';
  format.value = '';
}

const onSubmit = () => {
  // show error messages if needed
  error.value = false;
  if (!media.value) error.value = true;
  if (media.value && !title.value) error.value = true;
  if ((media.value == 'Books' || media.value == 'Podcasts') && !author.value) error.value = true;
  if (media.value && !platform.value) error.value = true;
  if (media.value == 'Games' && !format.value) error.value = true;
  if ((media.value == 'Movies' || media.value == 'Television') && !year.value) error.value = true;
  if (error.value) return;

  const mediaData = {
    mediaType: media.value,
    title: title.value,
    author: author.value,
    year: year.value,
    platform: platform.value,
    format: format.value,
  };

  // remove the unfilled fields
  const prunedMediaData = Object.fromEntries(Object.entries(mediaData).filter(([_, v]) => v != ''));

  emit('addEntry', prunedMediaData);
  onClose();
};
</script>
