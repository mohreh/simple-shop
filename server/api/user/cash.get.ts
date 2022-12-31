export default defineEventHandler(async (event) => {
  return getCookie(event, "cash") || 0;
});
