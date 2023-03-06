const fetchProducts = async (productToBeSearched) => {
  try {
    const productUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${productToBeSearched}`;
    const productResponse = await fetch(productUrl);
    const productsData = await productResponse.json();z
    return productsData;
  } catch (error) {
    return error;
  }
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
