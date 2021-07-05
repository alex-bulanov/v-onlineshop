<template>
  <div class="v-catalog-item">
    <div class="v-catalog-item__img-container">
      <img
        class="v-catalog-item__img"
        :src="require('../../assets/images/' + product_data.image)"
        :alt="product_data.name"
      />
    </div>

    <div class="v-catalog-item__info">
      <h3 class="v-catalog-item__title">{{ product_data.name }}</h3>
      <p class="v-catalog-item__price">
        Цена: {{ product_data.price }} &#8381;
      </p>
      <button class="v-catalog-item__button button" @click="addToCart">
        В корзину
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  data() {
    return {};
  },
  mounted() {
    this.$set(this.product_data, "quantity", 1);
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
  computed: {},
};
</script>

<style lang="scss">
.v-catalog-item {
  padding: $base;
  border-radius: $base / 2;
  background: $white;
  box-shadow: 8px 8px 16px #ebebeb, -8px -8px 16px #ffffff;

  &__img-container {
    display: flex;
    max-height: 250px;
    margin-bottom: $base;
  }

  &__img {
    display: flex;
    width: 100%;
    object-fit: contain;
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
