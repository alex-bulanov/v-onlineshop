<template>
  <div class="v-catalog">
    <h2 class="v-catalog__title">Каталог</h2>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in products"
        :key="product.article"
        :product_data="product"
        @sendArticle="showChildArticle"
      />
    </div>
  </div>
</template>

<script>
import VCatalogItem from "./v-catalog-item.vue";

export default {
  name: "v-catalog",
  data() {
    return {
      products: [
        {
          image: "1.jpg",
          name: "T-shirt 1",
          price: 2100.234234234,
          article: "T1",
          available: true,
          category: "Мужские",
        },
        {
          image: "2.jpg",
          name: "T-shirt 2",
          price: 3150.12312412,
          article: "T2",
          available: true,
          category: "Женские",
        },
        {
          image: "3.jpg",
          name: "T-shirt 3",
          price: 4200.51524,
          article: "T3",
          available: false,
          category: "Женские",
        },
        {
          image: "4.jpg",
          name: "T-shirt 4",
          price: 5300.1245512,
          article: "T4",
          available: true,
          category: "Мужские",
        },
        {
          image: "5.jpg",
          name: "T-shirt 5",
          price: 6500.3522314,
          article: "T5",
          available: false,
          category: "Женские",
        },
        {
          image: "6.jpeg",
          name: "T-shirt 6",
          price: 8700.4124123,
          article: "T6",
          available: true,
          category: "Женские",
        },
      ],
    };
  },
  components: { VCatalogItem },
  methods: {
    showChildArticle(article) {
      console.log(article);
    },
  },
  computed: {},
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
