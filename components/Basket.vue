<template>
  <div>
    <h1 class="sticky top-0 bg-slate-50">سبد خرید</h1>
    <div class="flex flex-col gap-3 p-4 h-fit min-h-full">
      <div v-for="item in basket.items" :key="item.id" class="item">
        <div
          class="img-container"
          :style="{ backgroundImage: 'url(' + item.picture + ')' }"
        />
        <p class="text-xs px-2 w-40">{{ item.name }}</p>
        <p class="font-bold text-lg px-5 w-24">${{ item.price }}</p>
        <div
          class="flex flex-row items-center h-full rounded border border-gray-200 rounded-lg"
        >
          <div class="flex flex-col text-lg h-full">
            <button
              class="bg-red-500 h-1/2 w-6 text-slate-100"
              @click="add(item.id)"
            >
              +
            </button>
            <button
              class="bg-gray-600 text-slate-100 h-1/2 w-6"
              @click="reduce(item.id)"
            >
              -
            </button>
          </div>
          <p class="w-9 h-full text-center py-5">
            {{ item.quantity }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="sticky bottom-0 left-0 right-0 m-0 py-3 px-4 border-t-2 flex flex-row justify-between items-center bg-slate-50 h-16"
    >
      <div class="flex flex-row items-center gap-2">
        <p>قیمت کل:</p>
        <strong>${{ basket.totalPrice }}</strong>
      </div>
      <div v-if="basket.items[0]">
        <button
          @click="buy"
          class="bg-red-500 px-6 py-2 text-gray-50 text-sm font-bold rounded-lg"
        >
          خرید
        </button>
        <button
          @click="clean"
          class="bg-gray-400 px-6 py-2 text-white text-sm font-bold rounded-lg mr-3"
        >
          پاک کردن سبد
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBasket } from "@/stores/basket";
const basket = useBasket();

setTimeout(async () => {
  await basket.fetch();
}, 200);

const add = async (id: number) => {
  await basket.add(id);
};

const reduce = async (id: number) => {
  await basket.reduce(id);
};

const clean = async () => {
  await basket.clean();
};

const buy = async () => {
  await basket.buy();
};
</script>

<style scoped lang="postcss">
.item {
  @apply flex flex-row h-20 w-full items-center justify-between py-3;
}

.img-container {
  @apply w-20 h-20 py-2 bg-local bg-no-repeat bg-center bg-cover rounded-lg;
}

p {
  @apply my-2 text-sm;
}
</style>
