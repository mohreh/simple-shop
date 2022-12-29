<template>
  <div>
    <h1>محصولات</h1>
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <div
          class="img-container"
          :style="{ backgroundImage: 'url(' + product.picture + ')' }"
        />
        <p class="font-semibold p-3">{{ product.name }}</p>
        <div class="flex flex-row justify-between m-3">
          <button class="text-2xl bg-red-600 text-white rounded-full w-12 h-9">
            +
          </button>
          <p class="font-bold">${{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { pending, data: products } = await useLazyFetch("/api/products");
</script>

<style lang="postcss">
.products {
  @apply grid grid-cols-3 gap-4 pt-3;
}

.product {
  @apply mb-5 h-fit border rounded-lg shadow-lg;
}

.img-container {
  @apply h-40 bg-local bg-no-repeat bg-center bg-cover rounded-t-lg;
}

p {
  @apply my-2 text-sm;
}
</style>
