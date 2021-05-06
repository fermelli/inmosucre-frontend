<template>
  <div class="wrapper-app-bar">
    <div class="app-bar container">
      <div class="app-bar__container-logo">
        <router-link :to="{ name: 'Home' }">
          <img class="app-bar__logo" src="@/assets/logo.svg" alt="Logo" />
        </router-link>
      </div>
      <slot></slot>
      <button
        class="btn btn--round btn--primary app-bar__btn-menu"
        @click="$emit('open')"
      >
        <BaseIcon name="menu" height="24" width="24" fill="#ffffff" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  props: {
    isOpen: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../styles/components/appbar.scss";
</style>
