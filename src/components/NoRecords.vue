<template>
  <div class="no-records">
    <div class="no-records__container">
      <h2 class="no-records__title">{{ title }}</h2>
      <BaseIcon
        class="no-records__icon"
        :name="iconName"
        width="140"
        height="140"
      />
      <button
        class="no-records__btn btn btn--contained btn--primary-variant"
        @click="$emit('click-button')"
      >
        AÑADIR AGENCIA
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoRecords",
  props: {
    title: {
      type: String,
      default: "no hay items registrados",
    },
    iconName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
@import "./../styles/components/norecords.scss"
</style>
