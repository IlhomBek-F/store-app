<script setup lang="ts">
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import { ref } from 'vue'

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
  },
])
</script>

<template>
  <Menubar :model="items">
    <template #end>
      <div class="flex items-center gap-2">
        <Button>
          <i class="pi pi-shopping-cart"></i>
        </Button>
      </div>
    </template>
  </Menubar>
</template>
