<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__img" src="" alt="Product image" />
    <div class="v-catalog-item__info">
      <h3 class="v-catalog-item__title">Product 1</h3>
      <p class="v-catalog-item__price">Цена: 100 &#8381;</p>
      <button class="v-catalog-item__button button">В корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  data() {
    return {};
  },
  components: {},
  methods: {},
  computed: {},
};
</script>

<style lang="scss">
.v-catalog-item {
  width: 200px;
  &__img {
    display: flex;
  }

  &__title {
    margin: 0 auto $base;
  }

  &__price {
    margin: 0 auto $base;
  }

  &__button {
    width: 100%;
  }
}
</style>
