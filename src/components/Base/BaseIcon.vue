<template>
  <svg class="icon" :width="width" :height="height" :fill="fill">
    <use
      v-bind="{
        'xlink:href': '/feather-sprite.svg#' + name,
      }"
    />
  </svg>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    name: {
      type: String,
      required: true,
      validator: (name) => {
        return ["menu", "close", "no-agency-records"].indexOf(name) !== -1;
      },
    },
    fill: {
      type: String,
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
  },
};
</script>
