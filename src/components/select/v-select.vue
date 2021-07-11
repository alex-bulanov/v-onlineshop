<template>
  <div
    class="v-catalog__v-select v-select"
    @click="areOptionsVisible = !areOptionsVisible"
  >
    <p class="v-select__title">{{ selected }}</p>
    <div class="v-select__options" v-if="areOptionsVisible || isExpanded">
      <p
        class="v-select__option"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  },
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default() {
        return "";
      },
    },
    isExpanded: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  components: {},
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOptionsVisible = true;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss">
.v-select {
  position: relative;
  border: 1px solid;
  width: 200px;
  padding: $base / 2;
  cursor: pointer;

  &__title {
    margin: 0;
  }

  &__options {
    position: absolute;
    top: $base * 3;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: $base / 2;
    border: 1px solid;

    background-color: $white;
    z-index: 10;
  }

  &__option {
    margin: 0;
    padding: $base / 2;
    cursor: pointer;

    &:hover,
    &:focus {
      color: $white;
      background-color: $text-color;
    }
  }
}
</style>
