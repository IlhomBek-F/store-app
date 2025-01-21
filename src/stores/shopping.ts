import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useShoppingStore = defineStore('shopping', () => {
  const productsHash = {}
  const products = ref([])
  const countShoppingList = computed(() => products.value.length)

  const addToBasket = (product) => {
    if (!productsHash[product.id]) {
      products.value.push(product)
      productsHash[product.id] = product
    }
  }

  const deleteFromBasket = (productId: number) => {
    products.value = products.value.filter((product: any) => product.id !== productId)
    delete productsHash[productId]
  }

  return { products, addToBasket, countShoppingList, deleteFromBasket }
})
