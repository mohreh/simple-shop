<template>
  <div>
    <Header class="absolute top-0 left-0 w-screen h-14" />
    <Alert />
    <div class="container">
      <Products class="box basis-2/3" />
      <Basket
        class="box border border-gray-200 rounded-md basis-1/3 shadow-md"
      />
    </div>
  </div>
</template>

<style lang="postcss">
.container {
  @apply px-10 flex flex-row h-screen w-screen min-w-full max-h-screen gap-4;
}

.box {
  @apply h-auto overflow-auto mb-5 mt-20;
}

h1 {
  @apply p-4 text-xl font-bold border-b border-gray-200 pb-4 text-slate-700;
}
</style>
