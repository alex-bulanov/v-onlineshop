<template>
  <div class="v-catalog">
    <h2 class="v-catalog__title">Каталог</h2>

    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v-catalog__link">Корзина: {{ CART.length }}</div>
    </router-link>
    <v-select
      :options="categories"
      @select="sortByCategories"
      :selected="selected"
      :isExpanded="IS_DESKTOP"
    />

    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in filteredProducts"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import vSelect from "../select/v-select.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalog",
  data() {
    return {
      selected: "Все",
      sortedProducts: [],
      categories: [
        {
          name: "Все",
          value: "all",
        },
        {
          name: "Мужские",
          value: "men",
        },
        {
          name: "Женские",
          value: "woman",
        },
      ],
    };
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("data ready");
      }
    });
  },
  components: { vCatalogItem, vSelect },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByCategories(category) {
      this.sortedProducts = [];
      let vm = this;

      this.PRODUCTS.map((item) => {
        if (item.category === category.name) {
          vm.sortedProducts.push(item);
        }
      });
      this.selected = category.name;
    },
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "IS_MOBILE", "IS_DESKTOP"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
};
</script>

<style lang="scss">
.v-catalog {
  margin: 0 auto;

  &__link {
    position: absolute;
    top: $base;
    right: $base;
    border: 1px solid;
    padding: $base / 2;
  }

  &__title {
    margin: 0 auto $base * 2;
    text-align: center;
  }

  &__list {
    display: grid;
    gap: $base * 2;

    @media screen and (min-width: $small) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: $large) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: $extra-large) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__v-select {
    margin-bottom: $base;
  }
}
</style>
