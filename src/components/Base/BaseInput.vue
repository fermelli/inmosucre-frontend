<template>
  <div class="field">
    <div class="field__container-icon">
      <BaseIcon :name="iconName" height="24" width="24" fill="#3A4145" />
    </div>
    <div class="field__container-input">
      <input
        class="field__input"
        :id="id"
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      />
      <label :for="id" class="field__label">{{ labelText }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  inheritAttrs: false,
  props: {
    id: {
      type: String,
    },
    iconName: {
      type: String,
      required: true,
    },
    labelText: {
      type: String,
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
@import "./../../styles/components/base/input.scss";
</style>
