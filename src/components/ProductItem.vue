<script setup lang="ts">
const prop = defineProps({
  addToShoppingList: {
    type: Function,
  },
  product: {
    type: Object,
  },
})
</script>

<template>
  <div class="w-[380px] relative shadow-md mb-[50px] mx-auto bg-[#fafafa]">
    <div class="absolute left-0 top-5 text-[13px] font-[700] bg-red-500 text-white py-1 px-2">
      HOT
    </div>
    <div class="flex items-center justify-center h-[300px] p-12 bg-[#f0f0f0]">
      <img class="max-w-full max-h-full" :src="product?.img" alt="product_img" />
    </div>
    <div class="p-4">
      <span class="product-catagory block text-[12px] font-[700] uppercase text-[#ccc] mb-4"
        >Women,bag</span
      >
      <h4
        class="font-[500] hover:text-orange-500 block mb-4 uppercase text-[#363636] transition:0.3s"
      >
        Women leather bag
      </h4>
      <p class="text-[15px] mb-4 text-[#999]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!
      </p>
      <div class="overflow-hidden border-t-[1px] border-[#eee]">
        <div class="text-4 text-[#fbb72c] font-semibold">
          <small class="text-[80%] font-normal line-through inline-block mr-2">$96.00</small>${{
            product.price
          }}
        </div>
        <div class="text-right">
          <i
            class="pi pi-shopping-cart cursor-pointer hover:text-orange-500"
            @click="addToShoppingList"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>
