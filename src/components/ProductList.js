import { ListWrapper } from "../styles";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import productStore from "../Stores/productStore";
import { observer } from "mobx-react";
import AddButton from "../Buttons/AddButton";
// import PacmanLoader from "react-spinners/PacmanLoader";
import authStore from "../Stores/authStore";

const ProductList = ({ products, createProduct, deleteProduct, product }) => {
  const [query, setQuery] = useState("");
  // if (productStore.loading)
  // return (
  //   <PacmanLoader
  //     color={"purple"}
  //     size={75}
  //     css={{ width: "260px !important", height: "130px !important" }}
  //   />
  // );
  const productList = productStore.products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductItem product={product} key={product.id} />);
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
      {authStore.user && <AddButton product={product} />}
      {/* <AddButton /> */}
    </div>
  );
};

export default observer(ProductList);
