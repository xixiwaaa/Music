<template>
  <div class="search">
    <input type="text" v-model="keyWord" />
    <i @click="searchHandle" class="iconfont icon-sousuo right"></i>
    <ul>
      <router-link
        tag="li"
        class="pt-3"
        :to="{
          name: 'Player',
          params: {
            id: item.id,
            name: item.name,
            image: encodeURIComponent(item.album.artist.img1v1Url),
          },
        }"
        v-for="(item, index) in searchData"
        :key="index"
        >{{ item.name }}</router-link
      >
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyWord: "",
      searchData: "",
    };
  },
  methods: {
    searchHandle() {
      const res = this.$http
        .get(`/search?keywords=${this.keyWord}`)
        .then((res) => {
          this.searchData = res.data.result.songs;
        });
    },
  },
  mounted() {},
};
</script>

<style lang="css" scoped>
input {
  border: 1px solid rgb(182, 178, 178);
  border-radius: 32px;
  width: 65%;
}
.search {
  text-align: center;
}
.right {
  font-size: 25px;
}
</style>