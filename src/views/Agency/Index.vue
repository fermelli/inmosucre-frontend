<template>
  <div>
    <div class="container container--view">
      <div class="no-records">
        <div class="no-records__container">
          <h2 class="no-records__title">NO HAY AGENCIAS REGISTRADAS</h2>
          <BaseIcon
            class="no-records__icon"
            name="no-agency-records"
            width="140"
            height="140"
          />
          <button
            class="no-records__btn btn btn--contained btn--primary-variant"
          >
            AÑADIR AGENCIA
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.no-records {
  background-color: #ffffff;
  height: calc(100vh - 92px);
}

.no-records__container {
  padding: 2rem 0;
}

.no-records__title {
  color: #c1c1c1;
  text-align: center;
  padding: 0 1rem;
}

.no-records__icon {
  display: block;
  margin: 3rem auto;
}

.no-records__btn {
  margin: 0 auto;
}

@media (min-width: 1400px) {
  .no-records {
    height: calc(100vh - 112px);
  }
}
</style>
