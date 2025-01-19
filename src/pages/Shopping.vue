<script setup lang="ts">
import { useShoppingStore } from '../stores/shopping'
import { storeToRefs } from 'pinia'
import Card from 'primevue/card'
import Button from 'primevue/button'

const store = useShoppingStore()
const { products } = storeToRefs(store)
</script>

<template>
  <h1 class="font-semibold text-[30px] py-4">Shopping list</h1>
  <Card class="relative" v-for="item in products" :key="item">
    <template #content>
      <Button
        icon="pi pi-trash"
        size="small"
        severity="danger"
        class="!absolute top-4 right-3"
        @click="() => store.deleteFromBasket(item)"
      />
      <div class="flex gap-5">
        <img class="h-[150px]" src="https://i.imgur.com/xdbHo4E.png" />
        <section>
          <h1 class="uppercase mb-3">Women leather bag</h1>
          <p class="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
            error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis,
            culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
          <div class="text-4 text-[#fbb72c] font-semibold">
            <small class="text-[80%] font-normal line-through inline-block mr-2">$96.00</small
            >$230.99
          </div>
        </section>
      </div>
    </template>
  </Card>
</template>
