<template>
  <form class="form" autocomplete="off" @submit.prevent="$emit('store-agency')">
    <BaseInput
      v-model="formData.code"
      icon-name="code"
      label-text="Código"
      id="code"
      type="text"
      placeholder="Código de la Agencia"
      required
    />
    <BaseInput
      v-model="formData.address"
      icon-name="address"
      label-text="Dirección"
      id="address"
      type="text"
      placeholder="Dirección de la Agencia"
      required
    />
    <BaseInput
      v-model="formData.postalCode"
      icon-name="postal-code"
      label-text="Código postal"
      id="postal-code"
      type="text"
      placeholder="Código postal de la Agencia"
      required
    />
    <BaseCombobox
      v-model="formData.city"
      id="city"
      label-text="Ciudad"
      :options="cities"
      required
    />
    <BaseInput
      v-model="formData.fax"
      icon-name="fax"
      label-text="Fax"
      id="fax"
      type="tel"
      placeholder="Código postal de la Agencia"
      required
    />
    <BaseCombobox
      v-model="formData.actionZone"
      id="action-zone"
      label-text="Zona de acción"
      :options="actionZones"
      required
    />
    <BaseInput
      v-model="formData.phone"
      icon-name="phone"
      label-text="Teléfono"
      id="phone"
      type="tel"
      placeholder="Teléfono de la Agencia"
      required
    />
    <div class="form__actions">
      <button type="button" class="btn btn--outline" @click="$emit('reset')">
        CANCELAR
      </button>
      <button type="submit" class="btn btn--contained btn--primary-variant">
        AÑADIR AGENCIA
      </button>
    </div>
  </form>
</template>

<script>
import cities from "@/utils/cities.js";
import actionZones from "@/utils/action-zones.js";

export default {
  name: "FormAgency",
  props: {
    formData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      cities: cities,
      actionZones: actionZones,
    };
  },
};
</script>

<style lang="scss" scoped></style>
