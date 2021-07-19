<template>
  <div class="v-main-wrapper">
    <v-header></v-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import vHeader from "./layouts/v-header.vue";
export default {
  components: { vHeader },
  name: "v-main-wrapper",
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss">
.v-main-wrapper {
  position: relative;
  max-width: $desktop-width;
  margin: 0 auto;
  padding: $base;
}
</style>
2