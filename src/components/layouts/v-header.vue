<template>
  <div class="v-header">
    <router-link :to="{ name: 'mainPage' }">
      <div class="v-header__logo"></div>
    </router-link>
    <div class="v-header__search">
      <input class="v-header__search-field" type="text" v-model="searchValue" />
      <button class="v-header__search-button" @click="search(searchValue)">
        Поиск
      </button>
      <button class="v-header__clear-button" @click="clearSearch">
        Отмена
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-header",
  data() {
    return {
      searchValue: "",
    };
  },
  mounted() {},
  components: {},
  methods: {
    ...mapActions(["GET_SEARCH_VALUE_TO_VUEX"]),
    search(value) {
      this.GET_SEARCH_VALUE_TO_VUEX(value);
      if (this.$router.path !== "/catalog") {
        this.$router.push("/catalog");
      }
    },
    clearSearch() {
      this.searchValue = "";
      this.GET_SEARCH_VALUE_TO_VUEX();
      if (this.$router.path !== "/catalog") {
        this.$router.push("/catalog");
      }
    },
  },
  computed: {
    ...mapGetters(["SEARCH_VALUE"]),
  },
  watch: {},
};
</script>

<style lang="scss">
.v-header {
  display: flex;
  justify-content: space-between;
  padding: 20px 16px;
  background-color: aquamarine;

  &__logo {
    border-radius: 100%;
    width: 40px;
    height: 40px;
    background-color: azure;
  }

  &__search-field {
    padding: 8px;
    appearance: none;
    background-color: aquamarine;
  }

  &__search-button,
  &__clear-button {
    display: inline-flex;
    margin-left: 16px;
    padding: 8px;
    appearance: none;
    background-color: aquamarine;
  }
}
</style>
