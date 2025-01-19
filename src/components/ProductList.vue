<script setup lang="ts">
import ProductItem from './ProductItem.vue'
</script>

<template>
  <section class="flex gap-4">
    <ProductItem v-for="item in [1, 2, 3, 4]" :key="item" />
  </section>
</template>
