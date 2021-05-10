<template>
  <div class="combobox">
    <label class="combobox__label" :for="id">{{ labelText }}</label>
    <select
      class="combobox__select"
      :id="id"
      v-bind="$attrs"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
      <option
        class="combobox__option"
        :value="disabledOption.value"
        disabled
        selected
      >
        --- {{ disabledOption.text }} ---
      </option>
      <option
        class="combobox__option"
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <div class="combobox__container-icon">
      <BaseIcon name="expand" height="24" width="24" fill="#3A4145" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCombobox",
  inheritAttrs: false,
  props: {
    id: {
      type: String,
    },
    labelText: {
      type: String,
      required: true,
    },
    disabledOption: {
      type: Object,
      default: () => {
        return {
          value: "",
          text: "Seleccione una opción",
        };
      },
    },
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: [Number, String],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../../styles/components/base/combobox.scss";
</style>
