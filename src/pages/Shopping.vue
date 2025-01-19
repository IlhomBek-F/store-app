<script setup lang="ts">
import { useShoppingStore } from '../stores/shopping'
import { storeToRefs } from 'pinia'

const store = useShoppingStore()
const { products } = storeToRefs(store)
</script>

<template>
  <h1 class="font-semibold text-[30px] py-4">Shopping list</h1>
  <h1>{{ products.length }}</h1>
</template>
