<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
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
