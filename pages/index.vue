<template>
  <div class="container">
    <Products class="box basis-2/3" />
    <Basket class="box border border-gray-200 rounded-md basis-1/3 shadow-md" />
  </div>
</template>

<style lang="postcss">
.container {
  @apply px-10 py-10 flex flex-row h-screen w-screen min-w-full;
}

.box {
  @apply mx-3 px-5 py-5 h-full overflow-y-scroll;
}

h1 {
  @apply text-xl font-bold border-b border-gray-200 pb-4 text-slate-700;
}
</style>
