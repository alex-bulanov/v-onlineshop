<template>
  <div class="v-catalog-item">
    <v-popup
      v-if="isInfoPopupVisible"
      @closePopup="closeInfoPopup"
      rightButtonTitle="Add To Card"
      :popUpTitle="product_data.name"
      @rightButtonAction="addToCart"
    >
      <img
        class="v-catalog-item__img"
        :src="require('../../assets/images/' + product_data.image)"
        :alt="product_data.name"
      />
      <h3 class="v-catalog-item__title">{{ product_data.name }}</h3>
      <p class="v-catalog-item__price">
        Цена: {{ product_data.price }} &#8381;
      </p>
    </v-popup>

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
      <button class="v-catalog-item__show-info" @click="showPopupInfo">
        Show info
      </button>
      <button class="v-catalog-item__button button" @click="addToCart">
        В корзину
      </button>
    </div>
  </div>
</template>

<script>
import VPopup from "../popup/v-popup.vue";

export default {
  name: "v-catalog-item",
  data() {
    return {
      isInfoPopupVisible: false,
    };
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
  components: { VPopup },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
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
