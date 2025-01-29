import { ref } from 'vue'
import { db } from '../../firebase.js'
import { doc, getDoc } from 'firebase/firestore'
import type { ProductType } from '@/core/index.js'

const data = ref<{ products: ProductType[] }>({ products: [] })
const error = ref<Error>()
const loading = ref(false)

const getProducts = async () => {
  loading.value = true
  try {
    const docRef = doc(db, 'products', 'jyvzvvrraYT9mTTO3Aqp')
    const res = await getDoc(docRef)
    data.value = res.data()?.products
  } catch (err: unknown) {
    if (err instanceof Error) {
      error.value = err
    }
  } finally {
    loading.value = false
  }
}

getProducts()

export const useProducts = () => ({ loading, data })
