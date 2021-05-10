<template>
  <transition name="slide">
    <div class="modal-wrapper" v-show="showModal">
      <div class="modal">
        <div class="modal__header">
          <h3 class="modal__title">{{ title }}</h3>
          <button class="btn btn--round" @click="$emit('close')">
            <BaseIcon name="close" height="24" width="24" fill="red" />
          </button>
        </div>
        <div class="modal__body">
          <slot name="body">Contenido del modal</slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    showModal: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../styles/components/modalcomponent.scss";
</style>
