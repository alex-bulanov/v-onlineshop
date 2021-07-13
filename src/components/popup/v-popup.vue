<template>
  <div class="v-popup" ref="popup">
    <div class="v-popup__wrapper">
      <div class="v-popup__header">
        <span>{{ popUpTitle }}</span>
        <span class="material-icons" @click="closePopup">close</span>
      </div>
      <div class="v-popup__content">
        <slot></slot>
      </div>
      <div class="v-popup__footer">
        <button class="v-popup__close" @click="closePopup">close</button>
        <button class="v-popup__add" @click="rightButtonAction">
          {{ rightButtonTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    rightButtonTitle: {
      type: String,
      default: "Ok",
    },
    popUpTitle: {
      type: String,
      default: "PopUp Name",
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", (evt) => {
      if (evt.target === vm.$refs["popup"]) {
        vm.closePopup();
      }
    });
  },
  components: {},
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
    rightButtonAction() {
      this.$emit("rightButtonAction");
    },
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss">
.v-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba($white, 0.5);

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 400px;
    padding: 16px;
    background-color: $white;
    box-shadow: 8px 8px 16px #ebebeb, -8px -8px 16px #ffffff;
  }

  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__add {
    padding: 8px;
    color: #000;
    background-color: aqua;
  }

  &__close {
    padding: 8px;
    color: #000;
    background-color: lightcoral;
  }
}
</style>
