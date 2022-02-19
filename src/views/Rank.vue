<template>
  <div class="rank">
    <scroll :list="rankList" :top="83">
      <div class="scroll-wrapper" style="overflow: hidden">
        <div
          v-for="rank of rankList"
          :key="rank.id"
          class="d-flex mx-4 my-3 shadow"
        >
          <img :src="rank.img" width="100" style="min-height: 100px" />
          <ul class="d-flex flex-wrap ai-center pl-3 text-gray2 text-xs">
            <li v-for="(song, index) of rank.song" :key="index" class="w100">
              {{ ++index }}. {{ rank.song }}
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/Scroll";

export default {
  data() {
    return {
      rankList: [],
    };
  },
  created() {
    this.RankList();
  },
  methods: {
    RankList() {
      const res = this.$http.get("/toplist").then((res) => {
        this.rankList = res.data.list.map((item) => ({
          id: item.id,
          name: item.name,
          img: item.coverImgUrl,
          song: item.song,
          tag: item.tags,
        }));
      });
    },
  },
  components: {
    Scroll,
  },
};
</script>