<template>
  <div class="song-sheet-list">
    <ul class="pt-1 px-4">
      <router-link
        :to="{
          name: 'Player',
          params: {
            id: item.id,
            name: item.name,
            image: encodeURIComponent(item.picUrl),
          },
        }"
        class="d-flex pb-3"
        v-for="item of hotSong"
        :key="item.id"
      >
        <img :src="item.picUrl" width="60" />
        <div class="right d-flex flex-wrap pl-3 ai-center">
          <span class="title w100">
            {{ item.name }}
          </span>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    hotSong: {
      type: Array,
      required: true,
    },
  },
  created(){
      console.log(this.hotSong);
  }
};
</script>