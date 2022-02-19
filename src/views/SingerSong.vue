<template>
  <div>
    <ul class="pt-1 px-4">
      <router-link
        class="pt-3 ai-center d-flex pb-3"
        :to="{
          name: 'Player',
          params: {
            id: item.id,
            name: item.name,
            image: encodeURIComponent(item.al.picUrl),
          },
        }"
        v-for="(item, index) in songsData"
        :key="index"
        ><img :src="item.al.picUrl" width="60" />
        <div class="right d-flex flex-wrap pl-3 ai-center">
          <span class="title w100">
            {{ item.name }}
          </span>
        </div></router-link
      >
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songsData: "",
    };
  },
  mounted() {
    this.$http.get(`/artists?id=${this.$route.params.id}`).then((res) => {
      this.songsData = res.data.hotSongs;
    });
  },
};
</script>

<style>
</style>