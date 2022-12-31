export default defineEventHandler(async (event) => {
  setCookie(event, "basket", JSON.stringify({}), {
    secure: true,
  });

  return {
    ok: true,
    message: "سبد خرید پاک شد.",
  };
});
