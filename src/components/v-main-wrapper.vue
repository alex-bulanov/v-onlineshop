<template>
  <div class="v-main-wrapper">
    <v-catalog />
  </div>
</template>

<script>
import VCatalog from "./v-catalog.vue";
export default {
  name: "v-main-wrapper",
  data() {
    return {};
  },
  props: {},
  components: { VCatalog },
  methods: {},
  computed: {},
};
</script>

<style lang="scss">
.v-main-wrapper {
  max-width: $desktop-width;
  margin: 0 auto;
}
</style>
