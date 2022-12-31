export default defineEventHandler(async (event) => {
  const { id } = await readBody(event);

  const basket = JSON.parse(getCookie(event, "basket") || "{}");

  basket[id] = basket[id] - 1;
  if (basket[id] <= 0) {
    delete basket[id];
  }

  setCookie(event, "basket", JSON.stringify(basket), {
    secure: true,
  });

  return {
    ok: true,
    message: "با موفقیت کاسته شد.",
  };
});
