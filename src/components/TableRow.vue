<script setup lang="ts">
import { defineProps } from "vue";

import FlippableNumber from "./FlippableNumber.vue";
import SwitchComponent from "./SwitchComponent.vue";
import TruableText from "./TruableText.vue";

const props = defineProps({
  row: {
    type: Number,
    required: true,
  },
  initialValue: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <tr>
    <td>ASSET101010</td>
    <td>CASH</td>
    <td>00001</td>
    <td><FlippableNumber :row="props.row" :initialValue="props.initialValue" /></td>
    <td><SwitchComponent :row="props.row" /></td>
    <td><TruableText :row="props.row" /></td>
    <td>atrrr</td>
  </tr>
</template>
