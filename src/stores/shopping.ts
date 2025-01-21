import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { ProductType } from '@/core'

export const useShoppingStore = defineStore('shopping', () => {
  const productsHash: Record<number, ProductType> = {}
  const products = ref<ProductType[]>([])
  const countShoppingList = computed(() => products.value.length)

  const addToBasket = (product: ProductType) => {
    if (!productsHash[product.id]) {
      products.value.push(product)
      productsHash[product.id] = product
    }
  }

  const deleteFromBasket = (productId: number) => {
    products.value = products.value.filter((product: ProductType) => product.id !== productId)
    delete productsHash[productId]
  }

  return { products, addToBasket, countShoppingList, deleteFromBasket }
})
