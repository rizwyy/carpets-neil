export default defineEventHandler(async (event) => {
  const url = "https://theambiente.com/product-category/solid-rugs/";
  const response = await fetch(url);
  const data = await response.text();

  return data;
});
