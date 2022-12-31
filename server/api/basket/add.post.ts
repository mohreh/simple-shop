export default defineEventHandler(async (event) => {
  const { id } = await readBody(event);

  const basket = JSON.parse(getCookie(event, "basket") || "{}");
  const product = await $fetch(`/api/products/${id}`);

  if (basket[id] && basket[id] == product.quantity) {
    return {
      ok: false,
      message: "تعداد مورد نظر شما در سایت موجود نمی‌باشد.",
    };
  }

  basket[id] = basket[id] + 1 || 1;
  setCookie(event, "basket", JSON.stringify(basket), {
    secure: true,
  });

  return {
    ok: true,
    message: "با موفقیت افزوده شد.",
  };
});
