import products from "../products"
import { action, makeObservable, observable } from "mobx";
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
      //my code
  }
  
  deleteProduct = (productId) => {
        this.products = this.products.filter((product) => product.id !== productId);
      };
  };


const productStore = new ProductStore();
export default productStore;