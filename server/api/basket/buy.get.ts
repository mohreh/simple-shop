export default defineEventHandler(async (event) => {
  const cash = getCookie(event, "cash") || 0;
  const totalPrice = await useStorage().getItem("basket:totalPrice");

  if (cash >= totalPrice) {
    setCookie(event, "basket", JSON.stringify({}), {
      secure: true,
    });

    setCookie(event, "cash", cash - totalPrice, {
      secure: true,
    });

    return {
      ok: true,
      message: "خرید با موفقیت انجام شد.",
    };
  }

  return {
    ok: false,
    message: "موجودی شما کافی نمی‌باشد.",
  };
});
