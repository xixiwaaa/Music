<template>
  <div class="palyer">
    <div class="header">
      <div class="title">
        <router-link to="/">
          <i class="iconfont icon-shouye left"></i>
        </router-link>
        <div class="music-info">
          <p>{{ $route.params.name }}</p>
        </div>
        <router-link to="/search">
          <i class="iconfont icon-sousuo right"></i>
        </router-link>
      </div>
      <div class="song-info">
        <div class="song-info-img">
          <img :src="getUrl" alt="" />
        </div>
        <div class="iconbox">
          <i class="iconfont icon-shoucang2 left"></i>
          <i class="box"></i>
          <i class="iconfont icon-xiazai right"></i>
        </div>
      </div>
    </div>
    <div class="song">
      <audio controls :src="this.playerData.url"></audio>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerData: {},
    };
  },
  mounted() {
    this.$http.get(`/song/url?id=${this.$route.params.id}`).then((res) => {
        this.playerData = res.data.data[0];
    });
  },
  computed: {
    getUrl() {
      return decodeURIComponent(this.$route.params.image);
    },
  },
};
</script>

<style scoped>
.header {
  padding: 15px;
}
.title {
  display: flex;
  text-align: center;
}
.music-info {
  flex: 1;
  font-size: 20px;
}
.left {
  font-size: 30px;
}
.ca {
  color: red;
}
.right {
  font-size: 30px;
}
.song-info {
  padding: 15px;
}
.song-info-img {
  text-align: center;
}
.song-info-img img {
  width: 50%;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(50, 50, 50, 0, 0.31);
}
.song-lrc {
  margin-top: 10px;
  min-height: 50px;
}
.iconbox {
  display: flex;
  margin-top: 30px;
}
.iconbox .box {
  flex: 1;
}
.song {
  width: 100%;
  text-align: center;
}
.song audio {
  width: 80%;
}
.active {
  color: #222;
}
</style>