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
import iconNames from "@/utils/icon-names.js";

export default {
  name: "BaseIcon",
  props: {
    name: {
      type: String,
      required: true,
      validator: (name) => {
        return iconNames.indexOf(name) !== -1;
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
