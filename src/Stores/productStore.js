import products from "../products"
import { action, makeObservable, observable } from "mobx";
import slugify from "react-slugify";
import "../App"


class ProductStore{
    products = products;

    constructor() {
    makeObservable(this, {
     products: observable,
     createProduct: action,
     deleteProduct: action,
});
  }

  createProduct = (newProduct) => {
    newProduct.id = this.products[this.products.length - 1].id + 1;
    newProduct.slug = slugify(newProduct.name);
    this.products.push(newProduct);
    console.log("productStore -> createProduct -> this.products", this.products);
  };
  
  deleteProduct = (productId) => {
        this.products = this.products.filter((product) => product.id !== productId);
      };
  };


const productStore = new ProductStore();
export default productStore;