export default {
  async getProducts() {
    const response = await fetch(
      "http://jompha.local/wp-json/v1/store/products"
    );
    return response.json();
  },
  async getProduct(id) {
    const response = await fetch(
      `https://jompha.local/wp-json/v1/store/products/${id}`
    );
    return response.json();
  },
};
