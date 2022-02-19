<template>
  <div class="singer">
    <scroll :list="singerList" :top="83" ref="scroll">
      <div class="scroll-wrapper">
        <!-- 歌手列表 -->
        <singer-list :list="singerList" />
      </div>
    </scroll>
  </div>
</template>

<script>
import SingerList from "@/components/main/singer/SingerList";
import Scroll from "@/components/common/Scroll";

export default {
  data() {
    return {
      singerList: [],
    };
  },
  methods: {
    //获取歌手列表
    SingerList(params) {
      this.singerList = [];
      const res = this.$http.get("/artist/list", { params }).then((res) => {
        this.singerList = res.data.artists;
      });
    },
  },
  created() {
    this.SingerList();
  },
  components: {
    SingerList,
    Scroll,
  },
};
</script>