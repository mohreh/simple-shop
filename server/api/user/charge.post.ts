export default defineEventHandler(async (event) => {
  const { amount } = await readBody(event);

  let currentAmount = parseInt(getCookie(event, "cash") || 0);
  console.log(amount, currentAmount);

  currentAmount += parseInt(amount);

  setCookie(event, "cash", currentAmount, {
    secure: true,
  });

  return {
    ok: true,
    message: "حساب شما با موفقیت شارژ شد.",
  };
});
