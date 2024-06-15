<script setup lang="ts">
import { ref, defineProps, onMounted } from "vue";

const props = defineProps({
  row: {
    type: Number,
    required: true,
  },
});

const isChecked = ref(false);

onMounted(() => {
  const checkbox = document.getElementById(`direction${props.row}`) as HTMLInputElement;
  if (checkbox) {
    isChecked.value = checkbox.checked;
    checkbox.addEventListener("change", () => {
      isChecked.value = checkbox.checked;
    });
  }
});
</script>

<template>
  <div>
    {{ isChecked ? "TRUE" : "FALSE" }}
  </div>
</template>
