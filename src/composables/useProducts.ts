import { computed, onMounted, ref } from 'vue'
import { db } from '../../firebase.js'
import { doc, getDoc } from 'firebase/firestore'

export function useProducts() {
  const _data = ref({})
  const _error = ref(null)
  const _loading = ref(false)

  const loading = computed(() => _loading.value)
  const data = computed(() => _data.value)

  const getProducts = async () => {
    _loading.value = true
    try {
      const docRef = doc(db, 'products', 'jyvzvvrraYT9mTTO3Aqp')
      const res = await getDoc(docRef)
      _data.value = res.data()?.products
      _loading.value = false
    } catch (err: unknown) {
      _error.value = err
    } finally {
      _loading.value = false
    }
  }

  onMounted(() => {
    getProducts()
  })

  return { loading, data }
}
