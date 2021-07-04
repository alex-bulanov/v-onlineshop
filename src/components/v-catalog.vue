<template>
  <div class="v-catalog">
    <h2 class="v-catalog__title">Каталог</h2>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import VCatalogItem from "./v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalog",
  data() {
    return {};
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("data ready");
      }
    });
  },
  components: { VCatalogItem },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
};
</script>

<style lang="scss">
.v-catalog {
  margin: 0 auto;

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
}
</style>
