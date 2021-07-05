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
        @increment="increment(index)"
        @decrement="decrement(index)"
      />
    </div>
    <div class="v-cart__total">
      <p class="v-cart__total-title">Total:</p>
      <p class="v-cart__total-value">{{ cartTotalCost }} &#8381;</p>
    </div>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue";
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
  components: { vCartItem },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
  },
  computed: {
    cartTotalCost() {
      let result = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }

        result = result.reduce(function (sum, el) {
          return sum + el;
        }, 0);
        return result;
      } else {
        return 0;
      }
    },
  },
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

  &__total {
    padding: $base;
    display: flex;
    justify-content: center;
    gap: $base;
  }

  &__total-title {
    margin: 0;
    font-size: 24px;
    line-height: 24px;
  }

  &__total-value {
    margin: 0;
    font-size: 24px;
    line-height: 24px;
  }
}
</style>
