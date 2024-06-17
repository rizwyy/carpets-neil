export default defineEventHandler(async (event) => {
  const url = "https://www.rolscarpets.com/en/products/made-to-measure-rugs/";
  const response = await fetch(url);
  const data = await response.text();

  return data;
});
