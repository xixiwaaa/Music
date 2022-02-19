<template>
  <div class="singer-list">
    <ul v-for="singer of list" :key="singer.id">
      <li class="d-flex ai-center px-4 py-3">
        <img :src="singer.picUrl" style="width: 60px; border-radius: 50%" />
        <router-link
          :to="{
            name: 'SingerSong',
            params: {
              id: singer.id,
            },
          }"
        >
          <span class="pl-3 text-gray2">
            {{ singer.name }}
          </span></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>