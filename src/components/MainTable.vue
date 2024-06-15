<script setup lang="ts">
import TableRow from "./TableRow.vue";
</script>

<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">account</th>
          <th scope="col">item</th>
          <th scope="col">id</th>
          <th scope="col">amount</th>
          <th scope="col">direction</th>
          <th scope="col">has_attr</th>
          <th scope="col">attr</th>
        </tr>
      </thead>
      <tbody>
        <TableRow :row="1" :initialValue="1000.0" />
        <TableRow :row="2" :initialValue="1500" />
        <TableRow :row="3" :initialValue="2000" />
      </tbody>
    </table>
  </div>
</template>
