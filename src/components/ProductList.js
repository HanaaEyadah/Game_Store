import { ListWrapper } from "../styles";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import productStore from "../Stores/productStore"
import { observer } from "mobx-react";



const ProductList = () => {
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
    </div>
  );
};

export default observer(ProductList);