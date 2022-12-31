<template>
  <NuxtPage class="mb-12" />
</template>

<script setup></script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  @apply transition-all;
}

html {
  height: -webkit-fill-available;
}

body {
  @apply overflow-y-hidden text-slate-800 bg-slate-50;
  direction: rtl;
  height: -webkit-fill-available;
  min-height: -webkit-fill-available;
  font-family: "Vazirmatn", ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
