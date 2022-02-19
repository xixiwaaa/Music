<template>
  <div class="recommend">
    <scroll :top="76" :list="hotSong" ref="scroll">
      <div class="scroll-wrapper">
        <!-- my-swiper -->
        <my-swiper
          :swiper-list="swiperList"
          :swiper-option="swiperOption"
          @img-load="scrollRefresh"
        />

        <!-- song-sheet-list -->
        <song-sheet-list :hot-song="hotSong" />
      </div>
    </scroll>
  </div>
</template>

<script>
import MySwiper from "@/components/main/recommend/MySwiper";
import SongSheetList from "@/components/main/recommend/SongSheetList";
import Scroll from "@/components/common/Scroll";

export default {
  data() {
    return {
      //my-swiper
      swiperList: [],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: true,
      },
      //song-sheet-list
      hotSong: [],
    };
  },
  methods: {
    //滚动条刷新
    scrollRefresh() {
      this.$refs.scroll.refresh();
    },
    //获取轮播图数据
    SwiperList() {
      const res = this.$http.get("/banner").then((res) => {
        this.swiperList = res.data.banners;
      });
    },
    //获取歌单列表数据（热门歌曲）
    HotSong() {
      const res = this.$http.get("/personalized/newsong").then((res) => {
        this.hotSong = res.data.result;
      });
    },
  },
  created() {
    this.SwiperList();
    this.HotSong();
  },
  components: {
    MySwiper,
    SongSheetList,
    Scroll,
  },
};
</script>