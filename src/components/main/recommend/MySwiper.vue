<template>
  <div class="my-swiper">
    <swiper v-if="swiperList.length" :options="swiperOption">
      <swiperSlide v-for="(item, index) of swiperList" :key="index">
        <img class="w100" :src="item.imageUrl" @load="imgLoad" />
      </swiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  props: {
    swiperList: {
      type: Array,
      required: true,
    },
    swiperOption: {
      type: Object,
      required: true,
    },
  },
  methods: {
    //图片加载完成
    imgLoad() {
      this.$emit("img-load");
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>