<template>
  <div>
    <form action="submit">
      <input type="file" @change="handleFileUpload" accept=".csv" value="" />
      <button type="button" @click="readFile">Read file</button>
    </form>
    <pre>{{ fileStore.parsedCSV }}</pre>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useFileStore } from "../stores/fileStore.js";

export default {
  setup() {
    const selectedFile = ref(null);
    const fileStore = useFileStore();

    const handleFileUpload = (event) => {
      selectedFile.value = event.target.files[0];
    };

    const readFile = () => {
      if (selectedFile.value) {
        const reader = new FileReader();
        reader.onload = (e) => {
          fileStore.setFileContent(e.target.result);
        };
        reader.readAsText(selectedFile.value);
      }
    };

    return {
      selectedFile,
      fileStore,
      handleFileUpload,
      readFile,
    };
  },
};
</script>
