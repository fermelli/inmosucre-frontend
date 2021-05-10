<template>
  <div class="wrapper-nav">
    <transition name="slide-left">
      <nav v-if="isOpen" class="nav">
        <div class="nav__controls">
          <button class="btn btn--round btn--secondary" @click="$emit('close')">
            <BaseIcon name="close" height="24" width="24" fill="#ffffff" />
          </button>
        </div>
        <ul class="nav__list">
          <li class="nav__list-item">
            <router-link class="nav__link" :to="{ name: 'Home' }">
              Inicio
            </router-link>
          </li>
          <li class="nav__list-item">
            <router-link class="nav__link" :to="{ name: 'Agencies' }">
              Agencias
            </router-link>
          </li>
          <li class="nav__list-item">
            <router-link class="nav__link" :to="{ name: 'Properties' }">
              Propiedades
            </router-link>
          </li>
          <li class="nav__list-item">
            <router-link class="nav__link" :to="{ name: 'Sellers' }">
              Vendedores
            </router-link>
          </li>
          <li class="nav__list-item">
            <router-link class="nav__link" :to="{ name: 'Clients' }">
              Clientes
            </router-link>
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AppNav",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      if (window.innerWidth >= 1400) {
        this.$emit("open");
      }
    },
  },
  watch: {
    $route: function () {
      if (window.innerWidth <= 1400) {
        this.$emit("close");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../styles/components/appnav.scss";
</style>
