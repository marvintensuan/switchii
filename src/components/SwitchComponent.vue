<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps({
  row: {
    type: Number,
    required: true,
  },
});

const switchName = computed(() => `switch${props.row}`);
const directionId = computed(() => `direction${props.row}`);
const type = "checkbox"; // If you need to dynamically change type, you can compute it similarly
</script>

<template>
  <div class="form-check form-switch">
    <input :type="type" :name="switchName" :id="directionId" class="form-check-input" />
  </div>
</template>
