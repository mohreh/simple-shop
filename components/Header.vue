<template>
  <div class="flex flex-row justify-between px-10 pt-1 shadow">
    <h2>فروشگاه کیکپ</h2>
    <div class="flex flex-row items-center gap-2">
      <p>موجودی شما:</p>
      <strong>${{ basket.cash }}</strong>
      <button
        @click="toggleChargeBox"
        class="bg-red-500 px-6 py-2 text-gray-50 text-sm font-bold rounded-lg mr-3"
      >
        افزایش موجودی
      </button>
    </div>

    <div
      v-if="!hidden"
      class="fixed w-60 h-auto top-16 left-8 bg-slate-50 z-20 shadow-xl rounded-xl border"
    >
      <div class="relative rounded-t-xl shadow-sm">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-6"
        >
          <span class="text-gray-500">$</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          v-model="amount"
          class="block py-2 w-full rounded-md border-gray-300 px-6"
          placeholder="0.00"
        />
      </div>
      <button
        @click="charge"
        class="bg-red-500 py-2 w-full text-gray-50 text-sm font-bold rounded-b-xl"
      >
        افزایش موجودی
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBasket } from "@/stores/basket";
const basket = useBasket();
basket.myCash();

const hidden = ref(true);
const amount = ref(0);

const toggleChargeBox = () => {
  hidden.value = !hidden.value;
};

const charge = async () => {
  hidden.value = !hidden.value;
  await basket.charge(amount.value);
};
</script>

<style lang="postcss">
h2 {
  @apply text-lg font-bold pr-2 pt-3;
}
</style>
