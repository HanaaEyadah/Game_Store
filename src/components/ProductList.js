import { ListWrapper } from "../styles";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import productStore from "../Stores/productStore"
import { observer } from "mobx-react";
import AddButton from "../Buttons/AddButton";




const ProductList = ({ products, createProduct, deleteProduct, product }) => {
  const [query, setQuery] = useState("");

  const productList = productStore.products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
      />
    ));
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
      {/* <BsPlusCircle className="float-right" size="2em" onClick={openModal} /> */}
      {/* <ProductModal
  isOpen={isOpen}
  closeModal={closeModal}
  createProduct={createProduct}
/> */}
      <AddButton />
      
    </div>
  );
};

export default observer(ProductList);