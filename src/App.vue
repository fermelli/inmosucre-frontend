<template>
  <div id="app">
    <AppBar :is-open="isOpen" @open="isOpen = true">
      <AppNav :is-open="isOpen" @close="isOpen = false" @open="isOpen = true" />
    </AppBar>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import AppBar from "@/components/AppBar";
import AppNav from "@/components/AppNav";

export default {
  name: "App",
  components: {
    AppBar,
    AppNav,
  },
  data() {
    return {
      isOpen: window.innerWidth >= 1400,
    };
  },
};
</script>
