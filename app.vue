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
  @apply overflow-y-hidden text-slate-800 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-slate-700;
  direction: rtl;
  height: -webkit-fill-available;
  min-height: -webkit-fill-available;
  font-family: "Vazirmatn", ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
}
</style>
