<template>
  <div class="v-main-page">
    <h1>Hello online-shoop</h1>
    <p>
      <router-link :to="{ name: 'catalog' }"> В каталог </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "v-main-page",
  data() {
    return {};
  },
  mounted() {},
  components: {},
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss">
</style>
