<template>
  <div class="v-cart-item">
    <div class="v-cart-item__img-container">
      <img
        class="v-catalog-item__img"
        :src="require('../assets/images/' + cart_item_data.image)"
        :alt="cart_item_data.name"
      />
    </div>
    <div class="v-cart-item__info">
      <h3 class="v-cart-item__title">{{ cart_item_data.name }}</h3>
      <p class="v-cart-item__price">{{ cart_item_data.price }}</p>
      <p class="v-cart-item__article">{{ cart_item_data.article }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <span>Количество:</span>
      {{ cart_item_data.quantity }}
    </div>
    <button class="v-cart-item__button button" @click="deleteFromCart">
      Удалить
    </button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  data() {
    return {};
  },

  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
  computed: {},
};
</script>

<style lang="scss">
.v-cart-item {
  display: grid;
  gap: $base;
  grid-template-columns: repeat(2, 1fr);
  padding: $base;
  border-radius: $base / 2;
  background: $white;
  box-shadow: 8px 8px 16px #ebebeb, -8px -8px 16px #ffffff;

  @media screen and (min-width: $small) {
    grid-template-columns: 20% auto 20% 20%;
  }

  &__img-container {
    display: flex;
    width: 100%;
    height: 100px;
  }

  &__img {
    display: flex;
    object-fit: contain;
  }

  &__title {
    margin: 0 auto $base;
  }

  &__price {
    margin: 0 auto $base;
  }

  &__article {
    margin: 0 auto;
  }

  &__quantity {
    align-self: center;
    text-align: center;

    span {
      display: block;
    }
  }

  &__button {
    align-self: center;
  }
}
</style>
