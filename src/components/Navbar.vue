<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import OverlayBadge from 'primevue/overlaybadge'
import { useShoppingStore } from '../stores/shopping'

const router = useRouter()
const shoppingStore = useShoppingStore()

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => router.replace({ path: '/home' }),
  },
])
</script>

<template>
  <Menubar :model="items">
    <template #end>
      <div class="flex items-center gap-2">
        <OverlayBadge :value="shoppingStore.countShoppingList" severity="danger">
          <Button @click="() => router.push('/shopping')">
            <i class="pi pi-shopping-cart"></i>
          </Button>
        </OverlayBadge>
      </div>
    </template>
  </Menubar>
</template>
