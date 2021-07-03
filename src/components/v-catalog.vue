<template>
  <div class="v-catalog">
    <h2 class="v-catalog__title">Каталог</h2>
    <div class="v-catalog__list">
      <v-catalog-item />
      <v-catalog-item />
      <v-catalog-item />
      <v-catalog-item />
      <v-catalog-item />
      <v-catalog-item />
      <v-catalog-item />
    </div>
  </div>
</template>

<script>
import VCatalogItem from "./v-catalog-item.vue";

export default {
  name: "v-catalog",
  data() {
    return {};
  },
  components: { VCatalogItem },
  methods: {},
  computed: {},
};
</script>

<style lang="scss">
.v-catalog {
  max-width: 896px;
  margin: 0 auto;

  outline: 1px solid;
  &__title {
    text-align: center;
  }
}
.v-catalog__list {
  display: flex;
  flex-wrap: wrap;
  gap: $base * 2;
}
</style>
