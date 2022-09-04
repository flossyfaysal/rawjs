import App from "./vendor/App.js";
import Router from "./vendor/Router.js";
import API from "./vendor/API.js";

const app = new App("#root");
const router = new Router(app);

app.addComponent({
  name: "products",
  model: {
    products: [],
  },
  view(model) {
    return model.name;
  },
  async controller(model) {
    const products = await API.getProducts();
    model.products = products;
  },
});

app.addComponent({
  name: "product",
  model: {
    product: {},
  },
  view(model) {
    return model.name;
  },
  async controller(model) {
    const product = await API.getProduct(app.params[1]);
    model.product = product;
  },
});

app.addRouter("product", "^#product$");
app.addRouter("product", "^#product/(0-9+)$");
