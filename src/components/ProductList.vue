<script setup lang="ts">
import ProductItem from './ProductItem.vue'
import { useShoppingStore } from '../stores/shopping'
const { addToBasket } = useShoppingStore()
</script>

<template>
  <section class="flex gap-4">
    <ProductItem
      v-for="item in [1, 2, 3, 4]"
      :key="item"
      :addToShoppingList="() => addToBasket(item)"
    />
  </section>
</template>
