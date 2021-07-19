<template>
  <div class="v-catalog">
    <h2 class="v-catalog__title">Каталог</h2>

    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v-catalog__link">Корзина: {{ CART.length }}</div>
    </router-link>
    <div class="filters">
      <v-select
        :options="categories"
        @select="sortByCategories"
        :selected="selected"
        :isExpanded="IS_DESKTOP"
      />

      <div class="range-slider">
        <input
          type="range"
          min="0"
          max="10000"
          step="10"
          v-model.number="minPrice"
          @change="setRangeSlider"
        />
        <input
          type="range"
          min="0"
          max="10000"
          step="10"
          v-model.number="maxPrice"
          @change="setRangeSlider"
        />
      </div>
      <div class="range-values">
        <p>Min: {{ minPrice }}</p>
        <p>Max: {{ maxPrice }}</p>
      </div>
    </div>

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
      minPrice: 0,
      maxPrice: 10000,
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
        this.sortByCategories();
        this.sortedProductsBySearchValue(this.SEARCH_VALUE);
      }
    });
  },
  components: { vCatalogItem, vSelect },
  methods: {
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sortByCategories();
    },
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByCategories(category) {
      let vm = this;
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter((item) => {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice;
      });
      if (category) {
        this.sortedProducts = this.sortedProducts.filter((e) => {
          vm.selected = category.name;
          return e.category === category.name;
        });
      }
    },
    sortedProductsBySearchValue(value) {
      this.sortedProducts = [...this.PRODUCTS];
      if (value) {
        this.sortedProducts = this.sortedProducts.filter((item) => {
          return item.name.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        this.sortedProducts = this.PRODUCTS;
      }
    },
  },
  watch: {
    SEARCH_VALUE() {
      this.sortedProductsBySearchValue(this.SEARCH_VALUE);
    },
  },
  computed: {
    ...mapGetters([
      "PRODUCTS",
      "CART",
      "IS_MOBILE",
      "IS_DESKTOP",
      "SEARCH_VALUE",
    ]),
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
  position: relative;
  margin: 0 auto;
  padding-top: 16px;

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

  .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .range-slider {
    width: 200px;
    margin: auto 16px auto auto;
    text-align: center;
    position: relative;
  }

  .range-slider svg,
  .range-slider input[type="range"] {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  input[type="range"]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }
}
</style>
