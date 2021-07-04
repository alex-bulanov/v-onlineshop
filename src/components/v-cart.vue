<template>
  <div class="v-cart">
    <h2 class="v-cart__title">Корзина</h2>
    <router-link :to="{ name: 'catalog' }">
      <div class="v-cart__link">Назад в каталог</div>
    </router-link>
    <p class="v-cart__message" v-if="!cart_data.length">Нет товаров корзине</p>
    <div class="v-cart__list">
      <v-cart-item
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
      />
    </div>
  </div>
</template>

<script>
import VCartItem from "./v-cart-item.vue";
import { mapActions } from "vuex";
export default {
  name: "v-cart",
  data() {
    return {};
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { VCartItem },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
  computed: {},
};
</script>

<style lang="scss">
.v-cart {
  padding-top: $base * 2;

  &__title {
    margin: 0 auto $base * 2;
    text-align: center;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: $base;
  }

  &__link {
    position: absolute;
    top: $base;
    right: $base;
    border: 1px solid;
    padding: $base / 2;
  }

  &__message {
    text-align: center;
  }
}
</style>
