import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useShoppingStore = defineStore('shopping', () => {
  const productsHash = {}
  const products = ref([])
  const countShoppingList = computed(() => products.value.length)

  const addToBasket = (product) => {
    if (!productsHash[product]) {
      products.value.push(product)
      productsHash[product] = product
    }
  }

  const deleteFromBasket = (productId: string) => {
    products.value = products.value.filter((product) => product !== productId)
    delete products[productId]
  }

  return { products, addToBasket, countShoppingList, deleteFromBasket }
})
