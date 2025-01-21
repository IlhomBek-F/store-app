<script setup lang="ts">
import ProductItem from './ProductItem.vue'
import Spinner from './Spinner.vue'
import { useShoppingStore } from '@/stores/shopping'
import { useProducts } from '@/composables/useProducts'

const { addToBasket } = useShoppingStore()
const { loading, data } = useProducts()
</script>
<template>
  <section v-if="!loading" class="flex gap-4">
    <ProductItem
      v-for="item in data"
      :key="item.id"
      :product="item"
      :addToShoppingList="() => addToBasket(item)"
    />
  </section>
  <Spinner v-else-if="loading" />
</template>
